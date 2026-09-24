/* detailed-charts-panel-function.js */

import { t } from './detailed-charts-panel-langs.js';

export const PANEL_VERSION = 'v2.8';

/* --- HELPER FUNCTIONS --- */

export function cleanName(name) {
    if (!name) return '';
    return name.replace(/^(sensor|binary_sensor|input_number)\./, '');
}

export function getRandomColor() {
    const l = '0123456789ABCDEF';
    let c = '#';
    for (let i = 0; i < 6; i++) c += l[Math.floor(Math.random() * 16)];
    return c;
}

/* HSL -> Hex (h in deg, s/l in %) */
function hslToHex(h, s, l) {
    s /= 100; l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => {
        const c = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
        return Math.round(255 * c).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

/* Harmonious, theme-friendly palette. Hues spread via the golden angle,
   medium saturation/lightness so colors stay readable on light AND dark themes.
   startHue lets the caller reshuffle ("re-roll") while keeping the spacing. */
export function generatePalette(count, startHue = 0) {
    const colors = [];
    const golden = 137.508;
    for (let i = 0; i < count; i++) {
        const hue = (startHue + i * golden) % 360;
        const sat = 65 + (i % 2) * 10;    // 65 / 75
        const light = 56 + (i % 3) * 4;   // 56 / 60 / 64
        colors.push(hslToHex(hue, sat, light));
    }
    return colors;
}

/* Deterministic single color for the sensor at position index (stable ordering). */
export function paletteColorAt(index) {
    return generatePalette(index + 1)[index];
}

export function hexToRgba(hex, alpha) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) { c = [c[0], c[0], c[1], c[1], c[2], c[2]]; }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
    }
    return hex;
}

export function calculateEnergySum(values, isAggregated) {
    if (isAggregated) {
        return values.reduce((a, b) => a + b, 0);
    }
    let sum = 0;
    for (let i = 1; i < values.length; i++) {
        const diff = values[i] - values[i - 1];
        if (diff > 0) sum += diff;
    }
    return sum;
}

/* Detects cumulative meter sensors (energy, water m³, gas ...): unit Wh/kWh or state_class total/total_increasing. */
export function isCumulativeSensor(unit, stateClass) {
    if (stateClass === 'total_increasing' || stateClass === 'total') return true;
    return !!(unit && (unit.includes('Wh') || unit.includes('kWh')));
}

/* Heuristic: does this numeric series behave like an ever-increasing counter (rises, then
   resets back to its baseline)? Used to aggregate such sensors as consumption in bar charts,
   even when they carry no state_class/kWh unit (e.g. an input_number helper that counts up).
   A measurement sensor (temperature, power) keeps dipping mid-range and is therefore NOT matched. */
function looksLikeCounter(values) {
    if (!values || values.length < 5) return false;
    let min = values[0], max = values[0];
    for (let i = 1; i < values.length; i++) { if (values[i] < min) min = values[i]; if (values[i] > max) max = values[i]; }
    if (!(max > min)) return false;
    const resetFloor = min + 0.15 * (max - min);
    let ups = 0, downs = 0;
    for (let i = 1; i < values.length; i++) {
        const d = values[i] - values[i - 1];
        if (d > 0) ups++;
        else if (d < 0 && values[i] > resetFloor) downs++; // a drop that stays mid-range = genuine decrease
    }
    return ups >= 2 && downs === 0;
}

/* --- DATA PROCESSING --- */

function parseState(val) {
    if (val === null || val === undefined) return NaN;
    if (typeof val === 'string') {
        const v = val.trim().toLowerCase();
        if (v === 'on' || v === 'home' || v === 'detected' || v === 'open' || v === 'connected' || v === 'running') return 1.0;
        if (v === 'off' || v === 'not_home' || v === 'clear' || v === 'closed' || v === 'disconnected') return 0.0;
    }
    if (val === true) return 1.0;
    if (val === false) return 0.0;
    return parseFloat(val);
}

function aggregateToDaily(historyData, isEnergy) {
    const groups = {};
    historyData.forEach(pt => {
        const pVal = parseState(pt.state);
        if (isNaN(pVal)) return;
        const val = pVal;
        const d = new Date(pt.last_changed);
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

        if (!groups[key]) groups[key] = { sum: 0, count: 0, min: val, max: val, values: [] };

        groups[key].values.push(val);
        groups[key].sum += val;
        groups[key].count++;
        if (val < groups[key].min) groups[key].min = val;
        if (val > groups[key].max) groups[key].max = val;
    });

    return Object.keys(groups).sort().map(dateStr => {
        const g = groups[dateStr];
        let yVal;
        if (isEnergy) {
            let daySum = 0;
            for (let i = 1; i < g.values.length; i++) {
                let d = g.values[i] - g.values[i - 1];
                if (d > 0) daySum += d;
            }
            if (daySum === 0 && g.max > g.min) daySum = g.max - g.min;
            yVal = daySum;
        } else {
            yVal = g.sum / g.count;
        }
        const [yy, mm, dd] = dateStr.split('-').map(Number);
        return { x: new Date(yy, mm - 1, dd).getTime(), y: yVal };
    });
}

function aggregateToHourly(historyData, isEnergy) {
    const buckets = {};
    const ensure = (key) => { if (!buckets[key]) buckets[key] = { sum: 0, count: 0 }; return buckets[key]; };
    if (isEnergy) {
        // Cumulative meters: consumption per hour = sum of positive diffs, boundary diff counted in the later hour
        let prev = null;
        historyData.forEach(pt => {
            const pVal = parseState(pt.state);
            if (isNaN(pVal)) return;
            const date = new Date(pt.last_changed); date.setMinutes(0, 0, 0); const key = date.getTime();
            const b = ensure(key);
            if (prev !== null) { const d = pVal - prev; if (d > 0) b.sum += d; }
            b.count++;
            prev = pVal;
        });
        return Object.keys(buckets).sort().map(timestamp => { const t = parseInt(timestamp); return { x: t, y: buckets[timestamp].sum }; });
    }
    historyData.forEach(pt => {
        const pVal = parseState(pt.state);
        if (isNaN(pVal)) return;
        const date = new Date(pt.last_changed); date.setMinutes(0, 0, 0); const key = date.getTime();
        const b = ensure(key);
        b.sum += pVal; b.count++;
    });
    return Object.keys(buckets).sort().map(timestamp => { const t = parseInt(timestamp); return { x: t, y: buckets[timestamp].sum / buckets[timestamp].count }; });
}

export function processData(history, type, unit, startTime = null, cumulative = null) {
    // 1. Deduplicate History (Fix for double tooltip values)
    const uniqueHistory = [];
    const seenTimes = new Set();
    history.forEach(pt => {
        const t = new Date(pt.last_changed).getTime();
        if (!seenTimes.has(t)) {
            seenTimes.add(t);
            uniqueHistory.push(pt);
        }
    });
    history = uniqueHistory;

    let isEnergy = (cumulative !== null && cumulative !== undefined) ? !!cumulative : (unit && (unit.includes("Wh") || unit.includes("kWh")));
    if (!isEnergy && type === 'bar') {
        // Auto-detect counter-style sensors (rise + reset) so their bars show consumption, not the average.
        const nums = history.map(pt => parseState(pt.state)).filter(v => !isNaN(v));
        if (looksLikeCounter(nums)) isEnergy = true;
    }
    let dataPoints = [];

    if (history.length > 1) {
        const start = new Date(history[0].last_changed).getTime();
        const end = new Date(history[history.length - 1].last_changed).getTime();
        const hours = (end - start) / 3600000;

        if (type === 'bar' && hours > 24) {
            dataPoints = aggregateToDaily(history, isEnergy);
        }
    }

    if (dataPoints.length === 0) {
        if (type === 'bar') {
            dataPoints = aggregateToHourly(history, isEnergy);
        } else if (history.length > 2000) {
            const step = Math.ceil(history.length / 2000);
            dataPoints = history.filter((_, i) => i % step === 0 && !isNaN(parseState(_.state)))
                .map(pt => ({ x: new Date(pt.last_changed).getTime(), y: parseState(pt.state) }));
        } else {
            dataPoints = history.filter(pt => !isNaN(parseState(pt.state))).map(pt => ({ x: new Date(pt.last_changed).getTime(), y: parseState(pt.state) }));
        }
    }

    if (startTime && dataPoints.length > 0 && type !== 'bar' && type !== 'scatter') {
        const firstPtTime = dataPoints[0].x;
        const startTs = startTime.getTime();

        if (firstPtTime > startTs + 60000) {
            dataPoints.unshift({ x: startTs, y: 0 });
            dataPoints.splice(1, 0, { x: firstPtTime - 1, y: 0 });
        }
    }

    return dataPoints;
}

/* --- HTML TEMPLATES (VIEWS) --- */

export function createStatsCard(conf, min, avg, max, curr, unit, label, sumVal = null) {
    // --- UPDATED: Use alias if available ---
    const name = conf.alias || cleanName(conf.entityId);
    const sumRow = (sumVal !== null && sumVal !== undefined)
        ? `\n          <div class="stats-row"><span>${t('sum')}:</span> <span class="stats-main-val" style="color:${conf.color}">${sumVal} ${unit}</span></div>`
        : '';
    return `
      <div class="stats-card" style="border-left-color: ${conf.color}">
          <div class="stats-header" title="${name}">${name}</div>
          <div class="stats-row">
              <span>${label}:</span>
              <span class="stats-main-val" style="color:${conf.color}">${curr} ${unit}</span>
          </div>
          <div class="stats-row"><span>${t('min')}:</span> <span>${min}</span></div>
          <div class="stats-row"><span>${t('avg')}:</span> <span>${avg}</span></div>
          <div class="stats-row"><span>${t('max')}:</span> <span>${max}</span></div>${sumRow}
      </div>
   `;
}

export function getSplitCardHTML(index, color, name, isCard) {
    let contentHTML = '';

    if (isCard) {
        contentHTML = `
            <div class="split-card-container" id="custom-card-container-${index}"></div>
        `;
    } else {
        contentHTML = `
           <div class="split-canvas-container"><canvas id="split-canvas-${index}"></canvas></div>
           <div class="split-footer" id="footer-${index}">
               <div class="split-stats-box"></div>
           </div>
        `;
    }

    return `
       <div class="split-chart-header" style="color:${color}">
           <span>${name}</span>
           <div style="display:flex; gap:10px; align-items:center;">
               <button class="values-toggle-btn" id="values-btn-${index}" title="${t('showValues')}" style="display:none;">
                  <svg style="width:18px;height:18px" viewBox="0 0 24 24"><path fill="currentColor" d="M7,13H21V11H7M7,19H21V17H7M7,7H21V5H7M2,11H3.8L2,13.1V14H5V13H3.2L5,10.9V10H2M3,8H4V4H2V5H3M2,17H4.2L2,17.5V18.5L4.2,19H2V20H5V19L2.8,18.5V17.5L5,17V16H2V17Z" /></svg>
               </button>
               <div class="drag-handle" draggable="true" title="${t('moveHandle')}">
                   <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                       <path fill="currentColor" d="M10,9h4V6h3l-5-5l-5,5h3V9z M9,10H6V6l-5,5l5,5v-3h3V10z M14,10v3h3l5-5l-5-5v3h-3z M10,15h4v3h-3l5,5l5-5h-3V15z M13,14h-2v2h2V14z"></path>
                   </svg>
               </div>
           </div>
       </div>
       ${contentHTML}
    `;
}

export function getSplitStatsHTML(displayLabel, color, displayVal, unit, min, avg, max, sumVal = null) {
    const sumBlock = (sumVal !== null && sumVal !== undefined)
        ? `\n       <div><div class="stat-label">${t('sum')}</div><div class="stat-current" style="color:${color}">${sumVal} <span class="stat-unit">${unit}</span></div></div>`
        : '';
    return `
       <div><div class="stat-label">${displayLabel}</div><div class="stat-current" style="color:${color}">${displayVal} <span class="stat-unit">${unit}</span></div></div>
       <div><div class="stat-label">${t('min')}</div><div class="stat-value" style="font-size:1em">${min}</div></div>
       <div><div class="stat-label">${t('avg')}</div><div class="stat-value" style="font-size:1em">${avg}</div></div>
       <div><div class="stat-label">${t('max')}</div><div class="stat-value" style="font-size:1em">${max}</div></div>${sumBlock}
    `;
}

function getMonoButtonHTML() {
    return `
        <button id="toggle-mono-btn" class="chart-overlay-btn" title="${t('monochromeHighlight')}">
            <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.5,5.6L5,7L7.5,8.4L10,7L7.5,5.6M19.5,15.4L22,14L19.5,12.6L17,14L19.5,15.4M22,2L20.6,4.5L22,7L19.5,5.6L17,7L18.4,4.5L17,2L19.5,3.4L22,2M13.34,12C13.5,12.58 13.78,13.08 14.15,13.5L3.6,23L2.2,21.6L13.34,12M15.4,14.8L16.8,16.2L12,21H10.6L15.4,14.8Z" />
            </svg>
        </button>
    `;
}

export function getCombinedChartHTML(showStats) {
    return `
        <div id="resize-ghost"></div>
        <div class="chart-container-outer" id="chart-container-single">
           ${getMonoButtonHTML()}
           <div class="canvas-wrapper"><canvas id="canvas-combined"></canvas></div>
           <div id="resize-handle"><div class="grip-lines"></div></div>
        </div>
        <div id="stats-wrapper" class="stats-wrapper" style="display:${showStats ? 'flex' : 'none'}"></div>
    `;
}

export function getCombinedDoughnutHTML() {
    return `
        <div class="chart-container-outer" id="chart-container-single" style="height: 380px;">
           <div class="doughnut-container-flex">
               <div class="doughnut-chart-wrap">
                  <canvas id="canvas-combined"></canvas>
               </div>
               <div class="doughnut-sidebar">
                  <div id="doughnut-legend-container"></div>
                  <div id="doughnut-total-container"></div>
               </div>
           </div>
        </div>
    `;
}

export function getSideBySideHTML(showStats) {
    return `
        <div class="flex-main-wrapper" style="display: flex; gap: 10px; width: 100%; align-items: flex-start;">
            <div class="main-chart-wrapper" style="flex: 1; min-width: 0; display: flex; flex-direction: column;">
                <div id="resize-ghost"></div>
                <div class="chart-container-outer side-by-side-mode" id="chart-container-single" style="height: 450px; flex-grow: 0;">
                   ${getMonoButtonHTML()}
                   <div class="canvas-wrapper"><canvas id="canvas-combined"></canvas></div>
                   <div id="resize-handle"><div class="grip-lines"></div></div>
                </div>
            </div>
            <div class="side-donut-wrapper" style="width: 30%; min-width: 300px; max-width: 400px; min-height: 450px; background: var(--card-background-color); border: 1px solid var(--divider-color); border-radius: 8px; padding: 10px; display: flex; flex-direction: column;">
                <div class="doughnut-container-flex" style="display: flex; flex-direction: column; height: 100%; width: 100%;">
                   <div style="flex-grow: 1; position: relative; min-height: 200px;">
                      <canvas id="canvas-side-donut"></canvas>
                   </div>
                   <div class="doughnut-sidebar" style="width: 100%; margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--divider-color);">
                      <div id="doughnut-legend-container" style="overflow-y: auto; max-height: 150px;"></div>
                      <div id="doughnut-total-container" style="margin-top: 10px; font-weight: bold; font-size: 1.2em; text-align: center;"></div>
                   </div>
               </div>
            </div>
        </div>
        <div id="stats-wrapper" class="stats-wrapper" style="display:${showStats ? 'flex' : 'none'}"></div>
    `;
}

export function getPanelTemplate() {
    return `
      <style>
        :host {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background-color: var(--primary-background-color);
		  border-style: solid;
		  border-width: var(--ha-card-border-width,1px);
		  border-color: var(--ha-card-border-color,var(--divider-color,#e0e0e0));
          color: var(--primary-text-color);
          font-family: 'Roboto', 'Segoe UI', sans-serif;
          --sidebar-width: 320px;
          --accent-color: var(--primary-color, #03a9f4);
          --btn-color: #616161; 
          box-sizing: border-box; 		  
        }

        /* --- MOBILE HEADER STYLES --- */
        .mobile-top-header {
            display: none; height: var(--header-height, 56px);
            background-color: var(--app-header-background-color, var(--primary-color, #03a9f4));
            color: var(--app-header-text-color, white);
            align-items: center; justify-content: space-between; 
            padding: 0 16px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            flex-shrink: 0; z-index: 101;
        }
        
        .header-btn {
            background: transparent; border: none; color: inherit; cursor: pointer; padding: 8px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
        }
        .header-btn:hover { background-color: rgba(255, 255, 255, 0.1); }
        .header-title { font-size: 20px; font-weight: 500; }

        #mobile-open-sidebar-btn { display: none; }
        :host(.sidebar-hidden) #mobile-open-sidebar-btn { display: flex; }

        /* MOBILE FIX */
        @media (max-width: 1280px) {
            .mobile-top-header { display: flex; }
            #open-sidebar-floating { display: none !important; }
        }

        * { box-sizing: border-box; }
        .container { display: flex; flex: 1; overflow: hidden; position: relative; }
        
        .sidebar { 
            width: var(--sidebar-width); min-width: var(--sidebar-width); 
            background-color: var(--card-background-color); border-right: 1px solid var(--divider-color); 
            padding: 20px; display: flex; flex-direction: column; gap: 15px; 
            box-shadow: 2px 0 10px rgba(0,0,0,0.1); overflow-y: auto; scrollbar-width: none;
            transition: width 0.3s ease, min-width 0.3s ease, padding 0.3s ease, opacity 0.2s; 
        }
        .sidebar::-webkit-scrollbar { display: none; }        
        .sidebar.collapsed { width: 0; min-width: 0; padding: 0; opacity: 0; overflow: hidden; border-right: none; }

        .doughnut-container-flex { display: flex; height: 100%; width: 100%; }
        .doughnut-chart-wrap { flex-grow: 1; position: relative; min-width: 60%; }
        .doughnut-sidebar { display: flex; flex-direction: column; justify-content: center; padding-left: 20px; }
        #doughnut-legend-container { overflow-y: auto; max-height: 80%; scrollbar-width: none; }
        #doughnut-legend-container::-webkit-scrollbar { display: none; }
        #doughnut-total-container { margin-top: 20px; font-weight: bold; font-size: 1.4em; }

        .sidebar > * { flex-shrink: 0; }        
        .sidebar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-shrink: 0; }
        h2 { margin: 0; font-weight: 300; letter-spacing: 1px; font-size: 1.5em; white-space: nowrap; }
        label { font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--secondary-text-color); margin-bottom: 4px; display: block; letter-spacing: 0.5px; }
        .control-group { margin-bottom: 5px; position: relative; }
        
        input, select { padding: 12px 10px; border-radius: 4px; border: 1px solid var(--divider-color); background: var(--primary-background-color); color: var(--primary-text-color); font-family: inherit; font-size: 14px; width: 100%; outline: none; transition: border-color 0.2s, box-shadow 0.2s; -webkit-appearance: none; appearance: none; }
        input:focus, select:focus { border-color: var(--accent-color); }
        
        .suggestions-list { position: absolute; top: 100%; left: 0; right: 0; background: var(--secondary-background-color, #2c2c2c); border: 1px solid var(--divider-color); border-radius: 4px; max-height: 300px; overflow-y: auto; z-index: 100; display: none; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
        .suggestion-item { padding: 10px; border-bottom: 1px solid var(--divider-color); cursor: pointer; transition: background 0.2s; }
        .suggestion-item:hover { background: rgba(255, 255, 255, 0.1); }
        .s-name { font-weight: 500; font-size: 14px; color: var(--primary-text-color); }
        .s-id { font-size: 11px; color: var(--secondary-text-color); margin-top: 2px; }
        .add-sensor-row { display: flex; gap: 8px; align-items: center; }
        .color-picker { width: 44px; height: 44px; padding: 2px; border-radius: 4px; border: 1px solid var(--divider-color); background: var(--primary-background-color); cursor: pointer; }
        .btn-add-small { width:100%; padding:6px; background:transparent; border:1px dashed var(--primary-color); color:var(--primary-color); font-size:11px; font-weight:bold; text-transform:uppercase; cursor:pointer; border-radius:4px; }
        .btn-add-small:hover { background:rgba(var(--rgb-primary-color,0,115,207),0.1); }
        .btn-icon { width: 44px; height: 44px; background: var(--btn-color); color: white; border: none; border-radius: 4px; font-size: 20px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background-color 0.2s; }
        .btn-icon:hover { background-color: #757575; }
        .btn-icon.grey { background-color: #757575; }
        .btn-icon.grey:hover { background-color: #616161; }
        .btn-icon.transparent { background: transparent; color: var(--primary-text-color); border: 1px solid var(--divider-color); }
        .btn-icon.transparent:hover { background: rgba(0,0,0,0.05); }

        .sensor-list { display: flex; flex-direction: column; gap: 8px; max-height: 230px; overflow-y: auto; padding: 5px 0; margin-bottom: 0px; border-top: 1px solid var(--divider-color); padding-top: 15px; scrollbar-width: none; }
        .sensor-list::-webkit-scrollbar { display: none; }
        .sensor-item { display: flex; align-items: center; gap: 10px; background: rgba(128, 128, 128, 0.1); padding: 8px; border-radius: 4px; font-size: 13px; cursor: grab; transition: background 0.2s, border-color 0.2s, opacity 0.2s; border: 1px solid transparent; }
        .sensor-item:active { cursor: grabbing; }
        .sensor-item.dragging { opacity: 0.5; background: rgba(128,128,128,0.2); }
        .sensor-item.drag-over { border-top: 2px solid var(--accent-color); }
        .sensor-item.is-card { border-left: 2px solid orange; }
        .sensor-list-color-picker { width: 14px; height: 14px; border: none; padding: 0; background: none; cursor: pointer; border-radius: 50%; -webkit-appearance: none; appearance: none; overflow: hidden; flex-shrink: 0; }
        .sensor-list-color-picker::-webkit-color-swatch-wrapper { padding: 0; }
        .sensor-list-color-picker::-webkit-color-swatch { border: none; border-radius: 50%; padding: 0; }
        /* --- UPDATED CSS: Changed to pointer to indicate clickability --- */
        .sensor-name { flex-grow: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer; }
        .sensor-name:hover { text-decoration: underline; opacity: 0.8; }
        
        .remove-sensor { cursor: pointer; color: var(--error-color, #f44336); font-weight: bold; padding: 0 8px; }
        .saved-views-section { margin-top: 10px; border-top: 1px solid var(--divider-color); padding-top: 15px; }
        .saved-view-item { display: flex; align-items: center; gap: 10px; background: rgba(128, 128, 128, 0.1); padding: 10px; border-radius: 4px; font-size: 13px; margin-bottom: 8px; cursor: pointer; transition: background 0.2s; border: 1px solid transparent; }
        .saved-view-item:hover { background: rgba(128, 128, 128, 0.2); border-color: var(--divider-color); }
        .saved-view-item.shared { border-left: 3px solid var(--accent-color); background: rgba(3, 169, 244, 0.05); }
        .lock-icon { opacity: 0.5; font-size: 12px; padding: 0 8px; }
        .saved-view-name { flex-grow: 1; font-weight: 500; }
        .toggle-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px; cursor: pointer; }
        .toggle-label { font-size: 14px; color: var(--primary-text-color); }
        .toggle-switch { appearance: none; -webkit-appearance: none; width: 40px; height: 24px; flex-shrink: 0; background: rgba(120, 120, 128, 0.3); border-radius: 12px; position: relative; cursor: pointer; outline: none; border: none; transition: background 0.25s; }
        .toggle-switch:checked { background: var(--accent-color); }
        .toggle-switch::after { content: ''; position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: white; border-radius: 50%; transition: transform 0.25s; box-shadow: 0 1px 3px rgba(0,0,0,0.4); }
        .toggle-switch:checked::after { transform: translateX(16px); }
        .slider-row { margin-top: 15px; border-bottom: 1px solid var(--divider-color); padding: 5px 0 15px 0; display: none; }
        .slider-row.visible { display: block; }
        .slider-header { display: flex; justify-content: space-between; margin-bottom: 5px; font-size: 14px; }
        input[type=range] { -webkit-appearance: none; width: 100%; height: 6px; background: var(--divider-color); border-radius: 3px; outline: none; padding: 0; border: none; margin-top: 5px; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: var(--accent-color); cursor: pointer; transition: transform 0.1s; box-shadow: 0 1px 3px rgba(0,0,0,0.3); }
        input[type=range]::-webkit-slider-thumb:hover { transform: scale(1.1); }
        .mode-switch { display: flex; gap: 0; margin-bottom: 10px; border: 1px solid var(--divider-color); border-radius: 4px; overflow: hidden; flex-shrink: 0; }
        .mode-btn { flex: 1; padding: 10px; font-size: 13px; text-align: center; cursor: pointer; background: var(--card-background-color); color: var(--secondary-text-color); transition: all 0.2s; font-weight: 500; display: flex; align-items: center; justify-content: center; min-height: 40px; }
        .mode-btn:first-child { border-right: 1px solid var(--divider-color); }
        .mode-btn.active { background: var(--btn-color); color: white; }
        .custom-date-container { display: none; flex-direction: column; gap: 10px; }
        .custom-date-container.visible { display: flex; }
        #reset-zoom-btn { background-color: var(--card-background-color); color: var(--primary-text-color); border: 1px solid var(--divider-color); margin-top: 5px; padding: 8px; font-size: 12px; width: 100%; border-radius: 4px; cursor: pointer; display: none; }
        
        .main-content { flex-grow: 1; padding: 15px; display: flex; flex-direction: column; background-color: var(--primary-background-color); overflow-y: auto; position: relative; transition: all 0.3s ease; }
        
        .stats-wrapper { margin-top: 20px; display: flex; flex-wrap: wrap; gap: 15px; }
        .stats-card { padding: 10px 15px; background: var(--card-background-color); border-left: 5px solid transparent; border-radius: 4px; font-size: 0.9rem; box-shadow: 0 2px 5px rgba(0,0,0,0.05); border: 1px solid var(--divider-color); border-left-width: 5px; display: flex; flex-direction: column; gap: 2px; flex: 1 1 calc(19% - 15px); min-width: 200px; }
        .stats-header { font-weight: bold; color: var(--primary-text-color); margin-bottom: 5px; padding-bottom: 5px; border-bottom: 1px solid var(--divider-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .stats-row { display: flex; justify-content: space-between; align-items: center; padding: 3px 0; border-bottom: 1px solid rgba(128, 128, 128, 0.1); }
        .stats-row:last-child { border-bottom: none; }
        .stats-row span:first-child { color: var(--secondary-text-color); text-transform: uppercase; font-size: 0.8em; font-weight: 500; }
        .stats-row span:last-child { font-weight: 700; color: var(--primary-text-color); }
        .stats-main-val { font-size: 1.0em; color: var(--primary-text-color); font-weight: bold; }
        
        .chart-container-outer { width: 100%; height: 450px; min-height: 200px; position: relative; background: var(--card-background-color); border-radius: 8px; padding: 15px; box-sizing: border-box; box-shadow: 0 2px 10px rgba(0,0,0,0.05); border: 1px solid var(--divider-color); display: flex; flex-direction: column; }
        .canvas-wrapper { flex-grow: 1; position: relative; width: 100%; height: 100%; min-height: 400px; overflow: hidden; padding-top: 18px; }
        #resize-handle { height: 14px; width: 100%; background: var(--card-background-color); cursor: ns-resize; display: flex; align-items: center; justify-content: center; border-top: 1px solid var(--divider-color); margin-top: 5px; }
        .grip-lines { width: 30px; height: 3px; border-top: 1px solid var(--secondary-text-color); border-bottom: 1px solid var(--secondary-text-color); opacity: 0.5; }
        #resize-ghost { position: absolute; left: 40px; right: 40px; height: 4px; background-color: var(--accent-color); opacity: 0.5; z-index: 100; display: none; pointer-events: none; cursor: ns-resize; }
        
        /* --- REVERTED TO FLEX FOR STRETCH BEHAVIOR --- */
        .split-grid-wrapper { 
            display: flex;
            flex-wrap: wrap;
            gap: 10px; width: 100%; 
            align-items: stretch; /* WICHTIG: Stretch sorgt für gleiche Höhe */
        }
        
        /* --- CARD STYLE FIX FOR COLUMNS --- */
        .split-chart-card { 
            background: var(--card-background-color); 
            border: 1px solid var(--divider-color); 
            border-radius: 8px; padding: 15px; 
            box-shadow: 0 2px 5px rgba(0,0,0,0.05); 
            margin-bottom: 0; 
            overflow: hidden; /* Prevent chart overflow during updates */
            
            /* Change from fit-content to height 100% to fill flex height */
            height: auto; 
            display: flex; 
            flex-direction: column;
            
            /* CALCULATION: 100% / Cols, minus gap allowance */
            /* flex: grow shrink basis */
            /* shrink 0 PREVENTS crowding more than desired columns */
            flex: 1 0 calc((100% / var(--grid-cols, 1)) - 15px);
            min-width: 250px;
            
            transition: opacity 0.2s, border-color 0.2s; 
        }
        
        /* --- CUSTOM CARD CONTAINER --- */
        .split-card-container {
            display: flex;
            flex-direction: column;
            width: 100%; 
            flex-grow: 1;
            /* Do not hide overflow */
            overflow: visible; 
            /* Set minimal height to match charts */
            min-height: 200px;
            
            --ha-card-background: transparent;
            --ha-card-box-shadow: none;
            --ha-card-border-width: 0px;
        }
        
        .split-card-container > * {
            width: 100% !important;
            flex-grow: 1; 
            margin: 0 !important;
        }

        @media (max-width: 700px) { 
            .split-chart-card { flex-basis: 100%; } /* Force single column */
            .stats-wrapper { grid-template-columns: 1fr; } 
            .split-footer { flex-direction: column; padding-left: 15px; padding-right: 15px; }
            .split-stats-box { padding-left: 5px; padding-right: 5px; }
            .split-controls-box { width: 100%; flex-direction: row; border-left: none; border-top: 1px solid var(--divider-color); padding-left: 0; padding-top: 10px; }
            
            .doughnut-container-flex { flex-direction: column; }
            .doughnut-sidebar { width: 100% !important; padding: 0 15px !important; margin-top: 15px; box-sizing: border-box; }
            .doughnut-chart-wrap { min-width: 0 !important; width: 100% !important; }
            .flex-main-wrapper { flex-direction: column; }
            .main-chart-wrapper { width: 100% !important; flex: none !important; }
            .chart-container-outer { width: 100% !important; }
            .side-donut-wrapper { width: 100% !important; border-left: none !important; border-top: 1px solid var(--divider-color); padding-left: 0 !important; padding-top: 15px; }
        }
        
        .split-chart-card.dragging { opacity: 0.4; }
        .split-chart-card.drag-over { border: 2px dashed var(--accent-color); }
        .split-chart-header { font-weight: bold; font-size: 1.1em; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; }
        .drag-handle { cursor: grab; padding: 5px; color: var(--secondary-text-color); display: flex; align-items: center; justify-content: center; border-radius: 4px; transition: background 0.2s; margin-left: 10px; }
        .drag-handle:hover { background: rgba(128,128,128,0.1); color: var(--primary-text-color); }
        .drag-handle:active { cursor: grabbing; }
        .split-canvas-container { height: 300px; position: relative; width: 100%; overflow: hidden; }
        
        .split-footer { display: flex; gap: 20px; margin-top: 10px; align-items: stretch; border-top: 1px solid var(--divider-color); padding-top: 15px; }
        
        .split-stats-box { flex-grow: 1; background: transparent; border-radius: 0; padding: 5px 0; display: flex; flex-wrap: nowrap; gap: 8px; text-align: center; border: none; }
        .split-stats-box > div { flex: 1 1 0; min-width: 0; }
        .split-controls-box { width: auto; display: flex; flex-direction: row; gap: 5px; justify-content: flex-start; border-left: 1px solid var(--divider-color); padding-left: 15px; align-items: center; }
        .chart-toggle-btn { background: transparent; border: 1px solid var(--divider-color); color: var(--secondary-text-color); width: 32px; height: 32px; padding: 0; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
        .chart-toggle-btn:hover { background: rgba(0,0,0,0.05); color: var(--primary-text-color); }
        .chart-toggle-btn.active { background: var(--btn-color); color: white; border-color: var(--btn-color); }
        
        .stat-value { font-size: 1.2em; font-weight: 700; color: var(--primary-text-color); }
        .stat-label { font-size: 0.8em; color: var(--secondary-text-color); text-transform: uppercase; }
        .stat-current { font-size: 1.1em; font-weight: bold; }
        .stat-unit { font-size: 0.7em; font-weight: normal; opacity: 0.8; }
        
        .chart-overlay-btn { position: absolute; top: 10px; left: 10px; z-index: 10; background: transparent; border: 1px solid var(--divider-color); color: var(--secondary-text-color); border-radius: 4px; width: 36px; height: 36px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
        .chart-overlay-btn:hover { background: rgba(0,0,0,0.05); color: var(--primary-text-color); }
        .chart-overlay-btn.active { background: var(--btn-color); color: white; border-color: var(--btn-color); }

        .loader { border: 3px solid rgba(0,0,0,0.1); border-top: 3px solid var(--accent-color); border-radius: 50%; width: 24px; height: 24px; animation: spin 0.8s linear infinite; display: none; margin: 0; }
        .error-msg { color: #f44336; background: rgba(244, 67, 54, 0.1); padding: 10px; border-radius: 4px; margin-top: 10px; font-size: 13px; display: none; border: 1px solid rgba(244, 67, 54, 0.3); }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        
        .donut-legend-item { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0; font-size: 13px; cursor: pointer; transition: opacity 0.2s; padding: 8px 0; border-bottom: 1px solid var(--divider-color); }
        .donut-legend-item:last-child { border-bottom: none; }
        .donut-legend-item:hover { opacity: 0.8; }
        .donut-legend-item.hidden { text-decoration: line-through; opacity: 0.5; }
        .donut-legend-left { display: flex; align-items: center; gap: 10px; overflow: hidden; }
        .donut-legend-right { font-weight: bold; margin-left: 10px; white-space: nowrap; }
        .donut-legend-color { width: 12px; height: 12px; margin-right: 0; flex-shrink:0; border-radius: 50%; }

        .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 999; display: none; align-items: center; justify-content: center; }
        .modal-content { background: var(--card-background-color); padding: 20px; border-radius: 8px; width: 600px; max-width: 95%; max-height: 90vh; display: flex; flex-direction: column; border: 1px solid var(--divider-color); box-shadow: 0 4px 20px rgba(0,0,0,0.3); }
        .modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
        .modal-title { font-size: 1.2em; font-weight: bold; }
        .modal-close { cursor: pointer; font-size: 1.5em; line-height: 1; opacity: 0.7; }
        .modal-close:hover { opacity: 1; }
        
        .yaml-textarea { width: 100%; height: 120px; background: var(--secondary-background-color, #292929); color: var(--primary-text-color); border: 1px solid var(--divider-color); border-radius: 4px; padding: 10px; font-family: monospace; font-size: 12px; resize: none; margin-bottom: 5px; outline: none; }
        .modal-hint { font-size: 14px; color: orange; margin-bottom: 5px; font-weight: 500; }
        .copy-btn { background-color: var(--btn-color); color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: 500; width: 100%; margin-bottom: 15px; }
        .copy-btn:hover { background-color: #757575; }
        .copy-success-msg { color: var(--success-color, #4caf50); text-align: center; font-weight: bold; font-size: 12px; display: none; margin-bottom: 10px; }

        #toggle-sidebar-btn { background: transparent; border: none; cursor: pointer; color: var(--secondary-text-color); padding: 5px; display: flex; align-items: center; justify-content: center; border-radius: 4px; }
        #toggle-sidebar-btn:hover { background: rgba(128,128,128,0.1); color: var(--primary-text-color); }

        #open-sidebar-floating {
            position: absolute; top: 70px; left: 10px; z-index: 50;
            width: 40px; height: 40px;
            background: var(--card-background-color); border: 1px solid var(--divider-color); border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.1); color: var(--primary-text-color);
            transition: transform 0.2s, opacity 0.2s;
            opacity: 0; pointer-events: none; transform: scale(0.8);
        }
        :host(.sidebar-hidden) #open-sidebar-floating { opacity: 1; pointer-events: auto; transform: scale(1); }

        :host([card-mode]) {
            height: auto !important; display: block;
            background: var(--ha-card-background, var(--card-background-color, #1c1c1c));
            box-shadow: var(--ha-card-box-shadow, 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2));
            border-radius: var(--ha-card-border-radius, 12px); padding: 16px; color: var(--primary-text-color);
        }
        :host([card-mode]) .sidebar { display: none !important; }
        :host([card-mode]) #open-sidebar-floating { display: none !important; }
        :host([card-mode]) .mobile-top-header { display: none !important; }
        :host([card-mode]) .container { height: auto; display: block; overflow: visible; }
        :host([card-mode]) .main-content { padding: 0; overflow: visible; height: auto; background: transparent !important; }
        :host([card-mode]) .chart-container-outer, :host([card-mode]) .stats-card, :host([card-mode]) .split-chart-card { height: 350px; box-shadow: none; border: 1px solid rgba(128,128,128,0.2); background: transparent; margin-bottom: 10px; overflow: hidden; }
		:host([card-mode]) .split-grid-wrapper { gap: 20px; padding-bottom: 0; margin-bottom: 0; }
		:host([card-mode]) .split-chart-card:last-child { margin-bottom: 0; }
		:host([card-mode]) .split-controls-box { display: none; }
		:host([card-mode]) .drag-handle { display: none; }
		:host([card-mode]) .chart-container-outer { margin-bottom: 0px; }
        :host([card-mode]) .stats-card { height: auto; }
        :host([card-mode]) .side-donut-wrapper { background: transparent !important; box-shadow: none !important; border: 1px solid rgba(128,128,128,0.2) !important; }
        :host([card-mode]) .main-content { padding-bottom: 0; }
        :host([card-mode]) .split-canvas-container { overflow: hidden; }
      </style>

      <div class="mobile-top-header">
          <div style="display:flex; align-items:center; gap:20px;">
              <button id="ha-menu-btn" class="header-btn" title="${t('homeAssistantMenu')}">
                 <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
              </button>
              <div class="header-title">Detailed Charts</div>
          </div>
          <button id="mobile-open-sidebar-btn" class="header-btn" title="${t('openMenu')}">
             <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
          </button>
      </div>

      <div class="container">
        <div class="sidebar" id="sidebar-panel">
          <div class="sidebar-header">
              <h2>📉 Detailed Charts</h2>
              <div style="display:flex; align-items:center; gap:10px;">
                  <div class="loader" id="loader"></div>
                  <button id="toggle-sidebar-btn" title="${t('collapseSidebar')}">
                      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                      </svg>
                  </button>
              </div>
          </div>
          
          <div class="control-group">
            <label>${t('addSensor')}:</label>
            <input id="sensor-input" placeholder="${t('searchPlaceholder')}" autocomplete="off">
            <div id="suggestions" class="suggestions-list"></div>
          </div>
          <div class="control-group add-sensor-row">
             <input type="color" id="color-input" class="color-picker" value="#03a9f4" title="${t('selectColor')}">
             <button id="clear-all-btn" class="btn-icon grey" title="${t('deleteList')}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/></svg></button>
             <button id="reroll-colors-btn" class="btn-icon" title="${t('rerollColors')}" style="background-color:#6a4c93;font-size:16px;width:auto;padding:0 8px;">🎨</button>
             <button id="add-card-btn" class="btn-icon" title="${t('addCustomCard')}" style="font-size:12px;width:auto;padding:0 8px;">${t('addCard')}</button>
             
             <div style="margin-left:auto; display:flex; gap:5px;">
                <button id="copy-yaml-btn" class="btn-icon" title="${t('copyYaml')}" style="background-color:#455a64;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/></svg>
                </button>
                <button id="save-view-btn" class="btn-icon" title="${t('saveView')}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"/></svg></button>
             </div>
          </div>
          <div id="sensor-list-container" class="sensor-list"><div style="color: var(--secondary-text-color); font-size: 12px; text-align: center; padding: 10px;">${t('listEmpty')}</div></div>
          <div style="margin-top: 0px; border-top: 1px solid var(--divider-color); padding-top: 15px;">
              <div class="control-group" style="margin-top:5px;">
                  <label>${t('layout')}</label>
                  <select id="layout-select">
                      <option value="combined" selected>${t('combined')}</option>
                      <option value="split">${t('split')}</option>
                      <option value="mixed">${t('mixed')}</option>
                  </select>
              </div>
              <div class="toggle-row" id="toggle-stats-row" style="margin-top: 10px;"><span class="toggle-label">${t('showStats')}</span><input type="checkbox" class="toggle-switch" id="stats-switch" checked></div>
              <div class="toggle-row" id="toggle-donut-row" style="margin-top: 10px;"><span class="toggle-label">${t('donutSidebar')}</span><input type="checkbox" class="toggle-switch" id="donut-switch"></div>
              
              <div class="slider-row" id="zoom-slider-row" style="display:block;">
                  <div class="slider-header"><label>${t('zoomLevel')}</label><span id="zoom-value-display" style="font-weight:bold;">100%</span></div>
                  <input type="range" id="zoom-slider" min="0.5" max="1.5" step="0.1" value="1">
              </div>
              <div class="slider-row" id="grid-slider-row">
                  <div class="slider-header"><label>${t('gridColumns')}</label><span id="grid-value-display" style="font-weight:bold;">1</span></div>
                  <input type="range" id="grid-slider" min="1" max="4" step="1" value="1">
              </div>
              <div class="slider-row" id="tension-slider-row" style="display:block;">
                  <div class="slider-header"><label>${t('lineSmoothing')}</label><span id="tension-value-display" style="font-weight:bold;">4</span></div>
                  <input type="range" id="tension-slider" min="0" max="5" step="1" value="4">
              </div>
			  <div class="control-group" style="margin-top: 20px;">
				<label>${t('chartType')}</label>
				<select id="chart-type">
					<option value="line" selected>${t('line')}</option>
					<option value="bar">${t('bar')}</option>
					<option value="stackedArea">${t('stackedArea')}</option>
					<option value="doughnut">${t('doughnut')}</option>
					<option value="stepped">${t('stepped')}</option>
					<option value="scatter">${t('scatter')}</option>
				</select>
			  </div>
              <div class="control-group" style="margin-top:10px;">
                 <label>${t('refLinesSection')}</label>
                 <div id="ref-lines-list"></div>
                 <button id="add-ref-line-btn" class="btn-add-small" style="margin-top:6px;">${t('addRefLineBtn')}</button>
              </div>
              <div class="control-group" style="margin-top:10px;">
                 <label>${t('yMinLabel')}</label>
                 <input id="y-min-input" type="number" step="any" placeholder="${t('autoPlaceholder')}" title="${t('yMinTitle')}">
              </div>
              <div class="control-group" style="margin-top:10px;">
                 <label>${t('yMaxLabel')}</label>
                 <input id="y-max-input" type="number" step="any" placeholder="${t('autoPlaceholder')}" title="${t('yMaxTitle')}">
              </div>
              <div class="toggle-row" id="toggle-autoscale-row" style="margin-top: 10px;">
                 <span class="toggle-label">${t('autoScale')}</span>
                 <input type="checkbox" class="toggle-switch" id="autoscale-switch">
              </div>
              <div class="toggle-row" id="toggle-compare-year-row" style="margin-top: 10px;">
                 <span class="toggle-label">${t('compareYear')}</span>
                 <input type="checkbox" class="toggle-switch" id="compare-year-switch">
              </div>
			  <div class="toggle-row" id="toggle-fill-row"><span class="toggle-label">${t('fillArea')}</span><input type="checkbox" class="toggle-switch" id="fill-switch"></div>          
              <div class="toggle-row" id="toggle-axis-row" style="margin-top: 10px;">
                 <span class="toggle-label">${t('hideAxisLabels')}</span>
                 <input type="checkbox" class="toggle-switch" id="hide-axis-switch">
              </div>
              <div class="toggle-row" id="toggle-grid-row" style="margin-top: 10px;">
                 <span class="toggle-label">${t('hideGrid')}</span>
                 <input type="checkbox" class="toggle-switch" id="hide-grid-switch">
              </div>
              <div class="toggle-row" id="toggle-legend-row" style="margin-top: 10px;">
                 <span class="toggle-label">${t('hideLegend')}</span>
                 <input type="checkbox" class="toggle-switch" id="hide-legend-switch">
              </div>
              <div class="toggle-row" id="toggle-peaks-row" style="margin-top: 10px;">
                 <span class="toggle-label">${t('showPeaks')}</span>
                 <input type="checkbox" class="toggle-switch" id="peaks-switch">
              </div>
              <div class="toggle-row" id="toggle-nowline-row" style="margin-top: 10px;">
                 <span class="toggle-label">${t('showNowLine')}</span>
                 <input type="checkbox" class="toggle-switch" id="nowline-switch">
              </div>
              <div class="toggle-row" id="toggle-daynight-row" style="margin-top: 10px;">
                 <span class="toggle-label">${t('showDayNight')}</span>
                 <input type="checkbox" class="toggle-switch" id="daynight-switch">
              </div>
              <div class="toggle-row" id="toggle-stacked-row" style="margin-top: 10px; display:none;"><span class="toggle-label">${t('stackedBars')}</span><input type="checkbox" class="toggle-switch" id="stacked-switch"></div>
		  </div>
		  <div style="margin-top: 0px; border-top: 1px solid var(--divider-color); padding-top: 15px;">
			  <label style="margin-top:5px;">${t('timePeriodMode')}</label>
			  <div class="mode-switch">
				  <div class="mode-btn active" id="btn-mode-relative">${t('relative')}</div>
				  <div class="mode-btn" id="btn-mode-fixed">${t('calendar')}</div>
			  </div>
			  <div id="container-relative" class="control-group">
				<select id="time-select">
					<option value="1">${t('lastHour')}</option>
					<option value="3">${t('last3Hours')}</option>
					<option value="6">${t('last6Hours')}</option>
					<option value="12">${t('last12Hours')}</option>
					<option value="24" selected>${t('last24Hours')}</option>
					<option value="48">${t('last48Hours')}</option>
					<option value="72">${t('last3Days')}</option>
					<option value="168">${t('last7Days')}</option>
					<option value="720">${t('last30Days')}</option>
					<option value="2160">${t('last3Months')}</option>
					<option value="8760">${t('lastYear')}</option>
				</select>
			  </div>
			  <div id="container-fixed" class="custom-date-container">
				 <div><label>${t('from')}</label><input type="datetime-local" id="date-start"></div>
				 <div><label>${t('to')}</label><input type="datetime-local" id="date-end"></div>
			  </div>
			  <button id="reset-zoom-btn">${t('resetZoom')}</button>
			  <div class="control-group" style="margin-top:15px;">
				 <label>${t('dateFormat')}</label>
				 <select id="date-format-select">
					<option value="dmy">${t('dateFormatDMY')}</option>
					<option value="mdy">${t('dateFormatMDY')}</option>
				 </select>
			  </div>
		  </div>	  
          <div class="saved-views-section"><label>${t('savedViews')}</label><div id="saved-views-container"></div></div>
          <div class="error-msg" id="error-msg"></div>
          <div class="panel-version" style="margin-top:auto; border-top:1px solid var(--divider-color); padding-top:10px; text-align:center; font-size:11px; letter-spacing:0.5px; color:var(--secondary-text-color);">${PANEL_VERSION}</div>
        </div>
        
        <div class="main-content" id="main-content-area"></div>

        <button id="open-sidebar-floating" title="${t('openMenu')}">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
        </button>

        <div class="modal-overlay" id="export-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="modal-title">${t('codeExport')}</span>
                    <span class="modal-close" id="close-modal-btn">✕</span>
                </div>
                <div class="modal-hint">${t('yamlHint')}</div>
                <textarea class="yaml-textarea" id="yaml-export-area" readonly></textarea>
                <button class="copy-btn" id="copy-yaml-btn-action">${t('copy')}</button>
                <div class="copy-success-msg" id="msg-yaml">${t('copySuccess')}</div>
                <div class="modal-hint" style="margin-top:10px;">${t('jsonHint')}</div>
                <textarea class="yaml-textarea" id="json-export-area" readonly></textarea>
                <button class="copy-btn" id="copy-json-btn-action">${t('copy')}</button>
                <div class="copy-success-msg" id="msg-json">${t('copySuccess')}</div>
            </div>
        </div>

        <div class="modal-overlay" id="import-card-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="modal-title">${t('customCardImport')}</span>
                    <span class="modal-close" id="close-import-modal-btn">✕</span>
                </div>
                <div class="modal-hint">${t('importHint')}</div>
                <textarea class="yaml-textarea" id="card-import-area" style="height: 300px;"></textarea>
                <button class="copy-btn" id="import-card-confirm-btn" style="margin-top:10px;">${t('addCardBtn')}</button>
            </div>
        </div>
      </div>
    `;
}
