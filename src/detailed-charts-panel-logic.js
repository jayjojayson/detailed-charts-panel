/* detailed-charts-panel-logic.js */
console.log(
    "%c📉 DetailedChartsPanelLogic: v_2.7 ready",
    "background: #5596c5; color: #000; padding: 2px 6px; border-radius: 4px; font-weight: bold;"
);

import {
    cleanName,
    hexToRgba,
    calculateEnergySum,
    isCumulativeSensor,
    processData,
    createStatsCard,
    getSplitCardHTML,
    getSplitStatsHTML,
    getCombinedChartHTML,
    getCombinedDoughnutHTML,
    getSideBySideHTML
} from './detailed-charts-panel-function.js';
import { t } from './detailed-charts-panel-langs.js';

// Static Imports for Bundling
import './chart.umd.min.js';
import './hammer.min.js';
import './chartjs-plugin-zoom.min.js';

// Register essentials
// window.Chart and window.Hammer are set by the imported scripts


export class DetailedChartsLogic extends HTMLElement {
    constructor() {
        super();
        this.selectedSensors = [];
        this.savedViews = [];
        this.sharedViews = [];
        this._sensorDataCache = [];
        this._globalStartTime = null;
        this._globalEndTime = null;
        this.libsLoaded = false;
        this._allSensors = [];
        this._dataLoadedInit = false;

        this.chartInstances = [];
        this.helpers = null;

        // Settings Defaults
        this.fillArea = false;
        this.layoutMode = 'combined';
        this.gridColumns = 1;
        this.stackedBars = false;
        this.showStats = true;
        this.showDonutSidebar = false;
        this.zoomLevel = 1.0;
        this.monochromeMode = false;
        this.sidebarCollapsed = false;
        this.thresholds = [];
        this.autoScale = false;
        this.chartTension = 4;

        this.hideAxislabels = false;
        this.hideGrid = false;
        this.hideLegend = false;
        this.hideMonoBtn = false;
        this.dateFormat = 'dmy';
        this.showPeaks = false;
        this.showNowLine = false;
        this.showDayNight = false;
    }

    _isCumulative(entityId, unit) {
        const sc = this._hass?.states?.[entityId]?.attributes?.state_class;
        return isCumulativeSensor(unit, sc);
    }

    _precisionFor(entityId) {
        // Resolve the configured display precision: entity registry first (UI setting),
        // then state attributes, then the integration's suggestion; fall back to 2.
        if (!entityId) return 2;
        const reg = this._hass?.entities?.[entityId];
        if (reg) {
            if (reg.display_precision !== undefined && reg.display_precision !== null) return reg.display_precision;
            const op = reg.options?.sensor?.display_precision;
            if (op !== undefined && op !== null) return op;
        }
        const attrs = this._hass?.states?.[entityId]?.attributes;
        if (attrs) {
            if (attrs.display_precision !== undefined && attrs.display_precision !== null) return attrs.display_precision;
            if (attrs.suggested_display_precision !== undefined && attrs.suggested_display_precision !== null) return attrs.suggested_display_precision;
        }
        return 2;
    }

    // ... (existing imports)

    loadDependencies() {
        // Libraries are now bundled, so we just declare them ready.
        // We still need to load helpers if available.
        const p4 = (async () => {
            if (window.loadCardHelpers) {
                this.helpers = await window.loadCardHelpers();
            }
        })();

        // Load Shared Views (User Config vs Default)
        const p5 = (async () => {


            try {
                // Try loading user-defined views from root www folder
                // This remains dynamic as it's a user configuration file external to the bundle
                const module = await import('/local/detailed-charts-views.js');
                if (module && module.sharedViews) this.sharedViews = module.sharedViews;
            } catch (e) {
                // Ignore failure to load external user config
            }
            if (this.renderSavedViewsUI) this.renderSavedViewsUI();
        })();

        Promise.all([p4, p5])
            .then(() => {
                console.log(
                    "%c📉 DetailedChartsPanel-Libs ready",
                    "background: #5596c5; color: #000; padding: 2px 6px; border-radius: 4px; font-weight: bold;"
                );
                this.libsLoaded = true;
                if (this._config) {
                    this.loadHistory();
                } else if (this.selectedSensors.length > 0) {
                    this.loadHistory();
                }
            })
            .catch(err => { console.error(err); this.showError(t('error') + ": Libs loading failed"); });
    }

    showError(text) {
        const e = this.content.querySelector('#error-msg');
        if (e) { e.innerHTML = text; e.style.display = 'block'; }
        const l = this.content.querySelector('#loader');
        if (l) l.style.display = 'none';
    }

    /* --- DATA LOADING --- */

    async fetchDataSmart(entityId, startTime, endTime) {
        const durationHours = (endTime - startTime) / (1000 * 60 * 60);
        if (durationHours > 48) {
            try {
                const result = await this._hass.callWS({
                    type: 'recorder/statistics_during_period',
                    start_time: startTime.toISOString(),
                    end_time: endTime.toISOString(),
                    statistic_ids: [entityId],
                    period: 'hour'
                });
                if (result && result[entityId] && result[entityId].length > 0) {
                    return result[entityId].map(pt => {
                        let val = pt.mean;
                        if (val === null || val === undefined) val = pt.state;
                        if (val === null || val === undefined) val = pt.sum;
                        return { state: val || 0, last_changed: new Date(pt.start).getTime() };
                    });
                }
            } catch (e) { console.warn("LTS WS failed", e); }
        }
        const data = await this._hass.callApi('GET', `history/period/${startTime.toISOString()}?end_time=${endTime.toISOString()}&filter_entity_id=${entityId}&minimal_response`);
        return (data && data.length > 0) ? data[0] : [];
    }

    async loadSpecificRange(newStart, newEnd) {
        const loader = this.content.querySelector('#loader');
        if (loader) loader.style.display = 'block';
        try {
            const realSensors = this.selectedSensors.filter(s => !s.isCard);
            const promises = realSensors.map(s => this.fetchDataSmart(s.entityId, newStart, newEnd));
            const results = await Promise.all(promises);

            this._sensorDataCache = results.map(res => ({ data: res, startTime: newStart, endTime: newEnd }));
            this._globalStartTime = newStart;
            this._globalEndTime = newEnd;
            if (this.chartInstances.length > 0) {
                this.updateAllChartsWithNewData(results, newStart, newEnd);
            } else {
                setTimeout(() => this.updateChartFromCache(), 50);
            }

        } catch (e) { console.error(e); } finally { if (loader) loader.style.display = 'none'; }
    }

    updateAllChartsWithNewData(newResults, startTime, endTime) {
        const realSensors = this.selectedSensors.filter(s => !s.isCard);

        // 1. Update Chart Instances (Data + X-Axis)
        this.chartInstances.forEach(chart => {
            if (chart.config.type === 'doughnut') return;

            // X-Achse setzen
            if (chart.options.scales.x) {
                chart.options.scales.x.min = startTime.getTime();
                chart.options.scales.x.max = endTime.getTime();
            }

            // Datasets aktualisieren
            chart.data.datasets.forEach(ds => {
                if (ds._entityId) {
                    const sensorIdx = realSensors.findIndex(s => s.entityId === ds._entityId);
                    if (sensorIdx >= 0 && newResults[sensorIdx]) {
                        const conf = realSensors[sensorIdx];
                        const unit = this._hass.states[conf.entityId]?.attributes?.unit_of_measurement || '';

                        let type = ds.type || chart.config.type;
                        if (type === 'stepped') type = 'line';

                        let points = processData(newResults[sensorIdx], type, unit, startTime, this._isCumulative(conf.entityId, unit));

                        if (this.autoScale) {
                            if (unit === 'W' || unit === 'kW') points = points.map(p => ({ x: p.x, y: p.y / 1000 }));
                            if (unit === 'Wh' || unit === 'kWh') points = points.map(p => ({ x: p.x, y: p.y / 1000 }));
                        }
                        ds.data = points;
                    }
                }
            });
            chart.update('none'); // 'none' Mode verhindert Animation = weniger Flackern
        });

        // 2. Statistiken neu berechnen (Footer & Top)
        const calcStats = (points, unit, type, precision = 2) => {
            const values = points.map(p => p.y);
            const min = values.length ? Math.min(...values) : 0;
            const max = values.length ? Math.max(...values) : 0;
            const sum = values.reduce((a, b) => a + b, 0);
            const avg = values.length ? (sum / values.length) : 0;
            const curr = values.length ? values[values.length - 1] : 0;

            let displayVal = curr.toFixed(precision);

            let displayLabel = t('current');
            if (this._isCumulative(conf.entityId, unit)) {
                const hours = (endTime - startTime) / 3600000;
                const isAggregated = (type === 'bar' && hours > 24);
                displayVal = calculateEnergySum(values, isAggregated).toFixed(precision);
                displayLabel = t('sum');
            }
            return { min: min.toFixed(precision), max: max.toFixed(precision), avg: avg.toFixed(precision), curr: displayVal, label: displayLabel };
        };

        // Update Split Cards (Footer)
        this.selectedSensors.forEach((s, idx) => {
            if (s.isCard) return;
            const card = this.shadowRoot.querySelector(`.split-chart-card[data-index="${idx}"]`);
            if (card) {
                const footer = card.querySelector('.split-stats-box');
                if (footer) {
                    if (!this.showStats) { footer.style.display = 'none'; return; }
                    footer.style.display = '';
                    const sensorIdx = realSensors.findIndex(rs => rs.entityId === s.entityId);
                    if (sensorIdx >= 0 && newResults[sensorIdx]) {
                        const unit = this._hass.states[s.entityId]?.attributes?.unit_of_measurement || '';
                        let type = s.typeOverride || this.content.querySelector('#chart-type').value;
                        if (type === 'stackedArea') type = 'line';
                        if (this.stackedBars) type = 'bar';

                        let points = processData(newResults[sensorIdx], type, unit, startTime, this._isCumulative(s.entityId, unit));
                        if (this.autoScale) {
                            if (unit === 'W' || unit === 'kW') points = points.map(p => ({ x: p.x, y: p.y / 1000 }));
                            if (unit === 'Wh' || unit === 'kWh') points = points.map(p => ({ x: p.x, y: p.y / 1000 }));
                        }
                        const precision = this._precisionFor(s.entityId);
                        const stats = calcStats(points, unit, type, precision);
                        footer.innerHTML = getSplitStatsHTML(stats.label, s.color, stats.curr, unit, stats.min, stats.avg, stats.max);
                    }
                }
            }
        });

        // Update Combined Stats (Top Wrapper)
        const statsWrapper = this.shadowRoot.querySelector('#stats-wrapper') || this.shadowRoot.querySelector('#stats-wrapper-top');
        if (statsWrapper && statsWrapper.style.display !== 'none') {
            let html = '';
            realSensors.forEach((s, idx) => {
                if (s.hidden) return;
                const unit = this._hass.states[s.entityId]?.attributes?.unit_of_measurement || '';
                let type = this.content.querySelector('#chart-type').value;
                if (type === 'stackedArea') type = 'line';
                if (this.stackedBars) type = 'bar';

                let points = processData(newResults[idx], type, unit, startTime, this._isCumulative(s.entityId, unit));
                if (this.autoScale) {
                    if (unit === 'W' || unit === 'kW') points = points.map(p => ({ x: p.x, y: p.y / 1000 }));
                    if (unit === 'Wh' || unit === 'kWh') points = points.map(p => ({ x: p.x, y: p.y / 1000 }));
                }
                const precision = this._precisionFor(s.entityId);
                const stats = calcStats(points, unit, type, precision);
                html += createStatsCard(s, stats.min, stats.avg, stats.max, stats.curr, unit, stats.label);
            });
            statsWrapper.innerHTML = html;
        }
    }

    _updateVisibleStats(chart, sensorIndex) {
        if (!this.showStats) return;
        const xMin = chart.scales.x.min;
        const xMax = chart.scales.x.max;

        if (sensorIndex !== null && sensorIndex !== undefined) {
            const conf = this.selectedSensors[sensorIndex];
            if (!conf || conf.isCard) return;
            const dataset = chart.data.datasets.find(d => d._entityId === conf.entityId);
            if (!dataset) return;

            const visiblePoints = dataset.data.filter(p => p.x >= xMin && p.x <= xMax);
            if (!visiblePoints.length) return;

            let unit = this._hass.states[conf.entityId]?.attributes?.unit_of_measurement || '';
            if (this.autoScale) {
                if (unit === 'W') unit = 'kW';
                else if (unit === 'Wh') unit = 'kWh';
            }
            const precision = this._precisionFor(conf.entityId);
            const values = visiblePoints.map(p => p.y);
            const min = Math.min(...values);
            const max = Math.max(...values);
            const avg = values.reduce((a, b) => a + b, 0) / values.length;
            const curr = values[values.length - 1];

            let displayVal = curr.toFixed(precision);
            let displayLabel = t('current');
            if (this._isCumulative(conf.entityId, unit)) {
                const hours = (xMax - xMin) / 3600000;
                let type = conf.typeOverride || this.content.querySelector('#chart-type').value;
                if (type === 'stackedArea') type = 'line';
                if (this.stackedBars) type = 'bar';
                const isAggregated = (type === 'bar' && hours > 24);
                displayVal = calculateEnergySum(values, isAggregated).toFixed(precision);
                displayLabel = t('sum');
            }

            const card = this.shadowRoot.querySelector(`.split-chart-card[data-index="${sensorIndex}"]`);
            if (card) {
                const footer = card.querySelector('.split-stats-box');
                if (footer) {
                    footer.innerHTML = getSplitStatsHTML(displayLabel, conf.color, displayVal, unit, min.toFixed(precision), avg.toFixed(precision), max.toFixed(precision));
                }
            }
        } else {
            const statsWrapper = this.shadowRoot.querySelector('#stats-wrapper') || this.shadowRoot.querySelector('#stats-wrapper-top');
            if (!statsWrapper || statsWrapper.style.display === 'none') return;

            let html = '';
            chart.data.datasets.forEach(ds => {
                if (!ds._entityId) return;
                if (ds.hidden) return;
                const conf = this.selectedSensors.find(s => s.entityId === ds._entityId);
                if (!conf || conf.hidden) return;

                const visiblePoints = ds.data.filter(p => p.x >= xMin && p.x <= xMax);
                if (!visiblePoints.length) return;

                let unit = this._hass.states[conf.entityId]?.attributes?.unit_of_measurement || '';
                if (this.autoScale) {
                    if (unit === 'W') unit = 'kW';
                    else if (unit === 'Wh') unit = 'kWh';
                }
                const precision = this._precisionFor(conf.entityId);
                const values = visiblePoints.map(p => p.y);
                const min = Math.min(...values);
                const max = Math.max(...values);
                const avg = values.reduce((a, b) => a + b, 0) / values.length;
                const curr = values[values.length - 1];

                let displayVal = curr.toFixed(precision);
                let displayLabel = t('current');
                if (this._isCumulative(conf.entityId, unit)) {
                    const hours = (xMax - xMin) / 3600000;
                    let type = this.content.querySelector('#chart-type').value;
                    if (type === 'stackedArea') type = 'line';
                    if (this.stackedBars) type = 'bar';
                    const isAggregated = (type === 'bar' && hours > 24);
                    displayVal = calculateEnergySum(values, isAggregated).toFixed(precision);
                    displayLabel = t('sum');
                }
                html += createStatsCard(conf, min.toFixed(precision), avg.toFixed(precision), max.toFixed(precision), displayVal, unit, displayLabel);
            });
            if (html) statsWrapper.innerHTML = html;
        }
    }

    async loadSingleSensorHistory(index, startTime, endTime) {
        // --- INDEPENDENT SCROLL LOGIC ---
        // Lädt Daten nur für EINEN Chart und aktualisiert nur diesen,
        // ohne die anderen oder das Hauptdiagramm zu beeinflussen.

        const loader = this.content.querySelector('#loader');
        if (loader) loader.style.display = 'block';

        try {
            const sensorConfig = this.selectedSensors[index];
            if (!sensorConfig || sensorConfig.isCard) return;

            // 1. Fetch new data for this specific sensor
            const newData = await this.fetchDataSmart(sensorConfig.entityId, startTime, endTime);

            // 2. Update Cache for this sensor only
            let cacheIndex = 0;
            for (let i = 0; i < index; i++) {
                if (!this.selectedSensors[i].isCard) cacheIndex++;
            }

            if (this._sensorDataCache[cacheIndex]) {
                this._sensorDataCache[cacheIndex] = {
                    data: newData,
                    startTime: startTime,
                    endTime: endTime
                };
            }

            // 3. Update the specific Chart Instance directly
            const canvasId = `split-canvas-${index}`;
            const chart = this.chartInstances.find(c => c.canvas.id === canvasId);

            if (chart) {
                const unit = this._hass.states[sensorConfig.entityId]?.attributes?.unit_of_measurement || '';
                let currentType = sensorConfig.typeOverride || this.content.querySelector('#chart-type').value;
                if (currentType === 'stackedArea') currentType = 'line';
                if (this.stackedBars) currentType = 'bar';

                let points = processData(newData, currentType, unit, startTime, this._isCumulative(sensorConfig.entityId, unit));

                // AutoScale logic locally applied
                if (this.autoScale) {
                    if (unit === 'W' || unit === 'kW') points = points.map(p => ({ x: p.x, y: p.y / 1000 }));
                    if (unit === 'Wh' || unit === 'kWh') points = points.map(p => ({ x: p.x, y: p.y / 1000 }));
                }

                // Update Chart Data (Smart Dataset finding)
                const mainDsIndex = chart.data.datasets.findIndex(d => d._entityId === sensorConfig.entityId);
                if (mainDsIndex >= 0) chart.data.datasets[mainDsIndex].data = points;

                // Update Previous Year Data if active
                if (this.compareYear) {
                    let prevPoints = [];
                    // Fetch if needed (only if we have a range change, which we do here)
                    const stPrev = new Date(startTime.getTime() - 365 * 24 * 60 * 60 * 1000);
                    const etPrev = new Date(endTime.getTime() - 365 * 24 * 60 * 60 * 1000);
                    // We need to fetch it because this function loads NEW data for a NEW range
                    // But we can't use await inside this sync block easily? 
                    // Wait, loadSingleSensorHistory IS async. Good.
                    const prevData = await this.fetchDataSmart(sensorConfig.entityId, stPrev, etPrev);

                    // Update Cache 
                    if (this._sensorDataCache[cacheIndex]) {
                        this._sensorDataCache[cacheIndex].prevData = prevData;
                    }

                    // Process
                    const shiftTime = 365 * 24 * 60 * 60 * 1000;
                    const rawPrevPoints = processData(prevData, currentType, unit, new Date(startTime.getTime() - shiftTime), this._isCumulative(sensorConfig.entityId, unit));
                    prevPoints = rawPrevPoints.map(p => ({ x: p.x + shiftTime, y: p.y }));

                    if (this.autoScale) {
                        if (unit === 'W' || unit === 'kW') prevPoints = prevPoints.map(p => ({ x: p.x, y: p.y / 1000 }));
                        if (unit === 'Wh' || unit === 'kWh') prevPoints = prevPoints.map(p => ({ x: p.x, y: p.y / 1000 }));
                    }

                    const prevDsIndex = chart.data.datasets.findIndex(d => d.label === t('compareYear'));
                    if (prevDsIndex >= 0) {
                        chart.data.datasets[prevDsIndex].data = prevPoints;
                    }
                }

                chart.options.scales.x.min = startTime.getTime();
                chart.options.scales.x.max = endTime.getTime();
                chart.update('none'); // Prevent flicker

                // 4. Update Stats Footer locally
                const values = points.map(p => p.y);
                const min = values.length ? Math.min(...values) : 0;
                const max = values.length ? Math.max(...values) : 0;
                const sum = values.reduce((a, b) => a + b, 0);
                const avg = values.length ? (sum / values.length) : 0;
                const curr = values.length ? values[values.length - 1] : 0;

                const card = this.shadowRoot.querySelector(`.split-chart-card[data-index="${index}"]`);
                if (card) {
                    const footer = card.querySelector(`#footer-${index} .split-stats-box`);
                    if (footer && this.showStats) {
                        const precision = this._precisionFor(sensorConfig.entityId);
                        let displayVal = curr.toFixed(precision);

                        let displayLabel = t('current');
                        if (this._isCumulative(sensorConfig.entityId, unit)) {
                            const hours = (endTime - startTime) / 3600000;
                            const isAggregated = (currentType === 'bar' && hours > 24);
                            displayVal = calculateEnergySum(values, isAggregated).toFixed(precision);
                            displayLabel = t('sum');
                        }

                        footer.innerHTML = getSplitStatsHTML(
                            displayLabel,
                            sensorConfig.color,
                            displayVal,
                            unit,
                            min.toFixed(precision),
                            avg.toFixed(precision),
                            max.toFixed(precision)
                        );
                    }
                }
            }

        } catch (e) {
            console.error("Single chart update failed", e);
        } finally {
            if (loader) loader.style.display = 'none';
        }
    }

    async loadHistory() {
        const chartType = this.content.querySelector('#chart-type').value;
        const loader = this.content.querySelector('#loader');
        const errDiv = this.content.querySelector('#error-msg');
        if (errDiv) errDiv.style.display = 'none';
        if (!this.libsLoaded || this.selectedSensors.length === 0) return;
        let st, et, dh;
        const now = new Date();
        if (this.timeMode === 'relative') { dh = parseInt(this.content.querySelector('#time-select').value); et = now; st = new Date(now.getTime() - (dh * 3600000)); }
        else { st = new Date(this.content.querySelector('#date-start').value); et = new Date(this.content.querySelector('#date-end').value); dh = (et - st) / 3600000; if (st >= et) { this.showError(t('endDateAfterStart')); return; } }
        if (chartType === 'scatter' && dh > 24.1) { this.showError(t('scatterOnly24h')); return; }
        this._globalStartTime = st;
        this._globalEndTime = et;
        if (loader) loader.style.display = 'block';
        this._sensorDataCache = [];
        try {
            const realSensors = this.selectedSensors.filter(s => !s.isCard);
            const promises = realSensors.map(s => this.fetchDataSmart(s.entityId, st, et));

            // Previous Year Fetching
            let prevPromises = [];
            if (this.compareYear) {
                // Shift dates back by 365 days
                const stPrev = new Date(st.getTime() - 365 * 24 * 60 * 60 * 1000);
                const etPrev = new Date(et.getTime() - 365 * 24 * 60 * 60 * 1000);
                prevPromises = realSensors.map(s => this.fetchDataSmart(s.entityId, stPrev, etPrev));
            }

            const results = await Promise.all(promises);
            const prevResults = this.compareYear ? await Promise.all(prevPromises) : [];

            results.forEach((res, i) => {
                this._sensorDataCache.push({
                    data: res,
                    prevData: prevResults[i] || [], // Store previous year data
                    startTime: st,
                    endTime: et
                });
            });
            this.updateChartFromCache();
        } catch (e) { console.error(e); this.showError(t('criticalError') + e.message); } finally { if (loader) loader.style.display = 'none'; }
    }

    updateChartFromCache() {
        const chartType = this.content.querySelector('#chart-type').value;
        let st, et;
        if (this._sensorDataCache.length > 0) {
            st = this._sensorDataCache[0].startTime;
            et = this._sensorDataCache[0].endTime;
        } else {
            et = new Date();
            st = new Date(et.getTime() - 24 * 3600 * 1000);
            this._globalStartTime = st;
            this._globalEndTime = et;
        }
        this.renderDispatcher(this._sensorDataCache, chartType, st, et);
    }

    /* --- CHART RENDERING LOGIC --- */

    renderDispatcher(cacheData, globalChartType, startTime, endTime) {
        this.destroyAllCharts();
        const mainArea = this.content.querySelector('#main-content-area');
        mainArea.innerHTML = '';
        mainArea.className = 'main-content';
        mainArea.style.display = 'block';
        mainArea.style.gridTemplateColumns = '';
        mainArea.style.gap = '';
        mainArea.style.alignContent = '';

        const scaler = document.createElement('div');
        scaler.id = 'content-scaler';
        scaler.style.transform = `scale(${this.zoomLevel})`;
        scaler.style.transformOrigin = 'top left';
        scaler.style.width = `calc(100% / ${this.zoomLevel})`;

        if (this.zoomLevel === 1.0) {
            scaler.style.transform = 'none';
            scaler.style.width = '100%';
        }
        mainArea.appendChild(scaler);

        if (this.layoutMode === 'mixed') {
            const topWrap = document.createElement('div');
            topWrap.style.marginBottom = '20px';
            scaler.appendChild(topWrap);
            this.renderCombinedView(cacheData, globalChartType, topWrap);
            const sw = topWrap.querySelector('.stats-wrapper');
            if (sw) sw.id = 'stats-wrapper-top';
            const botWrap = document.createElement('div');
            scaler.appendChild(botWrap);
            this.renderSplitView(cacheData, globalChartType, botWrap);
        } else if (this.layoutMode === 'split') { this.renderSplitView(cacheData, globalChartType, scaler); }
        else { this.renderCombinedView(cacheData, globalChartType, scaler); }
    }

    destroyAllCharts() {
        if (this.chartInstances) this.chartInstances.forEach(c => c.destroy());
        this.chartInstances = [];
    }

    renderDoughnut(cacheData, ctx, statsWrapper) {
        const legendContainer = statsWrapper ? null : (this.shadowRoot.getElementById('doughnut-legend-container') || this.content.querySelector('#doughnut-legend-container'));
        const totalContainer = statsWrapper ? null : (this.shadowRoot.getElementById('doughnut-total-container') || this.content.querySelector('#doughnut-total-container'));

        const styles = getComputedStyle(this);
        const labels = [], values = [], bgColors = [], units = [];
        let totalSum = 0;
        const st = this._globalStartTime;
        const et = this._globalEndTime;
        const hours = (et - st) / 3600000;
        const isDailyAgg = (hours > 24);

        let cacheIdx = 0;
        this.selectedSensors.forEach((conf) => {
            if (conf.isCard) return;
            const obj = cacheData[cacheIdx];
            cacheIdx++;

            if (!conf || !obj || !obj.data.length) return;
            if (conf.hidden) return;
            const unit = this._hass.states[conf.entityId]?.attributes?.unit_of_measurement || '';

            const isPercent = unit === '%' || cleanName(conf.entityId).toLowerCase().includes('soc');
            if (isPercent) return;

            const points = processData(obj.data, 'bar', unit, st, this._isCumulative(conf.entityId, unit));
            const valArray = points.map(p => p.y);
            const isEnergy = this._isCumulative(conf.entityId, unit);
            let sensorSum = 0;
            if (isEnergy) { sensorSum = calculateEnergySum(valArray, isDailyAgg); } else { sensorSum = valArray.reduce((a, b) => a + b, 0); }
            if (sensorSum > 0) {
                // --- UPDATED: Use alias ---
                labels.push(conf.alias || cleanName(conf.entityId));
                values.push(sensorSum);
                bgColors.push(conf.color);
                units.push(unit);
                totalSum += sensorSum;
            }
        });

        if (legendContainer) {
            legendContainer.innerHTML = '';
            labels.forEach((label, i) => {
                const val = values[i];
                const pct = totalSum > 0 ? ((val / totalSum) * 100).toFixed(1) : 0;
                const item = document.createElement('div');
                item.className = 'donut-legend-item';
                item.innerHTML = `
                    <div class="donut-legend-left">
                        <div class="donut-legend-color" style="background-color:${bgColors[i]}"></div>
                        <div title="${label}" style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${label}</div>
                    </div>
                    <div class="donut-legend-right">${pct}%</div>
                `;
                item.onclick = () => {
                    const meta = chart.getDatasetMeta(0);
                    const currentHidden = meta.data[i].hidden;
                    meta.data[i].hidden = !currentHidden;
                    item.classList.toggle('hidden', !currentHidden);
                    chart.update();
                };
                legendContainer.appendChild(item);
            });
        }

        if (totalContainer && units.length > 0) {
            totalContainer.textContent = `${totalSum.toFixed(2)} ${units[0]}`;
        }

        const chart = new window.Chart(ctx, {
            type: 'doughnut',
            data: { labels, datasets: [{ data: values, backgroundColor: bgColors, borderWidth: 0, hoverOffset: 10 }] },
            options: {
                responsive: true, maintainAspectRatio: false, layout: { padding: 20 },
                plugins: {
                    legend: { display: false },
                    tooltip: { backgroundColor: 'rgba(20, 20, 20, 0.95)', callbacks: { label: (c) => { const val = c.parsed; const pct = totalSum > 0 ? ((val / totalSum) * 100).toFixed(1) : 0; return `\u00A0\u00A0${c.label}: ${c.formattedValue} ${units[c.dataIndex]} (${pct}%)`; } } }
                }
            }
        });
        this.chartInstances.push(chart);
    }

    renderCombinedView(cacheData, chartType, container) {
        const wrapper = document.createElement('div');
        if (chartType === 'doughnut') {
            wrapper.innerHTML = getCombinedDoughnutHTML();
        } else if (this.showDonutSidebar && (this.layoutMode === 'combined' || this.layoutMode === 'mixed')) {
            wrapper.innerHTML = getSideBySideHTML(this.showStats);
        } else {
            wrapper.innerHTML = getCombinedChartHTML(this.showStats);
        }
        wrapper.style.width = '100%';
        container.appendChild(wrapper);
        const chartContainer = wrapper.querySelector('#chart-container-single');

        if (!this.showDonutSidebar && chartType !== 'doughnut') {
            chartContainer.style.height = this.savedContainerHeight ? this.savedContainerHeight : '450px';
        } else if (this.showDonutSidebar && chartType !== 'doughnut') {
            // When donut is visible: apply saved height, otherwise match donut minimum height
            const height = this.savedContainerHeight ? this.savedContainerHeight : '450px';
            chartContainer.style.height = height;
            // Sync donut wrapper min-height with main chart height
            const donutWrapper = wrapper.querySelector('.side-donut-wrapper');
            if (donutWrapper) {
                donutWrapper.style.minHeight = height;
            }
        }

        if (chartType !== 'doughnut') { this.initResizeHandler(wrapper.querySelector('#resize-handle'), chartContainer, wrapper.querySelector('#resize-ghost')); }

        const ctx = wrapper.querySelector('#canvas-combined').getContext('2d');
        const statsWrapper = wrapper.querySelector('#stats-wrapper');

        const monoBtn = wrapper.querySelector('#toggle-mono-btn');
        if (monoBtn) {
            if (this.hideMonoBtn) {
                monoBtn.style.display = 'none';
            } else {
                monoBtn.addEventListener('click', () => this.toggleMonochrome());
                if (!this.monochromeMode) monoBtn.classList.add('active');
            }
        }

        if (chartType === 'doughnut') { this.renderDoughnut(cacheData, ctx, statsWrapper); return; }

        const datasets = [];
        let allStatsHTML = '';
        const st = this._globalStartTime || cacheData[0]?.startTime || new Date();
        const et = this._globalEndTime || cacheData[0]?.endTime || new Date();

        const isStackedArea = (chartType === 'stackedArea');
        let stackOrdinal = 0;
        const stackMemberDatasets = [];

        let hasSecondaryAxis = false;
        let cacheIdx = 0;

        this.selectedSensors.forEach((conf) => {
            if (conf.isCard) return;
            const sensorDataObj = cacheData[cacheIdx];
            cacheIdx++;

            if (!conf || !sensorDataObj || !sensorDataObj.data.length) return;
            let unit = this._hass.states[conf.entityId]?.attributes?.unit_of_measurement || '';
            const isBinary = conf.entityId.startsWith('binary_sensor.') || (this._hass.states[conf.entityId]?.attributes?.device_class === 'binary_sensor');

            const useRightAxis = (unit === '%' || cleanName(conf.entityId).toLowerCase().includes('soc'));
            if (useRightAxis) hasSecondaryAxis = true;

            let effectiveType = this.stackedBars ? 'bar' : (isStackedArea ? 'line' : chartType);
            if (useRightAxis || isBinary) effectiveType = 'line';

            let isStepped = false;
            if (effectiveType === 'stepped' || isBinary) { effectiveType = 'line'; isStepped = true; }

            let points = processData(sensorDataObj.data, effectiveType, unit, st, this._isCumulative(conf.entityId, unit));
            if (!points.length) return;

            if (this.autoScale) {
                if (unit === 'W') { points = points.map(p => ({ x: p.x, y: p.y / 1000 })); unit = 'kW'; }
                else if (unit === 'Wh') { points = points.map(p => ({ x: p.x, y: p.y / 1000 })); unit = 'kWh'; }
            }

            const precision = this._precisionFor(conf.entityId);
            const values = points.map(p => p.y);
            const min = Math.min(...values); const max = Math.max(...values);
            const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(precision);
            const curr = values[values.length - 1].toFixed(precision);
            let displayVal = curr; let displayLabel = t('current');
            if (this._isCumulative(conf.entityId, unit)) {
                const hours = (et - st) / 3600000;
                const isAggregated = (effectiveType === 'bar' && hours > 24);
                displayVal = calculateEnergySum(values, isAggregated).toFixed(precision);
                displayLabel = t('sum');
            }
            allStatsHTML += createStatsCard(conf, min.toFixed(precision), avg, max.toFixed(precision), displayVal, unit, displayLabel);

            const isStackMember = isStackedArea && !isBinary && !useRightAxis;

            let dsBgColor = conf.color;
            if (isBinary) {
                dsBgColor = hexToRgba(conf.color, 0.2);
            } else if (isStackMember) {
                dsBgColor = hexToRgba(conf.color, 0.55);
            } else if (this.fillArea && effectiveType === 'line') {
                const grad = ctx.createLinearGradient(0, 0, 0, 400);
                grad.addColorStop(0, hexToRgba(conf.color, 0.5));
                grad.addColorStop(1, hexToRgba(conf.color, 0.05));
                dsBgColor = grad;
            }

            let fillValue;
            if (isStackMember) {
                fillValue = (stackOrdinal === 0) ? 'origin' : '-1';
                stackOrdinal++;
            } else {
                fillValue = (isBinary) ? true : (this.fillArea && !this.monochromeMode);
            }

            const isHidden = conf.hidden === true;
            // --- UPDATED: Use alias and store entityId ---
            const ds = {
                label: conf.alias || cleanName(conf.entityId),
                _entityId: conf.entityId, // Store original ID for lookups
                hidden: isHidden,
                data: points,
                borderColor: conf.color,
                backgroundColor: dsBgColor,
                fill: fillValue,
                borderWidth: (isBinary) ? 1 : (effectiveType === 'bar' ? 0 : 2.5),
                categoryPercentage: 0.98,
                barPercentage: 0.98,
                pointRadius: (effectiveType === 'scatter') ? 4 : 0,
                pointHoverRadius: 6,
                pointBackgroundColor: conf.color,
                pointBorderColor: conf.color,
                tension: this.chartTension / 10,
                stepped: isStepped,
                yAxisID: isBinary ? 'y_binary' : (useRightAxis ? 'y1' : 'y'),
                type: effectiveType,
                order: isBinary ? 10 : 0,
                spanGaps: true,
                stack: isStackMember ? 'stackArea' : undefined
            };
            datasets.push(ds);
            if (isStackMember) stackMemberDatasets.push(ds);
        });

        if (isStackedArea && stackMemberDatasets.length >= 2) {
            const allX = new Set();
            stackMemberDatasets.forEach(d => d.data.forEach(p => allX.add(p.x)));
            let xs = Array.from(allX).sort((a, b) => a - b);
            const MAX_TICKS = 1500;
            if (xs.length > MAX_TICKS) {
                const step = Math.ceil(xs.length / MAX_TICKS);
                xs = xs.filter((_, i) => i % step === 0);
            }
            stackMemberDatasets.forEach(d => {
                const src = d.data;
                const resampled = new Array(xs.length);
                let i = 0;
                let last = 0;
                let started = false;
                for (let k = 0; k < xs.length; k++) {
                    const x = xs[k];
                    while (i < src.length && src[i].x <= x) {
                        last = src[i].y;
                        started = true;
                        i++;
                    }
                    resampled[k] = { x, y: started ? last : 0 };
                }
                d.data = resampled;
            });
        }

        (this.thresholds || []).forEach((ref, i) => {
            if (ref.value === undefined || ref.value === '') return;
            const val = parseFloat(ref.value);
            if (isNaN(val)) return;
            datasets.push({
                label: ref.alias || `Limit${i + 1}`,
                data: [{ x: st.getTime(), y: val }, { x: et.getTime(), y: val }],
                borderColor: ref.color || '#f44336', borderWidth: 1.5, borderDash: [10, 5],
                pointRadius: 0, fill: false, type: 'line', yAxisID: 'y', order: -1,
                _isThreshold: true
            });
        });

        if (statsWrapper) statsWrapper.innerHTML = allStatsHTML;
        const finalChartType = this.stackedBars
            ? 'bar'
            : (isStackedArea || chartType === 'stepped' ? 'line' : chartType);
        this.createChartInstance(ctx, finalChartType, datasets, st, et, true, null, this.hideLegend, hasSecondaryAxis, false, isStackedArea);

        if (this.showDonutSidebar && chartType !== 'doughnut') {
            const donutCanvas = wrapper.querySelector('#canvas-side-donut');
            if (donutCanvas) {
                const ctxDonut = donutCanvas.getContext('2d');
                this.renderDoughnut(cacheData, ctxDonut, null);
            }
        }
    }

    renderSplitView(cacheData, globalChartType, container) {
        const gridWrapper = document.createElement('div');
        gridWrapper.className = 'split-grid-wrapper';

        gridWrapper.style.setProperty('--grid-cols', this.gridColumns);

        container.appendChild(gridWrapper);
        const st = this._globalStartTime || cacheData[0]?.startTime || new Date();
        const et = this._globalEndTime || cacheData[0]?.endTime || new Date();

        let cacheIdx = 0;

        this.selectedSensors.forEach((conf, idx) => {
            const card = document.createElement('div');
            card.className = 'split-chart-card';
            card.dataset.index = idx;

            if (conf.isCard) {
                // --- UPDATED: Use alias ---
                const name = conf.alias || conf.entityId || "Custom Card";
                card.innerHTML = getSplitCardHTML(idx, '#ffffff', name, true);
                gridWrapper.appendChild(card);

                const contentContainer = card.querySelector(`#custom-card-container-${idx}`);
                if (this.helpers && conf.cardConfig) {
                    const el = this.helpers.createCardElement(conf.cardConfig);
                    if (el) {
                        if (this._hass) el.hass = this._hass;

                        el.style.width = "100%";
                        el.style.height = "100%";
                        el.style.display = "block";

                        contentContainer.appendChild(el);

                        setTimeout(() => {
                            if (el.requestUpdate) el.requestUpdate();
                            if (el.resized) el.resized();
                        }, 50);
                    }
                    else { contentContainer.innerHTML = "Fehler beim Laden der Karte."; }
                } else { contentContainer.innerHTML = "Helpers nicht geladen."; }

                const handle = card.querySelector('.drag-handle');
                handle.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', idx); e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setDragImage(card, 0, 0); card.classList.add('dragging'); });
                handle.addEventListener('dragend', () => { card.classList.remove('dragging'); this.shadowRoot.querySelectorAll('.split-chart-card').forEach(c => c.classList.remove('drag-over')); });
                card.addEventListener('dragover', (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; card.classList.add('drag-over'); });
                card.addEventListener('dragleave', () => { card.classList.remove('drag-over'); });
                card.addEventListener('drop', (e) => { e.preventDefault(); const fromIndex = parseInt(e.dataTransfer.getData('text/plain')); if (fromIndex !== idx) { this.reorderSensors(fromIndex, idx); } });
                return;
            }

            const sensorDataObj = cacheData[cacheIdx];
            cacheIdx++;
            if (!sensorDataObj || !sensorDataObj.data.length) return;

            // --- FIX: Use independent chart time if available in cache ---
            const chartSt = sensorDataObj.startTime || st;
            const chartEt = sensorDataObj.endTime || et;
            const hours = (chartEt - chartSt) / 3600000;

            // --- UPDATED: Use alias ---
            card.innerHTML = getSplitCardHTML(idx, conf.color, conf.alias || cleanName(conf.entityId), false);
            gridWrapper.appendChild(card);

            const handle = card.querySelector('.drag-handle');
            handle.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', idx); e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setDragImage(card, 0, 0); card.classList.add('dragging'); });
            handle.addEventListener('dragend', () => { card.classList.remove('dragging'); this.shadowRoot.querySelectorAll('.split-chart-card').forEach(c => c.classList.remove('drag-over')); });
            card.addEventListener('dragover', (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; card.classList.add('drag-over'); });
            card.addEventListener('dragleave', () => { card.classList.remove('drag-over'); });
            card.addEventListener('drop', (e) => { e.preventDefault(); const fromIndex = parseInt(e.dataTransfer.getData('text/plain')); if (fromIndex !== idx) { this.reorderSensors(fromIndex, idx); } });

            let currentType = conf.typeOverride || globalChartType;
            if (currentType === 'stackedArea') currentType = 'line';
            let unit = this._hass.states[conf.entityId]?.attributes?.unit_of_measurement || '';
            const isBinary = conf.entityId.startsWith('binary_sensor.') || (this._hass.states[conf.entityId]?.attributes?.device_class === 'binary_sensor');
            if (isBinary) currentType = 'line';

            let isStepped = false;
            if (currentType === 'stepped' || isBinary) { currentType = 'line'; isStepped = true; }

            let points = processData(sensorDataObj.data, currentType, unit, chartSt, this._isCumulative(conf.entityId, unit));

            // Previous Year Logic (Visuals)
            let prevPoints = [];
            if (this.compareYear && sensorDataObj.prevData && sensorDataObj.prevData.length > 0) {
                // We need to shift the X timestamps of prevData forward by 365 days to match current chart
                // NOTE: This simple shift might not account for leap years perfectly, but is usually sufficient for visuals.
                const shiftTime = 365 * 24 * 60 * 60 * 1000;
                // Process raw prev data first
                const rawPrevPoints = processData(sensorDataObj.prevData, currentType, unit, new Date(chartSt.getTime() - shiftTime), this._isCumulative(conf.entityId, unit));

                prevPoints = rawPrevPoints.map(p => ({
                    x: p.x + shiftTime,
                    y: p.y
                }));

                if (this.autoScale) {
                    if (unit === 'W' || unit === 'kW') prevPoints = prevPoints.map(p => ({ x: p.x, y: p.y / 1000 }));
                    else if (unit === 'Wh' || unit === 'kWh') prevPoints = prevPoints.map(p => ({ x: p.x, y: p.y / 1000 }));
                }
            }

            if (this.autoScale) {
                if (unit === 'W') { points = points.map(p => ({ x: p.x, y: p.y / 1000 })); unit = 'kW'; }
                else if (unit === 'Wh') { points = points.map(p => ({ x: p.x, y: p.y / 1000 })); unit = 'kWh'; }
            }

            const precision = this._precisionFor(conf.entityId);
            const values = points.map(p => p.y);
            const min = Math.min(...values); const max = Math.max(...values);
            const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(precision);
            const curr = values[values.length - 1].toFixed(precision);
            let displayVal = curr; let displayLabel = t('current');
            if (this._isCumulative(conf.entityId, unit)) {
                const isAggregated = (currentType === 'bar' && hours > 24);
                displayVal = calculateEnergySum(values, isAggregated).toFixed(precision);
                displayLabel = t('sum');
            }

            const footer = card.querySelector(`#footer-${idx}`);
            const statsBox = footer.querySelector('.split-stats-box');
            if (this.showStats) {
                statsBox.innerHTML = getSplitStatsHTML(displayLabel, conf.color, displayVal, unit, min.toFixed(precision), avg, max.toFixed(precision));
                statsBox.style.display = '';
            } else {
                statsBox.style.display = 'none';
            }

            const controlsBox = document.createElement('div');
            controlsBox.className = 'split-controls-box';
            const btnLine = document.createElement('button');
            btnLine.className = `chart-toggle-btn ${currentType === 'line' ? 'active' : ''}`; btnLine.innerHTML = `<svg style="width:20px;height:20px" viewBox="0 0 24 24"><path fill="currentColor" d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z"></path></svg>`;
            const btnBar = document.createElement('button');
            btnBar.className = `chart-toggle-btn ${currentType === 'bar' ? 'active' : ''}`; btnBar.innerHTML = `<svg style="width:20px;height:20px" viewBox="0 0 24 24"><path fill="currentColor" d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"></path></svg>`;
            const btnScatter = document.createElement('button');
            btnScatter.className = `chart-toggle-btn ${currentType === 'scatter' ? 'active' : ''}`; btnScatter.innerHTML = `<svg style="width:20px;height:20px" viewBox="0 0 24 24"><path fill="currentColor" d="M11 6C11 4.9 10.1 4 9 4S7 4.9 7 6 7.9 8 9 8 11 7.1 11 6M5 13C3.9 13 3 13.9 3 15S3.9 17 5 17 7 16.1 7 15 6.1 13 5 13M13 11C11.9 11 11 10.1 11 9S11.9 7 13 7 15 7.9 15 9 14.1 11 13 11M16 15C14.9 15 14 15.9 14 17S14.9 19 16 19 18 18.1 18 17 17.1 15 16 15M20 20H4V4H2V22H22V20Z"></path></svg>`;

            controlsBox.appendChild(btnLine); controlsBox.appendChild(btnBar); controlsBox.appendChild(btnScatter);
            footer.appendChild(controlsBox);

            const canvasId = `split-canvas-${idx}`;
            const ctx = card.querySelector(`#${canvasId}`).getContext('2d');

            const updateThisChart = (newType) => {
                this.selectedSensors[idx].typeOverride = newType;
                this.saveSettings();
                btnLine.className = `chart-toggle-btn ${newType === 'line' ? 'active' : ''}`;
                btnBar.className = `chart-toggle-btn ${newType === 'bar' ? 'active' : ''}`;
                btnScatter.className = `chart-toggle-btn ${newType === 'scatter' ? 'active' : ''}`;
                const chartIdx = this.chartInstances.findIndex(c => c.canvas === card.querySelector('canvas'));
                if (chartIdx > -1) { this.chartInstances[chartIdx].destroy(); this.chartInstances.splice(chartIdx, 1); }



                // Re-Process Previous Data if needed
                let prevPoints = [];
                if (this.compareYear && sensorDataObj.prevData && sensorDataObj.prevData.length > 0) {
                    const shiftTime = 365 * 24 * 60 * 60 * 1000;
                    const rawPrevPoints = processData(sensorDataObj.prevData, newType, unit, new Date(sensorDataObj.startTime.getTime() - shiftTime), this._isCumulative(conf.entityId, unit));
                    prevPoints = rawPrevPoints.map(p => ({ x: p.x + shiftTime, y: p.y }));
                    if (this.autoScale) {
                        if (unit === 'W' || unit === 'kW') prevPoints = prevPoints.map(p => ({ x: p.x, y: p.y / 1000 }));
                        if (unit === 'Wh' || unit === 'kWh') prevPoints = prevPoints.map(p => ({ x: p.x, y: p.y / 1000 }));
                    }
                }

                let newPoints = processData(sensorDataObj.data, newType, unit, sensorDataObj.startTime, this._isCumulative(conf.entityId, unit));
                if (this.autoScale) {
                    if (unit === 'W' || unit === 'kW') newPoints = newPoints.map(p => ({ x: p.x, y: p.y / 1000 }));
                    if (unit === 'Wh' || unit === 'kWh') newPoints = newPoints.map(p => ({ x: p.x, y: p.y / 1000 }));
                }

                let bg = conf.color;
                if (this.fillArea && newType === 'line') {
                    const grad = ctx.createLinearGradient(0, 0, 0, 300);
                    grad.addColorStop(0, hexToRgba(conf.color, 0.5));
                    grad.addColorStop(1, hexToRgba(conf.color, 0.05));
                    bg = grad;
                }
                const pRadius = (newType === 'scatter') ? 4 : 0;
                // --- UPDATED: Use alias ---

                let datasets = [];

                // Add Previous Year Dataset FIRST (background)
                if (prevPoints.length > 0 && newType !== 'scatter' && newType !== 'doughnut') {
                    datasets.push({
                        label: t('compareYear'), // Translation key
                        data: prevPoints,
                        borderColor: 'rgba(128,128,128, 0.5)',
                        backgroundColor: 'rgba(128,128,128, 0.3)',
                        borderWidth: (newType === 'bar') ? 0 : 1.5,
                        fill: (newType === 'line'),
                        pointRadius: 0,
                        tension: 0.4,
                        type: newType,
                        categoryPercentage: 0.98, barPercentage: 0.98,
                        grouped: false, // Ensure overlap for bars
                        order: 10 // Higher order draws earlier? No, check Chart.js specs. Actually depends on array order usually, but let's see. 
                        // Chart.js: "Loops through the datasets ... in the order they are configured"
                        // So pushing this first is correct for background.
                    });
                }

                // --- UPDATED: Use alias ---
                const dataset = {
                    label: conf.alias || cleanName(conf.entityId),
                    _entityId: conf.entityId,
                    data: newPoints, borderColor: conf.color, backgroundColor: bg,
                    fill: this.fillArea, borderWidth: (newType === 'bar') ? 0 : 2.5, categoryPercentage: 0.98, barPercentage: 0.98,
                    pointRadius: pRadius, pointHoverRadius: 6, pointBackgroundColor: conf.color, tension: this.chartTension / 10, stepped: isStepped,
                    order: 0,
                    grouped: false // To overlap with prev year
                };

                datasets.push(dataset);

                const newChart = this.createChartInstance(ctx, newType, datasets, sensorDataObj.startTime, sensorDataObj.endTime, false, idx, true, false, true);

                // Toggle Values Btn Visibility and restore showValues state
                const vBtn = card.querySelector(`#values-btn-${idx}`);
                if (vBtn) {
                    vBtn.style.display = (newType === 'bar') ? 'flex' : 'none';
                    // Preserve showValues state when switching to bar type
                    if (newType === 'bar' && conf.showValues) {
                        vBtn.classList.add('active');
                        if (newChart) {
                            newChart.config.options.plugins.customValues = true;
                            newChart.update('none');
                        }
                    } else if (newType !== 'bar') {
                        // For non-bar types, just hide the button (don't reset the saved state)
                        vBtn.classList.remove('active');
                    }
                }
            };
            btnLine.onclick = () => updateThisChart('line');
            btnBar.onclick = () => updateThisChart('bar');
            btnScatter.onclick = () => updateThisChart('scatter');

            // Values Button Logic (Initial Init)
            const btnValues = card.querySelector(`#values-btn-${idx}`);
            if (btnValues) {
                if (currentType === 'bar') btnValues.style.display = 'flex';

                // Restore saved showValues state
                if (conf.showValues) {
                    btnValues.classList.add('active');
                }

                btnValues.onclick = () => {
                    const isActive = btnValues.classList.toggle('active');

                    // Save state to sensor config
                    this.selectedSensors[idx].showValues = isActive;
                    if (!this._config) this.saveSettings();

                    const cInstance = this.chartInstances.find(c => c.canvas === card.querySelector('canvas'));
                    if (cInstance) {
                        cInstance.config.options.plugins.customValues = isActive;
                        cInstance.update();
                    }
                };
            }

            let bg = conf.color;
            if (isBinary) {
                bg = hexToRgba(conf.color, 0.2);
            } else if (this.fillArea && currentType === 'line') {
                const grad = ctx.createLinearGradient(0, 0, 0, 300);
                grad.addColorStop(0, hexToRgba(conf.color, 0.5));
                grad.addColorStop(1, hexToRgba(conf.color, 0.05));
                bg = grad;
            }

            // --- UPDATED: Use alias ---
            const mainDataset = {
                label: conf.alias || cleanName(conf.entityId),
                _entityId: conf.entityId,
                data: points, borderColor: conf.color, backgroundColor: bg,
                fill: (isBinary) ? true : this.fillArea,
                borderWidth: (isBinary) ? 1 : (currentType === 'bar' ? 0 : 2.5),
                pointRadius: (currentType === 'scatter' ? 4 : 0),
                tension: this.chartTension / 10, stepped: isStepped, spanGaps: true,
                order: 0,
                grouped: false
            };

            const datasets = [];

            // Add Previous Year Dataset FIRST
            if (prevPoints.length > 0 && currentType !== 'scatter' && currentType !== 'doughnut') {
                datasets.push({
                    label: t('compareYear'),
                    data: prevPoints,
                    // Styling: Grey bars or dashed gray line
                    borderColor: 'rgba(128,128,128, 0.5)',
                    backgroundColor: 'rgba(128,128,128, 0.3)',
                    borderWidth: (currentType === 'bar') ? 0 : 1.5,
                    borderDash: (currentType === 'line') ? [5, 5] : [],
                    fill: (currentType === 'line'),
                    pointRadius: 0,
                    tension: 0.4,
                    type: currentType,
                    categoryPercentage: 0.98, barPercentage: 0.98,
                    grouped: false,
                    order: 10
                });
            }

            datasets.push(mainDataset);

            const chartInstance = this.createChartInstance(ctx, currentType, datasets, chartSt, chartEt, false, idx, true, false, true);

            // Restore showValues state from saved config
            if (conf.showValues && currentType === 'bar' && chartInstance) {
                chartInstance.config.options.plugins.customValues = true;
                chartInstance.update('none');
            }
        });
    }

    createChartInstance(ctx, type, datasets, startTime, endTime, showZoomBtn, sensorIndex, hideLegend, hasSecondaryAxis, forceNoStack = false, forceStack = false) {
        const styles = getComputedStyle(this);
        const textColor = styles.getPropertyValue('--primary-text-color').trim();
        const gridColor = styles.getPropertyValue('--divider-color').trim();
        const secondaryText = styles.getPropertyValue('--secondary-text-color').trim();
        const resetBtn = this.content.querySelector('#reset-zoom-btn');
        const self = this;

        if (window.Chart && !window.Chart.Tooltip.positioners.smartCorner) {
            window.Chart.Tooltip.positioners.smartCorner = function (elements, eventPosition) {
                const chart = this.chart;
                const xPos = eventPosition.x;
                const half = chart.width / 2;
                if (xPos > half) {
                    // Right side -> Tooltip on Left
                    return { x: chart.chartArea.left, y: chart.chartArea.top };
                } else {
                    // Left side -> Tooltip on Right
                    return { x: chart.chartArea.right, y: chart.chartArea.top };
                }
            };
        }

        const verticalHoverLine = {
            id: 'verticalHoverLine',
            afterDraw: (chart) => {
                if (chart.tooltip?._active?.length) {
                    const activePoint = chart.tooltip._active[0];
                    const ctx = chart.ctx;
                    const x = activePoint.element.x;
                    const topY = chart.chartArea.top;
                    const bottomY = chart.chartArea.bottom;
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(x, topY);
                    ctx.lineTo(x, bottomY);
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = styles.getPropertyValue('--accent-color').trim() || '#03a9f4';
                    ctx.setLineDash([5, 5]); ctx.globalAlpha = 0.6;
                    ctx.stroke(); ctx.restore();
                }
            }
        };

        const drawValuesPlugin = {
            id: 'drawValues',
            afterDatasetsDraw: (chart) => {
                if (!chart.config.options.plugins.customValues) return;
                const ctx = chart.ctx;
                const { left, right, top, bottom } = chart.chartArea;

                // Removed clipping to allow values to overflow slightly into padding
                ctx.save();
                ctx.beginPath();
                // ctx.rect(left, top, right - left, bottom - top);
                // ctx.clip();

                chart.data.datasets.forEach((dataset, i) => {
                    if (chart.isDatasetVisible(i)) {
                        const meta = chart.getDatasetMeta(i);
                        meta.data.forEach((element, index) => {
                            const val = dataset.data[index].y;
                            // Skip null, undefined, or zero values (as requested)
                            if (val === null || val === undefined || val === 0) return;

                            // Use dataset color for the text
                            let color = dataset.borderColor;
                            if (!color && dataset.backgroundColor) {
                                // If it's a gradient or pattern, fallback might be needed, but usually string
                                color = dataset.backgroundColor;
                            }
                            // Fallback if color is complex object (gradient) or missing
                            if (typeof color !== 'string') color = '#e1e1e1';

                            ctx.fillStyle = color;
                            ctx.font = 'bold 12px Roboto, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';

                            // Position slightly above the bar
                            const x = element.x;
                            const y = element.y - 5;

                            // Draw value if within vertical bounds (above chart area top is fine)
                            if (y > top) {
                                ctx.fillText(val.toFixed(1), x, y); // One decimal place
                            }
                        });
                    }
                });

                ctx.restore(); // Restore clipping
            }
        };

        const peakMarkerPlugin = {
            id: 'peakMarkers',
            afterDatasetsDraw: (chart) => {
                if (!self.showPeaks) return;
                const ctx = chart.ctx;
                chart.data.datasets.forEach((ds, i) => {
                    if (!ds._entityId) return;
                    if (ds.type === 'bar') return;
                    if (!chart.isDatasetVisible(i)) return;
                    const meta = chart.getDatasetMeta(i);
                    if (!meta || !meta.data || !meta.data.length) return;
                    const pts = ds.data;
                    if (!pts || pts.length < 2) return;
                    let iMin = 0, iMax = 0;
                    for (let k = 1; k < pts.length; k++) {
                        if (pts[k].y < pts[iMin].y) iMin = k;
                        if (pts[k].y > pts[iMax].y) iMax = k;
                    }
                    const iLast = pts.length - 1;
                    const state = self._hass?.states?.[ds._entityId];
                    let unit = state?.attributes?.unit_of_measurement || '';
                    if (self.autoScale) { if (unit === 'W') unit = 'kW'; else if (unit === 'Wh') unit = 'kWh'; }
                    const precision = self._precisionFor(ds._entityId);
                    const color = (typeof ds.borderColor === 'string') ? ds.borderColor : '#888';
                    const drawMarker = (idx, tag, isMin) => {
                        const el = meta.data[idx];
                        if (!el) return;
                        const x = el.x, y = el.y;
                        ctx.save();
                        ctx.beginPath();
                        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
                        ctx.fillStyle = color; ctx.fill();
                        ctx.lineWidth = 1.5; ctx.strokeStyle = '#ffffff'; ctx.stroke();
                        const label = `${tag} ${Number(pts[idx].y).toFixed(precision)}${unit ? ' ' + unit : ''}`;
                        ctx.font = 'bold 10px Roboto, sans-serif';
                        ctx.textBaseline = 'bottom';
                        ctx.textAlign = (x > chart.chartArea.right - 60) ? 'right' : 'left';
                        const tx = ctx.textAlign === 'right' ? x - 6 : x + 6;
                        const ty = isMin ? y + 14 : y - 5;
                        ctx.lineWidth = 3; ctx.strokeStyle = 'rgba(0,0,0,0.55)'; ctx.strokeText(label, tx, ty);
                        ctx.fillStyle = color; ctx.fillText(label, tx, ty);
                        ctx.restore();
                    };
                    drawMarker(iMax, t('peakMax'), false);
                    drawMarker(iMin, t('peakMin'), true);
                    drawMarker(iLast, t('peakLast'), false);
                });
            }
        };

        const nowLineDayNightPlugin = {
            id: 'nowLineDayNight',
            beforeDatasetsDraw: (chart) => {
                if (!self.showDayNight) return;
                const xScale = chart.scales.x;
                if (!xScale) return;
                const min = xScale.min, max = xScale.max;
                const rangeH = (max - min) / 3600000;
                if (rangeH > 24 * 21 || rangeH < 1) return;
                const c = chart.ctx;
                const { top, bottom } = chart.chartArea;
                c.save();
                c.fillStyle = 'rgba(120, 130, 170, 0.10)';
                const d0 = new Date(min); d0.setHours(0, 0, 0, 0);
                for (let day = d0.getTime() - 86400000; day <= max + 86400000; day += 86400000) {
                    const nightStart = day + 20 * 3600000;
                    const nightEnd = day + 30 * 3600000;
                    const a = Math.max(nightStart, min);
                    const b = Math.min(nightEnd, max);
                    if (b <= a) continue;
                    const xa = xScale.getPixelForValue(a);
                    const xb = xScale.getPixelForValue(b);
                    c.fillRect(xa, top, xb - xa, bottom - top);
                }
                c.restore();
            },
            afterDatasetsDraw: (chart) => {
                if (!self.showNowLine) return;
                const xScale = chart.scales.x;
                if (!xScale) return;
                const now = Date.now();
                if (now < xScale.min || now > xScale.max) return;
                const x = xScale.getPixelForValue(now);
                const { top, bottom } = chart.chartArea;
                const c = chart.ctx;
                c.save();
                c.beginPath(); c.moveTo(x, top); c.lineTo(x, bottom);
                c.lineWidth = 1.5; c.strokeStyle = 'rgba(244, 67, 54, 0.85)';
                c.setLineDash([4, 4]); c.stroke(); c.setLineDash([]);
                c.fillStyle = 'rgba(244, 67, 54, 0.95)';
                c.font = 'bold 10px Roboto, sans-serif';
                c.textAlign = (x > chart.chartArea.right - 40) ? 'right' : 'left';
                c.fillText(t('nowLabel'), c.textAlign === 'right' ? x - 4 : x + 4, top + 10);
                c.restore();
            }
        };

        const chart = new window.Chart(ctx, {
            type: type === 'stepped' ? 'line' : type,
            data: { datasets },
            plugins: [verticalHoverLine, drawValuesPlugin, peakMarkerPlugin, nowLineDayNightPlugin],
            options: {
                responsive: true, maintainAspectRatio: false,
                animation: { duration: 0 }, hover: { animationDuration: 0 },
                interaction: { mode: 'x', intersect: false },
                plugins: {
                    legend: {
                        display: !hideLegend, position: 'top', align: 'end',
                        labels: { color: textColor, usePointStyle: true, boxWidth: 8, boxPadding: 6, padding: 15, generateLabels: (chart) => { const original = Chart.defaults.plugins.legend.labels.generateLabels(chart); original.forEach(label => { label.text = '\u00A0\u00A0' + label.text; }); return original; } }
                    },
                    tooltip: {
                        position: 'smartCorner', xAlign: 'right', yAlign: 'top',
                        filter: (item, index, list) => {
                            // Deduplicate based on label + value + datasetIndex
                            // Or simply label if we assume labels are unique per sensor
                            const label = item.dataset.label;
                            // Find first index of this label in the list
                            const firstIdx = list.findIndex(i => i.dataset.label === label);
                            // Only keep if it is the first occurrence
                            return index === firstIdx;
                        },
                        backgroundColor: 'rgba(20, 20, 20, 0.95)', titleColor: '#fff', bodyColor: '#bbb', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, padding: 12,
                        callbacks: {
                            title: (c) => new Date(c[0].parsed.x).toLocaleString(this.dateFormat === 'mdy' ? 'en-US' : 'de-DE'),
                            label: (c) => {
                                const ds = c.dataset;
                                const lbl = ds.label || '';

                                let unit = '';
                                let precision = 2;
                                let isBinary = false;

                                if (ds._entityId) {
                                    const state = this._hass.states[ds._entityId];
                                    unit = state?.attributes?.unit_of_measurement || '';
                                    precision = this._precisionFor(ds._entityId);
                                    if (ds._entityId.startsWith('binary_sensor.') || state?.attributes?.device_class === 'binary_sensor') isBinary = true;
                                } else {
                                    // Fallback search (match label or entity name)
                                    const s = this.selectedSensors.find(s => (s.alias || cleanName(s.entityId)) === lbl);
                                    if (s) {
                                        const state = this._hass.states[s.entityId];
                                        unit = state?.attributes?.unit_of_measurement || '';
                                        precision = this._precisionFor(s.entityId);
                                        if (s.entityId.startsWith('binary_sensor.') || state?.attributes?.device_class === 'binary_sensor') isBinary = true;
                                    }
                                }

                                const val = c.parsed.y;
                                if (lbl === 'Limit') return `\u00A0\u00A0Limit: ${val}`;
                                if (lbl === 'Limit2') return `\u00A0\u00A0Limit2: ${val}`;

                                if (isBinary) {
                                    const txt = val === 1 ? "An" : "Aus";
                                    return `\u00A0\u00A0${lbl}: ${txt}`;
                                }

                                if (this.autoScale) { if (unit === 'W') unit = 'kW'; if (unit === 'Wh') unit = 'kWh'; }

                                const valStr = val.toLocaleString(undefined, { minimumFractionDigits: precision, maximumFractionDigits: precision });
                                // valStr already declared above, removing duplicate


                                // FIX: Tooltip Date for Previous Year
                                let lblStr = lbl;
                                if (lbl === t('compareYear')) {
                                    // Calculate original date (approx -365 days)
                                    // precise method: get original timestamp if possible, or just subtract
                                    const origDate = new Date(c.parsed.x - 365 * 24 * 60 * 60 * 1000);
                                    lblStr += ` (${origDate.getFullYear()})`;
                                }

                                return `\u00A0\u00A0${lblStr}: ${valStr} ${unit}`;
                            }
                        }
                    },
                    zoom: {
                        pan: {
                            enabled: true, mode: 'x',
                            onPan: () => { if (showZoomBtn) resetBtn.style.display = 'block'; },
                            onPanComplete: ({ chart }) => {
                                const min = chart.scales.x.min; const max = chart.scales.x.max; chart.stop();
                                if (this.layoutMode !== 'combined' && sensorIndex !== null) { this.loadSingleSensorHistory(sensorIndex, new Date(min), new Date(max)); }
                                else { if (min < startTime.getTime() || max > endTime.getTime()) { this.loadSpecificRange(new Date(min), new Date(max)); } else { this._updateVisibleStats(chart, sensorIndex); } }
                            }
                        },
                        zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: 'x', onZoom: () => { if (showZoomBtn) resetBtn.style.display = 'block'; }, onZoomComplete: ({ chart }) => { this._updateVisibleStats(chart, sensorIndex); const xMin = chart.scales.x.min; const xMax = chart.scales.x.max; let refUpdated = false; chart.data.datasets.forEach(ds => { if (ds._isThreshold) { if (ds.data.length === 2) { ds.data[0].x = xMin; ds.data[1].x = xMax; refUpdated = true; } } }); if (refUpdated) chart.update('none'); } }
                    }
                },
                scales: {
                    x: {
                        type: 'linear', position: 'bottom', min: startTime.getTime(), max: endTime.getTime(), stacked: forceNoStack ? false : (forceStack || this.stackedBars), offset: false,
                        ticks: { display: !this.hideAxislabels, color: secondaryText, maxTicksLimit: 8, callback: (function (dateFormat) { return function (value) { const d = new Date(value); const scaleMin = (this && typeof this.min === 'number') ? this.min : startTime.getTime(); const scaleMax = (this && typeof this.max === 'number') ? this.max : endTime.getTime(); const rangeMs = scaleMax - scaleMin; const rangeHours = rangeMs / 3600000; const locale = dateFormat === 'mdy' ? 'en-US' : 'de-DE'; if (rangeHours > 24 * 180) { return d.toLocaleDateString(locale, { month: 'short', year: '2-digit' }); } if (rangeHours > 48) { return d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit' }); } if (rangeHours > 6) { return d.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' }); } if (rangeHours > 0.1) { return d.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', second: '2-digit' }); } return d.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', second: '2-digit' }); }; })(this.dateFormat) },
                        grid: { color: gridColor, drawBorder: false, display: !this.hideGrid }
                    },
                    y: {
                        type: 'linear', position: 'left', stacked: forceNoStack ? false : (forceStack || this.stackedBars), grace: '15%',
                        ...(Number.isFinite(this.yMin) ? { min: this.yMin } : {}),
                        ...(Number.isFinite(this.yMax) ? { max: this.yMax } : {}),
                        ticks: { display: !this.hideAxislabels, color: secondaryText },
                        grid: { color: gridColor, borderDash: [5, 5], display: !this.hideGrid }
                    },
                    y1: {
                        type: 'linear', display: !!hasSecondaryAxis, position: 'right', grid: { drawOnChartArea: false },
                        ticks: { display: !this.hideAxislabels, color: secondaryText, callback: function (value) { return value + '%'; } }
                    },
                    y_binary: {
                        type: 'linear', display: false, position: 'left', min: 0, max: 1, grid: { display: false }
                    }
                }
            }
        });
        this.chartInstances.push(chart);
        return chart;
    }

    initResizeHandler(handle, container, ghost) {
        if (!handle || !container || !ghost) return;
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
}
