/* detailed-charts-panel.js */
console.log(
    "%c📉️ DetailedChartsPanel: v_2.7 ready",
    "background: #5596c5; color: #000; padding: 2px 6px; border-radius: 4px; font-weight: bold;"
);

import {
    cleanName,
    getRandomColor,
    generatePalette,
    paletteColorAt,
    getPanelTemplate
} from './detailed-charts-panel-function.js';

import { DetailedChartsLogic } from './detailed-charts-panel-logic.js';
import { t, setLanguage } from './detailed-charts-panel-langs.js';

class DetailedChartsPanel extends DetailedChartsLogic {
    constructor() {
        super();
        this.STORAGE_KEY_CONFIG = 'detailed-charts-config';
        this.STORAGE_KEY_VIEWS = 'detailed-charts-saved-views';
    }

    // --- EDITOR SUPPORT ---
    static async getConfigElement() {
        await import("./detailed-charts-panel-editor.js");
        return document.createElement("detailed-charts-panel-editor");
    }

    static getStubConfig() {
        return {
            sensors: [],
            chartType: 'line',
            timeMode: 'relative',
            timeSelect: '24',
            layoutMode: 'combined',
            layoutMode: 'combined',
            fillArea: false,
            compareYear: false
        };
    }

    // --- LOVELACE CARD CONFIGURATION ---
    setConfig(config) {
        this._settingsLoaded = true; // Prevent loadSettings from running in set hass (Card Mode)

        const oldConfig = this._config;
        this._config = config;
        this.setAttribute('card-mode', '');

        if (!this.content) {
            this.initUI();
            this.loadDependencies();
        }

        // Deduplicate sensors by entityId to prevent double tooltips
        const uniqueSensors = [];
        const seenIds = new Set();
        (config.sensors || []).forEach(s => {
            if (!s) return;
            if (!s.isCard && s.entityId) {
                if (!seenIds.has(s.entityId)) {
                    seenIds.add(s.entityId);
                    uniqueSensors.push(s);
                }
            } else {
                uniqueSensors.push(s);
            }
        });
        this.selectedSensors = uniqueSensors;

        this.chartType = config.chartType || 'line';
        this.timeMode = config.timeMode || 'relative';
        this.timeSelect = config.timeSelect || '24';
        this.fillArea = (config.fillArea === true);

        this.layoutMode = config.layoutMode || 'combined';
        this.gridColumns = config.gridColumns || 1;

        // Legacy Check: map splitCharts to layoutMode if layoutMode not set
        if (!config.layoutMode && config.splitCharts !== undefined) {
            this.layoutMode = config.splitCharts ? 'split' : 'combined';
        }

        this.stackedBars = config.stackedBars !== undefined ? config.stackedBars : false;
        this.showStats = config.showStats !== undefined ? config.showStats : true;
        this.showDonutSidebar = config.showDonutSidebar || false;
        this.zoomLevel = config.zoomLevel || 1.0;
        this.autoScale = config.autoScale || false;
        this.thresholds = this._migrateThresholds(config);
        this.chartTension = config.chartTension !== undefined ? config.chartTension : 4;
        this.yMin = this._parseAxisLimit(config.yMin);
        this.yMax = this._parseAxisLimit(config.yMax);

        this.hideAxislabels = config.hideAxislabels || false;
        this.hideGrid = config.hideGrid || false;
        this.hideLegend = config.hideLegend || false;
        this.hideMonoBtn = config.hideMonoBtn || false;
        this.dateFormat = config.dateFormat || 'dmy';
        this.showPeaks = config.showPeaks || false;
        this.showNowLine = config.showNowLine || false;
        this.showDayNight = config.showDayNight || false;

        if (this.content) {
            const updateInput = (id, val, isCheck = false) => {
                const el = this.content.querySelector(id);
                if (el) {
                    if (isCheck) el.checked = val;
                    else el.value = val;
                }
            };

            updateInput('#chart-type', this.chartType);
            updateInput('#time-select', this.timeSelect);
            if (config.dateStart) updateInput('#date-start', config.dateStart);
            if (config.dateEnd) updateInput('#date-end', config.dateEnd);

            updateInput('#fill-switch', this.fillArea, true);
            updateInput('#layout-select', this.layoutMode);
            updateInput('#stacked-switch', this.stackedBars, true);
            updateInput('#grid-slider', this.gridColumns);
            updateInput('#tension-slider', this.chartTension);

            updateInput('#hide-axis-switch', this.hideAxislabels, true);
            updateInput('#hide-grid-switch', this.hideGrid, true);
            updateInput('#hide-legend-switch', this.hideLegend, true);
            updateInput('#date-format-select', this.dateFormat);
            updateInput('#peaks-switch', this.showPeaks, true);
            updateInput('#nowline-switch', this.showNowLine, true);
            updateInput('#daynight-switch', this.showDayNight, true);

            const gridDisp = this.content.querySelector('#grid-value-display');
            if (gridDisp) gridDisp.textContent = this.gridColumns;

            const tensionDisp = this.content.querySelector('#tension-value-display');
            if (tensionDisp) tensionDisp.textContent = this.chartTension;

            const zoomDisp = this.content.querySelector('#zoom-value-display');
            if (zoomDisp) zoomDisp.textContent = Math.round(this.zoomLevel * 100) + '%';
            updateInput('#zoom-slider', this.zoomLevel);

            updateInput('#stats-switch', this.showStats, true);
            updateInput('#donut-switch', this.showDonutSidebar, true);
            updateInput('#donut-switch', this.showDonutSidebar, true);
            updateInput('#autoscale-switch', this.autoScale, true);
            updateInput('#compare-year-switch', this.compareYear, true);
            this.renderRefLinesUI();
            updateInput('#y-min-input', this.yMin === undefined ? '' : this.yMin);
            updateInput('#y-max-input', this.yMax === undefined ? '' : this.yMax);

            this.updateSliderVisibility();
            this.updateStackedVisibility();
            this.switchTimeMode(this.timeMode);

            this.renderSensorListUI();

            // FIX: If config changed (Editor), sync to localStorage to prevent loadSettings from reverting it
            if (oldConfig) {
                const keysToCheck = ['layoutMode', 'chartType', 'timeMode', 'timeSelect', 'fillArea', 'stackedBars', 'gridColumns', 'zoomLevel', 'showStats', 'showDonutSidebar', 'autoScale', 'compareYear', 'hideAxislabels', 'hideGrid', 'hideLegend', 'hideMonoBtn', 'dateFormat', 'yMin', 'yMax', 'showPeaks', 'showNowLine', 'showDayNight'];
                let hasChanged = keysToCheck.some(k => oldConfig[k] !== config[k]);
                if (!hasChanged) {
                    if (JSON.stringify(config.sensors) !== JSON.stringify(oldConfig.sensors)) hasChanged = true;
                    if (JSON.stringify(config.thresholds) !== JSON.stringify(oldConfig.thresholds)) hasChanged = true;
                }
                if (hasChanged) {
                    this.saveSettings();
                }
            }
        }

        // Force update of internal state for LayoutMode if changed via Editor
        if (this.libsLoaded) {
            // If we have data, we can just re-render the chart with new settings
            if (this._sensorDataCache.length > 0) {
                if (this._reloadTimeout) clearTimeout(this._reloadTimeout);
                this._reloadTimeout = setTimeout(() => {
                    this.updateChartFromCache();
                }, 100);
            } else if (this._hass) {
                // No data yet, load it
                if (this._reloadTimeout) clearTimeout(this._reloadTimeout);
                this._reloadTimeout = setTimeout(() => {
                    this.loadHistory();
                }, 500);
            }
        }
    }

    getCardSize() {
        return 4;
    }

    _parseAxisLimit(v) {
        if (v === undefined || v === null || v === '') return undefined;
        const n = Number(v);
        return Number.isFinite(n) ? n : undefined;
    }

    _migrateThresholds(config) {
        if (config.thresholds) return config.thresholds;
        const result = [];
        if (config.threshold !== undefined && config.threshold !== '') {
            result.push({ value: config.threshold, alias: config.thresholdAlias1 || '', color: '#f44336' });
        }
        if (config.threshold2 !== undefined && config.threshold2 !== '') {
            result.push({ value: config.threshold2, alias: config.thresholdAlias2 || '', color: '#03a9f4' });
        }
        return result;
    }

    renderRefLinesUI() {
        const list = this.content.querySelector('#ref-lines-list');
        if (!list) return;
        list.innerHTML = '';
        (this.thresholds || []).forEach((ref, i) => {
            const row = document.createElement('div');
            row.style.cssText = 'display:flex;align-items:center;gap:6px;margin-top:6px;';

            const colWrap = document.createElement('div');
            colWrap.style.cssText = `width:28px;height:28px;border-radius:50%;background:${ref.color || '#f44336'};flex-shrink:0;cursor:pointer;overflow:hidden;`;
            const colInp = document.createElement('input');
            colInp.type = 'color';
            colInp.value = ref.color || '#f44336';
            colInp.style.cssText = 'opacity:0;width:100%;height:100%;cursor:pointer;';
            colInp.addEventListener('input', (e) => { colWrap.style.background = e.target.value; });
            colInp.addEventListener('change', (e) => {
                this.thresholds[i] = { ...this.thresholds[i], color: e.target.value };
                if (!this._config) this.saveSettings();
                if (this._sensorDataCache.length > 0) this.updateChartFromCache();
            });
            colWrap.appendChild(colInp);
            row.appendChild(colWrap);

            const valInp = document.createElement('input');
            valInp.type = 'number';
            valInp.step = 'any';
            valInp.value = ref.value !== undefined ? ref.value : '';
            valInp.placeholder = t('refLineValue');
            valInp.style.cssText = 'flex:1;min-width:0;width:auto;';
            valInp.addEventListener('change', (e) => {
                this.thresholds[i] = { ...this.thresholds[i], value: e.target.value };
                if (!this._config) this.saveSettings();
                if (this._sensorDataCache.length > 0) this.updateChartFromCache();
            });
            row.appendChild(valInp);

            const aliasInp = document.createElement('input');
            aliasInp.type = 'text';
            aliasInp.value = ref.alias || '';
            aliasInp.placeholder = t('refLineAlias');
            aliasInp.style.cssText = 'flex:1;min-width:0;width:auto;';
            aliasInp.addEventListener('change', (e) => {
                this.thresholds[i] = { ...this.thresholds[i], alias: e.target.value.trim() };
                if (!this._config) this.saveSettings();
                if (this._sensorDataCache.length > 0) this.updateChartFromCache();
            });
            row.appendChild(aliasInp);

            const delBtn = document.createElement('button');
            delBtn.textContent = '✕';
            delBtn.style.cssText = 'background:none;border:none;cursor:pointer;color:var(--error-color,#f44336);font-size:16px;padding:0 4px;flex-shrink:0;';
            delBtn.addEventListener('click', () => {
                this.thresholds = this.thresholds.filter((_, idx) => idx !== i);
                this.renderRefLinesUI();
                if (!this._config) this.saveSettings();
                if (this._sensorDataCache.length > 0) this.updateChartFromCache();
            });
            row.appendChild(delBtn);

            list.appendChild(row);
        });
    }

    set hass(hass) {
        this._hass = hass;
        if (hass && hass.language) {
            setLanguage(hass.language);
        }
        if (!this.content) {
            try {
                this.initUI();
                this.loadDependencies();
                if (!this._config) this.loadSettings();
            } catch (e) {
                console.error("Critical Error", e);
                this.innerHTML = `<div style="color:red;padding:20px;">${t('criticalError')}${e.message}</div>`;
            }
        }

        // --- FIX: Pass Hass updates to Custom Cards ---
        if (this.shadowRoot) {
            const customCardContainers = this.shadowRoot.querySelectorAll('.split-card-container');
            customCardContainers.forEach(container => {
                // Find the first child that is a custom element (has a dash)
                const card = Array.from(container.children).find(child => child.tagName.includes('-'));
                if (card) {
                    card.hass = hass;
                }
            });
        }

        if (this._hass && this._hass.states && !this._allSensorsLoaded) {
            this._allSensors = Object.keys(this._hass.states)
                .filter(k => k.startsWith('sensor.') || k.startsWith('binary_sensor.') || k.startsWith('input_number.'))
                .sort();
            this._allSensorsLoaded = true;
        }

        // Ensure persistence: Load settings if we haven't already, even if setConfig was called.
        // However, avoid overwriting if loadHistory already started or if we assume setConfig provided the truth.
        // The issue is that setConfig prevents loadSettings call because this._config is true.
        // But if persistence is desired, loadSettings should run at least once.
        if (!this._settingsLoaded && !this._loadSettingsFailed) {
            this._settingsLoaded = true; // Mark as attempted
            this.loadSettings();
        }

        if (this._config && this.libsLoaded && this.selectedSensors.length > 0 && !this._dataLoadedInit) {
            this._dataLoadedInit = true;
            this.loadHistory();
        }
    }

    initUI() {
        const root = this.attachShadow({ mode: 'open' });
        root.innerHTML = getPanelTemplate();
        this.content = root;
        this.chartLibReady = false;
        this.timeMode = 'relative';

        const haMenuBtn = this.content.querySelector('#ha-menu-btn');
        if (haMenuBtn) {
            haMenuBtn.addEventListener('click', () => {
                this.dispatchEvent(new Event('hass-toggle-menu', { bubbles: true, composed: true }));
            });
        }

        const mobSidebarBtn = this.content.querySelector('#mobile-open-sidebar-btn');
        if (mobSidebarBtn) {
            mobSidebarBtn.addEventListener('click', () => {
                this.toggleSidebar();
            });
        }

        this.content.querySelector('#add-card-btn').addEventListener('click', () => {
            this.content.querySelector('#import-card-modal').style.display = 'flex';
            this.content.querySelector('#card-import-area').focus();
        });

        this.content.querySelector('#clear-all-btn').addEventListener('click', () => this.clearAllSensors());
        const rerollBtn = this.content.querySelector('#reroll-colors-btn');
        if (rerollBtn) rerollBtn.addEventListener('click', () => this.randomizeColors());
        this.content.querySelector('#save-view-btn').addEventListener('click', () => this.saveCurrentView());

        this.content.querySelector('#reset-zoom-btn').addEventListener('click', () => this.resetZoomAll());
        this.content.querySelector('#copy-yaml-btn').addEventListener('click', () => this.copyToClipboard());

        this.content.querySelector('#toggle-sidebar-btn').addEventListener('click', () => this.toggleSidebar());
        this.content.querySelector('#open-sidebar-floating').addEventListener('click', () => this.toggleSidebar());

        this.content.querySelector('#close-modal-btn').addEventListener('click', () => {
            this.content.querySelector('#export-modal').style.display = 'none';
            this.content.querySelectorAll('.copy-success-msg').forEach(el => el.style.display = 'none');
        });
        this.content.querySelector('#export-modal').addEventListener('click', (e) => {
            if (e.target.id === 'export-modal') {
                this.content.querySelector('#export-modal').style.display = 'none';
                this.content.querySelectorAll('.copy-success-msg').forEach(el => el.style.display = 'none');
            }
        });

        this.content.querySelector('#close-import-modal-btn').addEventListener('click', () => {
            this.content.querySelector('#import-card-modal').style.display = 'none';
        });
        this.content.querySelector('#import-card-confirm-btn').addEventListener('click', () => this.importCustomCard());

        const handleCopy = (areaId, msgId) => {
            const txt = this.content.querySelector(areaId);
            const msg = this.content.querySelector(msgId);
            txt.select();
            txt.setSelectionRange(0, 99999);
            const showSuccess = () => { msg.style.display = 'block'; setTimeout(() => msg.style.display = 'none', 3000); };
            try {
                const successful = document.execCommand('copy');
                if (successful) showSuccess(); else throw new Error("execCommand failed");
            } catch (err) {
                navigator.clipboard.writeText(txt.value).then(() => showSuccess()).catch(() => alert(t('copyFailed')));
            }
        };

        this.content.querySelector('#copy-yaml-btn-action').addEventListener('click', () => handleCopy('#yaml-export-area', '#msg-yaml'));
        this.content.querySelector('#copy-json-btn-action').addEventListener('click', () => handleCopy('#json-export-area', '#msg-json'));

        this.content.querySelector('#sensor-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addSensor();
        });

        const sInput = this.content.querySelector('#sensor-input');
        sInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        sInput.addEventListener('focus', (e) => this.handleSearch(e.target.value));

        document.addEventListener('click', (e) => {
            if (this.shadowRoot && !e.composedPath().includes(this.content.querySelector('.control-group'))) {
                this.content.querySelector('#suggestions').style.display = 'none';
            }
        });

        const inputs = [
            '#chart-type', '#time-select', '#date-start', '#date-end',
            '#fill-switch', '#layout-select', '#stacked-switch',
            '#fill-switch', '#layout-select', '#stacked-switch',
            '#stats-switch', '#donut-switch', '#autoscale-switch', '#compare-year-switch',
            '#hide-axis-switch', '#hide-grid-switch', '#hide-legend-switch', '#date-format-select',
            '#peaks-switch', '#nowline-switch', '#daynight-switch'
        ];
        inputs.forEach(id => {
            const el = this.content.querySelector(id);
            if (!el) return;
            el.addEventListener('change', (e) => {
                if (id === '#fill-switch') this.fillArea = e.target.checked;

                if (id === '#chart-type') {
                    if (e.target.value !== 'bar') {
                        this.stackedBars = false;
                        const sw = this.content.querySelector('#stacked-switch');
                        if (sw) sw.checked = false;
                        this.updateStackedVisibility();
                    }
                }

                if (id === '#layout-select') {
                    this.layoutMode = e.target.value;
                    this.updateSliderVisibility();
                }
                if (id === '#stacked-switch') this.stackedBars = e.target.checked;
                if (id === '#stats-switch') this.showStats = e.target.checked;
                if (id === '#donut-switch') this.showDonutSidebar = e.target.checked;
                if (id === '#donut-switch') this.showDonutSidebar = e.target.checked;
                if (id === '#autoscale-switch') this.autoScale = e.target.checked;
                if (id === '#compare-year-switch') {
                    this.compareYear = e.target.checked;
                    // Reload data if enabled to fetch previous year
                    if (this.compareYear) {
                        this.loadHistory();
                        return; // loadHistory updates charts
                    }
                }
                if (id === '#hide-axis-switch') this.hideAxislabels = e.target.checked;
                if (id === '#hide-grid-switch') this.hideGrid = e.target.checked;
                if (id === '#hide-legend-switch') this.hideLegend = e.target.checked;
                if (id === '#date-format-select') this.dateFormat = e.target.value;
                if (id === '#peaks-switch') this.showPeaks = e.target.checked;
                if (id === '#nowline-switch') this.showNowLine = e.target.checked;
                if (id === '#daynight-switch') this.showDayNight = e.target.checked;

                this.updateStackedVisibility();
                if (!this._config) this.saveSettings();

                if (this._sensorDataCache.length > 0 && (id !== '#time-select' && id !== '#date-start' && id !== '#date-end')) {
                    this.updateChartFromCache();
                }
            });
        });

        const addRefBtn = this.content.querySelector('#add-ref-line-btn');
        if (addRefBtn) {
            addRefBtn.addEventListener('click', () => {
                this.thresholds = [...(this.thresholds || []), { value: '', alias: '', color: '#f44336' }];
                this.renderRefLinesUI();
                if (!this._config) this.saveSettings();
            });
        }

        const yMinInput = this.content.querySelector('#y-min-input');
        if (yMinInput) {
            yMinInput.addEventListener('change', (e) => {
                const v = e.target.value;
                this.yMin = v === '' ? undefined : Number(v);
                if (!this._config) this.saveSettings();
                if (this._sensorDataCache.length > 0) this.updateChartFromCache();
            });
        }

        const yMaxInput = this.content.querySelector('#y-max-input');
        if (yMaxInput) {
            yMaxInput.addEventListener('change', (e) => {
                const v = e.target.value;
                this.yMax = v === '' ? undefined : Number(v);
                if (!this._config) this.saveSettings();
                if (this._sensorDataCache.length > 0) this.updateChartFromCache();
            });
        }

        const zoomSlider = this.content.querySelector('#zoom-slider');
        zoomSlider.addEventListener('input', (e) => {
            this.zoomLevel = parseFloat(e.target.value);
            this.content.querySelector('#zoom-value-display').textContent = Math.round(this.zoomLevel * 100) + '%';
            this.applyZoom();
        });
        zoomSlider.addEventListener('change', (e) => { if (!this._config) this.saveSettings(); });

        ['#time-select', '#date-start', '#date-end'].forEach(id => {
            this.content.querySelector(id).addEventListener('change', (e) => {
                if (!this._config) this.saveSettings();
                this.loadHistory();
            });
        });

        const gridSlider = this.content.querySelector('#grid-slider');
        gridSlider.addEventListener('input', (e) => {
            this.gridColumns = parseInt(e.target.value);
            this.content.querySelector('#grid-value-display').textContent = this.gridColumns;
        });
        gridSlider.addEventListener('change', (e) => {
            if (!this._config) this.saveSettings();
            if (this._sensorDataCache.length > 0 && this.layoutMode !== 'combined') this.updateChartFromCache();
        });

        const tensionSlider = this.content.querySelector('#tension-slider');
        if (tensionSlider) {
            tensionSlider.addEventListener('input', (e) => {
                this.chartTension = parseInt(e.target.value);
                const disp = this.content.querySelector('#tension-value-display');
                if (disp) disp.textContent = this.chartTension;
            });
            tensionSlider.addEventListener('change', (e) => {
                if (!this._config) this.saveSettings();
                if (this._sensorDataCache.length > 0) this.updateChartFromCache();
            });
        }

        const setMode = (mode) => { this.switchTimeMode(mode); if (!this._config) this.saveSettings(); };
        this.content.querySelector('#btn-mode-relative').addEventListener('click', () => setMode('relative'));
        this.content.querySelector('#btn-mode-fixed').addEventListener('click', () => setMode('fixed'));

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

    toggleSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
        this._applySidebarState();
        this.saveSettings();
    }

    _applySidebarState() {
        const sidebar = this.shadowRoot.getElementById('sidebar-panel');
        if (!sidebar) return;
        if (this.sidebarCollapsed) {
            sidebar.classList.add('collapsed');
            this.classList.add('sidebar-hidden');
        } else {
            sidebar.classList.remove('collapsed');
            this.classList.remove('sidebar-hidden');
        }
        setTimeout(() => { this.chartInstances.forEach(c => c.resize()); }, 350);
    }

    toggleMonochrome() {
        this.monochromeMode = !this.monochromeMode;
        const btn = this.shadowRoot.querySelector('#toggle-mono-btn');
        if (btn) btn.classList.toggle('active', !this.monochromeMode);

        if (this.monochromeMode) {
            this.chartInstances.forEach(chart => {
                if (chart.config.type === 'doughnut') return;
                chart.data.datasets.forEach((ds, idx) => {
                    ds.borderColor = 'rgba(128, 128, 128, 0.4)';
                    ds.backgroundColor = 'transparent';
                    ds.borderWidth = 1.5;
                    ds.fill = false;
                    let minVal = Infinity, maxVal = -Infinity;
                    ds.data.forEach(p => {
                        if (p.y < minVal) minVal = p.y;
                        if (p.y > maxVal) maxVal = p.y;
                    });
                    ds.pointRadius = (ctx) => {
                        const v = ctx.parsed.y;
                        return (v === minVal || v === maxVal) ? 5 : 0;
                    };
                    ds.pointBackgroundColor = (ctx) => {
                        const v = ctx.parsed.y;
                        if (v === maxVal) return '#f44336';
                        if (v === minVal) return '#2196f3';
                        return 'transparent';
                    };
                    ds.pointBorderColor = (ctx) => {
                        const v = ctx.parsed.y;
                        if (v === maxVal) return '#f44336';
                        if (v === minVal) return '#2196f3';
                        return 'transparent';
                    };
                });
                chart.update();
            });
        } else {
            this.updateChartFromCache();
        }
    }

    copyToClipboard() {
        if (this.selectedSensors.length === 0) { alert(t('noSensorsSelected')); return; }
        this.fillArea = this.content.querySelector('#fill-switch').checked;

        let yaml = `type: custom:detailed-charts-panel\n`;
        yaml += `chartType: ${this.content.querySelector('#chart-type').value}\n`;
        yaml += `timeMode: ${this.timeMode}\n`;
        if (this.timeMode === 'relative') { yaml += `timeSelect: "${this.content.querySelector('#time-select').value}"\n`; }
        else {
            yaml += `dateStart: "${this.content.querySelector('#date-start').value}"\n`;
            yaml += `dateEnd: "${this.content.querySelector('#date-end').value}"\n`;
        }
        yaml += `fillArea: ${this.fillArea}\n`;
        yaml += `layoutMode: ${this.layoutMode}\n`;
        yaml += `stackedBars: ${this.stackedBars}\n`;
        yaml += `showStats: ${this.showStats}\n`;
        yaml += `showDonutSidebar: ${this.showDonutSidebar}\n`;
        yaml += `zoomLevel: ${this.zoomLevel}\n`;
        yaml += `autoScale: ${this.autoScale}\n`;
        yaml += `compareYear: ${this.compareYear}\n`;
        yaml += `hideAxislabels: ${this.hideAxislabels}\n`;
        yaml += `hideGrid: ${this.hideGrid}\n`;
        yaml += `hideLegend: ${this.hideLegend}\n`;
        yaml += `hideMonoBtn: ${this.hideMonoBtn}\n`;
        yaml += `dateFormat: ${this.dateFormat}\n`;
        yaml += `showPeaks: ${this.showPeaks}\n`;
        yaml += `showNowLine: ${this.showNowLine}\n`;
        yaml += `showDayNight: ${this.showDayNight}\n`;
        yaml += `chartTension: ${this.chartTension}\n`;
        if (this.thresholds && this.thresholds.length > 0) {
            yaml += `thresholds:\n`;
            this.thresholds.forEach(r => {
                yaml += `  - value: ${r.value}\n`;
                yaml += `    color: "${r.color}"\n`;
                if (r.alias) yaml += `    alias: "${r.alias}"\n`;
            });
        }
        if (this.yMin !== undefined) yaml += `yMin: ${this.yMin}\n`;
        if (this.yMax !== undefined) yaml += `yMax: ${this.yMax}\n`;
        if (this.gridColumns > 1) yaml += `gridColumns: ${this.gridColumns}\n`;

        yaml += `sensors:\n`;
        this.selectedSensors.forEach(s => {
            if (s.isCard) return;
            yaml += `  - entityId: ${s.entityId}\n`;
            yaml += `    color: "${s.color}"\n`;
            if (s.hidden) yaml += `    hidden: true\n`;
            if (s.alias) yaml += `    alias: "${s.alias}"\n`; // Export Alias
        });

        const jsonObject = {
            name: "Meine neue Ansicht",
            chartType: this.content.querySelector('#chart-type').value,
            timeMode: this.timeMode,
            timeSelect: this.content.querySelector('#time-select').value,
            fillArea: this.fillArea,
            stackedBars: this.stackedBars,
            showStats: this.showStats,
            layoutMode: this.layoutMode,
            gridColumns: this.gridColumns,
            zoomLevel: this.zoomLevel,
            zoomLevel: this.zoomLevel,
            autoScale: this.autoScale,
            compareYear: this.compareYear,
            thresholds: this.thresholds,
            yMin: this.yMin,
            yMax: this.yMax,
            hideAxislabels: this.hideAxislabels,
            hideGrid: this.hideGrid,
            hideLegend: this.hideLegend,
            hideMonoBtn: this.hideMonoBtn,
            dateFormat: this.dateFormat,
            showPeaks: this.showPeaks,
            showNowLine: this.showNowLine,
            showDayNight: this.showDayNight,
            chartTension: this.chartTension,
            sensors: this.selectedSensors
        };

        const jsonString = JSON.stringify(jsonObject, null, 4);
        this.content.querySelector('#yaml-export-area').value = yaml;
        this.content.querySelector('#json-export-area').value = jsonString;
        this.content.querySelector('#export-modal').style.display = 'flex';
    }

    applyZoom() {
        const scaler = this.content.querySelector('#content-scaler');
        if (scaler) {
            if (this.zoomLevel === 1.0) {
                scaler.style.transform = 'none';
                scaler.style.width = '100%';
            } else {
                scaler.style.transform = `scale(${this.zoomLevel})`;
                scaler.style.transformOrigin = 'top left';
                scaler.style.width = `calc(100% / ${this.zoomLevel})`;
            }
            scaler.style.zoom = '';
        }
    }

    handleSearch(query) {
        const list = this.content.querySelector('#suggestions');
        if (!this._allSensors || this._allSensors.length === 0) { list.style.display = 'none'; return; }
        const q = (query || '').toLowerCase();
        const hass = this._hass;
        list.innerHTML = '';
        if (!this._searchSelection) this._searchSelection = new Set();

        // --- Areas & Devices (only when the HA registry is available and something is typed) ---
        let groupRows = 0;
        if (q && hass && hass.areas && hass.devices) {
            Object.values(hass.areas).forEach(area => {
                if (groupRows >= 8) return;
                const nm = (area.name || '').toLowerCase();
                if (!nm.includes(q)) return;
                const ids = this._areaSensors(area.area_id);
                if (!ids.length) return;
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.innerHTML = `<div class="s-name">🗺️ ${area.name} <span style="opacity:.6;font-weight:400;">(${t('area')}, ${ids.length})</span></div><div class="s-id">${t('addAllInGroup')}</div>`;
                div.onclick = () => { list.style.display = 'none'; this.content.querySelector('#sensor-input').value = ''; this.addMultipleSensors(ids); };
                list.appendChild(div); groupRows++;
            });
            Object.values(hass.devices).forEach(dev => {
                if (groupRows >= 12) return;
                const label = dev.name_by_user || dev.name || '';
                if (!label.toLowerCase().includes(q)) return;
                const ids = this._deviceSensors(dev.id);
                if (!ids.length) return;
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.innerHTML = `<div class="s-name">🔧 ${label} <span style="opacity:.6;font-weight:400;">(${t('device')}, ${ids.length})</span></div><div class="s-id">${t('addAllInGroup')}</div>`;
                div.onclick = () => { list.style.display = 'none'; this.content.querySelector('#sensor-input').value = ''; this.addMultipleSensors(ids); };
                list.appendChild(div); groupRows++;
            });
        }

        // --- Entities (with multi-select checkboxes) ---
        const matches = this._allSensors.filter(id => {
            if (this.selectedSensors.some(sel => sel.entityId === id)) return false;
            if (id.toLowerCase().includes(q)) return true;
            const state = hass.states[id];
            if (state && state.attributes.friendly_name && state.attributes.friendly_name.toLowerCase().includes(q)) return true;
            return false;
        }).slice(0, 50);

        matches.forEach(id => {
            const state = hass.states[id];
            const friendly = state && state.attributes.friendly_name ? state.attributes.friendly_name : cleanName(id);
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.style.display = 'flex'; div.style.alignItems = 'center'; div.style.gap = '8px';
            const cb = document.createElement('input');
            cb.type = 'checkbox'; cb.style.flexShrink = '0'; cb.style.width = '18px'; cb.style.height = '18px'; cb.style.cursor = 'pointer';
            cb.style.appearance = 'auto'; cb.style.webkitAppearance = 'auto'; cb.style.accentColor = 'var(--accent-color, #03a9f4)'; cb.style.margin = '0';
            cb.checked = this._searchSelection.has(id);
            cb.onclick = (e) => { e.stopPropagation(); if (cb.checked) this._searchSelection.add(id); else this._searchSelection.delete(id); this._updateSearchFooter(); };
            const txt = document.createElement('div');
            txt.style.flex = '1'; txt.style.minWidth = '0'; txt.style.overflow = 'hidden'; txt.style.cursor = 'pointer';
            txt.innerHTML = `<div class="s-name">${friendly}</div><div class="s-id">${id}</div>`;
            txt.onclick = () => { list.style.display = 'none'; this._searchSelection.clear(); this.content.querySelector('#sensor-input').value = id; this.addSensor(); };
            div.appendChild(cb); div.appendChild(txt);
            list.appendChild(div);
        });

        if (list.children.length === 0) { list.style.display = 'none'; return; }

        // --- Footer: add all checked entities at once ---
        const footer = document.createElement('div');
        footer.style.cssText = 'position:sticky;bottom:0;background:var(--secondary-background-color,#2c2c2c);border-top:1px solid var(--divider-color);padding:8px;';
        footer.innerHTML = `<button id="add-selected-btn" class="btn-add-small" style="border-style:solid;">${t('addSelected')} (${this._searchSelection.size})</button>`;
        list.appendChild(footer);
        const addSelBtn = footer.querySelector('#add-selected-btn');
        addSelBtn.onclick = (e) => {
            e.stopPropagation();
            const ids = Array.from(this._searchSelection);
            this._searchSelection.clear();
            list.style.display = 'none';
            this.content.querySelector('#sensor-input').value = '';
            if (ids.length) this.addMultipleSensors(ids);
        };

        list.style.display = 'block';
    }

    _updateSearchFooter() {
        const btn = this.content.querySelector('#add-selected-btn');
        if (btn) btn.textContent = `${t('addSelected')} (${this._searchSelection ? this._searchSelection.size : 0})`;
    }

    _isTrackableEntity(eid) {
        return eid && (eid.startsWith('sensor.') || eid.startsWith('binary_sensor.') || eid.startsWith('input_number.'));
    }

    _areaSensors(areaId) {
        const hass = this._hass;
        if (!hass || !hass.entities) return [];
        const out = [];
        Object.values(hass.entities).forEach(ent => {
            const eid = ent.entity_id;
            if (!this._isTrackableEntity(eid)) return;
            if (ent.hidden || ent.disabled_by) return;
            let a = ent.area_id;
            if (!a && ent.device_id && hass.devices && hass.devices[ent.device_id]) a = hass.devices[ent.device_id].area_id;
            if (a === areaId && hass.states[eid]) out.push(eid);
        });
        return out;
    }

    _deviceSensors(deviceId) {
        const hass = this._hass;
        if (!hass || !hass.entities) return [];
        const out = [];
        Object.values(hass.entities).forEach(ent => {
            const eid = ent.entity_id;
            if (ent.device_id !== deviceId) return;
            if (!this._isTrackableEntity(eid)) return;
            if (ent.hidden || ent.disabled_by) return;
            if (hass.states[eid]) out.push(eid);
        });
        return out;
    }

    async addMultipleSensors(ids) {
        let added = 0;
        (ids || []).forEach((id) => {
            if (this.selectedSensors.some(sel => sel.entityId === id)) return;
            const color = paletteColorAt(this.selectedSensors.length);
            this.selectedSensors.push({ entityId: id, color });
            added++;
        });
        if (!added) return;
        const ci = this.content.querySelector('#color-input');
        if (ci) ci.value = paletteColorAt(this.selectedSensors.length);
        this.renderSensorListUI();
        if (!this._config) this.saveSettings();
        this.loadHistory();
    }

    randomizeColors() {
        const real = this.selectedSensors.filter(sel => !sel.isCard);
        if (!real.length) return;
        const palette = generatePalette(real.length, Math.floor(Math.random() * 360));
        let i = 0;
        this.selectedSensors.forEach(sel => { if (sel.isCard) return; sel.color = palette[i++]; });
        if (!this._config) this.saveSettings();
        this.renderSensorListUI();
        if (this._sensorDataCache.length > 0) this.updateChartFromCache();
    }

    saveCurrentView() {
        if (this.selectedSensors.length === 0) { alert(t('addSensorsFirst')); return; }
        const name = prompt(t('viewNamePrompt'), "");
        if (!name) return;

        let sensorsToSave = JSON.parse(JSON.stringify(this.selectedSensors));
        if (this.chartInstances.length > 0 && (this.layoutMode === 'combined' || this.layoutMode === 'mixed')) {
            const chart = this.chartInstances[0];
            if (chart && chart.config.type !== 'doughnut') {
                chart.data.datasets.forEach((ds, idx) => {
                    const meta = chart.getDatasetMeta(idx);
                    if (sensorsToSave[idx] && !sensorsToSave[idx].isCard) {
                        if (meta.hidden === true || ds.hidden === true) {
                            sensorsToSave[idx].hidden = true;
                        }
                    }
                });
            }
        }

        const viewConfig = {
            name: name,
            sensors: sensorsToSave,
            chartType: this.content.querySelector('#chart-type').value,
            timeMode: this.timeMode,
            timeSelect: this.content.querySelector('#time-select').value,
            dateStart: this.content.querySelector('#date-start').value,
            dateEnd: this.content.querySelector('#date-end').value,
            fillArea: this.fillArea,
            layoutMode: this.layoutMode,
            gridColumns: this.gridColumns,
            stackedBars: this.stackedBars,
            showStats: this.showStats,
            showDonutSidebar: this.showDonutSidebar,
            zoomLevel: this.zoomLevel,
            zoomLevel: this.zoomLevel,
            autoScale: this.autoScale,
            compareYear: this.compareYear,
            thresholds: this.thresholds,
            yMin: this.yMin,
            yMax: this.yMax,
            hideAxislabels: this.hideAxislabels,
            hideGrid: this.hideGrid,
            hideLegend: this.hideLegend,
            hideMonoBtn: this.hideMonoBtn,
            dateFormat: this.dateFormat,
            showPeaks: this.showPeaks,
            showNowLine: this.showNowLine,
            showDayNight: this.showDayNight,
            chartTension: this.chartTension
        };
        this.savedViews.push(viewConfig);
        localStorage.setItem(this.STORAGE_KEY_VIEWS, JSON.stringify(this.savedViews));
        this.renderSavedViewsUI();
    }

    deleteSavedView(index, event) {
        if (event) event.stopPropagation();
        if (index < this.sharedViews.length) {
            alert(t('globalViewCantDelete'));
            return;
        }

        const localIndex = index - this.sharedViews.length;
        if (!confirm(t('deleteViewConfirm'))) return;
        this.savedViews.splice(localIndex, 1);
        localStorage.setItem(this.STORAGE_KEY_VIEWS, JSON.stringify(this.savedViews));
        this.renderSavedViewsUI();
    }

    loadSavedView(index) {
        const allViews = [...this.sharedViews, ...this.savedViews];
        const config = allViews[index];

        if (!config) return;
        this.selectedSensors = config.sensors || [];
        this.fillArea = config.fillArea || false;
        this.layoutMode = config.layoutMode || 'combined';
        this.gridColumns = config.gridColumns || 1;
        this.timeMode = config.timeMode || 'relative';
        this.stackedBars = config.stackedBars || false;
        this.showStats = config.showStats !== undefined ? config.showStats : true;
        this.showDonutSidebar = config.showDonutSidebar || false;
        this.zoomLevel = config.zoomLevel || 1.0;
        this.autoScale = config.autoScale || false;
        this.thresholds = this._migrateThresholds(config);
        this.chartTension = config.chartTension !== undefined ? config.chartTension : 4;
        this.yMin = this._parseAxisLimit(config.yMin);
        this.yMax = this._parseAxisLimit(config.yMax);
        this.hideAxislabels = config.hideAxislabels || false;
        this.hideGrid = config.hideGrid || false;
        this.hideLegend = config.hideLegend || false;
        this.hideMonoBtn = config.hideMonoBtn || false;
        this.dateFormat = config.dateFormat || 'dmy';
        this.showPeaks = config.showPeaks || false;
        this.showNowLine = config.showNowLine || false;
        this.showDayNight = config.showDayNight || false;

        this.content.querySelector('#chart-type').value = config.chartType || 'line';
        this.content.querySelector('#time-select').value = config.timeSelect || '24';
        if (config.dateStart) this.content.querySelector('#date-start').value = config.dateStart;
        if (config.dateEnd) this.content.querySelector('#date-end').value = config.dateEnd;

        this.content.querySelector('#fill-switch').checked = this.fillArea;
        this.content.querySelector('#layout-select').value = this.layoutMode;
        this.content.querySelector('#stacked-switch').checked = this.stackedBars;
        this.content.querySelector('#stats-switch').checked = this.showStats;
        this.content.querySelector('#donut-switch').checked = this.showDonutSidebar;
        this.content.querySelector('#grid-slider').value = this.gridColumns;
        this.content.querySelector('#grid-value-display').textContent = this.gridColumns;

        const tSlider = this.content.querySelector('#tension-slider');
        if (tSlider) tSlider.value = this.chartTension;
        const tDisp = this.content.querySelector('#tension-value-display');
        if (tDisp) tDisp.textContent = this.chartTension;

        this.content.querySelector('#zoom-slider').value = this.zoomLevel;
        this.content.querySelector('#zoom-value-display').textContent = Math.round(this.zoomLevel * 100) + '%';

        this.renderRefLinesUI();
        const yMinEl = this.content.querySelector('#y-min-input');
        if (yMinEl) yMinEl.value = this.yMin === undefined ? '' : this.yMin;
        const yMaxEl = this.content.querySelector('#y-max-input');
        if (yMaxEl) yMaxEl.value = this.yMax === undefined ? '' : this.yMax;
        this.content.querySelector('#autoscale-switch').checked = this.autoScale;
        this.content.querySelector('#compare-year-switch').checked = this.compareYear;
        this.content.querySelector('#hide-axis-switch').checked = this.hideAxislabels;
        this.content.querySelector('#hide-grid-switch').checked = this.hideGrid;
        const legendSw = this.content.querySelector('#hide-legend-switch');
        if (legendSw) legendSw.checked = this.hideLegend;
        const dfSel = this.content.querySelector('#date-format-select');
        if (dfSel) dfSel.value = this.dateFormat;
        const pkSw = this.content.querySelector('#peaks-switch'); if (pkSw) pkSw.checked = this.showPeaks;
        const nlSw = this.content.querySelector('#nowline-switch'); if (nlSw) nlSw.checked = this.showNowLine;
        const dnSw = this.content.querySelector('#daynight-switch'); if (dnSw) dnSw.checked = this.showDayNight;

        this.updateSliderVisibility();
        this.updateStackedVisibility();
        this.switchTimeMode(this.timeMode);
        this.renderSensorListUI();
        if (!this._config) this.saveSettings();
        this.loadHistory();
    }

    renderSavedViewsUI() {
        const container = this.content.querySelector('#saved-views-container');
        container.innerHTML = '';
        const allViews = [...this.sharedViews, ...this.savedViews];

        if (allViews.length === 0) {
            container.innerHTML = `<div style="font-size:12px; color:var(--secondary-text-color); padding:5px;">${t('noViewsSaved')}</div>`;
            return;
        }

        allViews.forEach((view, index) => {
            const isShared = index < this.sharedViews.length;
            const item = document.createElement('div');
            item.className = 'saved-view-item';
            if (isShared) item.classList.add('shared');

            let actionBtn = `<div class="remove-sensor" title="${t('delete')}">✕</div>`;
            if (isShared) { actionBtn = `<div class="lock-icon" title="${t('globalView')}">🔒</div>`; }

            item.innerHTML = `<div class="saved-view-name">${view.name}</div>${actionBtn}`;
            item.addEventListener('click', () => this.loadSavedView(index));

            if (!isShared) { item.querySelector('.remove-sensor').addEventListener('click', (e) => this.deleteSavedView(index, e)); }
            container.appendChild(item);
        });
    }

    updateSliderVisibility() {
        const row = this.content.querySelector('#grid-slider-row');
        if (this.layoutMode !== 'combined') row.classList.add('visible');
        else row.classList.remove('visible');
        this.updateStackedVisibility();
        this.updateStatsToggleVisibility();
        this.updateDonutToggleVisibility();
    }

    updateStackedVisibility() {
        const stackedRow = this.content.querySelector('#toggle-stacked-row');
        const chartType = this.content.querySelector('#chart-type').value;
        if (chartType === 'bar' && this.layoutMode !== 'split') { stackedRow.style.display = 'flex'; } else { stackedRow.style.display = 'none'; }
    }

    updateStatsToggleVisibility() {
        const statsRow = this.content.querySelector('#toggle-stats-row');
        if (statsRow) statsRow.style.display = 'flex';
    }

    updateDonutToggleVisibility() {
        const row = this.content.querySelector('#toggle-donut-row');
        const chartType = this.content.querySelector('#chart-type').value;
        if (this.layoutMode !== 'split' && chartType !== 'doughnut') { row.style.display = 'flex'; } else { row.style.display = 'none'; }
    }

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
                layoutMode: this.layoutMode,
                gridColumns: this.gridColumns,
                stackedBars: this.stackedBars,
                showStats: this.showStats,
                showDonutSidebar: this.showDonutSidebar,
                zoomLevel: this.zoomLevel,
                thresholds: this.thresholds,
                autoScale: this.autoScale,
                compareYear: this.compareYear,
                hideAxislabels: this.hideAxislabels,
                hideGrid: this.hideGrid,
                hideLegend: this.hideLegend,
                hideMonoBtn: this.hideMonoBtn,
                dateFormat: this.dateFormat,
                showPeaks: this.showPeaks,
                showNowLine: this.showNowLine,
                showDayNight: this.showDayNight,
                chartTension: this.chartTension,
                yMin: this.yMin,
                yMax: this.yMax,
                sidebarCollapsed: this.sidebarCollapsed
            };
            const singleContainer = this.content.querySelector('#chart-container-single');
            if (singleContainer) settings.containerHeight = singleContainer.style.height;
            localStorage.setItem(this.STORAGE_KEY_CONFIG, JSON.stringify(settings));
        } catch (e) { console.warn(e); }
    }

    loadSettings() {
        const views = localStorage.getItem(this.STORAGE_KEY_VIEWS);
        if (views) { try { this.savedViews = JSON.parse(views); } catch (e) { } }
        this.renderSavedViewsUI();

        const stored = localStorage.getItem(this.STORAGE_KEY_CONFIG);
        if (!stored) return;
        try {
            const settings = JSON.parse(stored);

            // FIX: In Card Mode (this._config is set), do not load settings from localStorage
            // as they overwrite the YAML configuration.
            if (this._config) {
                if (settings.containerHeight) this.savedContainerHeight = settings.containerHeight;
                return;
            }

            if (settings.sensors) {
                // Deduplicate logic for loaded settings
                const uniqueSensors = [];
                const seenIds = new Set();
                (settings.sensors || []).forEach(s => {
                    if (!s) return;
                    if (!s.isCard && s.entityId) {
                        if (!seenIds.has(s.entityId)) {
                            seenIds.add(s.entityId);
                            uniqueSensors.push(s);
                        }
                    } else {
                        uniqueSensors.push(s);
                    }
                });
                this.selectedSensors = uniqueSensors;
                this.renderSensorListUI();
            }
            if (settings.chartType) this.content.querySelector('#chart-type').value = settings.chartType;
            if (settings.timeSelect) this.content.querySelector('#time-select').value = settings.timeSelect;
            if (settings.dateStart) this.content.querySelector('#date-start').value = settings.dateStart;
            if (settings.dateEnd) this.content.querySelector('#date-end').value = settings.dateEnd;
            if (settings.timeMode) this.switchTimeMode(settings.timeMode);
            if (settings.fillArea !== undefined) { this.fillArea = settings.fillArea; this.content.querySelector('#fill-switch').checked = settings.fillArea; }
            if (settings.layoutMode) { this.layoutMode = settings.layoutMode; this.content.querySelector('#layout-select').value = settings.layoutMode; }
            else if (settings.splitCharts !== undefined) { this.layoutMode = settings.splitCharts ? 'split' : 'combined'; this.content.querySelector('#layout-select').value = this.layoutMode; }
            if (settings.gridColumns) { this.gridColumns = settings.gridColumns; this.content.querySelector('#grid-slider').value = settings.gridColumns; this.content.querySelector('#grid-value-display').textContent = settings.gridColumns; }
            if (settings.stackedBars !== undefined) { this.stackedBars = settings.stackedBars; this.content.querySelector('#stacked-switch').checked = settings.stackedBars; }
            if (settings.showStats !== undefined) { this.showStats = settings.showStats; this.content.querySelector('#stats-switch').checked = settings.showStats; }
            if (settings.showDonutSidebar !== undefined) { this.showDonutSidebar = settings.showDonutSidebar; this.content.querySelector('#donut-switch').checked = settings.showDonutSidebar; }
            if (settings.zoomLevel) {
                this.zoomLevel = settings.zoomLevel;
                this.content.querySelector('#zoom-slider').value = this.zoomLevel;
                this.content.querySelector('#zoom-value-display').textContent = Math.round(this.zoomLevel * 100) + '%';
            }
            this.thresholds = this._migrateThresholds(settings);
            this.renderRefLinesUI();
            if (settings.autoScale !== undefined) {
                this.autoScale = settings.autoScale;
                this.content.querySelector('#autoscale-switch').checked = settings.autoScale;
            }
            if (settings.yMin !== undefined && settings.yMin !== null && settings.yMin !== '') {
                this.yMin = Number(settings.yMin);
                const el = this.content.querySelector('#y-min-input');
                if (el) el.value = this.yMin;
            }
            if (settings.yMax !== undefined && settings.yMax !== null && settings.yMax !== '') {
                this.yMax = Number(settings.yMax);
                const el = this.content.querySelector('#y-max-input');
                if (el) el.value = this.yMax;
            }
            this.chartTension = settings.chartTension !== undefined ? settings.chartTension : 4;

            if (settings.hideAxislabels !== undefined) { this.hideAxislabels = settings.hideAxislabels; this.content.querySelector('#hide-axis-switch').checked = settings.hideAxislabels; }
            if (settings.hideGrid !== undefined) { this.hideGrid = settings.hideGrid; this.content.querySelector('#hide-grid-switch').checked = settings.hideGrid; }
            if (settings.hideLegend !== undefined) {
                this.hideLegend = settings.hideLegend;
                const el = this.content.querySelector('#hide-legend-switch');
                if (el) el.checked = settings.hideLegend;
            }
            if (settings.hideMonoBtn !== undefined) this.hideMonoBtn = settings.hideMonoBtn;
            if (settings.dateFormat) {
                this.dateFormat = settings.dateFormat;
                const dfSel = this.content.querySelector('#date-format-select');
                if (dfSel) dfSel.value = settings.dateFormat;
            }
            if (settings.showPeaks !== undefined) { this.showPeaks = settings.showPeaks; const el = this.content.querySelector('#peaks-switch'); if (el) el.checked = settings.showPeaks; }
            if (settings.showNowLine !== undefined) { this.showNowLine = settings.showNowLine; const el = this.content.querySelector('#nowline-switch'); if (el) el.checked = settings.showNowLine; }
            if (settings.showDayNight !== undefined) { this.showDayNight = settings.showDayNight; const el = this.content.querySelector('#daynight-switch'); if (el) el.checked = settings.showDayNight; }
            if (settings.sidebarCollapsed !== undefined) {
                this.sidebarCollapsed = settings.sidebarCollapsed;
                this._applySidebarState();
            }

            this.updateSliderVisibility();
            this.savedContainerHeight = settings.containerHeight;
        } catch (e) { localStorage.removeItem(this.STORAGE_KEY_CONFIG); }
    }

    switchTimeMode(mode) {
        this.timeMode = mode;
        const rel = this.content.querySelector('#container-relative');
        const fix = this.content.querySelector('#container-fixed');
        const bRel = this.content.querySelector('#btn-mode-relative');
        const bFix = this.content.querySelector('#btn-mode-fixed');
        if (mode === 'relative') { rel.style.display = 'block'; fix.classList.remove('visible'); bRel.classList.add('active'); bFix.classList.remove('active'); bFix.classList.remove('active'); }
        else { rel.style.display = 'none'; fix.classList.add('visible'); bRel.classList.remove('active'); bFix.classList.add('active'); }
    }

    async addSensor() {
        const input = this.content.querySelector('#sensor-input');
        const entityId = input.value.trim();
        const color = this.content.querySelector('#color-input').value;
        if (!entityId) return;
        if (this.selectedSensors.some(s => s.entityId === entityId)) { alert(t('sensorAlreadyInList')); return; }
        this.selectedSensors.push({ entityId, color });
        input.value = '';
        this.content.querySelector('#color-input').value = paletteColorAt(this.selectedSensors.length);
        this.renderSensorListUI();
        if (!this._config) this.saveSettings();
        if (this._globalStartTime && this._globalEndTime) {
            const loader = this.content.querySelector('#loader');
            if (loader) loader.style.display = 'block';
            try {
                const newData = await this.fetchDataSmart(entityId, this._globalStartTime, this._globalEndTime);
                this._sensorDataCache.push({ data: newData, startTime: this._globalStartTime, endTime: this._globalEndTime });
                this.updateChartFromCache();
            } catch (e) { console.error(e); this.loadHistory(); } finally { if (loader) loader.style.display = 'none'; }
        } else { this.loadHistory(); }
    }

    async importCustomCard() {
        const input = this.content.querySelector('#card-import-area');
        const val = input.value.trim();
        if (!val) return;

        let config;
        try {
            if (window.jsyaml) { config = window.jsyaml.load(val); } else { config = JSON.parse(val); }
        } catch (e) { alert(t('error') + ": YAML/JSON invalid"); return; }

        if (!config || !config.type) { alert(t('error') + ": Missing 'type'"); return; }
        const name = config.title || config.type;

        this.selectedSensors.push({ entityId: name, isCard: true, cardConfig: config, color: '#ffffff' });
        input.value = '';
        this.content.querySelector('#import-card-modal').style.display = 'none';
        this.renderSensorListUI();
        if (!this._config) this.saveSettings();
        this.updateChartFromCache();
    }

    clearAllSensors() {
        if (this.selectedSensors.length === 0) return;
        if (!confirm(t('clearAllConfirm'))) return;
        this.selectedSensors = [];
        this._sensorDataCache = [];
        this.renderSensorListUI();
        if (!this._config) this.saveSettings();
        this.destroyAllCharts();
        this.content.querySelector('#main-content-area').innerHTML = '';
    }

    removeSensor(index) {
        this.selectedSensors.splice(index, 1);
        this.renderSensorListUI();
        if (!this._config) this.saveSettings();
        this.loadHistory();
    }

    reorderSensors(fromIndex, toIndex) {
        const element = this.selectedSensors.splice(fromIndex, 1)[0];
        this.selectedSensors.splice(toIndex, 0, element);
        this.saveSettings();
        this.renderSensorListUI();
        this.loadHistory();
    }

    updateSensorColor(index, newColor) {
        if (this.selectedSensors[index]) {
            this.selectedSensors[index].color = newColor;
            if (!this._config) this.saveSettings();
            if (this._sensorDataCache.length > 0) this.updateChartFromCache();
        }
    }

    // --- NEW: Rename Sensor Function ---
    renameSensor(index) {
        const currentName = this.selectedSensors[index].alias || (this.selectedSensors[index].isCard ? (this.selectedSensors[index].entityId || "Custom Card") : cleanName(this.selectedSensors[index].entityId));
        const newName = prompt(t('renameSensorPrompt'), currentName);

        // Check if user pressed Cancel (newName is null)
        if (newName !== null) {
            this.selectedSensors[index].alias = newName.trim();
            // If empty, remove the alias to revert to default
            if (this.selectedSensors[index].alias === "") delete this.selectedSensors[index].alias;

            if (!this._config) this.saveSettings();
            this.renderSensorListUI();
            if (this._sensorDataCache.length > 0) this.updateChartFromCache();
        }
    }

    renderSensorListUI() {
        const container = this.content.querySelector('#sensor-list-container');
        if (this.selectedSensors.length === 0) { container.innerHTML = `<div style="color:var(--secondary-text-color);font-size:12px;text-align:center;padding:10px;">${t('listEmpty')}</div>`; return; }
        container.innerHTML = '';

        this.selectedSensors.forEach((sensor, index) => {
            const item = document.createElement('div');
            item.className = 'sensor-item';
            if (sensor.isCard) item.classList.add('is-card');
            item.draggable = true;
            item.dataset.index = index;

            const colorInput = document.createElement('input');
            colorInput.type = 'color';
            colorInput.value = sensor.color;
            colorInput.className = 'sensor-list-color-picker';
            if (sensor.isCard) colorInput.style.visibility = 'hidden';
            else {
                colorInput.title = t('selectColor');
                colorInput.addEventListener('change', (e) => this.updateSensorColor(index, e.target.value));
                colorInput.addEventListener('click', (e) => e.stopPropagation());
                colorInput.addEventListener('mousedown', (e) => e.stopPropagation());
            }

            const nameDiv = document.createElement('div');
            nameDiv.className = 'sensor-name';

            // --- UPDATED: Clickable name logic ---
            if (sensor.isCard) {
                nameDiv.textContent = "🎴 " + (sensor.alias || sensor.entityId || "Custom Card");
            } else {
                nameDiv.title = t('clickToRename') + sensor.entityId;
                nameDiv.textContent = sensor.alias || cleanName(sensor.entityId);
            }

            // Add Click Listener for Renaming
            nameDiv.addEventListener('click', (e) => {
                e.stopPropagation();
                this.renameSensor(index);
            });

            const removeBtn = document.createElement('div');
            removeBtn.className = 'remove-sensor';
            removeBtn.textContent = '✕';
            removeBtn.addEventListener('click', (e) => { e.stopPropagation(); this.removeSensor(index); });
            removeBtn.addEventListener('mousedown', (e) => e.stopPropagation());

            item.appendChild(colorInput);
            item.appendChild(nameDiv);
            item.appendChild(removeBtn);

            item.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', index); e.dataTransfer.effectAllowed = 'move'; item.classList.add('dragging'); });
            item.addEventListener('dragend', () => { item.classList.remove('dragging'); container.querySelectorAll('.sensor-item').forEach(el => el.classList.remove('drag-over')); });
            item.addEventListener('dragover', (e) => { e.preventDefault(); item.classList.add('drag-over'); e.dataTransfer.dropEffect = 'move'; });
            item.addEventListener('dragleave', () => { item.classList.remove('drag-over'); });
            item.addEventListener('drop', (e) => { e.preventDefault(); item.classList.remove('drag-over'); const fromIndex = parseInt(e.dataTransfer.getData('text/plain')); const toIndex = index; if (fromIndex !== toIndex && !isNaN(fromIndex)) { this.reorderSensors(fromIndex, toIndex); } });

            container.appendChild(item);
        });
    }

    resetZoomAll() {
        this.loadHistory();
        this.content.querySelector('#reset-zoom-btn').style.display = 'none';
    }
}

if (!customElements.get('detailed-charts-panel')) {
    customElements.define('detailed-charts-panel', DetailedChartsPanel);
}

// --- REGISTER CARD IN LOVELACE PICKER ---
window.customCards = window.customCards || [];
window.customCards.push({
    type: "detailed-charts-panel",
    name: "Detailed Charts Panel",
    description: "Detaillierte Analyse-Charts mit Editor.",
    preview: true
});
