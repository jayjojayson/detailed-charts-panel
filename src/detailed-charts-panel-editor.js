/* detailed-charts-panel-editor.js */
console.log(
    "%c📉️ DetailedChartsPanelEditor: v_2.8 ready",
    "background: #5596c5; color: #000; padding: 2px 6px; border-radius: 4px; font-weight: bold;"
);

const fireEvent = (node, type, detail, options) => {
    options = options || {};
    detail = detail === null || detail === undefined ? {} : detail;
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed,
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
};

const loadJsYaml = async () => {
    if (window.jsyaml) return;
    try {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js';
        document.head.appendChild(script);
        await new Promise(r => { script.onload = r; });
    } catch (e) { }
};

// --- SVG ICONS ---
const ICONS = {
    eyeOpen: `<svg viewBox="0 0 24 24" style="width:24px;height:24px"><path fill="currentColor" d="M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>`,
    eyeClosed: `<svg viewBox="0 0 24 24" style="width:24px;height:24px"><path fill="currentColor" d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3L2,4.27Z" /></svg>`,
    delete: `<svg viewBox="0 0 24 24" style="width:24px;height:24px"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>`
};

import { t } from './detailed-charts-panel-langs.js';

class DetailedChartsPanelEditor extends HTMLElement {
    constructor() {
        super();
        this._config = {};
        this._hass = null;
        this._mode = 'visual';
        this._rendered = false;
    }

    setConfig(config) {
        this._config = config;
        if (this.shadowRoot) this._updateVisuals();
    }

    set hass(hass) {
        this._hass = hass;
        // Update hass down the tree to all selectors
        if (this.shadowRoot) {
            this.shadowRoot.querySelectorAll('ha-selector').forEach(el => {
                el.hass = hass;
            });
        }
    }

    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
            this.renderBaseStructure();
        }
        loadJsYaml();
    }

    _configChanged(newConfig) {
        fireEvent(this, 'config-changed', { config: newConfig });
        this._config = newConfig;
        this._updateVisuals();
    }

    // --- HELPER: Create Main Config Selector ---
    _createSelector(configKey, label, selectorSchema, value) {
        const el = document.createElement('ha-selector');
        el.selector = selectorSchema;
        el.label = label;
        el.value = value;
        el.configValue = configKey;
        el.hass = this._hass;
        el.addEventListener('value-changed', (ev) => {
            const newVal = ev.detail.value;
            const updatedConfig = { ...this._config, [configKey]: newVal };
            if (configKey === 'timeMode') {
                if (newVal === 'relative') { delete updatedConfig.dateStart; delete updatedConfig.dateEnd; }
                if (newVal === 'fixed') { delete updatedConfig.timeSelect; }
            }
            this._configChanged(updatedConfig);
        });
        return el;
    }

    renderBaseStructure() {
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; background: transparent; width: 100%; --primary-text-color: #e1e1e1; }
                .wrapper { padding: 8px; box-sizing: border-box; }
                
                .tabs { display: flex; border-bottom: 1px solid var(--divider-color); margin-bottom: 15px; }
                .tab { padding: 10px 20px; cursor: pointer; opacity: 0.6; border-bottom: 2px solid transparent; font-weight: 500; text-transform: uppercase; font-size: 14px; color: var(--primary-text-color); }
                .tab.active { opacity: 1; border-bottom-color: var(--primary-color); color: var(--primary-color); }
                
                .content-area { display: flex; flex-direction: column; gap: 15px; }
                .section { border: 1px solid var(--divider-color); padding: 12px; border-radius: 4px; background: rgba(255,255,255,0.03); }
                .section-title { font-weight: 500; color: var(--primary-color); margin-bottom: 10px; text-transform: uppercase; font-size: 12px; }
                .row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 8px; }

                /* SENSOR LIST STYLES */
                .sensor-list { display: flex; flex-direction: column; gap: 10px; }
                .sensor-row {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    background: var(--card-background-color, #202020);
                    padding: 8px;
                    border-radius: 6px;
                    border: 1px solid var(--divider-color);
                }
                .sensor-row-main {
                    display: grid;
                    grid-template-columns: 40px 1fr 40px 40px;
                    gap: 12px;
                    align-items: center;
                }
                .sensor-row-alias {
                    display: grid;
                    grid-template-columns: 40px 1fr 80px;
                    gap: 12px;
                    align-items: center;
                }
                .alias-input {
                    width: 100%;
                    box-sizing: border-box;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid var(--divider-color);
                    color: var(--primary-text-color);
                    padding: 8px 10px;
                    border-radius: 4px;
                    font-size: 14px;
                }
                .alias-input:focus {
                    outline: none;
                    border-color: var(--primary-color);
                }
                .alias-label {
                    color: var(--secondary-text-color);
                    font-size: 12px;
                    text-transform: uppercase;
                    font-weight: 500;
                    text-align: right;
                }
                
                .color-wrap { position: relative; width: 32px; height: 32px; border-radius: 50%; overflow: hidden; border: 1px solid var(--divider-color); cursor: pointer; }
                .color-inp { position: absolute; top: -10px; left: -10px; width: 60px; height: 60px; padding: 0; border: none; cursor: pointer; }
                
                /* Layout Fixes for HA-Selector inside Grid */
                .selector-container { width: 100%; min-width: 0; }
                ha-selector { width: 100%; display: block; margin: 0; }
                
                /* SVG BUTTONS */
                .icon-btn { 
                    background: transparent; border: 1px solid transparent; 
                    color: var(--secondary-text-color); cursor: pointer; 
                    padding: 6px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
                    transition: all 0.2s;
                }
                .icon-btn:hover { background: rgba(255,255,255,0.1); color: var(--primary-text-color); }
                .icon-btn.delete { color: var(--error-color, #f44336); }
                .icon-btn.delete:hover { background: rgba(244, 67, 54, 0.15); }
                
                .btn-add { 
                    margin-top: 10px; padding: 12px; width: 100%; 
                    background: transparent; border: 1px dashed var(--primary-color); 
                    color: var(--primary-color); text-transform: uppercase; font-weight: bold; cursor: pointer; border-radius: 4px;
                }
                .btn-add:hover { background: rgba(var(--rgb-primary-color), 0.1); }
            </style>
            <div class="wrapper">
                <div class="tabs">
                    <div class="tab active" id="tabVisual">${t('visual')}</div>
                    <div class="tab" id="tabYaml">${t('yaml')}</div>
                </div>
                <div id="visual-container" class="content-area"></div>
                <div id="yaml-container" class="content-area" style="display:none;"></div>
            </div>
        `;

        const tVis = this.shadowRoot.getElementById('tabVisual');
        const tYaml = this.shadowRoot.getElementById('tabYaml');
        const cVis = this.shadowRoot.getElementById('visual-container');
        const cYaml = this.shadowRoot.getElementById('yaml-container');

        tVis.onclick = () => {
            this._mode = 'visual';
            tVis.classList.add('active'); tYaml.classList.remove('active');
            cVis.style.display = 'flex'; cYaml.style.display = 'none';
            this._updateVisuals();
        };
        tYaml.onclick = () => {
            this._mode = 'yaml';
            tVis.classList.remove('active'); tYaml.classList.add('active');
            cVis.style.display = 'none'; cYaml.style.display = 'block';
            this._updateYaml();
        };

        this._rendered = true;
        this._updateVisuals();
    }

    _updateVisuals() {
        if (!this._rendered || this._mode !== 'visual') return;
        const container = this.shadowRoot.getElementById('visual-container');
        container.innerHTML = '';

        const c = this._config;

        // --- SECTION 1: Darstellung ---
        const secDisp = document.createElement('div'); secDisp.className = 'section';
        secDisp.innerHTML = `<div class="section-title">${t('presentation')}</div>`;
        const row1 = document.createElement('div'); row1.className = 'row';
        row1.appendChild(this._createSelector('chartType', t('chartTypeLabel'), { select: { mode: "dropdown", options: [{ label: t('line'), value: 'line' }, { label: t('bar'), value: 'bar' }, { label: t('stackedArea'), value: 'stackedArea' }, { label: t('scatter'), value: 'scatter' }, { label: t('doughnut'), value: 'doughnut' }, { label: t('stepped'), value: 'stepped' }] } }, c.chartType || 'line'));
        row1.appendChild(this._createSelector('layoutMode', t('layoutLabel'), { select: { mode: "dropdown", options: [{ label: t('combined'), value: 'combined' }, { label: t('split'), value: 'split' }, { label: t('mixed'), value: 'mixed' }] } }, c.layoutMode || 'combined'));
        secDisp.appendChild(row1);
        const row2 = document.createElement('div'); row2.className = 'row';
        row2.appendChild(this._createSelector('zoomLevel', t('zoomLabel'), { number: { min: 0.5, max: 2.0, step: 0.1, mode: "box" } }, c.zoomLevel ?? 1.0));
        if (c.layoutMode !== 'combined') row2.appendChild(this._createSelector('gridColumns', t('columnsLabel'), { number: { min: 1, max: 6, step: 1, mode: "box" } }, c.gridColumns ?? 1));
        secDisp.appendChild(row2);
        const rowTension = document.createElement('div'); rowTension.className = 'row';
        rowTension.appendChild(this._createSelector('chartTension', t('lineSmoothing'), { number: { min: 0, max: 5, step: 1, mode: "box" } }, c.chartTension ?? 4));
        secDisp.appendChild(rowTension);
        // Reference lines section
        const refDiv = document.createElement('div'); refDiv.style.marginTop = '8px';
        const refLabel = document.createElement('div'); refLabel.style.cssText = 'font-size:12px;font-weight:500;margin-bottom:4px;'; refLabel.textContent = t('refLinesLabel');
        refDiv.appendChild(refLabel);
        const refList = document.createElement('div'); refList.id = 'ref-lines-editor-list';
        (c.thresholds || this._migrateThresholdsForEditor(c)).forEach((ref, i) => {
            refList.appendChild(this._buildRefLineRow(ref, i));
        });
        refDiv.appendChild(refList);
        const btnAddRef = document.createElement('button');
        btnAddRef.className = 'btn-add'; btnAddRef.style.marginTop = '6px';
        btnAddRef.innerText = t('addRefLineBtn');
        btnAddRef.onclick = () => this._addRefLine();
        refDiv.appendChild(btnAddRef);
        secDisp.appendChild(refDiv);
        const rowYAxis = document.createElement('div'); rowYAxis.className = 'row';
        rowYAxis.appendChild(this._createSelector('yMin', t('yMinLabel'), { text: {} }, c.yMin ?? ''));
        rowYAxis.appendChild(this._createSelector('yMax', t('yMaxLabel'), { text: {} }, c.yMax ?? ''));
        secDisp.appendChild(rowYAxis);
        container.appendChild(secDisp);

        // --- SECTION 2: Zeitraum ---
        const secTime = document.createElement('div'); secTime.className = 'section';
        secTime.innerHTML = `<div class="section-title">${t('timePeriod')}</div>`;
        const rowTime = document.createElement('div'); rowTime.className = 'row';
        rowTime.appendChild(this._createSelector('timeMode', t('modeLabel'), { select: { mode: "dropdown", options: [{ label: t('relative'), value: 'relative' }, { label: t('calendar'), value: 'fixed' }] } }, c.timeMode || 'relative'));
        if (c.timeMode === 'relative') rowTime.appendChild(this._createSelector('timeSelect', t('windowLabel'), { select: { mode: "dropdown", options: [{ label: t('lastHour'), value: '1' }, { label: t('last3Hours'), value: '3' }, { label: t('last6Hours'), value: '6' }, { label: t('last12Hours'), value: '12' }, { label: t('last24Hours'), value: '24' }, { label: t('last48Hours'), value: '48' }, { label: t('last7Days'), value: '168' }, { label: t('last30Days'), value: '720' }, { label: t('lastYear'), value: '8760' }] } }, c.timeSelect || '24'));
        secTime.appendChild(rowTime);
        if (c.timeMode === 'fixed') {
            const rowDates = document.createElement('div'); rowDates.className = 'row';
            rowDates.appendChild(this._createSelector('dateStart', t('startLabel'), { datetime: {} }, c.dateStart));
            rowDates.appendChild(this._createSelector('dateEnd', t('endLabel'), { datetime: {} }, c.dateEnd));
            secTime.appendChild(rowDates);
        }
        container.appendChild(secTime);

        // --- SECTION 3: Optionen ---
        const secOpt = document.createElement('div'); secOpt.className = 'section';
        secOpt.innerHTML = `<div class="section-title">${t('options')}</div>`;
        const rowOpt1 = document.createElement('div'); rowOpt1.className = 'row';
        rowOpt1.appendChild(this._createSelector('fillArea', t('fillAreaLabel'), { boolean: {} }, c.fillArea === true));
        rowOpt1.appendChild(this._createSelector('showStats', t('statisticsLabel'), { boolean: {} }, c.showStats !== false));
        secOpt.appendChild(rowOpt1);

        const rowOpt2 = document.createElement('div'); rowOpt2.className = 'row';
        rowOpt2.appendChild(this._createSelector('showDonutSidebar', t('donutSidebar'), { boolean: {} }, c.showDonutSidebar === true));
        rowOpt2.appendChild(this._createSelector('autoScale', t('autoScale'), { boolean: {} }, c.autoScale === true));
        secOpt.appendChild(rowOpt2);

        const rowOpt3 = document.createElement('div'); rowOpt3.className = 'row';
        rowOpt3.appendChild(this._createSelector('hideAxislabels', t('hideAxisLabels'), { boolean: {} }, c.hideAxislabels === true));
        rowOpt3.appendChild(this._createSelector('hideGrid', t('hideGrid'), { boolean: {} }, c.hideGrid === true));
        secOpt.appendChild(rowOpt3);

        const rowOpt3b = document.createElement('div'); rowOpt3b.className = 'row';
        rowOpt3b.appendChild(this._createSelector('hideLegend', t('hideLegend'), { boolean: {} }, c.hideLegend === true));
        rowOpt3b.appendChild(this._createSelector('hideMonoBtn', t('hideMonoBtn'), { boolean: {} }, c.hideMonoBtn === true));
        secOpt.appendChild(rowOpt3b);

        const rowOpt4 = document.createElement('div'); rowOpt4.className = 'row';
        rowOpt4.appendChild(this._createSelector('dateFormat', t('dateFormat'), { select: { mode: "dropdown", options: [{ label: t('dateFormatDMY'), value: 'dmy' }, { label: t('dateFormatMDY'), value: 'mdy' }] } }, c.dateFormat || 'dmy'));
        secOpt.appendChild(rowOpt4);

        const rowOpt5 = document.createElement('div'); rowOpt5.className = 'row';
        rowOpt5.appendChild(this._createSelector('showPeaks', t('showPeaks'), { boolean: {} }, c.showPeaks === true));
        rowOpt5.appendChild(this._createSelector('showNowLine', t('showNowLine'), { boolean: {} }, c.showNowLine === true));
        secOpt.appendChild(rowOpt5);

        const rowOpt6 = document.createElement('div'); rowOpt6.className = 'row';
        rowOpt6.appendChild(this._createSelector('showDayNight', t('showDayNight'), { boolean: {} }, c.showDayNight === true));
        secOpt.appendChild(rowOpt6);

        if (c.chartType === 'bar' && c.layoutMode !== 'split') secOpt.appendChild(this._createSelector('stackedBars', t('stackedBars'), { boolean: {} }, c.stackedBars === true));
        container.appendChild(secOpt);

        // --- SECTION 4: Sensoren ---
        const secSens = document.createElement('div'); secSens.className = 'section';
        secSens.innerHTML = `<div class="section-title">${t('sensors')}</div>`;
        const sensorList = document.createElement('div'); sensorList.className = 'sensor-list';

        (c.sensors || []).forEach((s, index) => {
            const row = document.createElement('div'); row.className = 'sensor-row';

            const mainRow = document.createElement('div'); mainRow.className = 'sensor-row-main';

            // 1. Color
            const colWrap = document.createElement('div'); colWrap.className = 'color-wrap';
            colWrap.style.backgroundColor = s.color;
            const colInp = document.createElement('input');
            colInp.type = 'color'; colInp.className = 'color-inp'; colInp.value = s.color;
            colInp.onchange = (e) => this._updateSensor(index, 'color', e.target.value);
            colWrap.appendChild(colInp);
            mainRow.appendChild(colWrap);

            // 2. Entity Selector
            const selContainer = document.createElement('div');
            selContainer.className = 'selector-container';
            const entitySelector = document.createElement('ha-selector');
            entitySelector.selector = { entity: {} };
            entitySelector.value = s.entityId;
            entitySelector.label = t('sensorLabel');
            entitySelector.hass = this._hass;
            entitySelector.addEventListener('value-changed', (e) => this._updateSensor(index, 'entityId', e.detail.value));
            selContainer.appendChild(entitySelector);
            mainRow.appendChild(selContainer);

            // 3. Hide Button
            const btnHide = document.createElement('button');
            btnHide.className = 'icon-btn';
            btnHide.innerHTML = s.hidden ? ICONS.eyeClosed : ICONS.eyeOpen;
            btnHide.title = s.hidden ? t('show') : t('hide');
            btnHide.onclick = () => this._updateSensor(index, 'hidden', !s.hidden);
            mainRow.appendChild(btnHide);

            // 4. Delete Button
            const btnDel = document.createElement('button');
            btnDel.className = 'icon-btn delete';
            btnDel.innerHTML = ICONS.delete;
            btnDel.title = t('remove');
            btnDel.onclick = () => this._removeSensor(index);
            mainRow.appendChild(btnDel);

            row.appendChild(mainRow);

            // 5. Alias Input (second row, aligned with entity selector)
            const aliasRow = document.createElement('div'); aliasRow.className = 'sensor-row-alias';
            const spacer = document.createElement('div');
            aliasRow.appendChild(spacer);
            const aliasInp = document.createElement('input');
            aliasInp.type = 'text';
            aliasInp.className = 'alias-input';
            aliasInp.value = s.alias || '';
            aliasInp.placeholder = t('aliasPlaceholder');
            aliasInp.addEventListener('change', (e) => this._updateSensor(index, 'alias', e.target.value.trim()));
            aliasRow.appendChild(aliasInp);
            const aliasLbl = document.createElement('div');
            aliasLbl.className = 'alias-label';
            aliasLbl.textContent = t('aliasLabel');
            aliasRow.appendChild(aliasLbl);
            row.appendChild(aliasRow);

            sensorList.appendChild(row);
        });
        secSens.appendChild(sensorList);

        const btnAdd = document.createElement('button');
        btnAdd.className = 'btn-add';
        btnAdd.innerText = t('addSensorBtn');
        btnAdd.onclick = () => this._addSensor();
        secSens.appendChild(btnAdd);

        container.appendChild(secSens);
    }

    _updateYaml() {
        if (!this._rendered || this._mode !== 'yaml') return;
        const container = this.shadowRoot.getElementById('yaml-container');
        container.innerHTML = '';

        let val = '';
        if (window.jsyaml && this._config) {
            const dump = { ...this._config };
            delete dump.type;
            val = window.jsyaml.dump(dump);
        }

        const editor = document.createElement('ha-code-editor');
        editor.mode = 'yaml';
        editor.autofocus = true;
        editor.value = val;
        editor.addEventListener('value-changed', (e) => {
            if (!window.jsyaml) return;
            try {
                const parsed = window.jsyaml.load(e.detail.value);
                if (parsed) {
                    this._config = { ...parsed, type: 'custom:detailed-charts-panel' };
                    fireEvent(this, 'config-changed', { config: this._config });
                }
            } catch (err) { }
        });
        container.appendChild(editor);
    }

    _updateSensor(index, key, val) {
        const sensors = [...(this._config.sensors || [])];
        const s = { ...sensors[index], [key]: val };
        if (key === 'hidden' && val === false) delete s.hidden;
        if (key === 'alias' && !val) delete s.alias;
        sensors[index] = s;
        this._configChanged({ ...this._config, sensors });
    }

    _addSensor() {
        const sensors = [...(this._config.sensors || [])];
        sensors.push({ entityId: '', color: '#' + Math.floor(Math.random() * 16777215).toString(16) });
        this._configChanged({ ...this._config, sensors });
    }

    _removeSensor(index) {
        const sensors = [...(this._config.sensors || [])];
        sensors.splice(index, 1);
        this._configChanged({ ...this._config, sensors });
    }

    _migrateThresholdsForEditor(c) {
        const result = [];
        if (c.threshold !== undefined && c.threshold !== '') result.push({ value: c.threshold, alias: c.thresholdAlias1 || '', color: '#f44336' });
        if (c.threshold2 !== undefined && c.threshold2 !== '') result.push({ value: c.threshold2, alias: c.thresholdAlias2 || '', color: '#03a9f4' });
        return result;
    }

    _buildRefLineRow(ref, index) {
        const row = document.createElement('div');
        row.style.cssText = 'display:flex;align-items:center;gap:6px;margin-bottom:6px;';

        const colWrap = document.createElement('div');
        colWrap.className = 'color-wrap';
        colWrap.style.backgroundColor = ref.color || '#f44336';
        const colInp = document.createElement('input');
        colInp.type = 'color'; colInp.className = 'color-inp'; colInp.value = ref.color || '#f44336';
        colInp.addEventListener('input', (e) => { colWrap.style.backgroundColor = e.target.value; });
        colInp.onchange = (e) => this._updateRefLine(index, 'color', e.target.value);
        colWrap.appendChild(colInp);
        row.appendChild(colWrap);

        const valInp = document.createElement('input');
        valInp.type = 'number'; valInp.step = 'any'; valInp.value = ref.value !== undefined ? ref.value : '';
        valInp.placeholder = t('refLineValue');
        valInp.style.cssText = 'flex:1;min-width:0;padding:4px;border:1px solid var(--divider-color);border-radius:4px;background:var(--card-background-color);color:var(--primary-text-color);';
        valInp.addEventListener('change', (e) => this._updateRefLine(index, 'value', e.target.value));
        row.appendChild(valInp);

        const aliasInp = document.createElement('input');
        aliasInp.type = 'text'; aliasInp.value = ref.alias || '';
        aliasInp.placeholder = t('refLineAlias');
        aliasInp.style.cssText = 'flex:1;min-width:0;padding:4px;border:1px solid var(--divider-color);border-radius:4px;background:var(--card-background-color);color:var(--primary-text-color);';
        aliasInp.addEventListener('change', (e) => this._updateRefLine(index, 'alias', e.target.value.trim()));
        row.appendChild(aliasInp);

        const btnDel = document.createElement('button');
        btnDel.className = 'icon-btn delete'; btnDel.innerHTML = ICONS.delete; btnDel.title = t('remove');
        btnDel.onclick = () => this._removeRefLine(index);
        row.appendChild(btnDel);

        return row;
    }

    _updateRefLine(index, key, val) {
        const thresholds = [...(this._config.thresholds || this._migrateThresholdsForEditor(this._config))];
        thresholds[index] = { ...thresholds[index], [key]: val };
        this._configChanged({ ...this._config, thresholds, threshold: undefined, threshold2: undefined, thresholdAlias1: undefined, thresholdAlias2: undefined });
    }

    _addRefLine() {
        const thresholds = [...(this._config.thresholds || this._migrateThresholdsForEditor(this._config))];
        thresholds.push({ value: '', alias: '', color: '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0') });
        this._configChanged({ ...this._config, thresholds, threshold: undefined, threshold2: undefined, thresholdAlias1: undefined, thresholdAlias2: undefined });
    }

    _removeRefLine(index) {
        const thresholds = [...(this._config.thresholds || this._migrateThresholdsForEditor(this._config))];
        thresholds.splice(index, 1);
        this._configChanged({ ...this._config, thresholds, threshold: undefined, threshold2: undefined, thresholdAlias1: undefined, thresholdAlias2: undefined });
    }
}

if (!customElements.get('detailed-charts-panel-editor')) {
    customElements.define('detailed-charts-panel-editor', DetailedChartsPanelEditor);
}
