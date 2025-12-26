console.log("DetailedChartsPanel: v_1.0 ");

class DetailedChartsPanel extends HTMLElement {
  constructor() {
    super();
    this.selectedSensors = [];
    this._cachedData = null;
    this._cachedStartTime = null;
    this._cachedEndTime = null;
    this.libsLoaded = false;
    this.STORAGE_KEY = 'detailed-charts-config';
    this.chartInstances = []; 
    this.fillArea = false;
    this.splitCharts = false;
  }

  set hass(hass) {
    this._hass = hass;
    if (!this.content) {
      try {
          this.initUI();
          this.loadDependencies();
          this.loadSettings();
      } catch (e) {
          console.error("Critical Error", e);
          this.innerHTML = `<div style="color:red;padding:20px;">Fehler: ${e.message}</div>`;
      }
    }
    if (this.content) this.populateSensorList();
  }

  initUI() {
    const root = this.attachShadow({ mode: 'open' });

    root.innerHTML = `
      <style>
        :host {
          display: block; height: 100vh;
          background-color: var(--primary-background-color);
          color: var(--primary-text-color);
          font-family: 'Roboto', 'Segoe UI', sans-serif;
          --sidebar-width: 320px;
          --accent-color: var(--primary-color, #03a9f4);
          --btn-color: #616161; 
        }
        .container { display: flex; height: 100%; overflow: hidden; }
        
        /* SIDEBAR */
        .sidebar { 
            width: var(--sidebar-width); min-width: var(--sidebar-width); 
            background-color: var(--card-background-color); 
            border-right: 1px solid var(--divider-color); 
            padding: 20px; display: flex; flex-direction: column; gap: 15px; 
            box-shadow: 2px 0 10px rgba(0,0,0,0.1); z-index: 10; overflow-y: auto; 
        }
        h2 { margin: 0 0 10px 0; font-weight: 300; letter-spacing: 1px; font-size: 1.5em; }
        label { font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--secondary-text-color); margin-bottom: 4px; display: block; letter-spacing: 0.5px; }
        .control-group { margin-bottom: 5px; }
        
        input, select { 
            padding: 12px 10px; border-radius: 4px; border: 1px solid var(--divider-color); 
            background: var(--primary-background-color); color: var(--primary-text-color); 
            font-family: inherit; font-size: 14px; width: 100%; box-sizing: border-box; outline: none; 
            transition: border-color 0.2s, box-shadow 0.2s; -webkit-appearance: none; appearance: none;
        }
        input:focus, select:focus { border-color: var(--accent-color); }

        .add-sensor-row { display: flex; gap: 8px; align-items: center; }
        .color-picker { width: 44px; height: 44px; padding: 2px; border-radius: 4px; border: 1px solid var(--divider-color); background: var(--primary-background-color); cursor: pointer; }
        .btn-icon { width: 44px; height: 44px; background: var(--btn-color); color: white; border: none; border-radius: 4px; font-size: 20px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background-color 0.2s; }
        .btn-icon:hover { background-color: #757575; }

        .sensor-list { display: flex; flex-direction: column; gap: 8px; max-height: 200px; overflow-y: auto; padding: 5px 0; margin-bottom: 10px; border-top: 1px solid var(--divider-color); padding-top: 15px; }
        .sensor-item { display: flex; align-items: center; gap: 10px; background: rgba(128, 128, 128, 0.1); padding: 8px; border-radius: 4px; font-size: 13px; }
        .sensor-color-dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; }
        .sensor-name { flex-grow: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .remove-sensor { cursor: pointer; color: var(--error-color, #f44336); font-weight: bold; padding: 0 8px; }

        /* --- HA STYLE TOGGLES (NEU) --- */
        .toggle-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px; cursor: pointer; }
        .toggle-label { font-size: 14px; color: var(--primary-text-color); }
        
        .toggle-switch {
            appearance: none; -webkit-appearance: none;
            width: 40px; height: 24px;
            background: rgba(120, 120, 128, 0.3); /* Inactive Gray */
            border-radius: 12px;
            position: relative;
            cursor: pointer;
            outline: none;
            border: none;
            transition: background 0.25s;
        }
        .toggle-switch::after {
            content: ''; position: absolute;
            top: 2px; left: 2px;
            width: 20px; height: 20px;
            background: white;
            border-radius: 50%;
            transition: transform 0.25s;
            box-shadow: 0 1px 3px rgba(0,0,0,0.4);
        }
        .toggle-switch:checked {
            background: var(--accent-color);
        }
        .toggle-switch:checked::after {
            transform: translateX(16px);
        }

        .mode-switch { display: flex; gap: 0; margin-bottom: 10px; border: 1px solid var(--divider-color); border-radius: 4px; overflow: hidden; }
        .mode-btn { flex: 1; padding: 10px; font-size: 13px; text-align: center; cursor: pointer; background: var(--card-background-color); color: var(--secondary-text-color); transition: all 0.2s; font-weight: 500; }
        .mode-btn:first-child { border-right: 1px solid var(--divider-color); }
        .mode-btn.active { background: var(--btn-color); color: white; }

        .custom-date-container { display: none; flex-direction: column; gap: 10px; }
        .custom-date-container.visible { display: flex; }

        #load-btn { background-color: var(--btn-color); color: white; cursor: pointer; font-weight: 500; border: none; margin-top: 20px; padding: 15px; font-size: 14px; border-radius: 4px; text-transform: uppercase; letter-spacing: 1.25px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); transition: background-color 0.2s; }
        #load-btn:hover { background-color: #757575; }
        
        #reset-zoom-btn { background-color: var(--card-background-color); color: var(--primary-text-color); border: 1px solid var(--divider-color); margin-top: 10px; padding: 8px; font-size: 12px; width: 100%; border-radius: 4px; cursor: pointer; display: none; }

        /* MAIN CONTENT */
        .main-content { flex-grow: 1; padding: 40px; display: flex; flex-direction: column; background-color: var(--primary-background-color); overflow-y: auto; position: relative; }
        
        .chart-container-outer { width: 100%; height: 450px; min-height: 200px; position: relative; background: var(--card-background-color); border-radius: 8px; padding: 15px; box-sizing: border-box; box-shadow: 0 2px 10px rgba(0,0,0,0.05); border: 1px solid var(--divider-color); display: flex; flex-direction: column; }
        .canvas-wrapper { flex-grow: 1; position: relative; width: 100%; height: 100%; overflow: hidden; }
        #resize-handle { height: 14px; width: 100%; background: var(--card-background-color); cursor: ns-resize; display: flex; align-items: center; justify-content: center; border-top: 1px solid var(--divider-color); margin-top: 5px; }
        .grip-lines { width: 30px; height: 3px; border-top: 1px solid var(--secondary-text-color); border-bottom: 1px solid var(--secondary-text-color); opacity: 0.5; }
        #resize-ghost { position: absolute; left: 40px; right: 40px; height: 4px; background-color: var(--accent-color); opacity: 0.5; z-index: 100; display: none; pointer-events: none; cursor: ns-resize; }
        
        .stats-wrapper { margin-top: 20px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
        
        /* STATS CARD (COMBINED VIEW) - Hintergrund wie Diagramm */
        .stats-card { 
            padding: 15px; 
            background: var(--card-background-color); /* Fester Hintergrund */
            border-left: 5px solid transparent; 
            border-radius: 4px; 
            font-size: 1rem; line-height: 1.5em; 
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            border: 1px solid var(--divider-color); 
            border-left-width: 5px;
        }

        /* SPLIT VIEW CARDS */
        .split-chart-card {
            background: var(--card-background-color); border: 1px solid var(--divider-color); border-radius: 8px; padding: 15px; margin-bottom: 25px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .split-chart-header { font-weight: bold; font-size: 1.1em; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; }
        .split-canvas-container { height: 300px; position: relative; width: 100%; }
        
        /* SPLIT FOOTER */
        .split-footer { display: flex; gap: 20px; margin-top: 10px; align-items: stretch; border-top: 1px solid var(--divider-color); padding-top: 15px; }
        
        /* STATS IN SPLIT VIEW - Transparent & Clean */
        .split-stats-box {
            flex-grow: 1; 
            background: transparent; /* Transparent wie gewünscht */
            border-radius: 0; 
            padding: 5px 0;
            display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10px; text-align: center; border: none;
        }
        
        .split-controls-box { width: 120px; display: flex; flex-direction: column; gap: 5px; justify-content: center; border-left: 1px solid var(--divider-color); padding-left: 15px; }
        
        .chart-toggle-btn {
            background: transparent; border: 1px solid var(--divider-color); color: var(--secondary-text-color);
            padding: 6px; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 500; transition: all 0.2s;
        }
        .chart-toggle-btn:hover { background: rgba(0,0,0,0.05); color: var(--primary-text-color); }
        .chart-toggle-btn.active { background: var(--btn-color); color: white; border-color: var(--btn-color); }

        .stat-value { font-size: 1.2em; font-weight: 700; color: var(--primary-text-color); }
        .stat-label { font-size: 0.8em; color: var(--secondary-text-color); text-transform: uppercase; }
        .stat-current { font-size: 1.1em; font-weight: bold; }
        .stat-unit { font-size: 0.7em; font-weight: normal; opacity: 0.8; }
        
        .loader { border: 3px solid rgba(0,0,0,0.1); border-top: 3px solid var(--accent-color); border-radius: 50%; width: 24px; height: 24px; animation: spin 0.8s linear infinite; margin: 10px auto; display: none; }
        .error-msg { color: #f44336; background: rgba(244, 67, 54, 0.1); padding: 10px; border-radius: 4px; margin-top: 10px; font-size: 13px; display: none; border: 1px solid rgba(244, 67, 54, 0.3); }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @media (max-width: 1000px) { 
            .stats-wrapper { grid-template-columns: 1fr; } 
            .split-footer { flex-direction: column; }
            .split-controls-box { width: 100%; flex-direction: row; border-left: none; border-top: 1px solid var(--divider-color); padding-left: 0; padding-top: 10px; }
        }
      </style>

      <div class="container">
        <div class="sidebar">
          <h2>📉 Detailed Charts</h2>
          
          <div class="control-group">
            <label>Sensor hinzufügen:</label>
            <input list="sensors-datalist" id="sensor-input" placeholder="Tippen zum Suchen..." autocomplete="off">
            <datalist id="sensors-datalist"></datalist>
          </div>
          
          <div class="control-group add-sensor-row">
             <input type="color" id="color-input" class="color-picker" value="#03a9f4" title="Farbe wählen">
             <button id="add-btn" class="btn-icon" title="Hinzufügen">+</button>
          </div>

          <div id="sensor-list-container" class="sensor-list">
             <div style="color: var(--secondary-text-color); font-size: 12px; text-align: center; padding: 10px;">Liste leer.</div>
          </div>
          
          <div style="margin-top: 20px; border-top: 1px solid var(--divider-color); padding-top: 15px;">
              <div class="toggle-row" id="toggle-fill-row">
                  <span class="toggle-label">Fläche füllen</span>
                  <input type="checkbox" class="toggle-switch" id="fill-switch">
              </div>
              <div class="toggle-row" id="toggle-split-row">
                  <span class="toggle-label">Einzelne Diagramme</span>
                  <input type="checkbox" class="toggle-switch" id="split-switch">
              </div>
          </div>

          <div class="control-group" style="margin-top: 15px;">
            <label>Darstellung (Global):</label>
            <select id="chart-type">
                <option value="line" selected>Line (Kurve)</option>
                <option value="bar">Bar (Balken)</option>
                <option value="doughnut">Donut (Verteilung)</option>
                <option value="stepped">Stepped (Stufen)</option>
                <option value="scatter">Scatter (Punkte)</option>
            </select>
          </div>
          
          <label style="margin-top:15px;">Zeitraum Modus:</label>
          <div class="mode-switch">
              <div class="mode-btn active" id="btn-mode-relative">Relativ</div>
              <div class="mode-btn" id="btn-mode-fixed">Kalender</div>
          </div>

          <div id="container-relative" class="control-group">
            <select id="time-select">
                <option value="1">Letzte 1 Stunde</option>
                <option value="3">Letzte 3 Stunden</option>
                <option value="6">Letzte 6 Stunden</option>
                <option value="12">Letzte 12 Stunden</option>
                <option value="24" selected>Letzte 24 Stunden</option>
                <option value="48">Letzte 48 Stunden</option>
                <option value="168">Letzte 7 Tage</option>
                <option value="720">Letzte 30 Tage (Monat)</option>
                <option value="2160">Letzte 3 Monate</option>
                <option value="8760">Letztes Jahr</option>
            </select>
          </div>

          <div id="container-fixed" class="custom-date-container">
             <div><label>Von:</label><input type="datetime-local" id="date-start"></div>
             <div><label>Bis:</label><input type="datetime-local" id="date-end"></div>
          </div>

          <button id="load-btn">Daten laden</button>
          <button id="reset-zoom-btn">🔍 Zoom zurücksetzen</button>
          <div class="loader" id="loader"></div>
          <div class="error-msg" id="error-msg"></div>
        </div>

        <div class="main-content" id="main-content-area"></div>
      </div>
    `;

    this.content = root;
    this.chartLibReady = false;
    this.timeMode = 'relative'; 

    this.content.querySelector('#add-btn').addEventListener('click', () => this.addSensor());
    this.content.querySelector('#load-btn').addEventListener('click', () => this.loadHistory());
    this.content.querySelector('#reset-zoom-btn').addEventListener('click', () => this.resetZoomAll());
    this.content.querySelector('#sensor-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.addSensor();
    });

    const sInput = this.content.querySelector('#sensor-input');
    sInput.addEventListener('focus', () => this.populateSensorList());
    sInput.addEventListener('click', () => this.populateSensorList());

    const inputs = ['#chart-type', '#time-select', '#date-start', '#date-end', '#fill-switch', '#split-switch'];
    inputs.forEach(id => {
        this.content.querySelector(id).addEventListener('change', (e) => {
            if (id === '#fill-switch') this.fillArea = e.target.checked;
            if (id === '#split-switch') this.splitCharts = e.target.checked;
            this.saveSettings(); 
            if (this._cachedData && (id === '#chart-type' || id === '#fill-switch' || id === '#split-switch')) {
                this.updateChartFromCache();
            }
        });
    });

    const setMode = (mode) => { this.switchTimeMode(mode); this.saveSettings(); };
    this.content.querySelector('#btn-mode-relative').addEventListener('click', () => setMode('relative'));
    this.content.querySelector('#btn-mode-fixed').addEventListener('click', () => setMode('fixed'));
    
    // Init Default Dates
    if (!this.content.querySelector('#date-end').value) {
        const now = new Date();
        const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        const toLocalISO = (date) => {
            const offset = date.getTimezoneOffset() * 60000;
            return new Date(date.getTime() - offset).toISOString().slice(0, 16);
        };
        this.content.querySelector('#date-end').value = toLocalISO(now);
        this.content.querySelector('#date-start').value = toLocalISO(yesterday);
    }
  }

  // --- DEPENDENCIES ---
  loadDependencies() {
      const loadScript = (src) => new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = src;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error(`Fehler bei ${src}`));
          this.content.appendChild(script);
      });
      const isModernChart = window.Chart && typeof window.Chart.getChart === 'function';
      const p1 = isModernChart ? Promise.resolve() : loadScript('/local/community/detailed-charts-panel/chart.umd.min.js');
      const p2 = window.Hammer ? Promise.resolve() : loadScript('/local/community/detailed-charts-panel/hammer.min.js');

      Promise.all([p1, p2])
        .then(() => loadScript('/local/community/detailed-charts-panel/chartjs-plugin-zoom.min.js'))
        .then(() => { console.log("Libs ready."); this.libsLoaded = true; })
        .catch(err => { console.error(err); this.showError("Fehler beim Laden der Libs."); });
  }

  // --- SETTINGS ---
  saveSettings() {
      try {
          const settings = {
              sensors: this.selectedSensors,
              chartType: this.content.querySelector('#chart-type').value,
              timeMode: this.timeMode,
              timeSelect: this.content.querySelector('#time-select').value,
              dateStart: this.content.querySelector('#date-start').value,
              dateEnd: this.content.querySelector('#date-end').value,
              fillArea: this.fillArea,
              splitCharts: this.splitCharts
          };
          const singleContainer = this.content.querySelector('#chart-container-single');
          if (singleContainer) settings.containerHeight = singleContainer.style.height;
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(settings));
      } catch (e) { console.warn(e); }
  }

  loadSettings() {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return;
      try {
          const settings = JSON.parse(stored);
          if (settings.sensors) { this.selectedSensors = settings.sensors; this.renderSensorListUI(); }
          if (settings.chartType) this.content.querySelector('#chart-type').value = settings.chartType;
          if (settings.timeSelect) this.content.querySelector('#time-select').value = settings.timeSelect;
          if (settings.dateStart) this.content.querySelector('#date-start').value = settings.dateStart;
          if (settings.dateEnd) this.content.querySelector('#date-end').value = settings.dateEnd;
          if (settings.timeMode) this.switchTimeMode(settings.timeMode);
          if (settings.fillArea !== undefined) { this.fillArea = settings.fillArea; this.content.querySelector('#fill-switch').checked = settings.fillArea; }
          if (settings.splitCharts !== undefined) { this.splitCharts = settings.splitCharts; this.content.querySelector('#split-switch').checked = settings.splitCharts; }
          this.savedContainerHeight = settings.containerHeight; 
      } catch (e) { localStorage.removeItem(this.STORAGE_KEY); }
  }

  // --- UI LOGIC ---
  switchTimeMode(mode) {
      this.timeMode = mode;
      const rel = this.content.querySelector('#container-relative');
      const fix = this.content.querySelector('#container-fixed');
      const bRel = this.content.querySelector('#btn-mode-relative');
      const bFix = this.content.querySelector('#btn-mode-fixed');
      if (mode === 'relative') { rel.style.display='block'; fix.classList.remove('visible'); bRel.classList.add('active'); bFix.classList.remove('active'); }
      else { rel.style.display='none'; fix.classList.add('visible'); bRel.classList.remove('active'); bFix.classList.add('active'); }
  }

  addSensor() {
      const input = this.content.querySelector('#sensor-input');
      const entityId = input.value.trim();
      const color = this.content.querySelector('#color-input').value;
      if (!entityId || this.selectedSensors.some(s => s.entityId === entityId)) return;
      this.selectedSensors.push({ entityId, color });
      input.value = '';
      this.content.querySelector('#color-input').value = this.getRandomColor();
      this.renderSensorListUI();
      this.saveSettings();
  }

  removeSensor(index) {
      this.selectedSensors.splice(index, 1);
      this.renderSensorListUI();
      this.saveSettings();
  }

  renderSensorListUI() {
      const container = this.content.querySelector('#sensor-list-container');
      if (this.selectedSensors.length === 0) { container.innerHTML = `<div style="color:var(--secondary-text-color);font-size:12px;text-align:center;padding:10px;">Liste leer.</div>`; return; }
      container.innerHTML = '';
      this.selectedSensors.forEach((sensor, index) => {
          const item = document.createElement('div');
          item.className = 'sensor-item';
          item.innerHTML = `<div class="sensor-color-dot" style="background-color:${sensor.color}"></div><div class="sensor-name" title="${sensor.entityId}">${sensor.entityId}</div><div class="remove-sensor">✕</div>`;
          item.querySelector('.remove-sensor').addEventListener('click', () => this.removeSensor(index));
          container.appendChild(item);
      });
  }

  getRandomColor() {
      const l = '0123456789ABCDEF'; let c='#'; for(let i=0;i<6;i++) c+=l[Math.floor(Math.random()*16)]; return c;
  }

  populateSensorList() {
    if (!this._hass || !this._hass.states) return;
    const dl = this.content.querySelector('#sensors-datalist');
    if (dl.children.length > 0) return;
    const s = Object.keys(this._hass.states).filter(k => k.startsWith('sensor.') || k.startsWith('binary_sensor.') || k.startsWith('input_number.')).sort();
    dl.innerHTML = s.slice(0, 5000).map(x => `<option value="${x}"></option>`).join('');
  }

  showError(text) {
      const e = this.content.querySelector('#error-msg');
      e.innerHTML = text; e.style.display = 'block';
      this.content.querySelector('#loader').style.display = 'none';
  }

  // --- CHART RENDERING ---
  updateChartFromCache() {
      if (!this._cachedData) return;
      const chartType = this.content.querySelector('#chart-type').value;
      const dh = (this._cachedEndTime - this._cachedStartTime) / 3600000;
      if (chartType === 'scatter' && dh > 24.1) { alert("Scatter nur <= 24h."); return; }
      
      this.renderDispatcher(this._cachedData, chartType, this._cachedStartTime, this._cachedEndTime);
  }

  async loadHistory() {
      const chartType = this.content.querySelector('#chart-type').value;
      const loader = this.content.querySelector('#loader');
      const errDiv = this.content.querySelector('#error-msg');
      errDiv.style.display = 'none';
      
      if (!this.libsLoaded || this.selectedSensors.length === 0) return;

      let st, et, dh;
      const now = new Date();
      if (this.timeMode === 'relative') {
          dh = parseInt(this.content.querySelector('#time-select').value);
          et = now; st = new Date(now.getTime() - (dh * 3600000));
      } else {
          st = new Date(this.content.querySelector('#date-start').value);
          et = new Date(this.content.querySelector('#date-end').value);
          dh = (et - st) / 3600000;
          if (st >= et) { this.showError("Enddatum muss nach Startdatum liegen."); return; }
      }

      if (chartType === 'scatter' && dh > 24.1) { this.showError("Scatter nur <= 24h."); return; }

      loader.style.display = 'block';
      const entityIds = this.selectedSensors.map(s => s.entityId).join(',');

      try {
          const data = await this._hass.callApi('GET', `history/period/${st.toISOString()}?end_time=${et.toISOString()}&filter_entity_id=${entityIds}&minimal_response`);
          loader.style.display = 'none';
          if (data && data.length > 0) {
              this._cachedData = data; this._cachedStartTime = st; this._cachedEndTime = et;
              this.renderDispatcher(data, chartType, st, et);
          } else { this.showError("Keine Daten gefunden."); }
      } catch (e) { console.error(e); this.showError(`Fehler: ${e.message}`); }
  }

  renderDispatcher(data, globalChartType, startTime, endTime) {
      this.destroyAllCharts();
      const mainArea = this.content.querySelector('#main-content-area');
      mainArea.innerHTML = ''; 

      if (this.splitCharts && globalChartType !== 'doughnut' && globalChartType !== 'radar') {
          this.renderSplitView(data, globalChartType, startTime, endTime, mainArea);
      } else {
          this.renderCombinedView(data, globalChartType, startTime, endTime, mainArea);
      }
  }

  destroyAllCharts() {
      if (this.chartInstances) this.chartInstances.forEach(c => c.destroy());
      this.chartInstances = [];
  }

  resetZoomAll() {
      this.chartInstances.forEach(c => { if (c && c.resetZoom) c.resetZoom(); });
      this.content.querySelector('#reset-zoom-btn').style.display = 'none';
  }

  renderCombinedView(data, chartType, startTime, endTime, container) {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = `
          <div id="resize-ghost"></div>
          <div class="chart-container-outer" id="chart-container-single">
             <div class="canvas-wrapper"><canvas id="canvas-combined"></canvas></div>
             <div id="resize-handle"><div class="grip-lines"></div></div>
          </div>
          <div id="stats-wrapper" class="stats-wrapper"></div>
      `;
      container.appendChild(wrapper);
      
      const chartContainer = wrapper.querySelector('#chart-container-single');
      if (this.savedContainerHeight) chartContainer.style.height = this.savedContainerHeight;
      this.initResizeHandler(wrapper.querySelector('#resize-handle'), chartContainer, wrapper.querySelector('#resize-ghost'));

      const ctx = wrapper.querySelector('#canvas-combined').getContext('2d');
      const statsWrapper = wrapper.querySelector('#stats-wrapper');

      if (chartType === 'doughnut') { this.renderDoughnut(data, ctx, statsWrapper); return; }

      const datasets = [];
      let allStatsHTML = '';

      data.forEach((history, idx) => {
          const conf = this.selectedSensors[idx];
          if (!conf || !history.length) return;
          let points = this.processData(history, chartType);
          if (!points.length) return;

          const values = points.map(p => p.y);
          const min = Math.min(...values).toFixed(2);
          const max = Math.max(...values).toFixed(2);
          const avg = (values.reduce((a,b)=>a+b,0)/values.length).toFixed(2);
          const curr = values[values.length-1].toFixed(2);
          const unit = this._hass.states[conf.entityId]?.attributes?.unit_of_measurement || '';

          allStatsHTML += this.createStatsCard(conf, min, avg, max, curr, unit);

          let bg = conf.color;
          if (this.fillArea && (chartType === 'line' || chartType === 'stepped')) {
              const grad = ctx.createLinearGradient(0, 0, 0, 400);
              grad.addColorStop(0, this.hexToRgba(conf.color, 0.5));
              grad.addColorStop(1, this.hexToRgba(conf.color, 0.05));
              bg = grad;
          }

          datasets.push({
              label: conf.entityId, data: points, borderColor: conf.color, backgroundColor: bg, fill: this.fillArea,
              borderWidth: (chartType === 'bar') ? 0 : 2.5, categoryPercentage: 0.7, barPercentage: 1.0,
              pointRadius: (chartType === 'scatter') ? 4 : 0, pointHoverRadius: 6, pointBackgroundColor: conf.color,
              tension: 0.4, cubicInterpolationMode: 'monotone', stepped: (chartType === 'stepped')
          });
      });

      statsWrapper.innerHTML = allStatsHTML;
      this.createChartInstance(ctx, chartType, datasets, startTime, endTime, true);
  }

  renderSplitView(data, globalChartType, startTime, endTime, container) {
      data.forEach((history, idx) => {
          const conf = this.selectedSensors[idx];
          if (!conf || !history.length) return;

          const card = document.createElement('div');
          card.className = 'split-chart-card';
          const canvasId = `split-canvas-${idx}`;
          
          card.innerHTML = `
             <div class="split-chart-header" style="color:${conf.color}"><span>${conf.entityId}</span></div>
             <div class="split-canvas-container"><canvas id="${canvasId}"></canvas></div>
             <div class="split-footer" id="footer-${idx}"></div>
          `;
          container.appendChild(card);

          let currentType = globalChartType;
          let points = this.processData(history, currentType);
          const values = points.map(p => p.y);
          const min = Math.min(...values).toFixed(2);
          const max = Math.max(...values).toFixed(2);
          const avg = (values.reduce((a,b)=>a+b,0)/values.length).toFixed(2);
          const curr = values[values.length-1].toFixed(2);
          const unit = this._hass.states[conf.entityId]?.attributes?.unit_of_measurement || '';

          const footer = card.querySelector(`#footer-${idx}`);
          const statsBox = document.createElement('div');
          statsBox.className = 'split-stats-box';
          statsBox.innerHTML = `
             <div><div class="stat-label">Aktuell</div><div class="stat-current" style="color:${conf.color}">${curr} <span class="stat-unit">${unit}</span></div></div>
             <div><div class="stat-label">Min</div><div class="stat-value" style="font-size:1em">${min}</div></div>
             <div><div class="stat-label">Ø</div><div class="stat-value" style="font-size:1em">${avg}</div></div>
             <div><div class="stat-label">Max</div><div class="stat-value" style="font-size:1em">${max}</div></div>
          `;
          footer.appendChild(statsBox);

          const controlsBox = document.createElement('div');
          controlsBox.className = 'split-controls-box';
          const btnLine = document.createElement('button');
          btnLine.className = `chart-toggle-btn ${currentType === 'line' ? 'active' : ''}`; btnLine.innerText = 'Line';
          const btnBar = document.createElement('button');
          btnBar.className = `chart-toggle-btn ${currentType === 'bar' ? 'active' : ''}`; btnBar.innerText = 'Bar';
          controlsBox.appendChild(btnLine); controlsBox.appendChild(btnBar);
          footer.appendChild(controlsBox);

          const ctx = card.querySelector(`#${canvasId}`).getContext('2d');
          
          const updateThisChart = (newType) => {
              btnLine.className = `chart-toggle-btn ${newType === 'line' ? 'active' : ''}`;
              btnBar.className = `chart-toggle-btn ${newType === 'bar' ? 'active' : ''}`;
              
              const chartIdx = this.chartInstances.findIndex(c => c.canvas === card.querySelector('canvas'));
              if (chartIdx > -1) { this.chartInstances[chartIdx].destroy(); this.chartInstances.splice(chartIdx, 1); }

              let newPoints = this.processData(history, newType);
              let bg = conf.color;
              if (this.fillArea && newType === 'line') {
                  const grad = ctx.createLinearGradient(0, 0, 0, 300);
                  grad.addColorStop(0, this.hexToRgba(conf.color, 0.5));
                  grad.addColorStop(1, this.hexToRgba(conf.color, 0.05));
                  bg = grad;
              }

              const dataset = {
                  label: conf.entityId, data: newPoints, borderColor: conf.color, backgroundColor: bg, fill: this.fillArea,
                  borderWidth: (newType === 'bar') ? 0 : 2.5, categoryPercentage: 0.8, barPercentage: 1.0,
                  pointRadius: 0, pointHoverRadius: 6, pointBackgroundColor: conf.color, tension: 0.4, cubicInterpolationMode: 'monotone'
              };
              this.createChartInstance(ctx, newType, [dataset], startTime, endTime, false);
          };

          btnLine.onclick = () => updateThisChart('line');
          btnBar.onclick = () => updateThisChart('bar');
          updateThisChart(currentType);
      });
  }

  processData(history, type) {
      if (type === 'bar') return this.aggregateToHourly(history);
      return history.filter(pt => !isNaN(parseFloat(pt.state))).map(pt => ({ x: new Date(pt.last_changed).getTime(), y: parseFloat(pt.state) }));
  }

  aggregateToHourly(historyData) {
      const buckets = {};
      historyData.forEach(pt => {
          if (isNaN(parseFloat(pt.state))) return;
          const date = new Date(pt.last_changed); date.setMinutes(0, 0, 0); const key = date.getTime();
          if (!buckets[key]) buckets[key] = { sum: 0, count: 0 };
          buckets[key].sum += parseFloat(pt.state); buckets[key].count++;
      });
      return Object.keys(buckets).sort().map(timestamp => { const t = parseInt(timestamp); return { x: t, y: buckets[timestamp].sum / buckets[timestamp].count }; });
  }

  createStatsCard(conf, min, avg, max, curr, unit) {
      const styles = getComputedStyle(this);
      const textColor = styles.getPropertyValue('--primary-text-color').trim();
      return `
        <div class="stats-card" style="border-left-color: ${conf.color}">
            <div style="font-weight:bold; margin-bottom:12px; color:${textColor}; display:flex; justify-content:space-between; align-items:center;">
                <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:60%; font-size:1.1em;" title="${conf.entityId}">${conf.entityId}</span>
                <span class="stat-current" style="color:${conf.color}">${curr} <span class="stat-unit">${unit}</span></span>
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:8px; text-align:center;">
                <div><div class="stat-label">MIN</div><div class="stat-value">${min}</div></div>
                <div><div class="stat-label">AVG</div><div class="stat-value">${avg}</div></div>
                <div><div class="stat-label">MAX</div><div class="stat-value">${max}</div></div>
            </div>
        </div>
     `;
  }

  renderDoughnut(data, ctx, statsWrapper) {
      const styles = getComputedStyle(this);
      const textColor = styles.getPropertyValue('--primary-text-color').trim();
      const labels=[], values=[], bgColors=[], units=[];
      data.forEach((h, i) => {
          const c = this.selectedSensors[i];
          if(!c||!h.length)return;
          const clean = h.map(p=>parseFloat(p.state)).filter(v=>!isNaN(v));
          if(!clean.length)return;
          const avg = clean.reduce((a,b)=>a+b,0)/clean.length;
          labels.push(c.entityId); values.push(avg.toFixed(2)); bgColors.push(c.color);
          units.push(this._hass.states[c.entityId]?.attributes?.unit_of_measurement||'');
      });
      const chart = new window.Chart(ctx, {
          type: 'doughnut',
          data: { labels, datasets: [{ data: values, backgroundColor: bgColors, borderWidth: 0, hoverOffset: 10 }] },
          options: {
              responsive: true, maintainAspectRatio: false, cutout: '60%', layout: { padding: 20 },
              plugins: {
                  legend: { display: true, position: 'right', labels: { color: textColor, usePointStyle: true } },
                  tooltip: { backgroundColor: 'rgba(20, 20, 20, 0.95)', callbacks: { label: (c) => ` Ø ${c.formattedValue} ${units[c.dataIndex]}` } }
              }
          }
      });
      this.chartInstances.push(chart);
      statsWrapper.innerHTML = `<div style="text-align:center;width:100%;color:${textColor};padding:20px;">Durchschnittswerte (Ø)</div>`;
  }

  createChartInstance(ctx, type, datasets, startTime, endTime, showZoomBtn) {
      const styles = getComputedStyle(this);
      const textColor = styles.getPropertyValue('--primary-text-color').trim();
      const gridColor = styles.getPropertyValue('--divider-color').trim();
      const secondaryText = styles.getPropertyValue('--secondary-text-color').trim();
      const resetBtn = this.content.querySelector('#reset-zoom-btn');

      const chart = new window.Chart(ctx, {
          type: type === 'stepped' ? 'line' : type,
          data: { datasets },
          options: {
              responsive: true, maintainAspectRatio: false,
              interaction: { mode: 'nearest', axis: 'x', intersect: false },
              plugins: {
                  legend: { display: true, position: 'top', align: 'end', labels: { color: textColor, usePointStyle: true, boxWidth: 8 } },
                  tooltip: {
                      backgroundColor: 'rgba(20, 20, 20, 0.95)', titleColor: '#fff', bodyColor: '#bbb', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, padding: 12,
                      callbacks: {
                          title: (c) => `${c[0].formattedValue} ${this._hass.states[c[0].dataset.label]?.attributes?.unit_of_measurement||''}`,
                          label: (c) => new Date(c.parsed.x).toLocaleString('de-DE')
                      }
                  },
                  zoom: {
                      pan: { enabled: true, mode: 'x', onPan: () => { if(showZoomBtn) resetBtn.style.display = 'block'; } },
                      zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: 'x', onZoom: () => { if(showZoomBtn) resetBtn.style.display = 'block'; } }
                  }
              },
              scales: {
                  x: {
                      type: 'linear', position: 'bottom', min: startTime.getTime(), max: endTime.getTime(),
                      offset: (type === 'bar'),
                      ticks: {
                          color: secondaryText, maxTicksLimit: 8,
                          callback: function(value) {
                              const d = new Date(value);
                              const diffHours = (endTime - startTime) / (1000 * 60 * 60);
                              if (diffHours > 48) return d.toLocaleDateString('de-DE', {day: '2-digit', month: '2-digit'});
                              return d.toLocaleTimeString('de-DE', {hour: '2-digit', minute:'2-digit'});
                          }
                      },
                      grid: { color: gridColor, drawBorder: false, display: false } 
                  },
                  y: { grace: '5%', ticks: { color: secondaryText }, grid: { color: gridColor, borderDash: [5, 5] } }
              }
          }
      });
      this.chartInstances.push(chart);
  }

  initResizeHandler(handle, container, ghost) {
      if(!handle || !container || !ghost) return;
      let startY, startHeight;
      const doDrag = (e) => {
          const clientY = e.clientY || e.touches[0].clientY;
          let newHeight = startHeight + (clientY - startY);
          if (newHeight < 200) newHeight = 200; if (newHeight > 1500) newHeight = 1500;
          ghost.style.top = (container.offsetTop + newHeight) + 'px';
          ghost.style.display = 'block';
          ghost.dataset.targetHeight = newHeight;
      };
      const stopDrag = () => {
          document.documentElement.removeEventListener('mousemove', doDrag);
          document.documentElement.removeEventListener('mouseup', stopDrag);
          document.documentElement.removeEventListener('touchmove', doDrag);
          document.documentElement.removeEventListener('touchend', stopDrag);
          ghost.style.display = 'none';
          if (ghost.dataset.targetHeight) {
              container.style.height = ghost.dataset.targetHeight + 'px';
              this.saveSettings();
          }
      };
      const startDrag = (e) => {
          startY = e.clientY || e.touches[0].clientY;
          startHeight = parseInt(document.defaultView.getComputedStyle(container).height, 10);
          ghost.style.top = (container.offsetTop + startHeight) + 'px';
          ghost.dataset.targetHeight = startHeight;
          ghost.style.display = 'block';
          document.documentElement.addEventListener('mousemove', doDrag);
          document.documentElement.addEventListener('mouseup', stopDrag);
          document.documentElement.addEventListener('touchmove', doDrag);
          document.documentElement.addEventListener('touchend', stopDrag);
          e.preventDefault();
      };
      handle.addEventListener('mousedown', startDrag);
      handle.addEventListener('touchstart', startDrag);
  }

  hexToRgba(hex, alpha) {
      let c;
      if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
          c= hex.substring(1).split('');
          if(c.length== 3){ c= [c[0], c[0], c[1], c[1], c[2], c[2]]; }
          c= '0x'+c.join('');
          return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+alpha+')';
      }
      return hex;
  }
}

customElements.define('detailed-charts-panel', DetailedChartsPanel);
