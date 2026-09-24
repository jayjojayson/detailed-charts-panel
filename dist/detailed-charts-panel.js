/* lang-en.js - English translations */

const en = {
    // Sidebar Menu
    addSensor: "Add Sensor",
    searchPlaceholder: "Type to search...",
    clearAll: "Clear sensor list",
    addCard: "Card +",
    copyYaml: "Copy YAML for dashboard",
    saveView: "Save view",
    listEmpty: "List empty.",
    layout: "Layout (View)",
    combined: "Combined",
    split: "Split (Grid)",
    mixed: "Mixed (Both)",
    showStats: "Show statistics",
    donutSidebar: "Donut Sidebar",
    zoomLevel: "Zoom Level",
    gridColumns: "Grid Columns",
    lineSmoothing: "Line Smoothing (0-5)",
    chartType: "Chart Type (Global):",
    line: "Line (Curve)",
    bar: "Bar (Chart)",
    doughnut: "Doughnut (Distribution)",
    stepped: "Stepped",
    scatter: "Scatter (Points)",
    stackedArea: "Stacked Area",
    refLinesSection: "Reference Lines",
    refLineValue: "Value",
    refLineAlias: "Label",
    addRefLineBtn: "+ ADD REFERENCE LINE",
    yMinLabel: "Y-Axis Min",
    yMaxLabel: "Y-Axis Max",
    yMinTitle: "Minimum Y-axis value. Leave empty for autoscale.",
    yMaxTitle: "Maximum Y-axis value. Leave empty for autoscale.",
    autoPlaceholder: "auto",
    autoScale: "Auto-Scale (W ➡ kW)",
    compareYear: "Compare w/ prev. Year",
    fillArea: "Fill area",
    hideAxisLabels: "Hide axis labels",
    hideGrid: "Hide gridlines",
    hideLegend: "Hide legend",
    hideMonoBtn: "Hide highlight min/max button",
    dateFormat: "Date format",
    dateFormatDMY: "Day.Month (31.12)",
    dateFormatMDY: "Month/Day (12/31)",
    stackedBars: "Stacked Bars",
    timePeriodMode: "Time Period Mode:",
    relative: "Relative",
    calendar: "Calendar",
    resetZoom: "🔍 Reset Zoom",
    savedViews: "Saved Views",

    // Time periods
    lastHour: "Last 1 Hour",
    last3Hours: "Last 3 Hours",
    last6Hours: "Last 6 Hours",
    last12Hours: "Last 12 Hours",
    last24Hours: "Last 24 Hours",
    last48Hours: "Last 48 Hours",
    last3Days: "Last 3 Days",
    last7Days: "Last 7 Days",
    last30Days: "Last 30 Days (Month)",
    last3Months: "Last 3 Months",
    lastYear: "Last Year",
    from: "From:",
    to: "To:",

    // Stat labels
    min: "Min",
    max: "Max",
    avg: "Avg",
    current: "CURRENT",
    sum: "SUM",

    // Modal texts
    codeExport: "Code Export",
    yamlHint: "This code creates a card (yaml - copy for dashboard).",
    copy: "Copy",
    copySuccess: "Copied successfully!",
    jsonHint: 'Here you can find the JSON code for the <b>detailed-charts-views.js</b> file. (See Wiki!)',
    customCardImport: "Custom Card Import",
    importHint: "Paste the YAML code of your custom card here.",
    addCardBtn: "Add Card",

    // Alerts & errors
    copyFailed: "Copy failed.",
    noSensorsSelected: "No sensors selected.",
    sensorAlreadyInList: "Sensor is already in the list.",
    addSensorsFirst: "Please add sensors first.",
    viewNamePrompt: "Name for this LOCAL view:",
    deleteViewConfirm: "Really delete view?",
    globalViewCantDelete: "Global views can only be deleted in the JS file.",
    clearAllConfirm: "Delete all sensors from the list?",
    endDateAfterStart: "End date must be after start date.",
    scatterOnly24h: "Scatter only <= 24h.",
    renameSensorPrompt: "New name for the sensor:",

    // Tooltips & titles
    moveHandle: "Move",
    showValues: "Show values",
    monochromeHighlight: "Highlight Min/Max (Monochrome)",
    collapseSidebar: "Collapse sidebar",
    openMenu: "Open menu",
    homeAssistantMenu: "Home Assistant Menu",
    selectColor: "Select color",
    deleteList: "Delete sensor list",
    addCustomCard: "Add custom card",
    clickToRename: "Click to rename: ",
    globalView: "Global view (in file)",
    delete: "Delete",
    show: "Show",
    hide: "Hide",
    remove: "Remove",
    noViewsSaved: "None saved.",
    error: "Error",
    criticalError: "Error: ",
    loading: "Loading...",

    // Editor specific
    visual: "Visual",
    yaml: "YAML",
    presentation: "Presentation",
    timePeriod: "Time Period",
    options: "Options",
    sensors: "Sensors",
    chartTypeLabel: "Chart Type",
    layoutLabel: "Layout",
    zoomLabel: "Zoom",
    columnsLabel: "Columns",
    refLinesLabel: "Reference Lines",
    modeLabel: "Mode",
    windowLabel: "Window",
    startLabel: "Start",
    endLabel: "End",
    fillAreaLabel: "Fill area",
    statisticsLabel: "Statistics",
    sensorLabel: "Sensor",
    aliasLabel: "Alias",
    aliasPlaceholder: "Display name (leave empty for default)",
    addSensorBtn: "+ ADD SENSOR",
    rerollColors: "Shuffle colors",
    showPeaks: "Peak markers (min/max/current)",
    showNowLine: "Now line",
    showDayNight: "Day/night shading",
    peakMax: "Max",
    peakMin: "Min",
    peakLast: "Now",
    nowLabel: "Now",
    area: "Area",
    device: "Device",
    addAllInGroup: "Add all sensors",
    addSelected: "Add selection",
};

/* lang-de.js - German translations */

const de = {
    // Sidebar Menu
    addSensor: "Sensor hinzufügen",
    searchPlaceholder: "Tippen zum Suchen...",
    clearAll: "Sensorliste löschen",
    addCard: "Card +",
    copyYaml: "YAML für Dashboard kopieren",
    saveView: "Ansicht speichern",
    listEmpty: "Liste leer.",
    layout: "Ansicht (Layout)",
    combined: "Kombiniert",
    split: "Getrennt (Grid)",
    mixed: "Mixed (Beides)",
    showStats: "Statistiken anzeigen",
    donutSidebar: "Donut Sidebar",
    zoomLevel: "Zoom Stufe",
    gridColumns: "Spalten (Grid)",
    lineSmoothing: "Linien-Glättung (0-5)",
    chartType: "Darstellung (Global):",
    line: "Line (Kurve)",
    bar: "Bar (Balken)",
    doughnut: "Donut (Verteilung)",
    stepped: "Stepped (Stufen)",
    scatter: "Scatter (Punkte)",
    stackedArea: "Stacked Area (gestapelt)",
    refLinesSection: "Referenzlinien",
    refLineValue: "Wert",
    refLineAlias: "Bezeichnung",
    addRefLineBtn: "+ REFERENZLINIE HINZUFÜGEN",
    yMinLabel: "Y-Achse Min",
    yMaxLabel: "Y-Achse Max",
    yMinTitle: "Minimalwert Y-Achse. Leer lassen für Auto-Skalierung.",
    yMaxTitle: "Maximalwert Y-Achse. Leer lassen für Auto-Skalierung.",
    autoPlaceholder: "auto",
    autoScale: "Auto-Scale (W ➡ kW)",
    compareYear: "Vorjahresvergleich",
    fillArea: "Fläche füllen",
    hideAxisLabels: "Achsen-Text ausblenden",
    hideGrid: "Gitterlinien ausblenden",
    hideLegend: "Legende ausblenden",
    hideMonoBtn: "Min/Max-Hervorhebungsschaltfläche ausblenden",
    dateFormat: "Datumsformat",
    dateFormatDMY: "Tag.Monat (31.12)",
    dateFormatMDY: "Monat/Tag (12/31)",
    stackedBars: "Stacked Bars",
    timePeriodMode: "Zeitraum Modus:",
    relative: "Relativ",
    calendar: "Kalender",
    resetZoom: "🔍 Zoom zurücksetzen",
    savedViews: "Gespeicherte Ansichten",

    // Time periods
    lastHour: "Letzte 1 Stunde",
    last3Hours: "Letzte 3 Stunden",
    last6Hours: "Letzte 6 Stunden",
    last12Hours: "Letzte 12 Stunden",
    last24Hours: "Letzte 24 Stunden",
    last48Hours: "Letzte 48 Stunden",
    last3Days: "Letzte 3 Tage",
    last7Days: "Letzte 7 Tage",
    last30Days: "Letzte 30 Tage (Monat)",
    last3Months: "Letzte 3 Monate",
    lastYear: "Letztes Jahr",
    from: "Von:",
    to: "Bis:",

    // Stat labels
    min: "Min",
    max: "Max",
    avg: "Ø",
    current: "AKTUELL",
    sum: "SUMME",

    // Modal texts
    codeExport: "Code Export",
    yamlHint: "Dieser Code erstellt eine Card (yaml - Kopie für das Dashboard).",
    copy: "Kopieren",
    copySuccess: "Kopieren erfolgreich!",
    jsonHint: 'Hier findest du den JSON-Code für die <b>detailed-charts-views.js</b> Datei. (Siehe Wiki!)',
    customCardImport: "Custom Card Import",
    importHint: "Füge hier den YAML Code deiner Custom Card ein.",
    addCardBtn: "Card hinzufügen",

    // Alerts & errors
    copyFailed: "Kopieren fehlgeschlagen.",
    noSensorsSelected: "Keine Sensoren ausgewählt.",
    sensorAlreadyInList: "Sensor ist bereits in der Liste.",
    addSensorsFirst: "Bitte erst Sensoren hinzufügen.",
    viewNamePrompt: "Name für diese LOKALE Ansicht:",
    deleteViewConfirm: "Ansicht wirklich löschen?",
    globalViewCantDelete: "Globale Ansichten können nur in der JS Datei gelöscht werden.",
    clearAllConfirm: "Alle Sensoren aus der Liste löschen?",
    endDateAfterStart: "Enddatum muss nach Startdatum liegen.",
    scatterOnly24h: "Scatter nur <= 24h.",
    renameSensorPrompt: "Neuer Name für den Sensor:",

    // Tooltips & titles
    moveHandle: "Verschieben",
    showValues: "Werte anzeigen",
    monochromeHighlight: "Min/Max hervorheben (Monochrom)",
    collapseSidebar: "Seitenleiste einklappen",
    openMenu: "Menü öffnen",
    homeAssistantMenu: "Home Assistant Menü",
    selectColor: "Farbe wählen",
    deleteList: "Sensorliste löschen",
    addCustomCard: "Custom Card hinzufügen",
    clickToRename: "Klicken zum Umbenennen: ",
    globalView: "Globale Ansicht (in Datei)",
    delete: "Löschen",
    show: "Einblenden",
    hide: "Ausblenden",
    remove: "Entfernen",
    noViewsSaved: "Keine gespeichert.",
    error: "Fehler",
    criticalError: "Fehler: ",
    loading: "Laden...",

    // Editor specific
    visual: "Visuell",
    yaml: "YAML",
    presentation: "Darstellung",
    timePeriod: "Zeitraum",
    options: "Optionen",
    sensors: "Sensoren",
    chartTypeLabel: "Chart Typ",
    layoutLabel: "Layout",
    zoomLabel: "Zoom",
    columnsLabel: "Spalten",
    refLinesLabel: "Referenzlinien",
    modeLabel: "Modus",
    windowLabel: "Fenster",
    startLabel: "Start",
    endLabel: "Ende",
    fillAreaLabel: "Fläche füllen",
    statisticsLabel: "Statistiken",
    sensorLabel: "Sensor",
    aliasLabel: "Alias",
    aliasPlaceholder: "Anzeigename (leer für Standard)",
    addSensorBtn: "+ SENSOR HINZUFÜGEN",
    rerollColors: "Farben neu würfeln",
    showPeaks: "Peak-Marker (Min/Max/Aktuell)",
    showNowLine: "Jetzt-Linie",
    showDayNight: "Tag/Nacht-Schattierung",
    peakMax: "Max",
    peakMin: "Min",
    peakLast: "Akt.",
    nowLabel: "Jetzt",
    area: "Bereich",
    device: "Gerät",
    addAllInGroup: "Alle Sensoren hinzufügen",
    addSelected: "Auswahl hinzufügen",
};

/* detailed-charts-panel-langs.js */

const translations = { en, de };
let currentLanguage = 'en';

function setLanguage(lang) {
    if (!lang) return;
    // Handle cases like "en-US", "de-DE" by taking the first part
    const shortLang = lang.split('-')[0];
    currentLanguage = translations[shortLang] ? shortLang : 'en';
}

function t(key) {
    // 1. Try current language
    const val = translations[currentLanguage]?.[key];
    if (val !== undefined) return val;

    // 2. Fallback to English
    const fallback = translations.en?.[key];
    if (fallback !== undefined) return fallback;

    // 3. Fallback to key itself
    return key;
}

/* detailed-charts-panel-function.js */


const PANEL_VERSION = 'v2.8';

/* --- HELPER FUNCTIONS --- */

function cleanName(name) {
    if (!name) return '';
    return name.replace(/^(sensor|binary_sensor|input_number)\./, '');
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
function generatePalette(count, startHue = 0) {
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
function paletteColorAt(index) {
    return generatePalette(index + 1)[index];
}

function hexToRgba(hex, alpha) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) { c = [c[0], c[0], c[1], c[1], c[2], c[2]]; }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
    }
    return hex;
}

function calculateEnergySum(values, isAggregated) {
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
function isCumulativeSensor(unit, stateClass) {
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

function processData(history, type, unit, startTime = null, cumulative = null) {
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

function createStatsCard(conf, min, avg, max, curr, unit, label, sumVal = null) {
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

function getSplitCardHTML(index, color, name, isCard) {
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

function getSplitStatsHTML(displayLabel, color, displayVal, unit, min, avg, max, sumVal = null) {
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

function getCombinedChartHTML(showStats) {
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

function getCombinedDoughnutHTML() {
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

function getSideBySideHTML(showStats) {
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

function getPanelTemplate() {
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

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			var isInstance = false;
      try {
        isInstance = this instanceof a;
      } catch {}
			if (isInstance) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var chart_umd_min$1 = {exports: {}};

/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
var chart_umd_min = chart_umd_min$1.exports;

var hasRequiredChart_umd_min;

function requireChart_umd_min () {
	if (hasRequiredChart_umd_min) return chart_umd_min$1.exports;
	hasRequiredChart_umd_min = 1;
	(function (module, exports$1) {
		!function(t,e){module.exports=e();}(chart_umd_min,(function(){var t=Object.freeze({__proto__:null,get Colors(){return Jo},get Decimation(){return ta},get Filler(){return ba},get Legend(){return Ma},get SubTitle(){return Pa},get Title(){return ka},get Tooltip(){return Na}});function e(){}const i=(()=>{let t=0;return ()=>t++})();function s(t){return null==t}function n(t){if(Array.isArray&&Array.isArray(t))return  true;const e=Object.prototype.toString.call(t);return "[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}function o(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}function a(t){return ("number"==typeof t||t instanceof Number)&&isFinite(+t)}function r(t,e){return a(t)?t:e}function l(t,e){return void 0===t?e:t}const h=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100:+t/e,c=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function d(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function u(t,e,i,s){let a,r,l;if(n(t))if(r=t.length,s)for(a=r-1;a>=0;a--)e.call(i,t[a],a);else for(a=0;a<r;a++)e.call(i,t[a],a);else if(o(t))for(l=Object.keys(t),r=l.length,a=0;a<r;a++)e.call(i,t[l[a]],l[a]);}function f(t,e){let i,s,n,o;if(!t||!e||t.length!==e.length)return  false;for(i=0,s=t.length;i<s;++i)if(n=t[i],o=e[i],n.datasetIndex!==o.datasetIndex||n.index!==o.index)return  false;return  true}function g(t){if(n(t))return t.map(g);if(o(t)){const e=Object.create(null),i=Object.keys(t),s=i.length;let n=0;for(;n<s;++n)e[i[n]]=g(t[i[n]]);return e}return t}function p(t){return  -1===["__proto__","prototype","constructor"].indexOf(t)}function m(t,e,i,s){if(!p(t))return;const n=e[t],a=i[t];o(n)&&o(a)?x(n,a,s):e[t]=g(a);}function x(t,e,i){const s=n(e)?e:[e],a=s.length;if(!o(t))return t;const r=(i=i||{}).merger||m;let l;for(let e=0;e<a;++e){if(l=s[e],!o(l))continue;const n=Object.keys(l);for(let e=0,s=n.length;e<s;++e)r(n[e],t,l,i);}return t}function b(t,e){return x(t,e,{merger:_})}function _(t,e,i){if(!p(t))return;const s=e[t],n=i[t];o(s)&&o(n)?b(s,n):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=g(n));}const y={"":t=>t,x:t=>t.x,y:t=>t.y};function v(t){const e=t.split("."),i=[];let s="";for(const t of e)s+=t,s.endsWith("\\")?s=s.slice(0,-1)+".":(i.push(s),s="");return i}function M(t,e){const i=y[e]||(y[e]=function(t){const e=v(t);return t=>{for(const i of e){if(""===i)break;t=t&&t[i];}return t}}(e));return i(t)}function w(t){return t.charAt(0).toUpperCase()+t.slice(1)}const k=t=>void 0!==t,S=t=>"function"==typeof t,P=(t,e)=>{if(t.size!==e.size)return  false;for(const i of t)if(!e.has(i))return  false;return  true};function D(t){return "mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}const C=Math.PI,O=2*C,A=O+C,T=Number.POSITIVE_INFINITY,L=C/180,E=C/2,R=C/4,I=2*C/3,z=Math.log10,F=Math.sign;function V(t,e,i){return Math.abs(t-e)<i}function B(t){const e=Math.round(t);t=V(t,e,t/1e3)?e:t;const i=Math.pow(10,Math.floor(z(t))),s=t/i;return (s<=1?1:s<=2?2:s<=5?5:10)*i}function W(t){const e=[],i=Math.sqrt(t);let s;for(s=1;s<i;s++)t%s==0&&(e.push(s),e.push(t/s));return i===(0|i)&&e.push(i),e.sort(((t,e)=>t-e)).pop(),e}function N(t){return !function(t){return "symbol"==typeof t||"object"==typeof t&&null!==t&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function H(t,e){const i=Math.round(t);return i-e<=t&&i+e>=t}function j(t,e,i){let s,n,o;for(s=0,n=t.length;s<n;s++)o=t[s][i],isNaN(o)||(e.min=Math.min(e.min,o),e.max=Math.max(e.max,o));}function $(t){return t*(C/180)}function Y(t){return t*(180/C)}function U(t){if(!a(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}function X(t,e){const i=e.x-t.x,s=e.y-t.y,n=Math.sqrt(i*i+s*s);let o=Math.atan2(s,i);return o<-0.5*C&&(o+=O),{angle:o,distance:n}}function q(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function K(t,e){return (t-e+A)%O-C}function G(t){return (t%O+O)%O}function J(t,e,i,s){const n=G(t),o=G(e),a=G(i),r=G(o-n),l=G(a-n),h=G(n-o),c=G(n-a);return n===o||n===a||s&&o===a||r>l&&h<c}function Z(t,e,i){return Math.max(e,Math.min(i,t))}function Q(t){return Z(t,-32768,32767)}function tt(t,e,i,s=1e-6){return t>=Math.min(e,i)-s&&t<=Math.max(e,i)+s}function et(t,e,i){i=i||(i=>t[i]<e);let s,n=t.length-1,o=0;for(;n-o>1;)s=o+n>>1,i(s)?o=s:n=s;return {lo:o,hi:n}}const it=(t,e,i,s)=>et(t,i,s?s=>{const n=t[s][e];return n<i||n===i&&t[s+1][e]===i}:s=>t[s][e]<i),st=(t,e,i)=>et(t,i,(s=>t[s][e]>=i));function nt(t,e,i){let s=0,n=t.length;for(;s<n&&t[s]<e;)s++;for(;n>s&&t[n-1]>i;)n--;return s>0||n<t.length?t.slice(s,n):t}const ot=["push","pop","shift","splice","unshift"];function at(t,e){t._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:true,enumerable:false,value:{listeners:[e]}}),ot.forEach((e=>{const i="_onData"+w(e),s=t[e];Object.defineProperty(t,e,{configurable:true,enumerable:false,value(...e){const n=s.apply(this,e);return t._chartjs.listeners.forEach((t=>{"function"==typeof t[i]&&t[i](...e);})),n}});})));}function rt(t,e){const i=t._chartjs;if(!i)return;const s=i.listeners,n=s.indexOf(e);-1!==n&&s.splice(n,1),s.length>0||(ot.forEach((e=>{delete t[e];})),delete t._chartjs);}function lt(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const ht="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;function ct(t,e){let i=[],s=false;return function(...n){i=n,s||(s=true,ht.call(window,(()=>{s=false,t.apply(e,i);})));}}function dt(t,e){let i;return function(...s){return e?(clearTimeout(i),i=setTimeout(t,e,s)):t.apply(this,s),e}}const ut=t=>"start"===t?"left":"end"===t?"right":"center",ft=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2,gt=(t,e,i,s)=>t===(s?"left":"right")?i:"center"===t?(e+i)/2:e;function pt(t,e,i){const n=e.length;let o=0,a=n;if(t._sorted){const{iScale:r,vScale:l,_parsed:h}=t,c=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null,d=r.axis,{min:u,max:f,minDefined:g,maxDefined:p}=r.getUserBounds();if(g){if(o=Math.min(it(h,d,u).lo,i?n:it(e,d,r.getPixelForValue(u)).lo),c){const t=h.slice(0,o+1).reverse().findIndex((t=>!s(t[l.axis])));o-=Math.max(0,t);}o=Z(o,0,n-1);}if(p){let t=Math.max(it(h,r.axis,f,true).hi+1,i?0:it(e,d,r.getPixelForValue(f),true).hi+1);if(c){const e=h.slice(t-1).findIndex((t=>!s(t[l.axis])));t+=Math.max(0,e);}a=Z(t,o,n)-o;}else a=n-o;}return {start:o,count:a}}function mt(t){const{xScale:e,yScale:i,_scaleRanges:s}=t,n={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!s)return t._scaleRanges=n,true;const o=s.xmin!==e.min||s.xmax!==e.max||s.ymin!==i.min||s.ymax!==i.max;return Object.assign(s,n),o}class xt{constructor(){this._request=null,this._charts=new Map,this._running=false,this._lastDate=void 0;}_notify(t,e,i,s){const n=e.listeners[s],o=e.duration;n.forEach((s=>s({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)})));}_refresh(){this._request||(this._running=true,this._request=ht.call(window,(()=>{this._update(),this._request=null,this._running&&this._refresh();})));}_update(t=Date.now()){let e=0;this._charts.forEach(((i,s)=>{if(!i.running||!i.items.length)return;const n=i.items;let o,a=n.length-1,r=false;for(;a>=0;--a)o=n[a],o._active?(o._total>i.duration&&(i.duration=o._total),o.tick(t),r=true):(n[a]=n[n.length-1],n.pop());r&&(s.draw(),this._notify(s,i,t,"progress")),n.length||(i.running=false,this._notify(s,i,t,"complete"),i.initial=false),e+=n.length;})),this._lastDate=t,0===e&&(this._running=false);}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:false,initial:true,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i);}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e);}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=true,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh());}running(t){if(!this._running)return  false;const e=this._charts.get(t);return !!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete");}remove(t){return this._charts.delete(t)}}var bt=new xt;
		/*!
		 * @kurkle/color v0.3.2
		 * https://github.com/kurkle/color#readme
		 * (c) 2023 Jukka Kurkela
		 * Released under the MIT License
		 */function _t(t){return t+.5|0}const yt=(t,e,i)=>Math.max(Math.min(t,i),e);function vt(t){return yt(_t(2.55*t),0,255)}function Mt(t){return yt(_t(255*t),0,255)}function wt(t){return yt(_t(t/2.55)/100,0,1)}function kt(t){return yt(_t(100*t),0,100)}const St={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Pt=[..."0123456789ABCDEF"],Dt=t=>Pt[15&t],Ct=t=>Pt[(240&t)>>4]+Pt[15&t],Ot=t=>(240&t)>>4==(15&t);function At(t){var e=(t=>Ot(t.r)&&Ot(t.g)&&Ot(t.b)&&Ot(t.a))(t)?Dt:Ct;return t?"#"+e(t.r)+e(t.g)+e(t.b)+((t,e)=>t<255?e(t):"")(t.a,e):void 0}const Tt=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Lt(t,e,i){const s=e*Math.min(i,1-i),n=(e,n=(e+t/30)%12)=>i-s*Math.max(Math.min(n-3,9-n,1),-1);return [n(0),n(8),n(4)]}function Et(t,e,i){const s=(s,n=(s+t/60)%6)=>i-i*e*Math.max(Math.min(n,4-n,1),0);return [s(5),s(3),s(1)]}function Rt(t,e,i){const s=Lt(t,1,.5);let n;for(e+i>1&&(n=1/(e+i),e*=n,i*=n),n=0;n<3;n++)s[n]*=1-e-i,s[n]+=e;return s}function It(t){const e=t.r/255,i=t.g/255,s=t.b/255,n=Math.max(e,i,s),o=Math.min(e,i,s),a=(n+o)/2;let r,l,h;return n!==o&&(h=n-o,l=a>.5?h/(2-n-o):h/(n+o),r=function(t,e,i,s,n){return t===n?(e-i)/s+(e<i?6:0):e===n?(i-t)/s+2:(t-e)/s+4}(e,i,s,h,n),r=60*r+.5),[0|r,l||0,a]}function zt(t,e,i,s){return (Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,s)).map(Mt)}function Ft(t,e,i){return zt(Lt,t,e,i)}function Vt(t){return (t%360+360)%360}function Bt(t){const e=Tt.exec(t);let i,s=255;if(!e)return;e[5]!==i&&(s=e[6]?vt(+e[5]):Mt(+e[5]));const n=Vt(+e[2]),o=+e[3]/100,a=+e[4]/100;return i="hwb"===e[1]?function(t,e,i){return zt(Rt,t,e,i)}(n,o,a):"hsv"===e[1]?function(t,e,i){return zt(Et,t,e,i)}(n,o,a):Ft(n,o,a),{r:i[0],g:i[1],b:i[2],a:s}}const Wt={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Nt={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let Ht;function jt(t){Ht||(Ht=function(){const t={},e=Object.keys(Nt),i=Object.keys(Wt);let s,n,o,a,r;for(s=0;s<e.length;s++){for(a=r=e[s],n=0;n<i.length;n++)o=i[n],r=r.replace(o,Wt[o]);o=parseInt(Nt[a],16),t[r]=[o>>16&255,o>>8&255,255&o];}return t}(),Ht.transparent=[0,0,0,0]);const e=Ht[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}const $t=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;const Yt=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,Ut=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function Xt(t,e,i){if(t){let s=It(t);s[e]=Math.max(0,Math.min(s[e]+s[e]*i,0===e?360:1)),s=Ft(s),t.r=s[0],t.g=s[1],t.b=s[2];}}function qt(t,e){return t?Object.assign(e||{},t):t}function Kt(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Mt(t[3]))):(e=qt(t,{r:0,g:0,b:0,a:1})).a=Mt(e.a),e}function Gt(t){return "r"===t.charAt(0)?function(t){const e=$t.exec(t);let i,s,n,o=255;if(e){if(e[7]!==i){const t=+e[7];o=e[8]?vt(t):yt(255*t,0,255);}return i=+e[1],s=+e[3],n=+e[5],i=255&(e[2]?vt(i):yt(i,0,255)),s=255&(e[4]?vt(s):yt(s,0,255)),n=255&(e[6]?vt(n):yt(n,0,255)),{r:i,g:s,b:n,a:o}}}(t):Bt(t)}class Jt{constructor(t){if(t instanceof Jt)return t;const e=typeof t;let i;var s,n,o;"object"===e?i=Kt(t):"string"===e&&(o=(s=t).length,"#"===s[0]&&(4===o||5===o?n={r:255&17*St[s[1]],g:255&17*St[s[2]],b:255&17*St[s[3]],a:5===o?17*St[s[4]]:255}:7!==o&&9!==o||(n={r:St[s[1]]<<4|St[s[2]],g:St[s[3]]<<4|St[s[4]],b:St[s[5]]<<4|St[s[6]],a:9===o?St[s[7]]<<4|St[s[8]]:255})),i=n||jt(t)||Gt(t)),this._rgb=i,this._valid=!!i;}get valid(){return this._valid}get rgb(){var t=qt(this._rgb);return t&&(t.a=wt(t.a)),t}set rgb(t){this._rgb=Kt(t);}rgbString(){return this._valid?(t=this._rgb)&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${wt(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`):void 0;var t;}hexString(){return this._valid?At(this._rgb):void 0}hslString(){return this._valid?function(t){if(!t)return;const e=It(t),i=e[0],s=kt(e[1]),n=kt(e[2]);return t.a<255?`hsla(${i}, ${s}%, ${n}%, ${wt(t.a)})`:`hsl(${i}, ${s}%, ${n}%)`}(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let n;const o=e===n?.5:e,a=2*o-1,r=i.a-s.a,l=((a*r==-1?a:(a+r)/(1+a*r))+1)/2;n=1-l,i.r=255&l*i.r+n*s.r+.5,i.g=255&l*i.g+n*s.g+.5,i.b=255&l*i.b+n*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i;}return this}interpolate(t,e){return t&&(this._rgb=function(t,e,i){const s=Ut(wt(t.r)),n=Ut(wt(t.g)),o=Ut(wt(t.b));return {r:Mt(Yt(s+i*(Ut(wt(e.r))-s))),g:Mt(Yt(n+i*(Ut(wt(e.g))-n))),b:Mt(Yt(o+i*(Ut(wt(e.b))-o))),a:t.a+i*(e.a-t.a)}}(this._rgb,t._rgb,e)),this}clone(){return new Jt(this.rgb)}alpha(t){return this._rgb.a=Mt(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=_t(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Xt(this._rgb,2,t),this}darken(t){return Xt(this._rgb,2,-t),this}saturate(t){return Xt(this._rgb,1,t),this}desaturate(t){return Xt(this._rgb,1,-t),this}rotate(t){return function(t,e){var i=It(t);i[0]=Vt(i[0]+e),i=Ft(i),t.r=i[0],t.g=i[1],t.b=i[2];}(this._rgb,t),this}}function Zt(t){if(t&&"object"==typeof t){const e=t.toString();return "[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return  false}function Qt(t){return Zt(t)?t:new Jt(t)}function te(t){return Zt(t)?t:new Jt(t).saturate(.5).darken(.1).hexString()}const ee=["x","y","borderWidth","radius","tension"],ie=["color","borderColor","backgroundColor"];const se=new Map;function ne(t,e,i){return function(t,e){e=e||{};const i=t+JSON.stringify(e);let s=se.get(i);return s||(s=new Intl.NumberFormat(t,e),se.set(i,s)),s}(e,i).format(t)}const oe={values:t=>n(t)?t:""+t,numeric(t,e,i){if(0===t)return "0";const s=this.chart.options.locale;let n,o=t;if(i.length>1){const e=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(e<1e-4||e>1e15)&&(n="scientific"),o=function(t,e){let i=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;Math.abs(i)>=1&&t!==Math.floor(t)&&(i=t-Math.floor(t));return i}(t,i);}const a=z(Math.abs(o)),r=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:n,minimumFractionDigits:r,maximumFractionDigits:r};return Object.assign(l,this.options.ticks.format),ne(t,s,l)},logarithmic(t,e,i){if(0===t)return "0";const s=i[e].significand||t/Math.pow(10,Math.floor(z(t)));return [1,2,3,5,10,15].includes(s)||e>.8*i.length?oe.numeric.call(this,t,e,i):""}};var ae={formatters:oe};const re=Object.create(null),le=Object.create(null);function he(t,e){if(!e)return t;const i=e.split(".");for(let e=0,s=i.length;e<s;++e){const s=i[e];t=t[s]||(t[s]=Object.create(null));}return t}function ce(t,e,i){return "string"==typeof e?x(he(t,e),i):x(he(t,""),e)}class de{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>te(e.backgroundColor),this.hoverBorderColor=(t,e)=>te(e.borderColor),this.hoverColor=(t,e)=>te(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:true,includeInvisible:false},this.maintainAspectRatio=true,this.onHover=null,this.onClick=null,this.parsing=true,this.plugins={},this.responsive=true,this.scale=void 0,this.scales={},this.showLine=true,this.drawActiveElementsOnTop=true,this.describe(t),this.apply(e);}set(t,e){return ce(this,t,e)}get(t){return he(this,t)}describe(t,e){return ce(le,t,e)}override(t,e){return ce(re,t,e)}route(t,e,i,s){const n=he(this,t),a=he(this,i),r="_"+e;Object.defineProperties(n,{[r]:{value:n[e],writable:true},[e]:{enumerable:true,get(){const t=this[r],e=a[s];return o(t)?Object.assign({},e,t):l(t,e)},set(t){this[r]=t;}}});}apply(t){t.forEach((t=>t(this)));}}var ue=new de({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:false,_indexable:false}},[function(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:false,_indexable:false,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),t.set("animations",{colors:{type:"color",properties:ie},numbers:{type:"number",properties:ee}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}});},function(t){t.set("layout",{autoPadding:true,padding:{top:0,right:0,bottom:0,left:0}});},function(t){t.set("scale",{display:true,offset:false,reverse:false,beginAtZero:false,bounds:"ticks",clip:true,grace:0,grid:{display:true,lineWidth:1,drawOnChartArea:true,drawTicks:true,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:false},border:{display:true,dash:[],dashOffset:0,width:1},title:{display:false,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:false,textStrokeWidth:0,textStrokeColor:"",padding:3,display:true,autoSkip:true,autoSkipPadding:3,labelOffset:0,callback:ae.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:false,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:false,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t&&"dash"!==t}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t});}]);function fe(){return "undefined"!=typeof window&&"undefined"!=typeof document}function ge(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function pe(t,e,i){let s;return "string"==typeof t?(s=parseInt(t,10),-1!==t.indexOf("%")&&(s=s/100*e.parentNode[i])):s=t,s}const me=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function xe(t,e){return me(t).getPropertyValue(e)}const be=["top","right","bottom","left"];function _e(t,e,i){const s={};i=i?"-"+i:"";for(let n=0;n<4;n++){const o=be[n];s[o]=parseFloat(t[e+"-"+o+i])||0;}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const ye=(t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot);function ve(t,e){if("native"in t)return t;const{canvas:i,currentDevicePixelRatio:s}=e,n=me(i),o="border-box"===n.boxSizing,a=_e(n,"padding"),r=_e(n,"border","width"),{x:l,y:h,box:c}=function(t,e){const i=t.touches,s=i&&i.length?i[0]:t,{offsetX:n,offsetY:o}=s;let a,r,l=false;if(ye(n,o,t.target))a=n,r=o;else {const t=e.getBoundingClientRect();a=s.clientX-t.left,r=s.clientY-t.top,l=true;}return {x:a,y:r,box:l}}(t,i),d=a.left+(c&&r.left),u=a.top+(c&&r.top);let{width:f,height:g}=e;return o&&(f-=a.width+r.width,g-=a.height+r.height),{x:Math.round((l-d)/f*i.width/s),y:Math.round((h-u)/g*i.height/s)}}const Me=t=>Math.round(10*t)/10;function we(t,e,i,s){const n=me(t),o=_e(n,"margin"),a=pe(n.maxWidth,t,"clientWidth")||T,r=pe(n.maxHeight,t,"clientHeight")||T,l=function(t,e,i){let s,n;if(void 0===e||void 0===i){const o=t&&ge(t);if(o){const t=o.getBoundingClientRect(),a=me(o),r=_e(a,"border","width"),l=_e(a,"padding");e=t.width-l.width-r.width,i=t.height-l.height-r.height,s=pe(a.maxWidth,o,"clientWidth"),n=pe(a.maxHeight,o,"clientHeight");}else e=t.clientWidth,i=t.clientHeight;}return {width:e,height:i,maxWidth:s||T,maxHeight:n||T}}(t,e,i);let{width:h,height:c}=l;if("content-box"===n.boxSizing){const t=_e(n,"border","width"),e=_e(n,"padding");h-=e.width+t.width,c-=e.height+t.height;}h=Math.max(0,h-o.width),c=Math.max(0,s?h/s:c-o.height),h=Me(Math.min(h,a,l.maxWidth)),c=Me(Math.min(c,r,l.maxHeight)),h&&!c&&(c=Me(h/2));return (void 0!==e||void 0!==i)&&s&&l.height&&c>l.height&&(c=l.height,h=Me(Math.floor(c*s))),{width:h,height:c}}function ke(t,e,i){const s=e||1,n=Me(t.height*s),o=Me(t.width*s);t.height=Me(t.height),t.width=Me(t.width);const a=t.canvas;return a.style&&(i||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==s||a.height!==n||a.width!==o)&&(t.currentDevicePixelRatio=s,a.height=n,a.width=o,t.ctx.setTransform(s,0,0,s,0,0),true)}const Se=function(){let t=false;try{const e={get passive(){return t=!0,!1}};fe()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e));}catch(t){}return t}();function Pe(t,e){const i=xe(t,e),s=i&&i.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function De(t){return !t||s(t.size)||s(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Ce(t,e,i,s,n){let o=e[n];return o||(o=e[n]=t.measureText(n).width,i.push(n)),o>s&&(s=o),s}function Oe(t,e,i,s){let o=(s=s||{}).data=s.data||{},a=s.garbageCollect=s.garbageCollect||[];s.font!==e&&(o=s.data={},a=s.garbageCollect=[],s.font=e),t.save(),t.font=e;let r=0;const l=i.length;let h,c,d,u,f;for(h=0;h<l;h++)if(u=i[h],null==u||n(u)){if(n(u))for(c=0,d=u.length;c<d;c++)f=u[c],null==f||n(f)||(r=Ce(t,o,a,r,f));}else r=Ce(t,o,a,r,u);t.restore();const g=a.length/2;if(g>i.length){for(h=0;h<g;h++)delete o[a[h]];a.splice(0,g);}return r}function Ae(t,e,i){const s=t.currentDevicePixelRatio,n=0!==i?Math.max(i/2,.5):0;return Math.round((e-n)*s)/s+n}function Te(t,e){(e||t)&&((e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore());}function Le(t,e,i,s){Ee(t,e,i,s,null);}function Ee(t,e,i,s,n){let o,a,r,l,h,c,d,u;const f=e.pointStyle,g=e.rotation,p=e.radius;let m=(g||0)*L;if(f&&"object"==typeof f&&(o=f.toString(),"[object HTMLImageElement]"===o||"[object HTMLCanvasElement]"===o))return t.save(),t.translate(i,s),t.rotate(m),t.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),void t.restore();if(!(isNaN(p)||p<=0)){switch(t.beginPath(),f){default:n?t.ellipse(i,s,n/2,p,0,0,O):t.arc(i,s,p,0,O),t.closePath();break;case "triangle":c=n?n/2:p,t.moveTo(i+Math.sin(m)*c,s-Math.cos(m)*p),m+=I,t.lineTo(i+Math.sin(m)*c,s-Math.cos(m)*p),m+=I,t.lineTo(i+Math.sin(m)*c,s-Math.cos(m)*p),t.closePath();break;case "rectRounded":h=.516*p,l=p-h,a=Math.cos(m+R)*l,d=Math.cos(m+R)*(n?n/2-h:l),r=Math.sin(m+R)*l,u=Math.sin(m+R)*(n?n/2-h:l),t.arc(i-d,s-r,h,m-C,m-E),t.arc(i+u,s-a,h,m-E,m),t.arc(i+d,s+r,h,m,m+E),t.arc(i-u,s+a,h,m+E,m+C),t.closePath();break;case "rect":if(!g){l=Math.SQRT1_2*p,c=n?n/2:l,t.rect(i-c,s-l,2*c,2*l);break}m+=R;case "rectRot":d=Math.cos(m)*(n?n/2:p),a=Math.cos(m)*p,r=Math.sin(m)*p,u=Math.sin(m)*(n?n/2:p),t.moveTo(i-d,s-r),t.lineTo(i+u,s-a),t.lineTo(i+d,s+r),t.lineTo(i-u,s+a),t.closePath();break;case "crossRot":m+=R;case "cross":d=Math.cos(m)*(n?n/2:p),a=Math.cos(m)*p,r=Math.sin(m)*p,u=Math.sin(m)*(n?n/2:p),t.moveTo(i-d,s-r),t.lineTo(i+d,s+r),t.moveTo(i+u,s-a),t.lineTo(i-u,s+a);break;case "star":d=Math.cos(m)*(n?n/2:p),a=Math.cos(m)*p,r=Math.sin(m)*p,u=Math.sin(m)*(n?n/2:p),t.moveTo(i-d,s-r),t.lineTo(i+d,s+r),t.moveTo(i+u,s-a),t.lineTo(i-u,s+a),m+=R,d=Math.cos(m)*(n?n/2:p),a=Math.cos(m)*p,r=Math.sin(m)*p,u=Math.sin(m)*(n?n/2:p),t.moveTo(i-d,s-r),t.lineTo(i+d,s+r),t.moveTo(i+u,s-a),t.lineTo(i-u,s+a);break;case "line":a=n?n/2:Math.cos(m)*p,r=Math.sin(m)*p,t.moveTo(i-a,s-r),t.lineTo(i+a,s+r);break;case "dash":t.moveTo(i,s),t.lineTo(i+Math.cos(m)*(n?n/2:p),s+Math.sin(m)*p);break;case  false:t.closePath();}t.fill(),e.borderWidth>0&&t.stroke();}}function Re(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function Ie(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip();}function ze(t){t.restore();}function Fe(t,e,i,s,n){if(!e)return t.lineTo(i.x,i.y);if("middle"===n){const s=(e.x+i.x)/2;t.lineTo(s,e.y),t.lineTo(s,i.y);}else "after"===n!=!!s?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y);}function Ve(t,e,i,s){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(s?e.cp1x:e.cp2x,s?e.cp1y:e.cp2y,s?i.cp2x:i.cp1x,s?i.cp2y:i.cp1y,i.x,i.y);}function Be(t,e,i,s,n){if(n.strikethrough||n.underline){const o=t.measureText(s),a=e-o.actualBoundingBoxLeft,r=e+o.actualBoundingBoxRight,l=i-o.actualBoundingBoxAscent,h=i+o.actualBoundingBoxDescent,c=n.strikethrough?(l+h)/2:h;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=n.decorationWidth||2,t.moveTo(a,c),t.lineTo(r,c),t.stroke();}}function We(t,e){const i=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=i;}function Ne(t,e,i,o,a,r={}){const l=n(e)?e:[e],h=r.strokeWidth>0&&""!==r.strokeColor;let c,d;for(t.save(),t.font=a.string,function(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),s(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline);}(t,r),c=0;c<l.length;++c)d=l[c],r.backdrop&&We(t,r.backdrop),h&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),s(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(d,i,o,r.maxWidth)),t.fillText(d,i,o,r.maxWidth),Be(t,i,o,d,r),o+=Number(a.lineHeight);t.restore();}function He(t,e){const{x:i,y:s,w:n,h:o,radius:a}=e;t.arc(i+a.topLeft,s+a.topLeft,a.topLeft,1.5*C,C,true),t.lineTo(i,s+o-a.bottomLeft),t.arc(i+a.bottomLeft,s+o-a.bottomLeft,a.bottomLeft,C,E,true),t.lineTo(i+n-a.bottomRight,s+o),t.arc(i+n-a.bottomRight,s+o-a.bottomRight,a.bottomRight,E,0,true),t.lineTo(i+n,s+a.topRight),t.arc(i+n-a.topRight,s+a.topRight,a.topRight,0,-E,true),t.lineTo(i+a.topLeft,s);}function je(t,e=[""],i,s,n=(()=>t[0])){const o=i||t;void 0===s&&(s=ti("_fallback",t));const a={[Symbol.toStringTag]:"Object",_cacheable:true,_scopes:t,_rootScopes:o,_fallback:s,_getTarget:n,override:i=>je([i,...t],e,o,s)};return new Proxy(a,{deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],true),get:(i,s)=>qe(i,s,(()=>function(t,e,i,s){let n;for(const o of e)if(n=ti(Ue(o,t),i),void 0!==n)return Xe(t,n)?Ze(i,s,t,n):n}(s,e,t,i))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>ei(t).includes(e),ownKeys:t=>ei(t),set(t,e,i){const s=t._storage||(t._storage=n());return t[e]=s[e]=i,delete t._keys,true}})}function $e(t,e,i,s){const a={_cacheable:false,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:Ye(t,s),setContext:e=>$e(t,e,i,s),override:n=>$e(t.override(n),e,i,s)};return new Proxy(a,{deleteProperty:(e,i)=>(delete e[i],delete t[i],true),get:(t,e,i)=>qe(t,e,(()=>function(t,e,i){const{_proxy:s,_context:a,_subProxy:r,_descriptors:l}=t;let h=s[e];S(h)&&l.isScriptable(e)&&(h=function(t,e,i,s){const{_proxy:n,_context:o,_subProxy:a,_stack:r}=i;if(r.has(t))throw new Error("Recursion detected: "+Array.from(r).join("->")+"->"+t);r.add(t);let l=e(o,a||s);r.delete(t),Xe(t,l)&&(l=Ze(n._scopes,n,t,l));return l}(e,h,t,i));n(h)&&h.length&&(h=function(t,e,i,s){const{_proxy:n,_context:a,_subProxy:r,_descriptors:l}=i;if(void 0!==a.index&&s(t))return e[a.index%e.length];if(o(e[0])){const i=e,s=n._scopes.filter((t=>t!==i));e=[];for(const o of i){const i=Ze(s,n,t,o);e.push($e(i,a,r&&r[t],l));}}return e}(e,h,t,l.isIndexable));Xe(e,h)&&(h=$e(h,a,r&&r[e],l));return h}(t,e,i))),getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:true,configurable:true}:void 0:Reflect.getOwnPropertyDescriptor(t,i),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,i)=>Reflect.has(t,i),ownKeys:()=>Reflect.ownKeys(t),set:(e,i,s)=>(t[i]=s,delete e[i],true)})}function Ye(t,e={scriptable:true,indexable:true}){const{_scriptable:i=e.scriptable,_indexable:s=e.indexable,_allKeys:n=e.allKeys}=t;return {allKeys:n,scriptable:i,indexable:s,isScriptable:S(i)?i:()=>i,isIndexable:S(s)?s:()=>s}}const Ue=(t,e)=>t?t+w(e):e,Xe=(t,e)=>o(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function qe(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e)||"constructor"===e)return t[e];const s=i();return t[e]=s,s}function Ke(t,e,i){return S(t)?t(e,i):t}const Ge=(t,e)=>true===t?e:"string"==typeof t?M(e,t):void 0;function Je(t,e,i,s,n){for(const o of e){const e=Ge(i,o);if(e){t.add(e);const o=Ke(e._fallback,i,n);if(void 0!==o&&o!==i&&o!==s)return o}else if(false===e&&void 0!==s&&i!==s)return null}return  false}function Ze(t,e,i,s){const a=e._rootScopes,r=Ke(e._fallback,i,s),l=[...t,...a],h=new Set;h.add(s);let c=Qe(h,l,i,r||i,s);return null!==c&&((void 0===r||r===i||(c=Qe(h,l,r,c,s),null!==c))&&je(Array.from(h),[""],a,r,(()=>function(t,e,i){const s=t._getTarget();e in s||(s[e]={});const a=s[e];if(n(a)&&o(i))return i;return a||{}}(e,i,s))))}function Qe(t,e,i,s,n){for(;i;)i=Je(t,e,i,s,n);return i}function ti(t,e){for(const i of e){if(!i)continue;const e=i[t];if(void 0!==e)return e}}function ei(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const i of t)for(const t of Object.keys(i).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}function ii(t,e,i,s){const{iScale:n}=t,{key:o="r"}=this._parsing,a=new Array(s);let r,l,h,c;for(r=0,l=s;r<l;++r)h=r+i,c=e[h],a[r]={r:n.parse(M(c,o),h)};return a}const si=Number.EPSILON||1e-14,ni=(t,e)=>e<t.length&&!t[e].skip&&t[e],oi=t=>"x"===t?"y":"x";function ai(t,e,i,s){const n=t.skip?e:t,o=e,a=i.skip?e:i,r=q(o,n),l=q(a,o);let h=r/(r+l),c=l/(r+l);h=isNaN(h)?0:h,c=isNaN(c)?0:c;const d=s*h,u=s*c;return {previous:{x:o.x-d*(a.x-n.x),y:o.y-d*(a.y-n.y)},next:{x:o.x+u*(a.x-n.x),y:o.y+u*(a.y-n.y)}}}function ri(t,e="x"){const i=oi(e),s=t.length,n=Array(s).fill(0),o=Array(s);let a,r,l,h=ni(t,0);for(a=0;a<s;++a)if(r=l,l=h,h=ni(t,a+1),l){if(h){const t=h[e]-l[e];n[a]=0!==t?(h[i]-l[i])/t:0;}o[a]=r?h?F(n[a-1])!==F(n[a])?0:(n[a-1]+n[a])/2:n[a-1]:n[a];}!function(t,e,i){const s=t.length;let n,o,a,r,l,h=ni(t,0);for(let c=0;c<s-1;++c)l=h,h=ni(t,c+1),l&&h&&(V(e[c],0,si)?i[c]=i[c+1]=0:(n=i[c]/e[c],o=i[c+1]/e[c],r=Math.pow(n,2)+Math.pow(o,2),r<=9||(a=3/Math.sqrt(r),i[c]=n*a*e[c],i[c+1]=o*a*e[c])));}(t,n,o),function(t,e,i="x"){const s=oi(i),n=t.length;let o,a,r,l=ni(t,0);for(let h=0;h<n;++h){if(a=r,r=l,l=ni(t,h+1),!r)continue;const n=r[i],c=r[s];a&&(o=(n-a[i])/3,r[`cp1${i}`]=n-o,r[`cp1${s}`]=c-o*e[h]),l&&(o=(l[i]-n)/3,r[`cp2${i}`]=n+o,r[`cp2${s}`]=c+o*e[h]);}}(t,o,e);}function li(t,e,i){return Math.max(Math.min(t,i),e)}function hi(t,e,i,s,n){let o,a,r,l;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)ri(t,n);else {let i=s?t[t.length-1]:t[0];for(o=0,a=t.length;o<a;++o)r=t[o],l=ai(i,r,t[Math.min(o+1,a-(s?0:1))%a],e.tension),r.cp1x=l.previous.x,r.cp1y=l.previous.y,r.cp2x=l.next.x,r.cp2y=l.next.y,i=r;}e.capBezierPoints&&function(t,e){let i,s,n,o,a,r=Re(t[0],e);for(i=0,s=t.length;i<s;++i)a=o,o=r,r=i<s-1&&Re(t[i+1],e),o&&(n=t[i],a&&(n.cp1x=li(n.cp1x,e.left,e.right),n.cp1y=li(n.cp1y,e.top,e.bottom)),r&&(n.cp2x=li(n.cp2x,e.left,e.right),n.cp2y=li(n.cp2y,e.top,e.bottom)));}(t,i);}const ci=t=>0===t||1===t,di=(t,e,i)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*O/i),ui=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*O/i)+1,fi={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*E),easeOutSine:t=>Math.sin(t*E),easeInOutSine:t=>-0.5*(Math.cos(C*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>ci(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>ci(t)?t:di(t,.075,.3),easeOutElastic:t=>ci(t)?t:ui(t,.075,.3),easeInOutElastic(t){const e=.1125;return ci(t)?t:t<.5?.5*di(2*t,e,.45):.5+.5*ui(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return (t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return (t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-fi.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375},easeInOutBounce:t=>t<.5?.5*fi.easeInBounce(2*t):.5*fi.easeOutBounce(2*t-1)+.5};function gi(t,e,i,s){return {x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function pi(t,e,i,s){return {x:t.x+i*(e.x-t.x),y:"middle"===s?i<.5?t.y:e.y:"after"===s?i<1?t.y:e.y:i>0?e.y:t.y}}function mi(t,e,i,s){const n={x:t.cp2x,y:t.cp2y},o={x:e.cp1x,y:e.cp1y},a=gi(t,n,i),r=gi(n,o,i),l=gi(o,e,i),h=gi(a,r,i),c=gi(r,l,i);return gi(h,c,i)}const xi=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,bi=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function _i(t,e){const i=(""+t).match(xi);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case "px":return t;case "%":t/=100;}return e*t}const yi=t=>+t||0;function vi(t,e){const i={},s=o(e),n=s?Object.keys(e):e,a=o(t)?s?i=>l(t[i],t[e[i]]):e=>t[e]:()=>t;for(const t of n)i[t]=yi(a(t));return i}function Mi(t){return vi(t,{top:"y",right:"x",bottom:"y",left:"x"})}function wi(t){return vi(t,["topLeft","topRight","bottomLeft","bottomRight"])}function ki(t){const e=Mi(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Si(t,e){t=t||{},e=e||ue.font;let i=l(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let s=l(t.style,e.style);s&&!(""+s).match(bi)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const n={family:l(t.family,e.family),lineHeight:_i(l(t.lineHeight,e.lineHeight),i),size:i,style:s,weight:l(t.weight,e.weight),string:""};return n.string=De(n),n}function Pi(t,e,i,s){let o,a,r,l=true;for(o=0,a=t.length;o<a;++o)if(r=t[o],void 0!==r&&(void 0!==e&&"function"==typeof r&&(r=r(e),l=false),void 0!==i&&n(r)&&(r=r[i%r.length],l=false),void 0!==r))return s&&!l&&(s.cacheable=false),r}function Di(t,e,i){const{min:s,max:n}=t,o=c(e,(n-s)/2),a=(t,e)=>i&&0===t?0:t+e;return {min:a(s,-Math.abs(o)),max:a(n,o)}}function Ci(t,e){return Object.assign(Object.create(t),e)}function Oi(t,e,i){return t?function(t,e){return {x:i=>t+t+e-i,setWidth(t){e=t;},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,i):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function Ai(t,e){let i,s;"ltr"!==e&&"rtl"!==e||(i=t.canvas.style,s=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=s);}function Ti(t,e){ void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]));}function Li(t){return "angle"===t?{between:J,compare:K,normalize:G}:{between:tt,compare:(t,e)=>t-e,normalize:t=>t}}function Ei({start:t,end:e,count:i,loop:s,style:n}){return {start:t%i,end:e%i,loop:s&&(e-t+1)%i==0,style:n}}function Ri(t,e,i){if(!i)return [t];const{property:s,start:n,end:o}=i,a=e.length,{compare:r,between:l,normalize:h}=Li(s),{start:c,end:d,loop:u,style:f}=function(t,e,i){const{property:s,start:n,end:o}=i,{between:a,normalize:r}=Li(s),l=e.length;let h,c,{start:d,end:u,loop:f}=t;if(f){for(d+=l,u+=l,h=0,c=l;h<c&&a(r(e[d%l][s]),n,o);++h)d--,u--;d%=l,u%=l;}return u<d&&(u+=l),{start:d,end:u,loop:f,style:t.style}}(t,e,i),g=[];let p,m,x,b=false,_=null;const y=()=>b||l(n,x,p)&&0!==r(n,x),v=()=>!b||0===r(o,p)||l(o,x,p);for(let t=c,i=c;t<=d;++t)m=e[t%a],m.skip||(p=h(m[s]),p!==x&&(b=l(p,n,o),null===_&&y()&&(_=0===r(p,n)?t:i),null!==_&&v()&&(g.push(Ei({start:_,end:t,loop:u,count:a,style:f})),_=null),i=t,x=p));return null!==_&&g.push(Ei({start:_,end:d,loop:u,count:a,style:f})),g}function Ii(t,e){const i=[],s=t.segments;for(let n=0;n<s.length;n++){const o=Ri(s[n],t.points,e);o.length&&i.push(...o);}return i}function zi(t,e){const i=t.points,s=t.options.spanGaps,n=i.length;if(!n)return [];const o=!!t._loop,{start:a,end:r}=function(t,e,i,s){let n=0,o=e-1;if(i&&!s)for(;n<e&&!t[n].skip;)n++;for(;n<e&&t[n].skip;)n++;for(n%=e,i&&(o+=n);o>n&&t[o%e].skip;)o--;return o%=e,{start:n,end:o}}(i,n,o,s);if(true===s)return Fi(t,[{start:a,end:r,loop:o}],i,e);return Fi(t,function(t,e,i,s){const n=t.length,o=[];let a,r=e,l=t[e];for(a=e+1;a<=i;++a){const i=t[a%n];i.skip||i.stop?l.skip||(s=false,o.push({start:e%n,end:(a-1)%n,loop:s}),e=r=i.stop?a:null):(r=a,l.skip&&(e=a)),l=i;}return null!==r&&o.push({start:e%n,end:r%n,loop:s}),o}(i,a,r<a?r+n:r,!!t._fullLoop&&0===a&&r===n-1),i,e)}function Fi(t,e,i,s){return s&&s.setContext&&i?function(t,e,i,s){const n=t._chart.getContext(),o=Vi(t.options),{_datasetIndex:a,options:{spanGaps:r}}=t,l=i.length,h=[];let c=o,d=e[0].start,u=d;function f(t,e,s,n){const o=r?-1:1;if(t!==e){for(t+=l;i[t%l].skip;)t-=o;for(;i[e%l].skip;)e+=o;t%l!=e%l&&(h.push({start:t%l,end:e%l,loop:s,style:n}),c=n,d=e%l);}}for(const t of e){d=r?d:t.start;let e,o=i[d%l];for(u=d+1;u<=t.end;u++){const r=i[u%l];e=Vi(s.setContext(Ci(n,{type:"segment",p0:o,p1:r,p0DataIndex:(u-1)%l,p1DataIndex:u%l,datasetIndex:a}))),Bi(e,c)&&f(d,u-1,t.loop,c),o=r,c=e;}d<u-1&&f(d,u-1,t.loop,c);}return h}(t,e,i,s):e}function Vi(t){return {backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Bi(t,e){if(!e)return  false;const i=[],s=function(t,e){return Zt(e)?(i.includes(e)||i.push(e),i.indexOf(e)):e};return JSON.stringify(t,s)!==JSON.stringify(e,s)}function Wi(t,e,i){return t.options.clip?t[i]:e[i]}function Ni(t,e){const i=e._clip;if(i.disabled)return  false;const s=function(t,e){const{xScale:i,yScale:s}=t;return i&&s?{left:Wi(i,e,"left"),right:Wi(i,e,"right"),top:Wi(s,e,"top"),bottom:Wi(s,e,"bottom")}:e}(e,t.chartArea);return {left:false===i.left?0:s.left-(true===i.left?0:i.left),right:false===i.right?t.width:s.right+(true===i.right?0:i.right),top:false===i.top?0:s.top-(true===i.top?0:i.top),bottom:false===i.bottom?t.height:s.bottom+(true===i.bottom?0:i.bottom)}}var Hi=Object.freeze({__proto__:null,HALF_PI:E,INFINITY:T,PI:C,PITAU:A,QUARTER_PI:R,RAD_PER_DEG:L,TAU:O,TWO_THIRDS_PI:I,_addGrace:Di,_alignPixel:Ae,_alignStartEnd:ft,_angleBetween:J,_angleDiff:K,_arrayUnique:lt,_attachContext:$e,_bezierCurveTo:Ve,_bezierInterpolation:mi,_boundSegment:Ri,_boundSegments:Ii,_capitalize:w,_computeSegments:zi,_createResolver:je,_decimalPlaces:U,_deprecated:function(t,e,i,s){ void 0!==e&&console.warn(t+': "'+i+'" is deprecated. Please use "'+s+'" instead');},_descriptors:Ye,_elementsEqual:f,_factorize:W,_filterBetween:nt,_getParentNode:ge,_getStartAndCountOfVisiblePoints:pt,_int16Range:Q,_isBetween:tt,_isClickEvent:D,_isDomSupported:fe,_isPointInArea:Re,_limitValue:Z,_longestText:Oe,_lookup:et,_lookupByKey:it,_measureText:Ce,_merger:m,_mergerIf:_,_normalizeAngle:G,_parseObjectDataRadialScale:ii,_pointInLine:gi,_readValueToProps:vi,_rlookupByKey:st,_scaleRangesChanged:mt,_setMinAndMaxByKey:j,_splitKey:v,_steppedInterpolation:pi,_steppedLineTo:Fe,_textX:gt,_toLeftRightCenter:ut,_updateBezierControlPoints:hi,addRoundedRectPath:He,almostEquals:V,almostWhole:H,callback:d,clearCanvas:Te,clipArea:Ie,clone:g,color:Qt,createContext:Ci,debounce:dt,defined:k,distanceBetweenPoints:q,drawPoint:Le,drawPointLegend:Ee,each:u,easingEffects:fi,finiteOrDefault:r,fontString:function(t,e,i){return e+" "+t+"px "+i},formatNumber:ne,getAngleFromPoint:X,getDatasetClipArea:Ni,getHoverColor:te,getMaximumSize:we,getRelativePosition:ve,getRtlAdapter:Oi,getStyle:xe,isArray:n,isFinite:a,isFunction:S,isNullOrUndef:s,isNumber:N,isObject:o,isPatternOrGradient:Zt,listenArrayEvents:at,log10:z,merge:x,mergeIf:b,niceNum:B,noop:e,overrideTextDirection:Ai,readUsedSize:Pe,renderText:Ne,requestAnimFrame:ht,resolve:Pi,resolveObjectKey:M,restoreTextDirection:Ti,retinaScale:ke,setsEqual:P,sign:F,splineCurve:ai,splineCurveMonotone:ri,supportsEventListenerOptions:Se,throttled:ct,toDegrees:Y,toDimension:c,toFont:Si,toFontString:De,toLineHeight:_i,toPadding:ki,toPercentage:h,toRadians:$,toTRBL:Mi,toTRBLCorners:wi,uid:i,unclipArea:ze,unlistenArrayEvents:rt,valueOrDefault:l});function ji(t,e,i,n){const{controller:o,data:a,_sorted:r}=t,l=o._cachedMeta.iScale,h=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(l&&e===l.axis&&"r"!==e&&r&&a.length){const r=l._reversePixels?st:it;if(!n){const n=r(a,e,i);if(h){const{vScale:e}=o._cachedMeta,{_parsed:i}=t,a=i.slice(0,n.lo+1).reverse().findIndex((t=>!s(t[e.axis])));n.lo-=Math.max(0,a);const r=i.slice(n.hi).findIndex((t=>!s(t[e.axis])));n.hi+=Math.max(0,r);}return n}if(o._sharedOptions){const t=a[0],s="function"==typeof t.getRange&&t.getRange(e);if(s){const t=r(a,e,i-s),n=r(a,e,i+s);return {lo:t.lo,hi:n.hi}}}}return {lo:0,hi:a.length-1}}function $i(t,e,i,s,n){const o=t.getSortedVisibleDatasetMetas(),a=i[e];for(let t=0,i=o.length;t<i;++t){const{index:i,data:r}=o[t],{lo:l,hi:h}=ji(o[t],e,a,n);for(let t=l;t<=h;++t){const e=r[t];e.skip||s(e,i,t);}}}function Yi(t,e,i,s,n){const o=[];if(!n&&!t.isPointInArea(e))return o;return $i(t,i,e,(function(i,a,r){(n||Re(i,t.chartArea,0))&&i.inRange(e.x,e.y,s)&&o.push({element:i,datasetIndex:a,index:r});}),true),o}function Ui(t,e,i,s,n,o){let a=[];const r=function(t){const e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,s){const n=e?Math.abs(t.x-s.x):0,o=i?Math.abs(t.y-s.y):0;return Math.sqrt(Math.pow(n,2)+Math.pow(o,2))}}(i);let l=Number.POSITIVE_INFINITY;return $i(t,i,e,(function(i,h,c){const d=i.inRange(e.x,e.y,n);if(s&&!d)return;const u=i.getCenterPoint(n);if(!(!!o||t.isPointInArea(u))&&!d)return;const f=r(e,u);f<l?(a=[{element:i,datasetIndex:h,index:c}],l=f):f===l&&a.push({element:i,datasetIndex:h,index:c});})),a}function Xi(t,e,i,s,n,o){return o||t.isPointInArea(e)?"r"!==i||s?Ui(t,e,i,s,n,o):function(t,e,i,s){let n=[];return $i(t,i,e,(function(t,i,o){const{startAngle:a,endAngle:r}=t.getProps(["startAngle","endAngle"],s),{angle:l}=X(t,{x:e.x,y:e.y});J(l,a,r)&&n.push({element:t,datasetIndex:i,index:o});})),n}(t,e,i,n):[]}function qi(t,e,i,s,n){const o=[],a="x"===i?"inXRange":"inYRange";let r=false;return $i(t,i,e,((t,s,l)=>{t[a]&&t[a](e[i],n)&&(o.push({element:t,datasetIndex:s,index:l}),r=r||t.inRange(e.x,e.y,n));})),s&&!r?[]:o}var Ki={evaluateInteractionItems:$i,modes:{index(t,e,i,s){const n=ve(e,t),o=i.axis||"x",a=i.includeInvisible||false,r=i.intersect?Yi(t,n,o,s,a):Xi(t,n,o,false,s,a),l=[];return r.length?(t.getSortedVisibleDatasetMetas().forEach((t=>{const e=r[0].index,i=t.data[e];i&&!i.skip&&l.push({element:i,datasetIndex:t.index,index:e});})),l):[]},dataset(t,e,i,s){const n=ve(e,t),o=i.axis||"xy",a=i.includeInvisible||false;let r=i.intersect?Yi(t,n,o,s,a):Xi(t,n,o,false,s,a);if(r.length>0){const e=r[0].datasetIndex,i=t.getDatasetMeta(e).data;r=[];for(let t=0;t<i.length;++t)r.push({element:i[t],datasetIndex:e,index:t});}return r},point:(t,e,i,s)=>Yi(t,ve(e,t),i.axis||"xy",s,i.includeInvisible||false),nearest(t,e,i,s){const n=ve(e,t),o=i.axis||"xy",a=i.includeInvisible||false;return Xi(t,n,o,i.intersect,s,a)},x:(t,e,i,s)=>qi(t,ve(e,t),"x",i.intersect,s),y:(t,e,i,s)=>qi(t,ve(e,t),"y",i.intersect,s)}};const Gi=["left","top","right","bottom"];function Ji(t,e){return t.filter((t=>t.pos===e))}function Zi(t,e){return t.filter((t=>-1===Gi.indexOf(t.pos)&&t.box.axis===e))}function Qi(t,e){return t.sort(((t,i)=>{const s=e?i:t,n=e?t:i;return s.weight===n.weight?s.index-n.index:s.weight-n.weight}))}function ts(t,e){const i=function(t){const e={};for(const i of t){const{stack:t,pos:s,stackWeight:n}=i;if(!t||!Gi.includes(s))continue;const o=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=n;}return e}(t),{vBoxMaxWidth:s,hBoxMaxHeight:n}=e;let o,a,r;for(o=0,a=t.length;o<a;++o){r=t[o];const{fullSize:a}=r.box,l=i[r.stack],h=l&&r.stackWeight/l.weight;r.horizontal?(r.width=h?h*s:a&&e.availableWidth,r.height=n):(r.width=s,r.height=h?h*n:a&&e.availableHeight);}return i}function es(t,e,i,s){return Math.max(t[i],e[i])+Math.max(t[s],e[s])}function is(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right);}function ss(t,e,i,s){const{pos:n,box:a}=i,r=t.maxPadding;if(!o(n)){i.size&&(t[n]-=i.size);const e=s[i.stack]||{size:0,count:1};e.size=Math.max(e.size,i.horizontal?a.height:a.width),i.size=e.size/e.count,t[n]+=i.size;}a.getPadding&&is(r,a.getPadding());const l=Math.max(0,e.outerWidth-es(r,t,"left","right")),h=Math.max(0,e.outerHeight-es(r,t,"top","bottom")),c=l!==t.w,d=h!==t.h;return t.w=l,t.h=h,i.horizontal?{same:c,other:d}:{same:d,other:c}}function ns(t,e){const i=e.maxPadding;function s(t){const s={left:0,top:0,right:0,bottom:0};return t.forEach((t=>{s[t]=Math.max(e[t],i[t]);})),s}return s(t?["left","right"]:["top","bottom"])}function os(t,e,i,s){const n=[];let o,a,r,l,h,c;for(o=0,a=t.length,h=0;o<a;++o){r=t[o],l=r.box,l.update(r.width||e.w,r.height||e.h,ns(r.horizontal,e));const{same:a,other:d}=ss(e,i,r,s);h|=a&&n.length,c=c||d,l.fullSize||n.push(r);}return h&&os(n,e,i,s)||c}function as(t,e,i,s,n){t.top=i,t.left=e,t.right=e+s,t.bottom=i+n,t.width=s,t.height=n;}function rs(t,e,i,s){const n=i.padding;let{x:o,y:a}=e;for(const r of t){const t=r.box,l=s[r.stack]||{placed:0,weight:1},h=r.stackWeight/l.weight||1;if(r.horizontal){const s=e.w*h,o=l.size||t.height;k(l.start)&&(a=l.start),t.fullSize?as(t,n.left,a,i.outerWidth-n.right-n.left,o):as(t,e.left+l.placed,a,s,o),l.start=a,l.placed+=s,a=t.bottom;}else {const s=e.h*h,a=l.size||t.width;k(l.start)&&(o=l.start),t.fullSize?as(t,o,n.top,a,i.outerHeight-n.bottom-n.top):as(t,o,e.top+l.placed,a,s),l.start=o,l.placed+=s,o=t.right;}}e.x=o,e.y=a;}var ls={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||false,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return [{z:0,draw(t){e.draw(t);}}]},t.boxes.push(e);},removeBox(t,e){const i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1);},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight;},update(t,e,i,s){if(!t)return;const n=ki(t.options.layout.padding),o=Math.max(e-n.width,0),a=Math.max(i-n.height,0),r=function(t){const e=function(t){const e=[];let i,s,n,o,a,r;for(i=0,s=(t||[]).length;i<s;++i)n=t[i],({position:o,options:{stack:a,stackWeight:r=1}}=n),e.push({index:i,box:n,pos:o,horizontal:n.isHorizontal(),weight:n.weight,stack:a&&o+a,stackWeight:r});return e}(t),i=Qi(e.filter((t=>t.box.fullSize)),true),s=Qi(Ji(e,"left"),true),n=Qi(Ji(e,"right")),o=Qi(Ji(e,"top"),true),a=Qi(Ji(e,"bottom")),r=Zi(e,"x"),l=Zi(e,"y");return {fullSize:i,leftAndTop:s.concat(o),rightAndBottom:n.concat(l).concat(a).concat(r),chartArea:Ji(e,"chartArea"),vertical:s.concat(n).concat(l),horizontal:o.concat(a).concat(r)}}(t.boxes),l=r.vertical,h=r.horizontal;u(t.boxes,(t=>{"function"==typeof t.beforeLayout&&t.beforeLayout();}));const c=l.reduce(((t,e)=>e.box.options&&false===e.box.options.display?t:t+1),0)||1,d=Object.freeze({outerWidth:e,outerHeight:i,padding:n,availableWidth:o,availableHeight:a,vBoxMaxWidth:o/2/c,hBoxMaxHeight:a/2}),f=Object.assign({},n);is(f,ki(s));const g=Object.assign({maxPadding:f,w:o,h:a,x:n.left,y:n.top},n),p=ts(l.concat(h),d);os(r.fullSize,g,d,p),os(l,g,d,p),os(h,g,d,p)&&os(l,g,d,p),function(t){const e=t.maxPadding;function i(i){const s=Math.max(e[i]-t[i],0);return t[i]+=s,s}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom");}(g),rs(r.leftAndTop,g,d,p),g.x+=g.w,g.y+=g.h,rs(r.rightAndBottom,g,d,p),t.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},u(r.chartArea,(e=>{const i=e.box;Object.assign(i,t.chartArea),i.update(g.w,g.h,{left:0,top:0,right:0,bottom:0});}));}};class hs{acquireContext(t,e){}releaseContext(t){return  false}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return  true}updateConfig(t){}}class cs extends hs{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=false;}}const ds="$chartjs",us={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},fs=t=>null===t||""===t;const gs=!!Se&&{passive:true};function ps(t,e,i){t&&t.canvas&&t.canvas.removeEventListener(e,i,gs);}function ms(t,e){for(const i of t)if(i===e||i.contains(e))return  true}function xs(t,e,i){const s=t.canvas,n=new MutationObserver((t=>{let e=false;for(const i of t)e=e||ms(i.addedNodes,s),e=e&&!ms(i.removedNodes,s);e&&i();}));return n.observe(document,{childList:true,subtree:true}),n}function bs(t,e,i){const s=t.canvas,n=new MutationObserver((t=>{let e=false;for(const i of t)e=e||ms(i.removedNodes,s),e=e&&!ms(i.addedNodes,s);e&&i();}));return n.observe(document,{childList:true,subtree:true}),n}const _s=new Map;let ys=0;function vs(){const t=window.devicePixelRatio;t!==ys&&(ys=t,_s.forEach(((e,i)=>{i.currentDevicePixelRatio!==t&&e();})));}function Ms(t,e,i){const s=t.canvas,n=s&&ge(s);if(!n)return;const o=ct(((t,e)=>{const s=n.clientWidth;i(t,e),s<n.clientWidth&&i();}),window),a=new ResizeObserver((t=>{const e=t[0],i=e.contentRect.width,s=e.contentRect.height;0===i&&0===s||o(i,s);}));return a.observe(n),function(t,e){_s.size||window.addEventListener("resize",vs),_s.set(t,e);}(t,o),a}function ws(t,e,i){i&&i.disconnect(),"resize"===e&&function(t){_s.delete(t),_s.size||window.removeEventListener("resize",vs);}(t);}function ks(t,e,i){const s=t.canvas,n=ct((e=>{null!==t.ctx&&i(function(t,e){const i=us[t.type]||t.type,{x:s,y:n}=ve(t,e);return {type:i,chart:e,native:t,x:void 0!==s?s:null,y:void 0!==n?n:null}}(e,t));}),t);return function(t,e,i){t&&t.addEventListener(e,i,gs);}(s,e,n),n}class Ss extends hs{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){const i=t.style,s=t.getAttribute("height"),n=t.getAttribute("width");if(t[ds]={initial:{height:s,width:n,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",fs(n)){const e=Pe(t,"width");void 0!==e&&(t.width=e);}if(fs(s))if(""===t.style.height)t.height=t.width/(e||2);else {const e=Pe(t,"height");void 0!==e&&(t.height=e);}}(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[ds])return  false;const i=e[ds].initial;["height","width"].forEach((t=>{const n=i[t];s(n)?e.removeAttribute(t):e.setAttribute(t,n);}));const n=i.style||{};return Object.keys(n).forEach((t=>{e.style[t]=n[t];})),e.width=e.width,delete e[ds],true}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),n={attach:xs,detach:bs,resize:Ms}[e]||ks;s[e]=n(t,e,i);}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;(({attach:ws,detach:ws,resize:ws})[e]||ps)(t,e,s),i[e]=void 0;}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return we(t,e,i,s)}isAttached(t){const e=t&&ge(t);return !(!e||!e.isConnected)}}function Ps(t){return !fe()||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas?cs:Ss}var Ds=Object.freeze({__proto__:null,BasePlatform:hs,BasicPlatform:cs,DomPlatform:Ss,_detectPlatform:Ps});const Cs="transparent",Os={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){const s=Qt(t||Cs),n=s.valid&&Qt(e||Cs);return n&&n.valid?n.mix(s,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class As{constructor(t,e,i,s){const n=e[i];s=Pi([t.to,s,n,t.from]);const o=Pi([t.from,n,s]);this._active=true,this._fn=t.fn||Os[t.type||typeof o],this._easing=fi[t.easing]||fi.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=void 0;}active(){return this._active}update(t,e,i){if(this._active){this._notify(false);const s=this._target[this._prop],n=i-this._start,o=this._duration-n;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=n,this._loop=!!t.loop,this._to=Pi([t.to,e,s,t.from]),this._from=Pi([t.from,s,e]);}}cancel(){this._active&&(this.tick(Date.now()),this._active=false,this._notify(false));}tick(t){const e=t-this._start,i=this._duration,s=this._prop,n=this._from,o=this._loop,a=this._to;let r;if(this._active=n!==a&&(o||e<i),!this._active)return this._target[s]=a,void this._notify(true);e<0?this._target[s]=n:(r=e/i%2,r=o&&r>1?2-r:r,r=this._easing(Math.min(1,Math.max(0,r))),this._target[s]=this._fn(n,a,r));}wait(){const t=this._promises||(this._promises=[]);return new Promise(((e,i)=>{t.push({res:e,rej:i});}))}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]();}}class Ts{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e);}configure(t){if(!o(t))return;const e=Object.keys(ue.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach((s=>{const a=t[s];if(!o(a))return;const r={};for(const t of e)r[t]=a[t];(n(a.properties)&&a.properties||[s]).forEach((t=>{t!==s&&i.has(t)||i.set(t,r);}));}));}_animateOptions(t,e){const i=e.options,s=function(t,e){if(!e)return;let i=t.options;if(!i)return void(t.options=e);i.$shared&&(t.options=i=Object.assign({},i,{$shared:false,$animations:{}}));return i}(t,i);if(!s)return [];const n=this._createAnimations(s,i);return i.$shared&&function(t,e){const i=[],s=Object.keys(e);for(let e=0;e<s.length;e++){const n=t[s[e]];n&&n.active()&&i.push(n.wait());}return Promise.all(i)}(t.options.$animations,i).then((()=>{t.options=i;}),(()=>{})),n}_createAnimations(t,e){const i=this._properties,s=[],n=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let r;for(r=o.length-1;r>=0;--r){const l=o[r];if("$"===l.charAt(0))continue;if("options"===l){s.push(...this._animateOptions(t,e));continue}const h=e[l];let c=n[l];const d=i.get(l);if(c){if(d&&c.active()){c.update(d,h,a);continue}c.cancel();}d&&d.duration?(n[l]=c=new As(d,t,l,h),s.push(c)):t[l]=h;}return s}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const i=this._createAnimations(t,e);return i.length?(bt.add(this._chart,i),true):void 0}}function Ls(t,e){const i=t&&t.options||{},s=i.reverse,n=void 0===i.min?e:0,o=void 0===i.max?e:0;return {start:s?o:n,end:s?n:o}}function Es(t,e){const i=[],s=t._getSortedDatasetMetas(e);let n,o;for(n=0,o=s.length;n<o;++n)i.push(s[n].index);return i}function Rs(t,e,i,s={}){const n=t.keys,o="single"===s.mode;let r,l,h,c;if(null===e)return;let d=false;for(r=0,l=n.length;r<l;++r){if(h=+n[r],h===i){if(d=true,s.all)continue;break}c=t.values[h],a(c)&&(o||0===e||F(e)===F(c))&&(e+=c);}return d||s.all?e:0}function Is(t,e){const i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function zs(t,e,i){const s=t[e]||(t[e]={});return s[i]||(s[i]={})}function Fs(t,e,i,s){for(const n of e.getMatchingVisibleMetas(s).reverse()){const e=t[n.index];if(i&&e>0||!i&&e<0)return n.index}return null}function Vs(t,e){const{chart:i,_cachedMeta:s}=t,n=i._stacks||(i._stacks={}),{iScale:o,vScale:a,index:r}=s,l=o.axis,h=a.axis,c=function(t,e,i){return `${t.id}.${e.id}.${i.stack||i.type}`}(o,a,s),d=e.length;let u;for(let t=0;t<d;++t){const i=e[t],{[l]:o,[h]:d}=i;u=(i._stacks||(i._stacks={}))[h]=zs(n,c,o),u[r]=d,u._top=Fs(u,a,true,s.type),u._bottom=Fs(u,a,false,s.type);(u._visualValues||(u._visualValues={}))[r]=d;}}function Bs(t,e){const i=t.scales;return Object.keys(i).filter((t=>i[t].axis===e)).shift()}function Ws(t,e){const i=t.controller.index,s=t.vScale&&t.vScale.axis;if(s){e=e||t._parsed;for(const t of e){const e=t._stacks;if(!e||void 0===e[s]||void 0===e[s][i])return;delete e[s][i],void 0!==e[s]._visualValues&&void 0!==e[s]._visualValues[i]&&delete e[s]._visualValues[i];}}}const Ns=t=>"reset"===t||"none"===t,Hs=(t,e)=>e?t:Object.assign({},t);class js{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=false,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=false,this.supportsDecimation=false,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize();}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Is(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");}updateIndex(t){this.index!==t&&Ws(this._cachedMeta),this.index=t;}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(t,e,i,s)=>"x"===t?e:"r"===t?s:i,n=e.xAxisID=l(i.xAxisID,Bs(t,"x")),o=e.yAxisID=l(i.yAxisID,Bs(t,"y")),a=e.rAxisID=l(i.rAxisID,Bs(t,"r")),r=e.indexAxis,h=e.iAxisID=s(r,n,o,a),c=e.vAxisID=s(r,o,n,a);e.xScale=this.getScaleForId(n),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(h),e.vScale=this.getScaleForId(c);}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset");}_destroy(){const t=this._cachedMeta;this._data&&rt(this._data,this),t._stacked&&Ws(t);}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(o(e)){const t=this._cachedMeta;this._data=function(t,e){const{iScale:i,vScale:s}=e,n="x"===i.axis?"x":"y",o="x"===s.axis?"x":"y",a=Object.keys(t),r=new Array(a.length);let l,h,c;for(l=0,h=a.length;l<h;++l)c=a[l],r[l]={[n]:c,[o]:t[c]};return r}(e,t);}else if(i!==e){if(i){rt(i,this);const t=this._cachedMeta;Ws(t),t._parsed=[];}e&&Object.isExtensible(e)&&at(e,this),this._syncList=[],this._data=e;}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType);}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=false;this._dataCheck();const n=e._stacked;e._stacked=Is(e.vScale,e),e.stack!==i.stack&&(s=true,Ws(e),e.stack=i.stack),this._resyncElements(t),(s||n!==e._stacked)&&(Vs(this,e._parsed),e._stacked=Is(e.vScale,e));}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,true);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={};}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:a,_stacked:r}=i,l=a.axis;let h,c,d,u=0===t&&e===s.length||i._sorted,f=t>0&&i._parsed[t-1];if(false===this._parsing)i._parsed=s,i._sorted=true,d=s;else {d=n(s[t])?this.parseArrayData(i,s,t,e):o(s[t])?this.parseObjectData(i,s,t,e):this.parsePrimitiveData(i,s,t,e);const a=()=>null===c[l]||f&&c[l]<f[l];for(h=0;h<e;++h)i._parsed[h+t]=c=d[h],u&&(a()&&(u=false),f=c);i._sorted=u;}r&&Vs(this,d);}parsePrimitiveData(t,e,i,s){const{iScale:n,vScale:o}=t,a=n.axis,r=o.axis,l=n.getLabels(),h=n===o,c=new Array(s);let d,u,f;for(d=0,u=s;d<u;++d)f=d+i,c[d]={[a]:h||n.parse(l[f],f),[r]:o.parse(e[f],f)};return c}parseArrayData(t,e,i,s){const{xScale:n,yScale:o}=t,a=new Array(s);let r,l,h,c;for(r=0,l=s;r<l;++r)h=r+i,c=e[h],a[r]={x:n.parse(c[0],h),y:o.parse(c[1],h)};return a}parseObjectData(t,e,i,s){const{xScale:n,yScale:o}=t,{xAxisKey:a="x",yAxisKey:r="y"}=this._parsing,l=new Array(s);let h,c,d,u;for(h=0,c=s;h<c;++h)d=h+i,u=e[d],l[h]={x:n.parse(M(u,a),d),y:o.parse(M(u,r),d)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,n=this._cachedMeta,o=e[t.axis];return Rs({keys:Es(s,true),values:e._stacks[t.axis]._visualValues},o,n.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const n=i[e.axis];let o=null===n?NaN:n;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,o=Rs(s,n,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o);}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,n=i._sorted&&t===i.iScale,o=s.length,r=this._getOtherScale(t),l=((t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:Es(i,true),values:null})(e,i,this.chart),h={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:d}=function(t){const{min:e,max:i,minDefined:s,maxDefined:n}=t.getUserBounds();return {min:s?e:Number.NEGATIVE_INFINITY,max:n?i:Number.POSITIVE_INFINITY}}(r);let u,f;function g(){f=s[u];const e=f[r.axis];return !a(f[t.axis])||c>e||d<e}for(u=0;u<o&&(g()||(this.updateRangeFromParsed(h,t,f,l),!n));++u);if(n)for(u=o-1;u>=0;--u)if(!g()){this.updateRangeFromParsed(h,t,f,l);break}return h}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,n,o;for(s=0,n=e.length;s<n;++s)o=e[s][t.axis],a(o)&&i.push(o);return i}getMaxOverflow(){return  false}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,n=this.getParsed(t);return {label:i?""+i.getLabelForValue(n[i.axis]):"",value:s?""+s.getLabelForValue(n[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=function(t){let e,i,s,n;return o(t)?(e=t.top,i=t.right,s=t.bottom,n=t.left):e=i=s=n=t,{top:e,right:i,bottom:s,left:n,disabled:false===t}}(l(this.options.clip,function(t,e,i){if(false===i)return  false;const s=Ls(t,i),n=Ls(e,i);return {top:n.end,right:s.end,bottom:n.start,left:s.start}}(e.xScale,e.yScale,this.getMaxOverflow())));}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],n=e.chartArea,o=[],a=this._drawStart||0,r=this._drawCount||s.length-a,l=this.options.drawActiveElementsOnTop;let h;for(i.dataset&&i.dataset.draw(t,n,a,r),h=a;h<a+r;++h){const e=s[h];e.hidden||(e.active&&l?o.push(e):e.draw(t,n));}for(h=0;h<o.length;++h)o[h].draw(t,n);}getStyle(t,e){const i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let n;if(t>=0&&t<this._cachedMeta.data.length){const e=this._cachedMeta.data[t];n=e.$context||(e.$context=function(t,e,i){return Ci(t,{active:false,dataIndex:e,parsed:void 0,raw:void 0,element:i,index:e,mode:"default",type:"data"})}(this.getContext(),t,e)),n.parsed=this.getParsed(t),n.raw=s.data[t],n.index=n.dataIndex=t;}else n=this.$context||(this.$context=function(t,e){return Ci(t,{active:false,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}(this.chart.getContext(),this.index)),n.dataset=s,n.index=n.datasetIndex=this.index;return n.active=!!e,n.mode=i,n}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s="active"===e,n=this._cachedDataOpts,o=t+"-"+e,a=n[o],r=this.enableOptionSharing&&k(i);if(a)return Hs(a,r);const l=this.chart.config,h=l.datasetElementScopeKeys(this._type,t),c=s?[`${t}Hover`,"hover",t,""]:[t,""],d=l.getOptionScopes(this.getDataset(),h),u=Object.keys(ue.elements[t]),f=l.resolveNamedOptions(d,u,(()=>this.getContext(i,s,e)),c);return f.$shared&&(f.$shared=r,n[o]=Object.freeze(Hs(f,r))),f}_resolveAnimations(t,e,i){const s=this.chart,n=this._cachedDataOpts,o=`animation-${e}`,a=n[o];if(a)return a;let r;if(false!==s.options.animation){const s=this.chart.config,n=s.datasetAnimationScopeKeys(this._type,e),o=s.getOptionScopes(this.getDataset(),n);r=s.createResolver(o,this.getContext(t,i,e));}const l=new Ts(s,r&&r.animations);return r&&r._cacheable&&(n[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return !e||Ns(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,n=this.getSharedOptions(i),o=this.includeOptions(e,n)||n!==s;return this.updateSharedOptions(n,e,i),{sharedOptions:n,includeOptions:o}}updateElement(t,e,i,s){Ns(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i);}updateSharedOptions(t,e,i){t&&!Ns(e)&&this._resolveAnimations(void 0,e).update(t,i);}_setStyle(t,e,i,s){t.active=s;const n=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(n)||n});}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",false);}setHoverStyle(t,e,i){this._setStyle(t,i,"active",true);}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",false);}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",true);}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];const s=i.length,n=e.length,o=Math.min(n,s);o&&this.parse(0,o),n>s?this._insertElements(s,n-s,t):n<s&&this._removeElements(n,s-n);}_insertElements(t,e,i=true){const s=this._cachedMeta,n=s.data,o=t+e;let a;const r=t=>{for(t.length+=e,a=t.length-1;a>=o;a--)t[a]=t[a-e];};for(r(n),a=t;a<o;++a)n[a]=new this.dataElementType;this._parsing&&r(s._parsed),this.parse(t,e),i&&this.updateElements(n,t,e,"reset");}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&Ws(i,s);}i.data.splice(t,e);}_sync(t){if(this._parsing)this._syncList.push(t);else {const[e,i,s]=t;this[e](i,s);}this.chart._dataChanges.push([this.index,...t]);}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t]);}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1]);}_onDataShift(){this._sync(["_removeElements",0,1]);}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i]);}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length]);}}class $s{static defaults={};static defaultRoutes=void 0;x;y;active=false;options;$animations;tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return {x:e,y:i}}hasValue(){return N(this.x)&&N(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach((t=>{s[t]=i[t]&&i[t].active()?i[t]._to:this[t];})),s}}function Ys(t,e){const i=t.options.ticks,n=function(t){const e=t.options.offset,i=t._tickSize(),s=t._length/i+(e?0:1),n=t._maxLength/i;return Math.floor(Math.min(s,n))}(t),o=Math.min(i.maxTicksLimit||n,n),a=i.major.enabled?function(t){const e=[];let i,s;for(i=0,s=t.length;i<s;i++)t[i].major&&e.push(i);return e}(e):[],r=a.length,l=a[0],h=a[r-1],c=[];if(r>o)return function(t,e,i,s){let n,o=0,a=i[0];for(s=Math.ceil(s),n=0;n<t.length;n++)n===a&&(e.push(t[n]),o++,a=i[o*s]);}(e,c,a,r/o),c;const d=function(t,e,i){const s=function(t){const e=t.length;let i,s;if(e<2)return  false;for(s=t[0],i=1;i<e;++i)if(t[i]-t[i-1]!==s)return  false;return s}(t),n=e.length/i;if(!s)return Math.max(n,1);const o=W(s);for(let t=0,e=o.length-1;t<e;t++){const e=o[t];if(e>n)return e}return Math.max(n,1)}(a,e,o);if(r>0){let t,i;const n=r>1?Math.round((h-l)/(r-1)):null;for(Us(e,c,d,s(n)?0:l-n,l),t=0,i=r-1;t<i;t++)Us(e,c,d,a[t],a[t+1]);return Us(e,c,d,h,s(n)?e.length:h+n),c}return Us(e,c,d),c}function Us(t,e,i,s,n){const o=l(s,0),a=Math.min(l(n,t.length),t.length);let r,h,c,d=0;for(i=Math.ceil(i),n&&(r=n-s,i=r/Math.floor(r/i)),c=o;c<0;)d++,c=Math.round(o+d*i);for(h=Math.max(o,0);h<a;h++)h===c&&(e.push(t[h]),d++,c=Math.round(o+d*i));}const Xs=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i,qs=(t,e)=>Math.min(e||t,t);function Ks(t,e){const i=[],s=t.length/e,n=t.length;let o=0;for(;o<n;o+=s)i.push(t[Math.floor(o)]);return i}function Gs(t,e,i){const s=t.ticks.length,n=Math.min(e,s-1),o=t._startPixel,a=t._endPixel,r=1e-6;let l,h=t.getPixelForTick(n);if(!(i&&(l=1===s?Math.max(h-o,a-h):0===e?(t.getPixelForTick(1)-h)/2:(h-t.getPixelForTick(n-1))/2,h+=n<e?l:-l,h<o-r||h>a+r)))return h}function Js(t){return t.drawTicks?t.tickLength:0}function Zs(t,e){if(!t.display)return 0;const i=Si(t.font,e),s=ki(t.padding);return (n(t.text)?t.text.length:1)*i.lineHeight+s.height}function Qs(t,e,i){let s=ut(t);return (i&&"right"!==e||!i&&"right"===e)&&(s=(t=>"left"===t?"right":"right"===t?"left":t)(s)),s}class tn extends $s{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=false,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=false,this.$context=void 0;}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax);}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=r(t,Number.POSITIVE_INFINITY),e=r(e,Number.NEGATIVE_INFINITY),i=r(i,Number.POSITIVE_INFINITY),s=r(s,Number.NEGATIVE_INFINITY),{min:r(t,i),max:r(e,s),minDefined:a(t),maxDefined:a(e)}}getMinMax(t){let e,{min:i,max:s,minDefined:n,maxDefined:o}=this.getUserBounds();if(n&&o)return {min:i,max:s};const a=this.getMatchingVisibleMetas();for(let r=0,l=a.length;r<l;++r)e=a[r].controller.getMinMax(this,t),n||(i=Math.min(i,e.min)),o||(s=Math.max(s,e.max));return i=o&&i>s?s:i,s=n&&i>s?i:s,{min:r(i,r(s,i)),max:r(s,r(i,s))}}getPadding(){return {left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=false;}beforeUpdate(){d(this.options.beforeUpdate,[this]);}update(t,e,i){const{beginAtZero:s,grace:n,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Di(this,n,s),this._dataLimitsCached=true),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const r=a<this.ticks.length;this._convertTicksToLabels(r?Ks(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||"auto"===o.source)&&(this.ticks=Ys(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),r&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate();}configure(){let t,e,i=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,i=!i),this._startPixel=t,this._endPixel=e,this._reversePixels=i,this._length=e-t,this._alignToPixels=this.options.alignToPixels;}afterUpdate(){d(this.options.afterUpdate,[this]);}beforeSetDimensions(){d(this.options.beforeSetDimensions,[this]);}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0;}afterSetDimensions(){d(this.options.afterSetDimensions,[this]);}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),d(this.options[t],[this]);}beforeDataLimits(){this._callHooks("beforeDataLimits");}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits");}beforeBuildTicks(){this._callHooks("beforeBuildTicks");}buildTicks(){return []}afterBuildTicks(){this._callHooks("afterBuildTicks");}beforeTickToLabelConversion(){d(this.options.beforeTickToLabelConversion,[this]);}generateTickLabels(t){const e=this.options.ticks;let i,s,n;for(i=0,s=t.length;i<s;i++)n=t[i],n.label=d(e.callback,[n.value,i,t],this);}afterTickToLabelConversion(){d(this.options.afterTickToLabelConversion,[this]);}beforeCalculateLabelRotation(){d(this.options.beforeCalculateLabelRotation,[this]);}calculateLabelRotation(){const t=this.options,e=t.ticks,i=qs(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,n=e.maxRotation;let o,a,r,l=s;if(!this._isVisible()||!e.display||s>=n||i<=1||!this.isHorizontal())return void(this.labelRotation=s);const h=this._getLabelSizes(),c=h.widest.width,d=h.highest.height,u=Z(this.chart.width-c,0,this.maxWidth);o=t.offset?this.maxWidth/i:u/(i-1),c+6>o&&(o=u/(i-(t.offset?.5:1)),a=this.maxHeight-Js(t.grid)-e.padding-Zs(t.title,this.chart.options.font),r=Math.sqrt(c*c+d*d),l=Y(Math.min(Math.asin(Z((h.highest.height+6)/o,-1,1)),Math.asin(Z(a/r,-1,1))-Math.asin(Z(d/r,-1,1)))),l=Math.max(s,Math.min(n,l))),this.labelRotation=l;}afterCalculateLabelRotation(){d(this.options.afterCalculateLabelRotation,[this]);}afterAutoSkip(){}beforeFit(){d(this.options.beforeFit,[this]);}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:n}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const o=Zs(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=Js(n)+o):(t.height=this.maxHeight,t.width=Js(n)+o),i.display&&this.ticks.length){const{first:e,last:s,widest:n,highest:o}=this._getLabelSizes(),r=2*i.padding,l=$(this.labelRotation),h=Math.cos(l),c=Math.sin(l);if(a){const e=i.mirror?0:c*n.width+h*o.height;t.height=Math.min(this.maxHeight,t.height+e+r);}else {const e=i.mirror?0:h*n.width+c*o.height;t.width=Math.min(this.maxWidth,t.width+e+r);}this._calculatePadding(e,s,c,h);}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom);}_calculatePadding(t,e,i,s){const{ticks:{align:n,padding:o},position:a}=this.options,r=0!==this.labelRotation,l="top"!==a&&"x"===this.axis;if(this.isHorizontal()){const a=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let c=0,d=0;r?l?(c=s*t.width,d=i*e.height):(c=i*t.height,d=s*e.width):"start"===n?d=e.width:"end"===n?c=t.width:"inner"!==n&&(c=t.width/2,d=e.width/2),this.paddingLeft=Math.max((c-a+o)*this.width/(this.width-a),0),this.paddingRight=Math.max((d-h+o)*this.width/(this.width-h),0);}else {let i=e.height/2,s=t.height/2;"start"===n?(i=0,s=t.height):"end"===n&&(i=e.height,s=0),this.paddingTop=i+o,this.paddingBottom=s+o;}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom));}afterFit(){d(this.options.afterFit,[this]);}isHorizontal(){const{axis:t,position:e}=this.options;return "top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,i;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,i=t.length;e<i;e++)s(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion();}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=Ks(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit);}return t}_computeLabelSizes(t,e,i){const{ctx:o,_longestTextCache:a}=this,r=[],l=[],h=Math.floor(e/qs(e,i));let c,d,f,g,p,m,x,b,_,y,v,M=0,w=0;for(c=0;c<e;c+=h){if(g=t[c].label,p=this._resolveTickFontOptions(c),o.font=m=p.string,x=a[m]=a[m]||{data:{},gc:[]},b=p.lineHeight,_=y=0,s(g)||n(g)){if(n(g))for(d=0,f=g.length;d<f;++d)v=g[d],s(v)||n(v)||(_=Ce(o,x.data,x.gc,_,v),y+=b);}else _=Ce(o,x.data,x.gc,_,g),y=b;r.push(_),l.push(y),M=Math.max(_,M),w=Math.max(y,w);}!function(t,e){u(t,(t=>{const i=t.gc,s=i.length/2;let n;if(s>e){for(n=0;n<s;++n)delete t.data[i[n]];i.splice(0,s);}}));}(a,e);const k=r.indexOf(M),S=l.indexOf(w),P=t=>({width:r[t]||0,height:l[t]||0});return {first:P(0),last:P(e-1),widest:P(k),highest:P(S),widths:r,heights:l}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return Q(this._alignToPixels?Ae(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=function(t,e,i){return Ci(t,{tick:i,index:e,type:"tick"})}(this.getContext(),t,i))}return this.$context||(this.$context=Ci(this.chart.getContext(),{scale:this,type:"scale"}))}_tickSize(){const t=this.options.ticks,e=$(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),n=this._getLabelSizes(),o=t.autoSkipPadding||0,a=n?n.widest.width+o:0,r=n?n.highest.height+o:0;return this.isHorizontal()?r*i>a*s?a/i:r/s:r*s<a*i?r/i:a/s}_isVisible(){const t=this.options.display;return "auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:n,position:a,border:r}=s,h=n.offset,c=this.isHorizontal(),d=this.ticks.length+(h?1:0),u=Js(n),f=[],g=r.setContext(this.getContext()),p=g.display?g.width:0,m=p/2,x=function(t){return Ae(i,t,p)};let b,_,y,v,M,w,k,S,P,D,C,O;if("top"===a)b=x(this.bottom),w=this.bottom-u,S=b-m,D=x(t.top)+m,O=t.bottom;else if("bottom"===a)b=x(this.top),D=t.top,O=x(t.bottom)-m,w=b+m,S=this.top+u;else if("left"===a)b=x(this.right),M=this.right-u,k=b-m,P=x(t.left)+m,C=t.right;else if("right"===a)b=x(this.left),P=t.left,C=x(t.right)-m,M=b+m,k=this.left+u;else if("x"===e){if("center"===a)b=x((t.top+t.bottom)/2+.5);else if(o(a)){const t=Object.keys(a)[0],e=a[t];b=x(this.chart.scales[t].getPixelForValue(e));}D=t.top,O=t.bottom,w=b+m,S=w+u;}else if("y"===e){if("center"===a)b=x((t.left+t.right)/2);else if(o(a)){const t=Object.keys(a)[0],e=a[t];b=x(this.chart.scales[t].getPixelForValue(e));}M=b-m,k=M-u,P=t.left,C=t.right;}const A=l(s.ticks.maxTicksLimit,d),T=Math.max(1,Math.ceil(d/A));for(_=0;_<d;_+=T){const t=this.getContext(_),e=n.setContext(t),s=r.setContext(t),o=e.lineWidth,a=e.color,l=s.dash||[],d=s.dashOffset,u=e.tickWidth,g=e.tickColor,p=e.tickBorderDash||[],m=e.tickBorderDashOffset;y=Gs(this,_,h),void 0!==y&&(v=Ae(i,y,o),c?M=k=P=C=v:w=S=D=O=v,f.push({tx1:M,ty1:w,tx2:k,ty2:S,x1:P,y1:D,x2:C,y2:O,width:o,color:a,borderDash:l,borderDashOffset:d,tickWidth:u,tickColor:g,tickBorderDash:p,tickBorderDashOffset:m}));}return this._ticksLength=d,this._borderValue=b,f}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:a}=i,r=this.isHorizontal(),l=this.ticks,{align:h,crossAlign:c,padding:d,mirror:u}=a,f=Js(i.grid),g=f+d,p=u?-d:g,m=-$(this.labelRotation),x=[];let b,_,y,v,M,w,k,S,P,D,C,O,A="middle";if("top"===s)w=this.bottom-p,k=this._getXAxisLabelAlignment();else if("bottom"===s)w=this.top+p,k=this._getXAxisLabelAlignment();else if("left"===s){const t=this._getYAxisLabelAlignment(f);k=t.textAlign,M=t.x;}else if("right"===s){const t=this._getYAxisLabelAlignment(f);k=t.textAlign,M=t.x;}else if("x"===e){if("center"===s)w=(t.top+t.bottom)/2+g;else if(o(s)){const t=Object.keys(s)[0],e=s[t];w=this.chart.scales[t].getPixelForValue(e)+g;}k=this._getXAxisLabelAlignment();}else if("y"===e){if("center"===s)M=(t.left+t.right)/2-g;else if(o(s)){const t=Object.keys(s)[0],e=s[t];M=this.chart.scales[t].getPixelForValue(e);}k=this._getYAxisLabelAlignment(f).textAlign;}"y"===e&&("start"===h?A="top":"end"===h&&(A="bottom"));const T=this._getLabelSizes();for(b=0,_=l.length;b<_;++b){y=l[b],v=y.label;const t=a.setContext(this.getContext(b));S=this.getPixelForTick(b)+a.labelOffset,P=this._resolveTickFontOptions(b),D=P.lineHeight,C=n(v)?v.length:1;const e=C/2,i=t.color,o=t.textStrokeColor,h=t.textStrokeWidth;let d,f=k;if(r?(M=S,"inner"===k&&(f=b===_-1?this.options.reverse?"left":"right":0===b?this.options.reverse?"right":"left":"center"),O="top"===s?"near"===c||0!==m?-C*D+D/2:"center"===c?-T.highest.height/2-e*D+D:-T.highest.height+D/2:"near"===c||0!==m?D/2:"center"===c?T.highest.height/2-e*D:T.highest.height-C*D,u&&(O*=-1),0===m||t.showLabelBackdrop||(M+=D/2*Math.sin(m))):(w=S,O=(1-C)*D/2),t.showLabelBackdrop){const e=ki(t.backdropPadding),i=T.heights[b],s=T.widths[b];let n=O-e.top,o=0-e.left;switch(A){case "middle":n-=i/2;break;case "bottom":n-=i;}switch(k){case "center":o-=s/2;break;case "right":o-=s;break;case "inner":b===_-1?o-=s:b>0&&(o-=s/2);}d={left:o,top:n,width:s+e.width,height:i+e.height,color:t.backdropColor};}x.push({label:v,font:P,textOffset:O,options:{rotation:m,color:i,strokeColor:o,strokeWidth:h,textAlign:f,textBaseline:A,translation:[M,w],backdrop:d}});}return x}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-$(this.labelRotation))return "top"===t?"left":"right";let i="center";return "start"===e.align?i="left":"end"===e.align?i="right":"inner"===e.align&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:n}}=this.options,o=t+n,a=this._getLabelSizes().widest.width;let r,l;return "left"===e?s?(l=this.right+n,"near"===i?r="left":"center"===i?(r="center",l+=a/2):(r="right",l+=a)):(l=this.right-o,"near"===i?r="right":"center"===i?(r="center",l-=a/2):(r="left",l=this.left)):"right"===e?s?(l=this.left+n,"near"===i?r="right":"center"===i?(r="center",l-=a/2):(r="left",l-=a)):(l=this.left+o,"near"===i?r="left":"center"===i?(r="center",l+=a/2):(r="right",l=this.right)):r="right",{textAlign:r,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;return "left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:n,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,n,o),t.restore());}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex((e=>e.value===t));if(i>=0){return e.setContext(this.getContext(i)).lineWidth}return 0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let n,o;const a=(t,e,s)=>{s.width&&s.color&&(i.save(),i.lineWidth=s.width,i.strokeStyle=s.color,i.setLineDash(s.borderDash||[]),i.lineDashOffset=s.borderDashOffset,i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.stroke(),i.restore());};if(e.display)for(n=0,o=s.length;n<o;++n){const t=s[n];e.drawOnChartArea&&a({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),e.drawTicks&&a({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset});}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:s}}=this,n=i.setContext(this.getContext()),o=i.display?n.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,r=this._borderValue;let l,h,c,d;this.isHorizontal()?(l=Ae(t,this.left,o)-o/2,h=Ae(t,this.right,a)+a/2,c=d=r):(c=Ae(t,this.top,o)-o/2,d=Ae(t,this.bottom,a)+a/2,l=h=r),e.save(),e.lineWidth=n.width,e.strokeStyle=n.color,e.beginPath(),e.moveTo(l,c),e.lineTo(h,d),e.stroke(),e.restore();}drawLabels(t){if(!this.options.ticks.display)return;const e=this.ctx,i=this._computeLabelArea();i&&Ie(e,i);const s=this.getLabelItems(t);for(const t of s){const i=t.options,s=t.font;Ne(e,t.label,0,t.textOffset,s,i);}i&&ze(e);}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const a=Si(i.font),r=ki(i.padding),l=i.align;let h=a.lineHeight/2;"bottom"===e||"center"===e||o(e)?(h+=r.bottom,n(i.text)&&(h+=a.lineHeight*(i.text.length-1))):h+=r.top;const{titleX:c,titleY:d,maxWidth:u,rotation:f}=function(t,e,i,s){const{top:n,left:a,bottom:r,right:l,chart:h}=t,{chartArea:c,scales:d}=h;let u,f,g,p=0;const m=r-n,x=l-a;if(t.isHorizontal()){if(f=ft(s,a,l),o(i)){const t=Object.keys(i)[0],s=i[t];g=d[t].getPixelForValue(s)+m-e;}else g="center"===i?(c.bottom+c.top)/2+m-e:Xs(t,i,e);u=l-a;}else {if(o(i)){const t=Object.keys(i)[0],s=i[t];f=d[t].getPixelForValue(s)-x+e;}else f="center"===i?(c.left+c.right)/2-x+e:Xs(t,i,e);g=ft(s,r,n),p="left"===i?-E:E;}return {titleX:f,titleY:g,maxWidth:u,rotation:p}}(this,h,e,l);Ne(t,i.text,0,0,a,{color:i.color,maxWidth:u,rotation:f,textAlign:Qs(l,e,s),textBaseline:"middle",translation:[c,d]});}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t));}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=l(t.grid&&t.grid.z,-1),s=l(t.border&&t.border.z,0);return this._isVisible()&&this.draw===tn.prototype.draw?[{z:i,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle();}},{z:s,draw:()=>{this.drawBorder();}},{z:e,draw:t=>{this.drawLabels(t);}}]:[{z:e,draw:t=>{this.draw(t);}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let n,o;for(n=0,o=e.length;n<o;++n){const o=e[n];o[i]!==this.id||t&&o.type!==t||s.push(o);}return s}_resolveTickFontOptions(t){return Si(this.options.ticks.setContext(this.getContext(t)).font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return (this.isHorizontal()?this.width:this.height)/t}}class en{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null);}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;(function(t){return "id"in t&&"defaults"in t})(e)&&(i=this.register(e));const s=this.items,n=t.id,o=this.scope+"."+n;if(!n)throw new Error("class does not have id: "+t);return n in s||(s[n]=t,function(t,e,i){const s=x(Object.create(null),[i?ue.get(i):{},ue.get(e),t.defaults]);ue.set(e,s),t.defaultRoutes&&function(t,e){Object.keys(e).forEach((i=>{const s=i.split("."),n=s.pop(),o=[t].concat(s).join("."),a=e[i].split("."),r=a.pop(),l=a.join(".");ue.route(o,n,l,r);}));}(e,t.defaultRoutes);t.descriptors&&ue.describe(e,t.descriptors);}(t,o,i),this.override&&ue.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in ue[s]&&(delete ue[s][i],this.override&&delete re[i]);}}class sn{constructor(){this.controllers=new en(js,"datasets",true),this.elements=new en($s,"elements"),this.plugins=new en(Object,"plugins"),this.scales=new en(tn,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements];}add(...t){this._each("register",t);}remove(...t){this._each("unregister",t);}addControllers(...t){this._each("register",t,this.controllers);}addElements(...t){this._each("register",t,this.elements);}addPlugins(...t){this._each("register",t,this.plugins);}addScales(...t){this._each("register",t,this.scales);}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers);}removeElements(...t){this._each("unregister",t,this.elements);}removePlugins(...t){this._each("unregister",t,this.plugins);}removeScales(...t){this._each("unregister",t,this.scales);}_each(t,e,i){[...e].forEach((e=>{const s=i||this._getRegistryForType(e);i||s.isForType(e)||s===this.plugins&&e.id?this._exec(t,s,e):u(e,(e=>{const s=i||this._getRegistryForType(e);this._exec(t,s,e);}));}));}_exec(t,e,i){const s=w(t);d(i["before"+s],[],i),e[t](i),d(i["after"+s],[],i);}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(void 0===s)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var nn=new sn;class on{constructor(){this._init=void 0;}notify(t,e,i,s){if("beforeInit"===e&&(this._init=this._createDescriptors(t,true),this._notify(this._init,t,"install")),void 0===this._init)return;const n=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(n,t,e,i);return "afterDestroy"===e&&(this._notify(n,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,i,s){s=s||{};for(const n of t){const t=n.plugin;if(false===d(t[i],[e,s,n.options],t)&&s.cancelable)return  false}return  true}invalidate(){s(this._cache)||(this._oldCache=this._cache,this._cache=void 0);}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=l(i.options&&i.options.plugins,{}),n=function(t){const e={},i=[],s=Object.keys(nn.plugins.items);for(let t=0;t<s.length;t++)i.push(nn.getPlugin(s[t]));const n=t.plugins||[];for(let t=0;t<n.length;t++){const s=n[t];-1===i.indexOf(s)&&(i.push(s),e[s.id]=true);}return {plugins:i,localIds:e}}(i);return  false!==s||e?function(t,{plugins:e,localIds:i},s,n){const o=[],a=t.getContext();for(const r of e){const e=r.id,l=an(s[e],n);null!==l&&o.push({plugin:r,options:rn(t.config,{plugin:r,local:i[e]},l,a)});}return o}(t,n,s,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(t,e)=>t.filter((t=>!e.some((e=>t.plugin.id===e.plugin.id))));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start");}}function an(t,e){return e||false!==t?true===t?{}:t:null}function rn(t,{plugin:e,local:i},s,n){const o=t.pluginScopeKeys(e),a=t.getOptionScopes(s,o);return i&&e.defaults&&a.push(e.defaults),t.createResolver(a,n,[""],{scriptable:false,indexable:false,allKeys:true})}function ln(t,e){const i=ue.datasets[t]||{};return ((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||i.indexAxis||"x"}function hn(t){if("x"===t||"y"===t||"r"===t)return t}function cn(t,...e){if(hn(t))return t;for(const s of e){const e=s.axis||("top"===(i=s.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.length>1&&hn(t[0].toLowerCase());if(e)return e}var i;throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function dn(t,e,i){if(i[e+"AxisID"]===t)return {axis:e}}function un(t,e){const i=re[t.type]||{scales:{}},s=e.scales||{},n=ln(t.type,e),a=Object.create(null);return Object.keys(s).forEach((e=>{const r=s[e];if(!o(r))return console.error(`Invalid scale configuration for scale: ${e}`);if(r._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${e}`);const l=cn(e,r,function(t,e){if(e.data&&e.data.datasets){const i=e.data.datasets.filter((e=>e.xAxisID===t||e.yAxisID===t));if(i.length)return dn(t,"x",i[0])||dn(t,"y",i[0])}return {}}(e,t),ue.scales[r.type]),h=function(t,e){return t===e?"_index_":"_value_"}(l,n),c=i.scales||{};a[e]=b(Object.create(null),[{axis:l},r,c[l],c[h]]);})),t.data.datasets.forEach((i=>{const n=i.type||t.type,o=i.indexAxis||ln(n,e),r=(re[n]||{}).scales||{};Object.keys(r).forEach((t=>{const e=function(t,e){let i=t;return "_index_"===t?i=e:"_value_"===t&&(i="x"===e?"y":"x"),i}(t,o),n=i[e+"AxisID"]||e;a[n]=a[n]||Object.create(null),b(a[n],[{axis:e},s[n],r[t]]);}));})),Object.keys(a).forEach((t=>{const e=a[t];b(e,[ue.scales[e.type],ue.scale]);})),a}function fn(t){const e=t.options||(t.options={});e.plugins=l(e.plugins,{}),e.scales=un(t,e);}function gn(t){return (t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const pn=new Map,mn=new Set;function xn(t,e){let i=pn.get(t);return i||(i=e(),pn.set(t,i),mn.add(i)),i}const bn=(t,e,i)=>{const s=M(e,i);void 0!==s&&t.add(s);};class _n{constructor(t){this._config=function(t){return (t=t||{}).data=gn(t.data),fn(t),t}(t),this._scopeCache=new Map,this._resolverCache=new Map;}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t;}get data(){return this._config.data}set data(t){this._config.data=gn(t);}get options(){return this._config.options}set options(t){this._config.options=t;}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),fn(t);}clearCache(){this._scopeCache.clear(),this._resolverCache.clear();}datasetScopeKeys(t){return xn(t,(()=>[[`datasets.${t}`,""]]))}datasetAnimationScopeKeys(t,e){return xn(`${t}.transition.${e}`,(()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]]))}datasetElementScopeKeys(t,e){return xn(`${t}-${e}`,(()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]]))}pluginScopeKeys(t){const e=t.id;return xn(`${this.type}-plugin-${e}`,(()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]]))}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return s&&!e||(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:n}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const r=new Set;e.forEach((e=>{t&&(r.add(t),e.forEach((e=>bn(r,t,e)))),e.forEach((t=>bn(r,s,t))),e.forEach((t=>bn(r,re[n]||{},t))),e.forEach((t=>bn(r,ue,t))),e.forEach((t=>bn(r,le,t)));}));const l=Array.from(r);return 0===l.length&&l.push(Object.create(null)),mn.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return [t,re[e]||{},ue.datasets[e]||{},{type:e},ue,le]}resolveNamedOptions(t,e,i,s=[""]){const o={$shared:true},{resolver:a,subPrefixes:r}=yn(this._resolverCache,t,s);let l=a;if(function(t,e){const{isScriptable:i,isIndexable:s}=Ye(t);for(const o of e){const e=i(o),a=s(o),r=(a||e)&&t[o];if(e&&(S(r)||vn(r))||a&&n(r))return  true}return  false}(a,e)){o.$shared=false;l=$e(a,i=S(i)?i():i,this.createResolver(t,i,r));}for(const t of e)o[t]=l[t];return o}createResolver(t,e,i=[""],s){const{resolver:n}=yn(this._resolverCache,t,i);return o(e)?$e(n,e,void 0,s):n}}function yn(t,e,i){let s=t.get(e);s||(s=new Map,t.set(e,s));const n=i.join();let o=s.get(n);if(!o){o={resolver:je(e,i),subPrefixes:i.filter((t=>!t.toLowerCase().includes("hover")))},s.set(n,o);}return o}const vn=t=>o(t)&&Object.getOwnPropertyNames(t).some((e=>S(t[e])));const Mn=["top","bottom","left","right","chartArea"];function wn(t,e){return "top"===t||"bottom"===t||-1===Mn.indexOf(t)&&"x"===e}function kn(t,e){return function(i,s){return i[t]===s[t]?i[e]-s[e]:i[t]-s[t]}}function Sn(t){const e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),d(i&&i.onComplete,[t],e);}function Pn(t){const e=t.chart,i=e.options.animation;d(i&&i.onProgress,[t],e);}function Dn(t){return fe()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Cn={},On=t=>{const e=Dn(t);return Object.values(Cn).filter((t=>t.canvas===e)).pop()};function An(t,e,i){const s=Object.keys(t);for(const n of s){const s=+n;if(s>=e){const o=t[n];delete t[n],(i>0||s>e)&&(t[s+i]=o);}}}class Tn{static defaults=ue;static instances=Cn;static overrides=re;static registry=nn;static version="4.5.1";static getChart=On;static register(...t){nn.add(...t),Ln();}static unregister(...t){nn.remove(...t),Ln();}constructor(t,e){const s=this.config=new _n(e),n=Dn(t),o=On(n);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const a=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||Ps(n)),this.platform.updateConfig(s);const r=this.platform.acquireContext(n,a.aspectRatio),l=r&&r.canvas,h=l&&l.height,c=l&&l.width;this.id=i(),this.ctx=r,this.canvas=l,this.width=c,this.height=h,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new on,this.$proxies={},this._hiddenIndices={},this.attached=false,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=dt((t=>this.update(t)),a.resizeDelay||0),this._dataChanges=[],Cn[this.id]=this,r&&l?(bt.listen(this,"complete",Sn),bt.listen(this,"progress",Pn),this._initialize(),this.attached&&this.update()):console.error("Failed to create chart: can't acquire context from the given item");}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:n,_aspectRatio:o}=this;return s(t)?e&&o?o:n?i/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t;}get options(){return this._options}set options(t){this.config.options=t;}get registry(){return nn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():ke(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Te(this.canvas,this.ctx),this}stop(){return bt.stop(this),this}resize(t,e){bt.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e);}_resize(t,e){const i=this.options,s=this.canvas,n=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,n),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),r=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,ke(this,a,true)&&(this.notifyPlugins("resize",{size:o}),d(i.onResize,[this,o],this),this.attached&&this._doResize(r)&&this.render());}ensureScalesHaveIDs(){u(this.options.scales||{},((t,e)=>{t.id=e;}));}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce(((t,e)=>(t[e]=false,t)),{});let n=[];e&&(n=n.concat(Object.keys(e).map((t=>{const i=e[t],s=cn(t,i),n="r"===s,o="x"===s;return {options:i,dposition:n?"chartArea":o?"bottom":"left",dtype:n?"radialLinear":o?"category":"linear"}})))),u(n,(e=>{const n=e.options,o=n.id,a=cn(o,n),r=l(n.type,e.dtype);void 0!==n.position&&wn(n.position,a)===wn(e.dposition)||(n.position=e.dposition),s[o]=true;let h=null;if(o in i&&i[o].type===r)h=i[o];else {h=new(nn.getScale(r))({id:o,type:r,ctx:this.ctx,chart:this}),i[h.id]=h;}h.init(n,t);})),u(s,((t,e)=>{t||delete i[e];})),u(i,(t=>{ls.configure(this,t,t.options),ls.addBox(this,t);}));}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort(((t,e)=>t.index-e.index)),i>e){for(let t=e;t<i;++t)this._destroyDatasetMeta(t);t.splice(e,i-e);}this._sortedMetasets=t.slice(0).sort(kn("order","index"));}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach(((t,i)=>{0===e.filter((e=>e===t._dataset)).length&&this._destroyDatasetMeta(i);}));}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const s=e[i];let n=this.getDatasetMeta(i);const o=s.type||this.config.type;if(n.type&&n.type!==o&&(this._destroyDatasetMeta(i),n=this.getDatasetMeta(i)),n.type=o,n.indexAxis=s.indexAxis||ln(o,this.options),n.order=s.order||0,n.index=i,n.label=""+s.label,n.visible=this.isDatasetVisible(i),n.controller)n.controller.updateIndex(i),n.controller.linkScales();else {const e=nn.getController(o),{datasetElementType:s,dataElementType:a}=ue.datasets[o];Object.assign(e,{dataElementType:nn.getElement(a),datasetElementType:s&&nn.getElement(s)}),n.controller=new e(this,i),t.push(n.controller);}}return this._updateMetasets(),t}_resetElements(){u(this.data.datasets,((t,e)=>{this.getDatasetMeta(e).controller.reset();}),this);}reset(){this._resetElements(),this.notifyPlugins("reset");}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),false===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:true}))return;const n=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let t=0,e=this.data.datasets.length;t<e;t++){const{controller:e}=this.getDatasetMeta(t),i=!s&&-1===n.indexOf(e);e.buildOrUpdateElements(i),o=Math.max(+e.getMaxOverflow(),o);}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||u(n,(t=>{t.reset();})),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(kn("z","_idx"));const{_active:a,_lastEvent:r}=this;r?this._eventHandler(r,true):a.length&&this._updateHoverStyles(a,a,true),this.render();}_updateScales(){u(this.scales,(t=>{ls.removeBox(this,t);})),this.ensureScalesHaveIDs(),this.buildOrUpdateScales();}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);P(e,i)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents());}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:n}of e){An(t,s,"_removeElements"===i?-n:n);}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=e=>new Set(t.filter((t=>t[0]===e)).map(((t,e)=>e+","+t.splice(1).join(",")))),s=i(0);for(let t=1;t<e;t++)if(!P(s,i(t)))return;return Array.from(s).map((t=>t.split(","))).map((t=>({method:t[1],start:+t[2],count:+t[3]})))}_updateLayout(t){if(false===this.notifyPlugins("beforeLayout",{cancelable:true}))return;ls.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],u(this.boxes,(t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()));}),this),this._layers.forEach(((t,e)=>{t._idx=e;})),this.notifyPlugins("afterLayout");}_updateDatasets(t){if(false!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:true})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,S(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t});}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:true};false!==this.notifyPlugins("beforeDatasetUpdate",s)&&(i.controller._update(e),s.cancelable=false,this.notifyPlugins("afterDatasetUpdate",s));}render(){ false!==this.notifyPlugins("beforeRender",{cancelable:true})&&(bt.has(this)?this.attached&&!bt.running(this)&&bt.start(this):(this.draw(),Sn({chart:this})));}draw(){let t;if(this._resizeBeforeDraw){const{width:t,height:e}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(t,e);}if(this.clear(),this.width<=0||this.height<=0)return;if(false===this.notifyPlugins("beforeDraw",{cancelable:true}))return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw");}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,n;for(s=0,n=e.length;s<n;++s){const n=e[s];t&&!n.visible||i.push(n);}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(true)}_drawDatasets(){if(false===this.notifyPlugins("beforeDatasetsDraw",{cancelable:true}))return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw");}_drawDataset(t){const e=this.ctx,i={meta:t,index:t.index,cancelable:true},s=Ni(this,t);false!==this.notifyPlugins("beforeDatasetDraw",i)&&(s&&Ie(e,s),t.controller.draw(),s&&ze(e),i.cancelable=false,this.notifyPlugins("afterDatasetDraw",i));}isPointInArea(t){return Re(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const n=Ki.modes[e];return "function"==typeof n?n(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter((t=>t&&t._dataset===e)).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:false},i.push(s)),s}getContext(){return this.$context||(this.$context=Ci(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return  false;const i=this.getDatasetMeta(t);return "boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){this.getDatasetMeta(t).hidden=!e;}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t];}getDataVisibility(t){return !this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",n=this.getDatasetMeta(t),o=n.controller._resolveAnimations(void 0,s);k(e)?(n.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(n,{visible:i}),this.update((e=>e.datasetIndex===t?s:void 0)));}hide(t,e){this._updateVisibility(t,e,false);}show(t,e){this._updateVisibility(t,e,true);}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t];}_stop(){let t,e;for(this.stop(),bt.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t);}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Te(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Cn[this.id],this.notifyPlugins("afterDestroy");}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=true;}bindUserEvents(){const t=this._listeners,e=this.platform,i=(i,s)=>{e.addEventListener(this,i,s),t[i]=s;},s=(t,e,i)=>{t.offsetX=e,t.offsetY=i,this._eventHandler(t);};u(this.options.events,(t=>i(t,s)));}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(i,s)=>{e.addEventListener(this,i,s),t[i]=s;},s=(i,s)=>{t[i]&&(e.removeEventListener(this,i,s),delete t[i]);},n=(t,e)=>{this.canvas&&this.resize(t,e);};let o;const a=()=>{s("attach",a),this.attached=true,this.resize(),i("resize",n),i("detach",o);};o=()=>{this.attached=false,s("resize",n),this._stop(),this._resize(0,0),i("attach",a);},e.isAttached(this.canvas)?a():o();}unbindEvents(){u(this._listeners,((t,e)=>{this.platform.removeEventListener(this,e,t);})),this._listeners={},u(this._responsiveListeners,((t,e)=>{this.platform.removeEventListener(this,e,t);})),this._responsiveListeners=void 0;}updateHoverStyle(t,e,i){const s=i?"set":"remove";let n,o,a,r;for("dataset"===e&&(n=this.getDatasetMeta(t[0].datasetIndex),n.controller["_"+s+"DatasetHoverStyle"]()),a=0,r=t.length;a<r;++a){o=t[a];const e=o&&this.getDatasetMeta(o.datasetIndex).controller;e&&e[s+"HoverStyle"](o.element,o.datasetIndex,o.index);}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map((({datasetIndex:t,index:e})=>{const i=this.getDatasetMeta(t);if(!i)throw new Error("No dataset found at index "+t);return {datasetIndex:t,element:i.data[e],index:e}}));!f(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e));}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return 1===this._plugins._cache.filter((e=>e.plugin.id===t)).length}_updateHoverStyles(t,e,i){const s=this.options.hover,n=(t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)))),o=n(e,t),a=i?t:n(t,e);o.length&&this.updateHoverStyle(o,s.mode,false),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,true);}_eventHandler(t,e){const i={event:t,replay:e,cancelable:true,inChartArea:this.isPointInArea(t)},s=e=>(e.options.events||this.options.events).includes(t.native.type);if(false===this.notifyPlugins("beforeEvent",i,s))return;const n=this._handleEvent(t,e,i.inChartArea);return i.cancelable=false,this.notifyPlugins("afterEvent",i,s),(n||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:n}=this,o=e,a=this._getActiveElements(t,s,i,o),r=D(t),l=function(t,e,i,s){return i&&"mouseout"!==t.type?s?e:t:null}(t,this._lastEvent,i,r);i&&(this._lastEvent=null,d(n.onHover,[t,a,this],this),r&&d(n.onClick,[t,a,this],this));const h=!f(a,s);return (h||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=l,h}_getActiveElements(t,e,i,s){if("mouseout"===t.type)return [];if(!i)return e;const n=this.options.hover;return this.getElementsAtEventForMode(t,n.mode,n,s)}}function Ln(){return u(Tn.instances,(t=>t._plugins.invalidate()))}function En(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Rn{static override(t){Object.assign(Rn.prototype,t);}options;constructor(t){this.options=t||{};}init(){}formats(){return En()}parse(){return En()}format(){return En()}add(){return En()}diff(){return En()}startOf(){return En()}endOf(){return En()}}var In={_date:Rn};function zn(t){const e=t.iScale,i=function(t,e){if(!t._cache.$bar){const i=t.getMatchingVisibleMetas(e);let s=[];for(let e=0,n=i.length;e<n;e++)s=s.concat(i[e].controller.getAllParsedValues(t));t._cache.$bar=lt(s.sort(((t,e)=>t-e)));}return t._cache.$bar}(e,t.type);let s,n,o,a,r=e._length;const l=()=>{32767!==o&&-32768!==o&&(k(a)&&(r=Math.min(r,Math.abs(o-a)||r)),a=o);};for(s=0,n=i.length;s<n;++s)o=e.getPixelForValue(i[s]),l();for(a=void 0,s=0,n=e.ticks.length;s<n;++s)o=e.getPixelForTick(s),l();return r}function Fn(t,e,i,s){return n(t)?function(t,e,i,s){const n=i.parse(t[0],s),o=i.parse(t[1],s),a=Math.min(n,o),r=Math.max(n,o);let l=a,h=r;Math.abs(a)>Math.abs(r)&&(l=r,h=a),e[i.axis]=h,e._custom={barStart:l,barEnd:h,start:n,end:o,min:a,max:r};}(t,e,i,s):e[i.axis]=i.parse(t,s),e}function Vn(t,e,i,s){const n=t.iScale,o=t.vScale,a=n.getLabels(),r=n===o,l=[];let h,c,d,u;for(h=i,c=i+s;h<c;++h)u=e[h],d={},d[n.axis]=r||n.parse(a[h],h),l.push(Fn(u,d,o,h));return l}function Bn(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function Wn(t,e,i,s){let n=e.borderSkipped;const o={};if(!n)return void(t.borderSkipped=o);if(true===n)return void(t.borderSkipped={top:true,right:true,bottom:true,left:true});const{start:a,end:r,reverse:l,top:h,bottom:c}=function(t){let e,i,s,n,o;return t.horizontal?(e=t.base>t.x,i="left",s="right"):(e=t.base<t.y,i="bottom",s="top"),e?(n="end",o="start"):(n="start",o="end"),{start:i,end:s,reverse:e,top:n,bottom:o}}(t);"middle"===n&&i&&(t.enableBorderRadius=true,(i._top||0)===s?n=h:(i._bottom||0)===s?n=c:(o[Nn(c,a,r,l)]=true,n=h)),o[Nn(n,a,r,l)]=true,t.borderSkipped=o;}function Nn(t,e,i,s){var n,o,a;return s?(a=i,t=Hn(t=(n=t)===(o=e)?a:n===a?o:n,i,e)):t=Hn(t,e,i),t}function Hn(t,e,i){return "start"===t?e:"end"===t?i:t}function jn(t,{inflateAmount:e},i){t.inflateAmount="auto"===e?1===i?.33:0:e;}class $n extends js{static id="doughnut";static defaults={datasetElementType:false,dataElementType:"arc",animation:{animateRotate:true,animateScale:false},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:i,textAlign:s,color:n,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map(((e,r)=>{const l=t.getDatasetMeta(0).controller.getStyle(r);return {text:e,fillStyle:l.backgroundColor,fontColor:n,hidden:!t.getDataVisibility(r),lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:l.borderWidth,strokeStyle:l.borderColor,textAlign:s,pointStyle:i,borderRadius:o&&(a||l.borderRadius),index:r}})):[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update();}}}};constructor(t,e){super(t,e),this.enableOptionSharing=true,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0;}linkScales(){}parse(t,e){const i=this.getDataset().data,s=this._cachedMeta;if(false===this._parsing)s._parsed=i;else {let n,a,r=t=>+i[t];if(o(i[t])){const{key:t="value"}=this._parsing;r=e=>+M(i[e],t);}for(n=t,a=t+e;n<a;++n)s._parsed[n]=r(n);}}_getRotation(){return $(this.options.rotation-90)}_getCircumference(){return $(this.options.circumference)}_getRotationExtents(){let t=O,e=-O;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const s=this.chart.getDatasetMeta(i).controller,n=s._getRotation(),o=s._getCircumference();t=Math.min(t,n),e=Math.max(e,n+o);}return {rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,s=this._cachedMeta,n=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(n)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-o)/2,0),r=Math.min(h(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:d,rotation:u}=this._getRotationExtents(),{ratioX:f,ratioY:g,offsetX:p,offsetY:m}=function(t,e,i){let s=1,n=1,o=0,a=0;if(e<O){const r=t,l=r+e,h=Math.cos(r),c=Math.sin(r),d=Math.cos(l),u=Math.sin(l),f=(t,e,s)=>J(t,r,l,true)?1:Math.max(e,e*i,s,s*i),g=(t,e,s)=>J(t,r,l,true)?-1:Math.min(e,e*i,s,s*i),p=f(0,h,d),m=f(E,c,u),x=g(C,h,d),b=g(C+E,c,u);s=(p-x)/2,n=(m-b)/2,o=-(p+x)/2,a=-(m+b)/2;}return {ratioX:s,ratioY:n,offsetX:o,offsetY:a}}(u,d,r),x=(i.width-o)/f,b=(i.height-o)/g,_=Math.max(Math.min(x,b)/2,0),y=c(this.options.radius,_),v=(y-Math.max(y*r,0))/this._getVisibleDatasetWeightTotal();this.offsetX=p*y,this.offsetY=m*y,s.total=this.calculateTotal(),this.outerRadius=y-v*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-v*l,0),this.updateElements(n,0,n.length,t);}_circumference(t,e){const i=this.options,s=this._cachedMeta,n=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===s._parsed[t]||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*n/O)}updateElements(t,e,i,s){const n="reset"===s,o=this.chart,a=o.chartArea,r=o.options.animation,l=(a.left+a.right)/2,h=(a.top+a.bottom)/2,c=n&&r.animateScale,d=c?0:this.innerRadius,u=c?0:this.outerRadius,{sharedOptions:f,includeOptions:g}=this._getSharedOptions(e,s);let p,m=this._getRotation();for(p=0;p<e;++p)m+=this._circumference(p,n);for(p=e;p<e+i;++p){const e=this._circumference(p,n),i=t[p],o={x:l+this.offsetX,y:h+this.offsetY,startAngle:m,endAngle:m+e,circumference:e,outerRadius:u,innerRadius:d};g&&(o.options=f||this.resolveDataElementOptions(p,i.active?"active":s)),m+=e,this.updateElement(i,p,o,s);}}calculateTotal(){const t=this._cachedMeta,e=t.data;let i,s=0;for(i=0;i<e.length;i++){const n=t._parsed[i];null===n||isNaN(n)||!this.chart.getDataVisibility(i)||e[i].hidden||(s+=Math.abs(n));}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?O*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],n=ne(e._parsed[t],i.options.locale);return {label:s[t]||"",value:n}}getMaxBorderWidth(t){let e=0;const i=this.chart;let s,n,o,a,r;if(!t)for(s=0,n=i.data.datasets.length;s<n;++s)if(i.isDatasetVisible(s)){o=i.getDatasetMeta(s),t=o.data,a=o.controller;break}if(!t)return 0;for(s=0,n=t.length;s<n;++s)r=a.resolveDataElementOptions(s),"inner"!==r.borderAlign&&(e=Math.max(e,r.borderWidth||0,r.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,s=t.length;i<s;++i){const t=this.resolveDataElementOptions(i);e=Math.max(e,t.offset||0,t.hoverOffset||0);}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(l(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class Yn extends js{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:true,animateScale:true},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i,color:s}}=t.legend.options;return e.labels.map(((e,n)=>{const o=t.getDatasetMeta(0).controller.getStyle(n);return {text:e,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,fontColor:s,lineWidth:o.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(n),index:n}}))}return []}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update();}}},scales:{r:{type:"radialLinear",angleLines:{display:false},beginAtZero:true,grid:{circular:true},pointLabels:{display:false},startAngle:0}}};constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0;}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],n=ne(e._parsed[t].r,i.options.locale);return {label:s[t]||"",value:n}}parseObjectData(t,e,i,s){return ii.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t);}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach(((t,i)=>{const s=this.getParsed(i).r;!isNaN(s)&&this.chart.getDataVisibility(i)&&(s<e.min&&(e.min=s),s>e.max&&(e.max=s));})),e}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),n=Math.max(s/2,0),o=(n-Math.max(i.cutoutPercentage?n/100*i.cutoutPercentage:1,0))/t.getVisibleDatasetCount();this.outerRadius=n-o*this.index,this.innerRadius=this.outerRadius-o;}updateElements(t,e,i,s){const n="reset"===s,o=this.chart,a=o.options.animation,r=this._cachedMeta.rScale,l=r.xCenter,h=r.yCenter,c=r.getIndexAngle(0)-.5*C;let d,u=c;const f=360/this.countVisibleElements();for(d=0;d<e;++d)u+=this._computeAngle(d,s,f);for(d=e;d<e+i;d++){const e=t[d];let i=u,g=u+this._computeAngle(d,s,f),p=o.getDataVisibility(d)?r.getDistanceFromCenterForValue(this.getParsed(d).r):0;u=g,n&&(a.animateScale&&(p=0),a.animateRotate&&(i=g=c));const m={x:l,y:h,innerRadius:0,outerRadius:p,startAngle:i,endAngle:g,options:this.resolveDataElementOptions(d,e.active?"active":s)};this.updateElement(e,d,m,s);}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach(((t,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++;})),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?$(this.resolveDataElementOptions(t,e).angle||i):0}}var Un=Object.freeze({__proto__:null,BarController:class extends js{static id="bar";static defaults={datasetElementType:false,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:true,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:true,grid:{offset:true}},_value_:{type:"linear",beginAtZero:true}}};parsePrimitiveData(t,e,i,s){return Vn(t,e,i,s)}parseArrayData(t,e,i,s){return Vn(t,e,i,s)}parseObjectData(t,e,i,s){const{iScale:n,vScale:o}=t,{xAxisKey:a="x",yAxisKey:r="y"}=this._parsing,l="x"===n.axis?a:r,h="x"===o.axis?a:r,c=[];let d,u,f,g;for(d=i,u=i+s;d<u;++d)g=e[d],f={},f[n.axis]=n.parse(M(g,l),d),c.push(Fn(M(g,h),f,o,d));return c}updateRangeFromParsed(t,e,i,s){super.updateRangeFromParsed(t,e,i,s);const n=i._custom;n&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,n.min),t.max=Math.max(t.max,n.max));}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:s}=e,n=this.getParsed(t),o=n._custom,a=Bn(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(n[s.axis]);return {label:""+i.getLabelForValue(n[i.axis]),value:a}}initialize(){this.enableOptionSharing=true,super.initialize();this._cachedMeta.stack=this.getDataset().stack;}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t);}updateElements(t,e,i,n){const o="reset"===n,{index:a,_cachedMeta:{vScale:r}}=this,l=r.getBasePixel(),h=r.isHorizontal(),c=this._getRuler(),{sharedOptions:d,includeOptions:u}=this._getSharedOptions(e,n);for(let f=e;f<e+i;f++){const e=this.getParsed(f),i=o||s(e[r.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),g=this._calculateBarIndexPixels(f,c),p=(e._stacks||{})[r.axis],m={horizontal:h,base:i.base,enableBorderRadius:!p||Bn(e._custom)||a===p._top||a===p._bottom,x:h?i.head:g.center,y:h?g.center:i.head,height:h?g.size:Math.abs(i.size),width:h?Math.abs(i.size):g.size};u&&(m.options=d||this.resolveDataElementOptions(f,t[f].active?"active":n));const x=m.options||t[f].options;Wn(m,x,p,a),jn(m,x,c.ratio),this.updateElement(t[f],f,m,n);}}_getStacks(t,e){const{iScale:i}=this._cachedMeta,n=i.getMatchingVisibleMetas(this._type).filter((t=>t.controller.options.grouped)),o=i.options.stacked,a=[],r=this._cachedMeta.controller.getParsed(e),l=r&&r[i.axis],h=t=>{const e=t._parsed.find((t=>t[i.axis]===l)),n=e&&e[t.vScale.axis];if(s(n)||isNaN(n))return  true};for(const i of n)if((void 0===e||!h(i))&&((false===o||-1===a.indexOf(i.stack)||void 0===o&&void 0===i.stack)&&a.push(i.stack),i.index===t))break;return a.length||a.push(void 0),a}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter((i=>t[i].axis===e)).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)t[l("x"===this.chart.options.indexAxis?i.xAxisID:i.yAxisID,e)]=true;return Object.keys(t)}_getStackIndex(t,e,i){const s=this._getStacks(t,i),n=void 0!==e?s.indexOf(e):-1;return  -1===n?s.length-1:n}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,s=[];let n,o;for(n=0,o=e.data.length;n<o;++n)s.push(i.getPixelForValue(this.getParsed(n)[i.axis],n));const a=t.barThickness;return {min:a||zn(e),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i,index:n},options:{base:o,minBarLength:a}}=this,r=o||0,l=this.getParsed(t),h=l._custom,c=Bn(h);let d,u,f=l[e.axis],g=0,p=i?this.applyStack(e,l,i):f;p!==f&&(g=p-f,p=f),c&&(f=h.barStart,p=h.barEnd-h.barStart,0!==f&&F(f)!==F(h.barEnd)&&(g=0),g+=f);const m=s(o)||c?g:o;let x=e.getPixelForValue(m);if(d=this.chart.getDataVisibility(t)?e.getPixelForValue(g+p):x,u=d-x,Math.abs(u)<a){u=function(t,e,i){return 0!==t?F(t):(e.isHorizontal()?1:-1)*(e.min>=i?1:-1)}(u,e,r)*a,f===r&&(x-=u/2);const t=e.getPixelForDecimal(0),s=e.getPixelForDecimal(1),o=Math.min(t,s),h=Math.max(t,s);x=Math.max(Math.min(x,h),o),d=x+u,i&&!c&&(l._stacks[e.axis]._visualValues[n]=e.getValueForPixel(d)-e.getValueForPixel(x));}if(x===e.getPixelForValue(r)){const t=F(u)*e.getLineWidthForValue(r)/2;x+=t,u-=t;}return {size:u,base:x,head:d,center:d+u/2}}_calculateBarIndexPixels(t,e){const i=e.scale,n=this.options,o=n.skipNull,a=l(n.maxBarThickness,1/0);let r,h;const c=this._getAxisCount();if(e.grouped){const i=o?this._getStackCount(t):e.stackCount,d="flex"===n.barThickness?function(t,e,i,s){const n=e.pixels,o=n[t];let a=t>0?n[t-1]:null,r=t<n.length-1?n[t+1]:null;const l=i.categoryPercentage;null===a&&(a=o-(null===r?e.end-e.start:r-o)),null===r&&(r=o+o-a);const h=o-(o-Math.min(a,r))/2*l;return {chunk:Math.abs(r-a)/2*l/s,ratio:i.barPercentage,start:h}}(t,e,n,i*c):function(t,e,i,n){const o=i.barThickness;let a,r;return s(o)?(a=e.min*i.categoryPercentage,r=i.barPercentage):(a=o*n,r=1),{chunk:a/n,ratio:r,start:e.pixels[t]-a/2}}(t,e,n,i*c),u="x"===this.chart.options.indexAxis?this.getDataset().xAxisID:this.getDataset().yAxisID,f=this._getAxis().indexOf(l(u,this.getFirstScaleIdForIndexAxis())),g=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0)+f;r=d.start+d.chunk*g+d.chunk/2,h=Math.min(a,d.chunk*d.ratio);}else r=i.getPixelForValue(this.getParsed(t)[i.axis],t),h=Math.min(a,e.min*e.ratio);return {base:r-h/2,head:r+h/2,center:r,size:h}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,s=i.length;let n=0;for(;n<s;++n)null===this.getParsed(n)[e.axis]||i[n].hidden||i[n].draw(this._ctx);}},BubbleController:class extends js{static id="bubble";static defaults={datasetElementType:false,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=true,super.initialize();}parsePrimitiveData(t,e,i,s){const n=super.parsePrimitiveData(t,e,i,s);for(let t=0;t<n.length;t++)n[t]._custom=this.resolveDataElementOptions(t+i).radius;return n}parseArrayData(t,e,i,s){const n=super.parseArrayData(t,e,i,s);for(let t=0;t<n.length;t++){const s=e[i+t];n[t]._custom=l(s[2],this.resolveDataElementOptions(t+i).radius);}return n}parseObjectData(t,e,i,s){const n=super.parseObjectData(t,e,i,s);for(let t=0;t<n.length;t++){const s=e[i+t];n[t]._custom=l(s&&s.r&&+s.r,this.resolveDataElementOptions(t+i).radius);}return n}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:n}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),r=n.getLabelForValue(o.y),l=o._custom;return {label:i[t]||"",value:"("+a+", "+r+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t);}updateElements(t,e,i,s){const n="reset"===s,{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:r,includeOptions:l}=this._getSharedOptions(e,s),h=o.axis,c=a.axis;for(let d=e;d<e+i;d++){const e=t[d],i=!n&&this.getParsed(d),u={},f=u[h]=n?o.getPixelForDecimal(.5):o.getPixelForValue(i[h]),g=u[c]=n?a.getBasePixel():a.getPixelForValue(i[c]);u.skip=isNaN(f)||isNaN(g),l&&(u.options=r||this.resolveDataElementOptions(d,e.active?"active":s),n&&(u.options.radius=0)),this.updateElement(e,d,u,s);}}resolveDataElementOptions(t,e){const i=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:false}));const n=s.radius;return "active"!==e&&(s.radius=0),s.radius+=l(i&&i._custom,n),s}},DoughnutController:$n,LineController:class extends js{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:true,spanGaps:false};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=true,this.supportsDecimation=true,super.initialize();}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:n}=e,o=this.chart._animationsDisabled;let{start:a,count:r}=pt(e,s,o);this._drawStart=a,this._drawCount=r,mt(e)&&(a=0,r=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!n._decimated,i.points=s;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:l},t),this.updateElements(s,a,r,t);}updateElements(t,e,i,n){const o="reset"===n,{iScale:a,vScale:r,_stacked:l,_dataset:h}=this._cachedMeta,{sharedOptions:c,includeOptions:d}=this._getSharedOptions(e,n),u=a.axis,f=r.axis,{spanGaps:g,segment:p}=this.options,m=N(g)?g:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||o||"none"===n,b=e+i,_=t.length;let y=e>0&&this.getParsed(e-1);for(let i=0;i<_;++i){const g=t[i],_=x?g:{};if(i<e||i>=b){_.skip=true;continue}const v=this.getParsed(i),M=s(v[f]),w=_[u]=a.getPixelForValue(v[u],i),k=_[f]=o||M?r.getBasePixel():r.getPixelForValue(l?this.applyStack(r,v,l):v[f],i);_.skip=isNaN(w)||isNaN(k)||M,_.stop=i>0&&Math.abs(v[u]-y[u])>m,p&&(_.parsed=v,_.raw=h.data[i]),d&&(_.options=c||this.resolveDataElementOptions(i,g.active?"active":n)),x||this.updateElement(g,i,_,n),y=v;}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const n=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,n,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw();}},PieController:class extends $n{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}},PolarAreaController:Yn,RadarController:class extends js{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:true,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return {label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,s){return ii.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta,i=e.dataset,s=e.data||[],n=e.iScale.getLabels();if(i.points=s,"resize"!==t){const e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);const o={_loop:true,_fullLoop:n.length===s.length,options:e};this.updateElement(i,void 0,o,t);}this.updateElements(s,0,s.length,t);}updateElements(t,e,i,s){const n=this._cachedMeta.rScale,o="reset"===s;for(let a=e;a<e+i;a++){const e=t[a],i=this.resolveDataElementOptions(a,e.active?"active":s),r=n.getPointPositionForValue(a,this.getParsed(a).r),l=o?n.xCenter:r.x,h=o?n.yCenter:r.y,c={x:l,y:h,angle:r.angle,skip:isNaN(l)||isNaN(h),options:i};this.updateElement(e,a,c,s);}}},ScatterController:class extends js{static id="scatter";static defaults={datasetElementType:false,dataElementType:"point",showLine:false,fill:false};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:n}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),r=n.getLabelForValue(o.y);return {label:i[t]||"",value:"("+a+", "+r+")"}}update(t){const e=this._cachedMeta,{data:i=[]}=e,s=this.chart._animationsDisabled;let{start:n,count:o}=pt(e,i,s);if(this._drawStart=n,this._drawCount=o,mt(e)&&(n=0,o=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:n,_dataset:o}=e;n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!o._decimated,n.points=i;const a=this.resolveDatasetElementOptions(t);a.segment=this.options.segment,this.updateElement(n,void 0,{animated:!s,options:a},t);}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=false);this.updateElements(i,n,o,t);}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements();}updateElements(t,e,i,n){const o="reset"===n,{iScale:a,vScale:r,_stacked:l,_dataset:h}=this._cachedMeta,c=this.resolveDataElementOptions(e,n),d=this.getSharedOptions(c),u=this.includeOptions(n,d),f=a.axis,g=r.axis,{spanGaps:p,segment:m}=this.options,x=N(p)?p:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||o||"none"===n;let _=e>0&&this.getParsed(e-1);for(let c=e;c<e+i;++c){const e=t[c],i=this.getParsed(c),p=b?e:{},y=s(i[g]),v=p[f]=a.getPixelForValue(i[f],c),M=p[g]=o||y?r.getBasePixel():r.getPixelForValue(l?this.applyStack(r,i,l):i[g],c);p.skip=isNaN(v)||isNaN(M)||y,p.stop=c>0&&Math.abs(i[f]-_[f])>x,m&&(p.parsed=i,p.raw=h.data[c]),u&&(p.options=d||this.resolveDataElementOptions(c,e.active?"active":n)),b||this.updateElement(e,c,p,n),_=i;}this.updateSharedOptions(d,n,c);}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let t=0;for(let i=e.length-1;i>=0;--i)t=Math.max(t,e[i].size(this.resolveDataElementOptions(i))/2);return t>0&&t}const i=t.dataset,s=i.options&&i.options.borderWidth||0;if(!e.length)return s;const n=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,n,o)/2}}});function Xn(t,e,i,s){const n=vi(t.options.borderRadius,["outerStart","outerEnd","innerStart","innerEnd"]);const o=(i-e)/2,a=Math.min(o,s*e/2),r=t=>{const e=(i-Math.min(o,t))*s/2;return Z(t,0,Math.min(o,e))};return {outerStart:r(n.outerStart),outerEnd:r(n.outerEnd),innerStart:Z(n.innerStart,0,a),innerEnd:Z(n.innerEnd,0,a)}}function qn(t,e,i,s){return {x:i+t*Math.cos(e),y:s+t*Math.sin(e)}}function Kn(t,e,i,s,n,o){const{x:a,y:r,startAngle:l,pixelMargin:h,innerRadius:c}=e,d=Math.max(e.outerRadius+s+i-h,0),u=c>0?c+s+i+h:0;let f=0;const g=n-l;if(s){const t=((c>0?c-s:0)+(d>0?d-s:0))/2;f=(g-(0!==t?g*t/(t+s):g))/2;}const p=(g-Math.max(.001,g*d-i/C)/d)/2,m=l+p+f,x=n-p-f,{outerStart:b,outerEnd:_,innerStart:y,innerEnd:v}=Xn(e,u,d,x-m),M=d-b,w=d-_,k=m+b/M,S=x-_/w,P=u+y,D=u+v,O=m+y/P,A=x-v/D;if(t.beginPath(),o){const e=(k+S)/2;if(t.arc(a,r,d,k,e),t.arc(a,r,d,e,S),_>0){const e=qn(w,S,a,r);t.arc(e.x,e.y,_,S,x+E);}const i=qn(D,x,a,r);if(t.lineTo(i.x,i.y),v>0){const e=qn(D,A,a,r);t.arc(e.x,e.y,v,x+E,A+Math.PI);}const s=(x-v/u+(m+y/u))/2;if(t.arc(a,r,u,x-v/u,s,true),t.arc(a,r,u,s,m+y/u,true),y>0){const e=qn(P,O,a,r);t.arc(e.x,e.y,y,O+Math.PI,m-E);}const n=qn(M,m,a,r);if(t.lineTo(n.x,n.y),b>0){const e=qn(M,k,a,r);t.arc(e.x,e.y,b,m-E,k);}}else {t.moveTo(a,r);const e=Math.cos(k)*d+a,i=Math.sin(k)*d+r;t.lineTo(e,i);const s=Math.cos(S)*d+a,n=Math.sin(S)*d+r;t.lineTo(s,n);}t.closePath();}function Gn(t,e,i,s,n){const{fullCircles:o,startAngle:a,circumference:r,options:l}=e,{borderWidth:h,borderJoinStyle:c,borderDash:d,borderDashOffset:u,borderRadius:f}=l,g="inner"===l.borderAlign;if(!h)return;t.setLineDash(d||[]),t.lineDashOffset=u,g?(t.lineWidth=2*h,t.lineJoin=c||"round"):(t.lineWidth=h,t.lineJoin=c||"bevel");let p=e.endAngle;if(o){Kn(t,e,i,s,p,n);for(let e=0;e<o;++e)t.stroke();isNaN(r)||(p=a+(r%O||O));}g&&function(t,e,i){const{startAngle:s,pixelMargin:n,x:o,y:a,outerRadius:r,innerRadius:l}=e;let h=n/r;t.beginPath(),t.arc(o,a,r,s-h,i+h),l>n?(h=n/l,t.arc(o,a,l,i+h,s-h,true)):t.arc(o,a,n,i+E,s-E),t.closePath(),t.clip();}(t,e,p),l.selfJoin&&p-a>=C&&0===f&&"miter"!==c&&function(t,e,i){const{startAngle:s,x:n,y:o,outerRadius:a,innerRadius:r,options:l}=e,{borderWidth:h,borderJoinStyle:c}=l,d=Math.min(h/a,G(s-i));if(t.beginPath(),t.arc(n,o,a-h/2,s+d/2,i-d/2),r>0){const e=Math.min(h/r,G(s-i));t.arc(n,o,r+h/2,i-e/2,s+e/2,true);}else {const e=Math.min(h/2,a*G(s-i));if("round"===c)t.arc(n,o,e,i-C/2,s+C/2,true);else if("bevel"===c){const a=2*e*e,r=-a*Math.cos(i+C/2)+n,l=-a*Math.sin(i+C/2)+o,h=a*Math.cos(s+C/2)+n,c=a*Math.sin(s+C/2)+o;t.lineTo(r,l),t.lineTo(h,c);}}t.closePath(),t.moveTo(0,0),t.rect(0,0,t.canvas.width,t.canvas.height),t.clip("evenodd");}(t,e,p),o||(Kn(t,e,i,s,p,n),t.stroke());}function Jn(t,e,i=e){t.lineCap=l(i.borderCapStyle,e.borderCapStyle),t.setLineDash(l(i.borderDash,e.borderDash)),t.lineDashOffset=l(i.borderDashOffset,e.borderDashOffset),t.lineJoin=l(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=l(i.borderWidth,e.borderWidth),t.strokeStyle=l(i.borderColor,e.borderColor);}function Zn(t,e,i){t.lineTo(i.x,i.y);}function Qn(t,e,i={}){const s=t.length,{start:n=0,end:o=s-1}=i,{start:a,end:r}=e,l=Math.max(n,a),h=Math.min(o,r),c=n<a&&o<a||n>r&&o>r;return {count:s,start:l,loop:e.loop,ilen:h<l&&!c?s+h-l:h-l}}function to(t,e,i,s){const{points:n,options:o}=e,{count:a,start:r,loop:l,ilen:h}=Qn(n,i,s),c=function(t){return t.stepped?Fe:t.tension||"monotone"===t.cubicInterpolationMode?Ve:Zn}(o);let d,u,f,{move:g=true,reverse:p}=s||{};for(d=0;d<=h;++d)u=n[(r+(p?h-d:d))%a],u.skip||(g?(t.moveTo(u.x,u.y),g=false):c(t,f,u,p,o.stepped),f=u);return l&&(u=n[(r+(p?h:0))%a],c(t,f,u,p,o.stepped)),!!l}function eo(t,e,i,s){const n=e.points,{count:o,start:a,ilen:r}=Qn(n,i,s),{move:l=true,reverse:h}=s||{};let c,d,u,f,g,p,m=0,x=0;const b=t=>(a+(h?r-t:t))%o,_=()=>{f!==g&&(t.lineTo(m,g),t.lineTo(m,f),t.lineTo(m,p));};for(l&&(d=n[b(0)],t.moveTo(d.x,d.y)),c=0;c<=r;++c){if(d=n[b(c)],d.skip)continue;const e=d.x,i=d.y,s=0|e;s===u?(i<f?f=i:i>g&&(g=i),m=(x*m+e)/++x):(_(),t.lineTo(e,i),u=s,x=0,f=g=i),p=i;}_();}function io(t){const e=t.options,i=e.borderDash&&e.borderDash.length;return !(t._decimated||t._loop||e.tension||"monotone"===e.cubicInterpolationMode||e.stepped||i)?eo:to}const so="function"==typeof Path2D;function no(t,e,i,s){so&&!e.options.segment?function(t,e,i,s){let n=e._path;n||(n=e._path=new Path2D,e.path(n,i,s)&&n.closePath()),Jn(t,e.options),t.stroke(n);}(t,e,i,s):function(t,e,i,s){const{segments:n,options:o}=e,a=io(e);for(const r of n)Jn(t,o,r.style),t.beginPath(),a(t,e,r,{start:i,end:i+s-1})&&t.closePath(),t.stroke();}(t,e,i,s);}class oo extends $s{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:true,cubicInterpolationMode:"default",fill:false,spanGaps:false,stepped:false,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:true,_indexable:t=>"borderDash"!==t&&"fill"!==t};constructor(t){super(),this.animated=true,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=false,this._pointsUpdated=false,this._datasetIndex=void 0,t&&Object.assign(this,t);}updateControlPoints(t,e){const i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;hi(this._points,i,t,s,e),this._pointsUpdated=true;}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=false;}get points(){return this._points}get segments(){return this._segments||(this._segments=zi(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],n=this.points,o=Ii(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],r=function(t){return t.stepped?pi:t.tension||"monotone"===t.cubicInterpolationMode?mi:gi}(i);let l,h;for(l=0,h=o.length;l<h;++l){const{start:h,end:c}=o[l],d=n[h],u=n[c];if(d===u){a.push(d);continue}const f=r(d,u,Math.abs((s-d[e])/(u[e]-d[e])),i.stepped);f[e]=t[e],a.push(f);}return 1===a.length?a[0]:a}pathSegment(t,e,i){return io(this)(t,this,e,i)}path(t,e,i){const s=this.segments,n=io(this);let o=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)o&=n(t,this,a,{start:e,end:e+i-1});return !!o}draw(t,e,i,s){const n=this.options||{};(this.points||[]).length&&n.borderWidth&&(t.save(),no(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=false,this._path=void 0);}}function ao(t,e,i,s){const n=t.options,{[i]:o}=t.getProps([i],s);return Math.abs(e-o)<n.radius+n.hitRadius}function ro(t,e){const{x:i,y:s,base:n,width:o,height:a}=t.getProps(["x","y","base","width","height"],e);let r,l,h,c,d;return t.horizontal?(d=a/2,r=Math.min(i,n),l=Math.max(i,n),h=s-d,c=s+d):(d=o/2,r=i-d,l=i+d,h=Math.min(s,n),c=Math.max(s,n)),{left:r,top:h,right:l,bottom:c}}function lo(t,e,i,s){return t?0:Z(e,i,s)}function ho(t){const e=ro(t),i=e.right-e.left,s=e.bottom-e.top,n=function(t,e,i){const s=t.options.borderWidth,n=t.borderSkipped,o=Mi(s);return {t:lo(n.top,o.top,0,i),r:lo(n.right,o.right,0,e),b:lo(n.bottom,o.bottom,0,i),l:lo(n.left,o.left,0,e)}}(t,i/2,s/2),a=function(t,e,i){const{enableBorderRadius:s}=t.getProps(["enableBorderRadius"]),n=t.options.borderRadius,a=wi(n),r=Math.min(e,i),l=t.borderSkipped,h=s||o(n);return {topLeft:lo(!h||l.top||l.left,a.topLeft,0,r),topRight:lo(!h||l.top||l.right,a.topRight,0,r),bottomLeft:lo(!h||l.bottom||l.left,a.bottomLeft,0,r),bottomRight:lo(!h||l.bottom||l.right,a.bottomRight,0,r)}}(t,i/2,s/2);return {outer:{x:e.left,y:e.top,w:i,h:s,radius:a},inner:{x:e.left+n.l,y:e.top+n.t,w:i-n.l-n.r,h:s-n.t-n.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,a.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(n.b,n.r))}}}}function co(t,e,i,s){const n=null===e,o=null===i,a=t&&!(n&&o)&&ro(t,s);return a&&(n||tt(e,a.left,a.right))&&(o||tt(i,a.top,a.bottom))}function uo(t,e){t.rect(e.x,e.y,e.w,e.h);}function fo(t,e,i={}){const s=t.x!==i.x?-e:0,n=t.y!==i.y?-e:0,o=(t.x+t.w!==i.x+i.w?e:0)-s,a=(t.y+t.h!==i.y+i.h?e:0)-n;return {x:t.x+s,y:t.y+n,w:t.w+o,h:t.h+a,radius:t.radius}}var go=Object.freeze({__proto__:null,ArcElement:class extends $s{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:true,selfJoin:false};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:true,_indexable:t=>"borderDash"!==t};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t);}inRange(t,e,i){const s=this.getProps(["x","y"],i),{angle:n,distance:o}=X(s,{x:t,y:e}),{startAngle:a,endAngle:r,innerRadius:h,outerRadius:c,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),u=(this.options.spacing+this.options.borderWidth)/2,f=l(d,r-a),g=J(n,a,r)&&a!==r,p=f>=O||g,m=tt(o,h+u,c+u);return p&&m}getCenterPoint(t){const{x:e,y:i,startAngle:s,endAngle:n,innerRadius:o,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:r,spacing:l}=this.options,h=(s+n)/2,c=(o+a+l+r)/2;return {x:e+Math.cos(h)*c,y:i+Math.sin(h)*c}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:e,circumference:i}=this,s=(e.offset||0)/4,n=(e.spacing||0)/2,o=e.circular;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=i>O?Math.floor(i/O):0,0===i||this.innerRadius<0||this.outerRadius<0)return;t.save();const a=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(a)*s,Math.sin(a)*s);const r=s*(1-Math.sin(Math.min(C,i||0)));t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor,function(t,e,i,s,n){const{fullCircles:o,startAngle:a,circumference:r}=e;let l=e.endAngle;if(o){Kn(t,e,i,s,l,n);for(let e=0;e<o;++e)t.fill();isNaN(r)||(l=a+(r%O||O));}Kn(t,e,i,s,l,n),t.fill();}(t,this,r,n,o),Gn(t,this,r,n,o),t.restore();}},BarElement:class extends $s{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t);}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:s}}=this,{inner:n,outer:o}=ho(this),a=(r=o.radius).topLeft||r.topRight||r.bottomLeft||r.bottomRight?He:uo;var r;t.save(),o.w===n.w&&o.h===n.h||(t.beginPath(),a(t,fo(o,e,n)),t.clip(),a(t,fo(n,-e,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,fo(n,e)),t.fillStyle=s,t.fill(),t.restore();}inRange(t,e,i){return co(this,t,e,i)}inXRange(t,e){return co(this,t,null,e)}inYRange(t,e){return co(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:s,horizontal:n}=this.getProps(["x","y","base","horizontal"],t);return {x:n?(e+s)/2:e,y:n?i:(i+s)/2}}getRange(t){return "x"===t?this.width/2:this.height/2}},LineElement:oo,PointElement:class extends $s{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t);}inRange(t,e,i){const s=this.options,{x:n,y:o}=this.getProps(["x","y"],i);return Math.pow(t-n,2)+Math.pow(e-o,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(t,e){return ao(this,t,"x",e)}inYRange(t,e){return ao(this,t,"y",e)}getCenterPoint(t){const{x:e,y:i}=this.getProps(["x","y"],t);return {x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;e=Math.max(e,e&&t.hoverRadius||0);return 2*(e+(e&&t.borderWidth||0))}draw(t,e){const i=this.options;this.skip||i.radius<.1||!Re(this,e,this.size(i)/2)||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,Le(t,i,this.x,this.y));}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}});function po(t,e,i,s){const n=t.indexOf(e);if(-1===n)return ((t,e,i,s)=>("string"==typeof e?(i=t.push(e)-1,s.unshift({index:i,label:e})):isNaN(e)&&(i=null),i))(t,e,i,s);return n!==t.lastIndexOf(e)?i:n}function mo(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}function xo(t,e,{horizontal:i,minRotation:s}){const n=$(s),o=(i?Math.sin(n):Math.cos(n))||.001,a=.75*e*(""+t).length;return Math.min(e/o,a)}class bo extends tn{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0;}parse(t,e){return s(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:n}=this;const o=t=>s=e?s:t,a=t=>n=i?n:t;if(t){const t=F(s),e=F(n);t<0&&e<0?a(0):t>0&&e>0&&o(0);}if(s===n){let e=0===n?1:Math.abs(.05*n);a(n+e),t||o(s-e);}this.min=s,this.max=n;}getTickLimit(){const t=this.options.ticks;let e,{maxTicksLimit:i,stepSize:s}=t;return s?(e=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,e>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`),e=1e3)):(e=this.computeTickLimit(),i=i||11),i&&(e=Math.min(i,e)),e}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const n=function(t,e){const i=[],{bounds:n,step:o,min:a,max:r,precision:l,count:h,maxTicks:c,maxDigits:d,includeBounds:u}=t,f=o||1,g=c-1,{min:p,max:m}=e,x=!s(a),b=!s(r),_=!s(h),y=(m-p)/(d+1);let v,M,w,k,S=B((m-p)/g/f)*f;if(S<1e-14&&!x&&!b)return [{value:p},{value:m}];k=Math.ceil(m/S)-Math.floor(p/S),k>g&&(S=B(k*S/g/f)*f),s(l)||(v=Math.pow(10,l),S=Math.ceil(S*v)/v),"ticks"===n?(M=Math.floor(p/S)*S,w=Math.ceil(m/S)*S):(M=p,w=m),x&&b&&o&&H((r-a)/o,S/1e3)?(k=Math.round(Math.min((r-a)/S,c)),S=(r-a)/k,M=a,w=r):_?(M=x?a:M,w=b?r:w,k=h-1,S=(w-M)/k):(k=(w-M)/S,k=V(k,Math.round(k),S/1e3)?Math.round(k):Math.ceil(k));const P=Math.max(U(S),U(M));v=Math.pow(10,s(l)?P:l),M=Math.round(M*v)/v,w=Math.round(w*v)/v;let D=0;for(x&&(u&&M!==a?(i.push({value:a}),M<a&&D++,V(Math.round((M+D*S)*v)/v,a,xo(a,y,t))&&D++):M<a&&D++);D<k;++D){const t=Math.round((M+D*S)*v)/v;if(b&&t>r)break;i.push({value:t});}return b&&u&&w!==r?i.length&&V(i[i.length-1].value,r,xo(r,y,t))?i[i.length-1].value=r:i.push({value:r}):b&&w!==r||i.push({value:w}),i}({maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:false!==e.includeBounds},this._range||this);return "ticks"===t.bounds&&j(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s;}this._startValue=e,this._endValue=i,this._valueRange=i-e;}getLabelForValue(t){return ne(t,this.chart.options.locale,this.options.ticks.format)}}class _o extends bo{static id="linear";static defaults={ticks:{callback:ae.formatters.numeric}};determineDataLimits(){const{min:t,max:e}=this.getMinMax(true);this.min=a(t)?t:0,this.max=a(e)?e:1,this.handleTickRangeOptions();}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=$(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,n=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,n.lineHeight/s))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}const yo=t=>Math.floor(z(t)),vo=(t,e)=>Math.pow(10,yo(t)+e);function Mo(t){return 1===t/Math.pow(10,yo(t))}function wo(t,e,i){const s=Math.pow(10,i),n=Math.floor(t/s);return Math.ceil(e/s)-n}function ko(t,{min:e,max:i}){e=r(t.min,e);const s=[],n=yo(e);let o=function(t,e){let i=yo(e-t);for(;wo(t,e,i)>10;)i++;for(;wo(t,e,i)<10;)i--;return Math.min(i,yo(t))}(e,i),a=o<0?Math.pow(10,Math.abs(o)):1;const l=Math.pow(10,o),h=n>o?Math.pow(10,n):0,c=Math.round((e-h)*a)/a,d=Math.floor((e-h)/l/10)*l*10;let u=Math.floor((c-d)/Math.pow(10,o)),f=r(t.min,Math.round((h+d+u*Math.pow(10,o))*a)/a);for(;f<i;)s.push({value:f,major:Mo(f),significand:u}),u>=10?u=u<15?15:20:u++,u>=20&&(o++,u=2,a=o>=0?1:a),f=Math.round((h+d+u*Math.pow(10,o))*a)/a;const g=r(t.max,f);return s.push({value:g,major:Mo(g),significand:u}),s}class So extends tn{static id="logarithmic";static defaults={ticks:{callback:ae.formatters.logarithmic,major:{enabled:true}}};constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0;}parse(t,e){const i=bo.prototype.parse.apply(this,[t,e]);if(0!==i)return a(i)&&i>0?i:null;this._zero=true;}determineDataLimits(){const{min:t,max:e}=this.getMinMax(true);this.min=a(t)?Math.max(0,t):null,this.max=a(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=true),this._zero&&this.min!==this._suggestedMin&&!a(this._userMin)&&(this.min=t===vo(this.min,0)?vo(this.min,-1):vo(this.min,0)),this.handleTickRangeOptions();}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,s=this.max;const n=e=>i=t?i:e,o=t=>s=e?s:t;i===s&&(i<=0?(n(1),o(10)):(n(vo(i,-1)),o(vo(s,1)))),i<=0&&n(vo(s,-1)),s<=0&&o(vo(i,1)),this.min=i,this.max=s;}buildTicks(){const t=this.options,e=ko({min:this._userMin,max:this._userMax},this);return "ticks"===t.bounds&&j(e,this,"value"),t.reverse?(e.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),e}getLabelForValue(t){return void 0===t?"0":ne(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=z(t),this._valueRange=z(this.max)-z(t);}getPixelForValue(t){return void 0!==t&&0!==t||(t=this.min),null===t||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(z(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function Po(t){const e=t.ticks;if(e.display&&t.display){const t=ki(e.backdropPadding);return l(e.font&&e.font.size,ue.font.size)+t.height}return 0}function Do(t,e,i,s,n){return t===s||t===n?{start:e-i/2,end:e+i/2}:t<s||t>n?{start:e-i,end:e}:{start:e,end:e+i}}function Co(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},i=Object.assign({},e),s=[],o=[],a=t._pointLabels.length,r=t.options.pointLabels,l=r.centerPointLabels?C/a:0;for(let u=0;u<a;u++){const a=r.setContext(t.getPointLabelContext(u));o[u]=a.padding;const f=t.getPointPosition(u,t.drawingArea+o[u],l),g=Si(a.font),p=(h=t.ctx,c=g,d=n(d=t._pointLabels[u])?d:[d],{w:Oe(h,c.string,d),h:d.length*c.lineHeight});s[u]=p;const m=G(t.getIndexAngle(u)+l),x=Math.round(Y(m));Oo(i,e,m,Do(x,f.x,p.w,0,180),Do(x,f.y,p.h,90,270));}var h,c,d;t.setCenterPoint(e.l-i.l,i.r-e.r,e.t-i.t,i.b-e.b),t._pointLabelItems=function(t,e,i){const s=[],n=t._pointLabels.length,o=t.options,{centerPointLabels:a,display:r}=o.pointLabels,l={extra:Po(o)/2,additionalAngle:a?C/n:0};let h;for(let o=0;o<n;o++){l.padding=i[o],l.size=e[o];const n=Ao(t,o,l);s.push(n),"auto"===r&&(n.visible=To(n,h),n.visible&&(h=n));}return s}(t,s,o);}function Oo(t,e,i,s,n){const o=Math.abs(Math.sin(i)),a=Math.abs(Math.cos(i));let r=0,l=0;s.start<e.l?(r=(e.l-s.start)/o,t.l=Math.min(t.l,e.l-r)):s.end>e.r&&(r=(s.end-e.r)/o,t.r=Math.max(t.r,e.r+r)),n.start<e.t?(l=(e.t-n.start)/a,t.t=Math.min(t.t,e.t-l)):n.end>e.b&&(l=(n.end-e.b)/a,t.b=Math.max(t.b,e.b+l));}function Ao(t,e,i){const s=t.drawingArea,{extra:n,additionalAngle:o,padding:a,size:r}=i,l=t.getPointPosition(e,s+n+a,o),h=Math.round(Y(G(l.angle+E))),c=function(t,e,i){90===i||270===i?t-=e/2:(i>270||i<90)&&(t-=e);return t}(l.y,r.h,h),d=function(t){if(0===t||180===t)return "center";if(t<180)return "left";return "right"}(h),u=function(t,e,i){"right"===i?t-=e:"center"===i&&(t-=e/2);return t}(l.x,r.w,d);return {visible:true,x:l.x,y:c,textAlign:d,left:u,top:c,right:u+r.w,bottom:c+r.h}}function To(t,e){if(!e)return  true;const{left:i,top:s,right:n,bottom:o}=t;return !(Re({x:i,y:s},e)||Re({x:i,y:o},e)||Re({x:n,y:s},e)||Re({x:n,y:o},e))}function Lo(t,e,i){const{left:n,top:o,right:a,bottom:r}=i,{backdropColor:l}=e;if(!s(l)){const i=wi(e.borderRadius),s=ki(e.backdropPadding);t.fillStyle=l;const h=n-s.left,c=o-s.top,d=a-n+s.width,u=r-o+s.height;Object.values(i).some((t=>0!==t))?(t.beginPath(),He(t,{x:h,y:c,w:d,h:u,radius:i}),t.fill()):t.fillRect(h,c,d,u);}}function Eo(t,e,i,s){const{ctx:n}=t;if(i)n.arc(t.xCenter,t.yCenter,e,0,O);else {let i=t.getPointPosition(0,e);n.moveTo(i.x,i.y);for(let o=1;o<s;o++)i=t.getPointPosition(o,e),n.lineTo(i.x,i.y);}}class Ro extends bo{static id="radialLinear";static defaults={display:true,animate:true,position:"chartArea",angleLines:{display:true,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:false},startAngle:0,ticks:{showLabelBackdrop:true,callback:ae.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:true,font:{size:10},callback:t=>t,padding:5,centerPointLabels:false}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[];}setDimensions(){const t=this._padding=ki(Po(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2);}determineDataLimits(){const{min:t,max:e}=this.getMinMax(false);this.min=a(t)&&!isNaN(t)?t:0,this.max=a(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions();}computeTickLimit(){return Math.ceil(this.drawingArea/Po(this.options))}generateTickLabels(t){bo.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map(((t,e)=>{const i=d(this.options.pointLabels.callback,[t,e],this);return i||0===i?i:""})).filter(((t,e)=>this.chart.getDataVisibility(e)));}fit(){const t=this.options;t.display&&t.pointLabels.display?Co(this):this.setCenterPoint(0,0,0,0);}setCenterPoint(t,e,i,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,s));}getIndexAngle(t){return G(t*(O/(this._pointLabels.length||1))+$(this.options.startAngle||0))}getDistanceFromCenterForValue(t){if(s(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(s(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return function(t,e,i){return Ci(t,{label:i,index:e,type:"pointLabel"})}(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const s=this.getIndexAngle(t)-E+i;return {x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:s,bottom:n}=this._pointLabelItems[t];return {left:e,top:i,right:s,bottom:n}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),Eo(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore();}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:s,border:n}=e,o=this._pointLabels.length;let a,r,l;if(e.pointLabels.display&&function(t,e){const{ctx:i,options:{pointLabels:s}}=t;for(let n=e-1;n>=0;n--){const e=t._pointLabelItems[n];if(!e.visible)continue;const o=s.setContext(t.getPointLabelContext(n));Lo(i,o,e);const a=Si(o.font),{x:r,y:l,textAlign:h}=e;Ne(i,t._pointLabels[n],r,l+a.lineHeight/2,a,{color:o.color,textAlign:h,textBaseline:"middle"});}}(this,o),s.display&&this.ticks.forEach(((t,e)=>{if(0!==e||0===e&&this.min<0){r=this.getDistanceFromCenterForValue(t.value);const i=this.getContext(e),a=s.setContext(i),l=n.setContext(i);!function(t,e,i,s,n){const o=t.ctx,a=e.circular,{color:r,lineWidth:l}=e;!a&&!s||!r||!l||i<0||(o.save(),o.strokeStyle=r,o.lineWidth=l,o.setLineDash(n.dash||[]),o.lineDashOffset=n.dashOffset,o.beginPath(),Eo(t,i,a,s),o.closePath(),o.stroke(),o.restore());}(this,a,r,o,l);}})),i.display){for(t.save(),a=o-1;a>=0;a--){const s=i.setContext(this.getPointLabelContext(a)),{color:n,lineWidth:o}=s;o&&n&&(t.lineWidth=o,t.strokeStyle=n,t.setLineDash(s.borderDash),t.lineDashOffset=s.borderDashOffset,r=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,r),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke());}t.restore();}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let n,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach(((s,a)=>{if(0===a&&this.min>=0&&!e.reverse)return;const r=i.setContext(this.getContext(a)),l=Si(r.font);if(n=this.getDistanceFromCenterForValue(this.ticks[a].value),r.showLabelBackdrop){t.font=l.string,o=t.measureText(s.label).width,t.fillStyle=r.backdropColor;const e=ki(r.backdropPadding);t.fillRect(-o/2-e.left,-n-l.size/2-e.top,o+e.width,l.size+e.height);}Ne(t,s.label,0,-n,l,{color:r.color,strokeColor:r.textStrokeColor,strokeWidth:r.textStrokeWidth});})),t.restore();}drawTitle(){}}const Io={millisecond:{common:true,size:1,steps:1e3},second:{common:true,size:1e3,steps:60},minute:{common:true,size:6e4,steps:60},hour:{common:true,size:36e5,steps:24},day:{common:true,size:864e5,steps:30},week:{common:false,size:6048e5,steps:4},month:{common:true,size:2628e6,steps:12},quarter:{common:false,size:7884e6,steps:4},year:{common:true,size:3154e7}},zo=Object.keys(Io);function Fo(t,e){return t-e}function Vo(t,e){if(s(e))return null;const i=t._adapter,{parser:n,round:o,isoWeekday:r}=t._parseOpts;let l=e;return "function"==typeof n&&(l=n(l)),a(l)||(l="string"==typeof n?i.parse(l,n):i.parse(l)),null===l?null:(o&&(l="week"!==o||!N(r)&&true!==r?i.startOf(l,o):i.startOf(l,"isoWeek",r)),+l)}function Bo(t,e,i,s){const n=zo.length;for(let o=zo.indexOf(t);o<n-1;++o){const t=Io[zo[o]],n=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((i-e)/(n*t.size))<=s)return zo[o]}return zo[n-1]}function Wo(t,e,i){if(i){if(i.length){const{lo:s,hi:n}=et(i,e);t[i[s]>=e?i[s]:i[n]]=true;}}else t[e]=true;}function No(t,e,i){const s=[],n={},o=e.length;let a,r;for(a=0;a<o;++a)r=e[a],n[r]=a,s.push({value:r,major:false});return 0!==o&&i?function(t,e,i,s){const n=t._adapter,o=+n.startOf(e[0].value,s),a=e[e.length-1].value;let r,l;for(r=o;r<=a;r=+n.add(r,1,s))l=i[r],l>=0&&(e[l].major=true);return e}(t,s,n,i):s}class Ho extends tn{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:false,unit:false,round:false,isoWeekday:false,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:false,major:{enabled:false}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=false,this._parseOpts=void 0;}init(t,e={}){const i=t.time||(t.time={}),s=this._adapter=new In._date(t.adapters.date);s.init(e),b(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized;}parse(t,e){return void 0===t?null:Vo(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]};}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:n,minDefined:o,maxDefined:r}=this.getUserBounds();function l(t){o||isNaN(t.min)||(s=Math.min(s,t.min)),r||isNaN(t.max)||(n=Math.max(n,t.max));}o&&r||(l(this._getLabelBounds()),"ticks"===t.bounds&&"labels"===t.ticks.source||l(this.getMinMax(false))),s=a(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),n=a(n)&&!isNaN(n)?n:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,n-1),this.max=Math.max(s+1,n);}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s="labels"===i.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const n=this.min,o=nt(s,n,this.max);return this._unit=e.unit||(i.autoSkip?Bo(e.minUnit,this.min,this.max,this._getLabelCapacity(n)):function(t,e,i,s,n){for(let o=zo.length-1;o>=zo.indexOf(i);o--){const i=zo[o];if(Io[i].common&&t._adapter.diff(n,s,i)>=e-1)return i}return zo[i?zo.indexOf(i):0]}(this,o.length,e.minUnit,this.min,this.max)),this._majorUnit=i.major.enabled&&"year"!==this._unit?function(t){for(let e=zo.indexOf(t)+1,i=zo.length;e<i;++e)if(Io[zo[e]].common)return zo[e]}(this._unit):void 0,this.initOffsets(s),t.reverse&&o.reverse(),No(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map((t=>+t.value)));}initOffsets(t=[]){let e,i,s=0,n=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),s=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,i=this.getDecimalForValue(t[t.length-1]),n=1===t.length?i:(i-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;s=Z(s,0,o),n=Z(n,0,o),this._offsets={start:s,end:n,factor:1/(s+1+n)};}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,n=s.time,o=n.unit||Bo(n.minUnit,e,i,this._getLabelCapacity(e)),a=l(s.ticks.stepSize,1),r="week"===o&&n.isoWeekday,h=N(r)||true===r,c={};let d,u,f=e;if(h&&(f=+t.startOf(f,"isoWeek",r)),f=+t.startOf(f,h?"day":o),t.diff(i,e,o)>1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+o);const g="data"===s.ticks.source&&this.getDataTimestamps();for(d=f,u=0;d<i;d=+t.add(d,a,o),u++)Wo(c,d,g);return d!==i&&"ticks"!==s.bounds&&1!==u||Wo(c,d,g),Object.keys(c).sort(Fo).map((t=>+t))}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){const i=this.options.time.displayFormats,s=this._unit,n=e||i[s];return this._adapter.format(t,n)}_tickFormatFunction(t,e,i,s){const n=this.options,o=n.ticks.callback;if(o)return d(o,[t,e,i],this);const a=n.time.displayFormats,r=this._unit,l=this._majorUnit,h=r&&a[r],c=l&&a[l],u=i[e],f=l&&c&&u&&u.major;return this._adapter.format(t,s||(f?c:h))}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t);}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=$(this.isHorizontal()?e.maxRotation:e.minRotation),n=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return {w:i*n+a*o,h:i*o+a*n}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,n=this._tickFormatFunction(t,0,No(this,[t],this._majorUnit),s),o=this._getLabelSize(n),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t,e,i=this._cache.data||[];if(i.length)return i;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(t=0,e=s.length;t<e;++t)i=i.concat(s[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(i)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(Vo(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return lt(t.sort(Fo))}}function jo(t,e,i){let s,n,o,a,r=0,l=t.length-1;i?(e>=t[r].pos&&e<=t[l].pos&&({lo:r,hi:l}=it(t,"pos",e)),({pos:s,time:o}=t[r]),({pos:n,time:a}=t[l])):(e>=t[r].time&&e<=t[l].time&&({lo:r,hi:l}=it(t,"time",e)),({time:s,pos:o}=t[r]),({time:n,pos:a}=t[l]));const h=n-s;return h?o+(a-o)*(e-s)/h:o}var $o=Object.freeze({__proto__:null,CategoryScale:class extends tn{static id="category";static defaults={ticks:{callback:mo}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[];}init(t){const e=this._addedLabels;if(e.length){const t=this.getLabels();for(const{index:i,label:s}of e)t[i]===s&&t.splice(i,1);this._addedLabels=[];}super.init(t);}parse(t,e){if(s(t))return null;const i=this.getLabels();return ((t,e)=>null===t?null:Z(Math.round(t),0,e))(e=isFinite(e)&&i[e]===t?e:po(i,t,l(e,t),this._addedLabels),i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(true);"ticks"===this.options.bounds&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s;}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let n=this.getLabels();n=0===t&&e===n.length-1?n:n.slice(t,e+1),this._valueRange=Math.max(n.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let i=t;i<=e;i++)s.push({value:i});return s}getLabelForValue(t){return mo.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels);}getPixelForValue(t){return "number"!=typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}},LinearScale:_o,LogarithmicScale:So,RadialLinearScale:Ro,TimeScale:Ho,TimeSeriesScale:class extends Ho{static id="timeseries";static defaults=Ho.defaults;constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0;}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=jo(e,this.min),this._tableRange=jo(e,this.max)-this._minPos,super.initOffsets(t);}buildLookupTable(t){const{min:e,max:i}=this,s=[],n=[];let o,a,r,l,h;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=i&&s.push(l);if(s.length<2)return [{time:e,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)h=s[o+1],r=s[o-1],l=s[o],Math.round((h+r)/2)!==l&&n.push({time:l,pos:o/(a-1)});return n}_generate(){const t=this.min,e=this.max;let i=super.getDataTimestamps();return i.includes(t)&&i.length||i.splice(0,0,t),i.includes(e)&&1!==i.length||i.push(e),i.sort(((t,e)=>t-e))}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return t=e.length&&i.length?this.normalize(e.concat(i)):e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return (jo(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return jo(this._table,i*this._tableRange+this._minPos,true)}}});const Yo=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Uo=Yo.map((t=>t.replace("rgb(","rgba(").replace(")",", 0.5)")));function Xo(t){return Yo[t%Yo.length]}function qo(t){return Uo[t%Uo.length]}function Ko(t){let e=0;return (i,s)=>{const n=t.getDatasetMeta(s).controller;n instanceof $n?e=function(t,e){return t.backgroundColor=t.data.map((()=>Xo(e++))),e}(i,e):n instanceof Yn?e=function(t,e){return t.backgroundColor=t.data.map((()=>qo(e++))),e}(i,e):n&&(e=function(t,e){return t.borderColor=Xo(e),t.backgroundColor=qo(e),++e}(i,e));}}function Go(t){let e;for(e in t)if(t[e].borderColor||t[e].backgroundColor)return  true;return  false}var Jo={id:"colors",defaults:{enabled:true,forceOverride:false},beforeLayout(t,e,i){if(!i.enabled)return;const{data:{datasets:s},options:n}=t.config,{elements:o}=n,a=Go(s)||(r=n)&&(r.borderColor||r.backgroundColor)||o&&Go(o)||"rgba(0,0,0,0.1)"!==ue.borderColor||"rgba(0,0,0,0.1)"!==ue.backgroundColor;var r;if(!i.forceOverride&&a)return;const l=Ko(t);s.forEach(l);}};function Zo(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{configurable:true,enumerable:true,writable:true,value:e});}}function Qo(t){t.data.datasets.forEach((t=>{Zo(t);}));}var ta={id:"decimation",defaults:{algorithm:"min-max",enabled:false},beforeElementsUpdate:(t,e,i)=>{if(!i.enabled)return void Qo(t);const n=t.width;t.data.datasets.forEach(((e,o)=>{const{_data:a,indexAxis:r}=e,l=t.getDatasetMeta(o),h=a||e.data;if("y"===Pi([r,t.options.indexAxis]))return;if(!l.controller.supportsDecimation)return;const c=t.scales[l.xAxisID];if("linear"!==c.type&&"time"!==c.type)return;if(t.options.parsing)return;let{start:d,count:u}=function(t,e){const i=e.length;let s,n=0;const{iScale:o}=t,{min:a,max:r,minDefined:l,maxDefined:h}=o.getUserBounds();return l&&(n=Z(it(e,o.axis,a).lo,0,i-1)),s=h?Z(it(e,o.axis,r).hi+1,n,i)-n:i-n,{start:n,count:s}}(l,h);if(u<=(i.threshold||4*n))return void Zo(e);let f;switch(s(a)&&(e._data=h,delete e.data,Object.defineProperty(e,"data",{configurable:true,enumerable:true,get:function(){return this._decimated},set:function(t){this._data=t;}})),i.algorithm){case "lttb":f=function(t,e,i,s,n){const o=n.samples||s;if(o>=i)return t.slice(e,e+i);const a=[],r=(i-2)/(o-2);let l=0;const h=e+i-1;let c,d,u,f,g,p=e;for(a[l++]=t[p],c=0;c<o-2;c++){let s,n=0,o=0;const h=Math.floor((c+1)*r)+1+e,m=Math.min(Math.floor((c+2)*r)+1,i)+e,x=m-h;for(s=h;s<m;s++)n+=t[s].x,o+=t[s].y;n/=x,o/=x;const b=Math.floor(c*r)+1+e,_=Math.min(Math.floor((c+1)*r)+1,i)+e,{x:y,y:v}=t[p];for(u=f=-1,s=b;s<_;s++)f=.5*Math.abs((y-n)*(t[s].y-v)-(y-t[s].x)*(o-v)),f>u&&(u=f,d=t[s],g=s);a[l++]=d,p=g;}return a[l++]=t[h],a}(h,d,u,n,i);break;case "min-max":f=function(t,e,i,n){let o,a,r,l,h,c,d,u,f,g,p=0,m=0;const x=[],b=e+i-1,_=t[e].x,y=t[b].x-_;for(o=e;o<e+i;++o){a=t[o],r=(a.x-_)/y*n,l=a.y;const e=0|r;if(e===h)l<f?(f=l,c=o):l>g&&(g=l,d=o),p=(m*p+a.x)/++m;else {const i=o-1;if(!s(c)&&!s(d)){const e=Math.min(c,d),s=Math.max(c,d);e!==u&&e!==i&&x.push({...t[e],x:p}),s!==u&&s!==i&&x.push({...t[s],x:p});}o>0&&i!==u&&x.push(t[i]),x.push(a),h=e,m=0,f=g=l,c=d=u=o;}}return x}(h,d,u,n);break;default:throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)}e._decimated=f;}));},destroy(t){Qo(t);}};function ea(t,e,i,s){if(s)return;let n=e[t],o=i[t];return "angle"===t&&(n=G(n),o=G(o)),{property:t,start:n,end:o}}function ia(t,e,i){for(;e>t;e--){const t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function sa(t,e,i,s){return t&&e?s(t[i],e[i]):t?t[i]:e?e[i]:0}function na(t,e){let i=[],s=false;return n(t)?(s=true,i=t):i=function(t,e){const{x:i=null,y:s=null}=t||{},n=e.points,o=[];return e.segments.forEach((({start:t,end:e})=>{e=ia(t,e,n);const a=n[t],r=n[e];null!==s?(o.push({x:a.x,y:s}),o.push({x:r.x,y:s})):null!==i&&(o.push({x:i,y:a.y}),o.push({x:i,y:r.y}));})),o}(t,e),i.length?new oo({points:i,options:{tension:0},_loop:s,_fullLoop:s}):null}function oa(t){return t&&false!==t.fill}function aa(t,e,i){let s=t[e].fill;const n=[e];let o;if(!i)return s;for(;false!==s&&-1===n.indexOf(s);){if(!a(s))return s;if(o=t[s],!o)return  false;if(o.visible)return s;n.push(s),s=o.fill;}return  false}function ra(t,e,i){const s=function(t){const e=t.options,i=e.fill;let s=l(i&&i.target,i);void 0===s&&(s=!!e.backgroundColor);if(false===s||null===s)return  false;if(true===s)return "origin";return s}(t);if(o(s))return !isNaN(s.value)&&s;let n=parseFloat(s);return a(n)&&Math.floor(n)===n?function(t,e,i,s){"-"!==t&&"+"!==t||(i=e+i);if(i===e||i<0||i>=s)return  false;return i}(s[0],e,n,i):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function la(t,e,i){const s=[];for(let n=0;n<i.length;n++){const o=i[n],{first:a,last:r,point:l}=ha(o,e,"x");if(!(!l||a&&r))if(a)s.unshift(l);else if(t.push(l),!r)break}t.push(...s);}function ha(t,e,i){const s=t.interpolate(e,i);if(!s)return {};const n=s[i],o=t.segments,a=t.points;let r=false,l=false;for(let t=0;t<o.length;t++){const e=o[t],s=a[e.start][i],h=a[e.end][i];if(tt(n,s,h)){r=n===s,l=n===h;break}}return {first:r,last:l,point:s}}class ca{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius;}pathSegment(t,e,i){const{x:s,y:n,radius:o}=this;return e=e||{start:0,end:O},t.arc(s,n,o,e.end,e.start,true),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,n=t.angle;return {x:e+Math.cos(n)*s,y:i+Math.sin(n)*s,angle:n}}}function da(t){const{chart:e,fill:i,line:s}=t;if(a(i))return function(t,e){const i=t.getDatasetMeta(e),s=i&&t.isDatasetVisible(e);return s?i.dataset:null}(e,i);if("stack"===i)return function(t){const{scale:e,index:i,line:s}=t,n=[],o=s.segments,a=s.points,r=function(t,e){const i=[],s=t.getMatchingVisibleMetas("line");for(let t=0;t<s.length;t++){const n=s[t];if(n.index===e)break;n.hidden||i.unshift(n.dataset);}return i}(e,i);r.push(na({x:null,y:e.bottom},s));for(let t=0;t<o.length;t++){const e=o[t];for(let t=e.start;t<=e.end;t++)la(n,a[t],r);}return new oo({points:n,options:{}})}(t);if("shape"===i)return  true;const n=function(t){const e=t.scale||{};if(e.getPointPositionForValue)return function(t){const{scale:e,fill:i}=t,s=e.options,n=e.getLabels().length,a=s.reverse?e.max:e.min,r=function(t,e,i){let s;return s="start"===t?i:"end"===t?e.options.reverse?e.min:e.max:o(t)?t.value:e.getBaseValue(),s}(i,e,a),l=[];if(s.grid.circular){const t=e.getPointPositionForValue(0,a);return new ca({x:t.x,y:t.y,radius:e.getDistanceFromCenterForValue(r)})}for(let t=0;t<n;++t)l.push(e.getPointPositionForValue(t,r));return l}(t);return function(t){const{scale:e={},fill:i}=t,s=function(t,e){let i=null;return "start"===t?i=e.bottom:"end"===t?i=e.top:o(t)?i=e.getPixelForValue(t.value):e.getBasePixel&&(i=e.getBasePixel()),i}(i,e);if(a(s)){const t=e.isHorizontal();return {x:t?s:null,y:t?null:s}}return null}(t)}(t);return n instanceof ca?n:na(n,s)}function ua(t,e,i){const s=da(e),{chart:n,index:o,line:a,scale:r,axis:l}=e,h=a.options,c=h.fill,d=h.backgroundColor,{above:u=d,below:f=d}=c||{},g=n.getDatasetMeta(o),p=Ni(n,g);s&&a.points.length&&(Ie(t,i),function(t,e){const{line:i,target:s,above:n,below:o,area:a,scale:r,clip:l}=e,h=i._loop?"angle":e.axis;t.save();let c=o;o!==n&&("x"===h?(fa(t,s,a.top),pa(t,{line:i,target:s,color:n,scale:r,property:h,clip:l}),t.restore(),t.save(),fa(t,s,a.bottom)):"y"===h&&(ga(t,s,a.left),pa(t,{line:i,target:s,color:o,scale:r,property:h,clip:l}),t.restore(),t.save(),ga(t,s,a.right),c=n));pa(t,{line:i,target:s,color:c,scale:r,property:h,clip:l}),t.restore();}(t,{line:a,target:s,above:u,below:f,area:i,scale:r,axis:l,clip:p}),ze(t));}function fa(t,e,i){const{segments:s,points:n}=e;let o=true,a=false;t.beginPath();for(const r of s){const{start:s,end:l}=r,h=n[s],c=n[ia(s,l,n)];o?(t.moveTo(h.x,h.y),o=false):(t.lineTo(h.x,i),t.lineTo(h.x,h.y)),a=!!e.pathSegment(t,r,{move:a}),a?t.closePath():t.lineTo(c.x,i);}t.lineTo(e.first().x,i),t.closePath(),t.clip();}function ga(t,e,i){const{segments:s,points:n}=e;let o=true,a=false;t.beginPath();for(const r of s){const{start:s,end:l}=r,h=n[s],c=n[ia(s,l,n)];o?(t.moveTo(h.x,h.y),o=false):(t.lineTo(i,h.y),t.lineTo(h.x,h.y)),a=!!e.pathSegment(t,r,{move:a}),a?t.closePath():t.lineTo(i,c.y);}t.lineTo(i,e.first().y),t.closePath(),t.clip();}function pa(t,e){const{line:i,target:s,property:n,color:o,scale:a,clip:r}=e,l=function(t,e,i){const s=t.segments,n=t.points,o=e.points,a=[];for(const t of s){let{start:s,end:r}=t;r=ia(s,r,n);const l=ea(i,n[s],n[r],t.loop);if(!e.segments){a.push({source:t,target:l,start:n[s],end:n[r]});continue}const h=Ii(e,l);for(const e of h){const s=ea(i,o[e.start],o[e.end],e.loop),r=Ri(t,n,s);for(const t of r)a.push({source:t,target:e,start:{[i]:sa(l,s,"start",Math.max)},end:{[i]:sa(l,s,"end",Math.min)}});}}return a}(i,s,n);for(const{source:e,target:h,start:c,end:d}of l){const{style:{backgroundColor:l=o}={}}=e,u=true!==s;t.save(),t.fillStyle=l,ma(t,a,r,u&&ea(n,c,d)),t.beginPath();const f=!!i.pathSegment(t,e);let g;if(u){f?t.closePath():xa(t,s,d,n);const e=!!s.pathSegment(t,h,{move:f,reverse:true});g=f&&e,g||xa(t,s,c,n);}t.closePath(),t.fill(g?"evenodd":"nonzero"),t.restore();}}function ma(t,e,i,s){const n=e.chart.chartArea,{property:o,start:a,end:r}=s||{};if("x"===o||"y"===o){let e,s,l,h;"x"===o?(e=a,s=n.top,l=r,h=n.bottom):(e=n.left,s=a,l=n.right,h=r),t.beginPath(),i&&(e=Math.max(e,i.left),l=Math.min(l,i.right),s=Math.max(s,i.top),h=Math.min(h,i.bottom)),t.rect(e,s,l-e,h-s),t.clip();}}function xa(t,e,i,s){const n=e.interpolate(i,s);n&&t.lineTo(n.x,n.y);}var ba={id:"filler",afterDatasetsUpdate(t,e,i){const s=(t.data.datasets||[]).length,n=[];let o,a,r,l;for(a=0;a<s;++a)o=t.getDatasetMeta(a),r=o.dataset,l=null,r&&r.options&&r instanceof oo&&(l={visible:t.isDatasetVisible(a),index:a,fill:ra(r,a,s),chart:t,axis:o.controller.options.indexAxis,scale:o.vScale,line:r}),o.$filler=l,n.push(l);for(a=0;a<s;++a)l=n[a],l&&false!==l.fill&&(l.fill=aa(n,a,i.propagate));},beforeDraw(t,e,i){const s="beforeDraw"===i.drawTime,n=t.getSortedVisibleDatasetMetas(),o=t.chartArea;for(let e=n.length-1;e>=0;--e){const i=n[e].$filler;i&&(i.line.updateControlPoints(o,i.axis),s&&i.fill&&ua(t.ctx,i,o));}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;const s=t.getSortedVisibleDatasetMetas();for(let e=s.length-1;e>=0;--e){const i=s[e].$filler;oa(i)&&ua(t.ctx,i,t.chartArea);}},beforeDatasetDraw(t,e,i){const s=e.meta.$filler;oa(s)&&"beforeDatasetDraw"===i.drawTime&&ua(t.ctx,s,t.chartArea);},defaults:{propagate:true,drawTime:"beforeDatasetDraw"}};const _a=(t,e)=>{let{boxHeight:i=e,boxWidth:s=e}=t;return t.usePointStyle&&(i=Math.min(i,e),s=t.pointStyleWidth||Math.min(s,e)),{boxWidth:s,boxHeight:i,itemHeight:Math.max(e,i)}};class ya extends $s{constructor(t){super(),this._added=false,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=false,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0;}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit();}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height);}buildLabels(){const t=this.options.labels||{};let e=d(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter((e=>t.filter(e,this.chart.data)))),t.sort&&(e=e.sort(((e,i)=>t.sort(e,i,this.chart.data)))),this.options.reverse&&e.reverse(),this.legendItems=e;}fit(){const{options:t,ctx:e}=this;if(!t.display)return void(this.width=this.height=0);const i=t.labels,s=Si(i.font),n=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:r}=_a(i,n);let l,h;e.font=s.string,this.isHorizontal()?(l=this.maxWidth,h=this._fitRows(o,n,a,r)+10):(h=this.maxHeight,l=this._fitCols(o,s,a,r)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight);}_fitRows(t,e,i,s){const{ctx:n,maxWidth:o,options:{labels:{padding:a}}}=this,r=this.legendHitBoxes=[],l=this.lineWidths=[0],h=s+a;let c=t;n.textAlign="left",n.textBaseline="middle";let d=-1,u=-h;return this.legendItems.forEach(((t,f)=>{const g=i+e/2+n.measureText(t.text).width;(0===f||l[l.length-1]+g+2*a>o)&&(c+=h,l[l.length-(f>0?0:1)]=0,u+=h,d++),r[f]={left:0,top:u,row:d,width:g,height:s},l[l.length-1]+=g+a;})),c}_fitCols(t,e,i,s){const{ctx:n,maxHeight:o,options:{labels:{padding:a}}}=this,r=this.legendHitBoxes=[],l=this.columnSizes=[],h=o-t;let c=a,d=0,u=0,f=0,g=0;return this.legendItems.forEach(((t,o)=>{const{itemWidth:p,itemHeight:m}=function(t,e,i,s,n){const o=function(t,e,i,s){let n=t.text;n&&"string"!=typeof n&&(n=n.reduce(((t,e)=>t.length>e.length?t:e)));return e+i.size/2+s.measureText(n).width}(s,t,e,i),a=function(t,e,i){let s=t;"string"!=typeof e.text&&(s=va(e,i));return s}(n,s,e.lineHeight);return {itemWidth:o,itemHeight:a}}(i,e,n,t,s);o>0&&u+m+2*a>h&&(c+=d+a,l.push({width:d,height:u}),f+=d+a,g++,d=u=0),r[o]={left:f,top:u,col:g,width:p,height:m},d=Math.max(d,p),u+=m+a;})),c+=d,l.push({width:d,height:u}),c}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:n}}=this,o=Oi(n,this.left,this.width);if(this.isHorizontal()){let n=0,a=ft(i,this.left+s,this.right-this.lineWidths[n]);for(const r of e)n!==r.row&&(n=r.row,a=ft(i,this.left+s,this.right-this.lineWidths[n])),r.top+=this.top+t+s,r.left=o.leftForLtr(o.x(a),r.width),a+=r.width+s;}else {let n=0,a=ft(i,this.top+t+s,this.bottom-this.columnSizes[n].height);for(const r of e)r.col!==n&&(n=r.col,a=ft(i,this.top+t+s,this.bottom-this.columnSizes[n].height)),r.top=a,r.left+=this.left+s,r.left=o.leftForLtr(o.x(r.left),r.width),a+=r.height+s;}}isHorizontal(){return "top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){const t=this.ctx;Ie(t,this),this._draw(),ze(t);}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:n,labels:o}=t,a=ue.color,r=Oi(t.rtl,this.left,this.width),h=Si(o.font),{padding:c}=o,d=h.size,u=d/2;let f;this.drawTitle(),s.textAlign=r.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=h.string;const{boxWidth:g,boxHeight:p,itemHeight:m}=_a(o,d),x=this.isHorizontal(),b=this._computeTitleHeight();f=x?{x:ft(n,this.left+c,this.right-i[0]),y:this.top+c+b,line:0}:{x:this.left+c,y:ft(n,this.top+b+c,this.bottom-e[0].height),line:0},Ai(this.ctx,t.textDirection);const _=m+c;this.legendItems.forEach(((y,v)=>{s.strokeStyle=y.fontColor,s.fillStyle=y.fontColor;const M=s.measureText(y.text).width,w=r.textAlign(y.textAlign||(y.textAlign=o.textAlign)),k=g+u+M;let S=f.x,P=f.y;r.setWidth(this.width),x?v>0&&S+k+c>this.right&&(P=f.y+=_,f.line++,S=f.x=ft(n,this.left+c,this.right-i[f.line])):v>0&&P+_>this.bottom&&(S=f.x=S+e[f.line].width+c,f.line++,P=f.y=ft(n,this.top+b+c,this.bottom-e[f.line].height));if(function(t,e,i){if(isNaN(g)||g<=0||isNaN(p)||p<0)return;s.save();const n=l(i.lineWidth,1);if(s.fillStyle=l(i.fillStyle,a),s.lineCap=l(i.lineCap,"butt"),s.lineDashOffset=l(i.lineDashOffset,0),s.lineJoin=l(i.lineJoin,"miter"),s.lineWidth=n,s.strokeStyle=l(i.strokeStyle,a),s.setLineDash(l(i.lineDash,[])),o.usePointStyle){const a={radius:p*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:n},l=r.xPlus(t,g/2);Ee(s,a,l,e+u,o.pointStyleWidth&&g);}else {const o=e+Math.max((d-p)/2,0),a=r.leftForLtr(t,g),l=wi(i.borderRadius);s.beginPath(),Object.values(l).some((t=>0!==t))?He(s,{x:a,y:o,w:g,h:p,radius:l}):s.rect(a,o,g,p),s.fill(),0!==n&&s.stroke();}s.restore();}(r.x(S),P,y),S=gt(w,S+g+u,x?S+k:this.right,t.rtl),function(t,e,i){Ne(s,i.text,t,e+m/2,h,{strikethrough:i.hidden,textAlign:r.textAlign(i.textAlign)});}(r.x(S),P,y),x)f.x+=k+c;else if("string"!=typeof y.text){const t=h.lineHeight;f.y+=va(y,t)+c;}else f.y+=_;})),Ti(this.ctx,t.textDirection);}drawTitle(){const t=this.options,e=t.title,i=Si(e.font),s=ki(e.padding);if(!e.display)return;const n=Oi(t.rtl,this.left,this.width),o=this.ctx,a=e.position,r=i.size/2,l=s.top+r;let h,c=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),h=this.top+l,c=ft(t.align,c,this.right-d);else {const e=this.columnSizes.reduce(((t,e)=>Math.max(t,e.height)),0);h=l+ft(t.align,this.top,this.bottom-e-t.labels.padding-this._computeTitleHeight());}const u=ft(a,c,c+d);o.textAlign=n.textAlign(ut(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=i.string,Ne(o,e.text,u,h,i);}_computeTitleHeight(){const t=this.options.title,e=Si(t.font),i=ki(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,n;if(tt(t,this.left,this.right)&&tt(e,this.top,this.bottom))for(n=this.legendHitBoxes,i=0;i<n.length;++i)if(s=n[i],tt(t,s.left,s.left+s.width)&&tt(e,s.top,s.top+s.height))return this.legendItems[i];return null}handleEvent(t){const e=this.options;if(!function(t,e){if(("mousemove"===t||"mouseout"===t)&&(e.onHover||e.onLeave))return  true;if(e.onClick&&("click"===t||"mouseup"===t))return  true;return  false}(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type||"mouseout"===t.type){const o=this._hoveredItem,a=(n=i,null!==(s=o)&&null!==n&&s.datasetIndex===n.datasetIndex&&s.index===n.index);o&&!a&&d(e.onLeave,[t,o,this],this),this._hoveredItem=i,i&&!a&&d(e.onHover,[t,i,this],this);}else i&&d(e.onClick,[t,i,this],this);var s,n;}}function va(t,e){return e*(t.text?t.text.length:0)}var Ma={id:"legend",_element:ya,start(t,e,i){const s=t.legend=new ya({ctx:t.ctx,options:i,chart:t});ls.configure(t,s,i),ls.addBox(t,s);},stop(t){ls.removeBox(t,t.legend),delete t.legend;},beforeUpdate(t,e,i){const s=t.legend;ls.configure(t,s,i),s.options=i;},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes();},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event);},defaults:{display:true,position:"top",align:"center",fullSize:true,reverse:false,weight:1e3,onClick(t,e,i){const s=e.datasetIndex,n=i.chart;n.isDatasetVisible(s)?(n.hide(s),e.hidden=true):(n.show(s),e.hidden=false);},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:s,textAlign:n,color:o,useBorderRadius:a,borderRadius:r}}=t.legend.options;return t._getSortedDatasetMetas().map((t=>{const l=t.controller.getStyle(i?0:void 0),h=ki(l.borderWidth);return {text:e[t.index].label,fillStyle:l.backgroundColor,fontColor:o,hidden:!t.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:l.borderColor,pointStyle:s||l.pointStyle,rotation:l.rotation,textAlign:n||l.textAlign,borderRadius:a&&(r||l.borderRadius),datasetIndex:t.index}}),this)}},title:{color:t=>t.chart.options.color,display:false,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class wa extends $s{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0;}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display)return void(this.width=this.height=this.right=this.bottom=0);this.width=this.right=t,this.height=this.bottom=e;const s=n(i.text)?i.text.length:1;this._padding=ki(i.padding);const o=s*Si(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o;}isHorizontal(){const t=this.options.position;return "top"===t||"bottom"===t}_drawArgs(t){const{top:e,left:i,bottom:s,right:n,options:o}=this,a=o.align;let r,l,h,c=0;return this.isHorizontal()?(l=ft(a,i,n),h=e+t,r=n-i):("left"===o.position?(l=i+t,h=ft(a,s,e),c=-0.5*C):(l=n-t,h=ft(a,e,s),c=.5*C),r=s-e),{titleX:l,titleY:h,maxWidth:r,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=Si(e.font),s=i.lineHeight/2+this._padding.top,{titleX:n,titleY:o,maxWidth:a,rotation:r}=this._drawArgs(s);Ne(t,e.text,0,0,i,{color:e.color,maxWidth:a,rotation:r,textAlign:ut(e.align),textBaseline:"middle",translation:[n,o]});}}var ka={id:"title",_element:wa,start(t,e,i){!function(t,e){const i=new wa({ctx:t.ctx,options:e,chart:t});ls.configure(t,i,e),ls.addBox(t,i),t.titleBlock=i;}(t,i);},stop(t){const e=t.titleBlock;ls.removeBox(t,e),delete t.titleBlock;},beforeUpdate(t,e,i){const s=t.titleBlock;ls.configure(t,s,i),s.options=i;},defaults:{align:"center",display:false,font:{weight:"bold"},fullSize:true,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:true,_indexable:false}};const Sa=new WeakMap;var Pa={id:"subtitle",start(t,e,i){const s=new wa({ctx:t.ctx,options:i,chart:t});ls.configure(t,s,i),ls.addBox(t,s),Sa.set(t,s);},stop(t){ls.removeBox(t,Sa.get(t)),Sa.delete(t);},beforeUpdate(t,e,i){const s=Sa.get(t);ls.configure(t,s,i),s.options=i;},defaults:{align:"center",display:false,font:{weight:"normal"},fullSize:true,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:true,_indexable:false}};const Da={average(t){if(!t.length)return  false;let e,i,s=new Set,n=0,o=0;for(e=0,i=t.length;e<i;++e){const i=t[e].element;if(i&&i.hasValue()){const t=i.tooltipPosition();s.add(t.x),n+=t.y,++o;}}if(0===o||0===s.size)return  false;return {x:[...s].reduce(((t,e)=>t+e))/s.size,y:n/o}},nearest(t,e){if(!t.length)return  false;let i,s,n,o=e.x,a=e.y,r=Number.POSITIVE_INFINITY;for(i=0,s=t.length;i<s;++i){const s=t[i].element;if(s&&s.hasValue()){const t=q(e,s.getCenterPoint());t<r&&(r=t,n=s);}}if(n){const t=n.tooltipPosition();o=t.x,a=t.y;}return {x:o,y:a}}};function Ca(t,e){return e&&(n(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Oa(t){return ("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function Aa(t,e){const{element:i,datasetIndex:s,index:n}=e,o=t.getDatasetMeta(s).controller,{label:a,value:r}=o.getLabelAndValue(n);return {chart:t,label:a,parsed:o.getParsed(n),raw:t.data.datasets[s].data[n],formattedValue:r,dataset:o.getDataset(),dataIndex:n,datasetIndex:s,element:i}}function Ta(t,e){const i=t.chart.ctx,{body:s,footer:n,title:o}=t,{boxWidth:a,boxHeight:r}=e,l=Si(e.bodyFont),h=Si(e.titleFont),c=Si(e.footerFont),d=o.length,f=n.length,g=s.length,p=ki(e.padding);let m=p.height,x=0,b=s.reduce(((t,e)=>t+e.before.length+e.lines.length+e.after.length),0);if(b+=t.beforeBody.length+t.afterBody.length,d&&(m+=d*h.lineHeight+(d-1)*e.titleSpacing+e.titleMarginBottom),b){m+=g*(e.displayColors?Math.max(r,l.lineHeight):l.lineHeight)+(b-g)*l.lineHeight+(b-1)*e.bodySpacing;}f&&(m+=e.footerMarginTop+f*c.lineHeight+(f-1)*e.footerSpacing);let _=0;const y=function(t){x=Math.max(x,i.measureText(t).width+_);};return i.save(),i.font=h.string,u(t.title,y),i.font=l.string,u(t.beforeBody.concat(t.afterBody),y),_=e.displayColors?a+2+e.boxPadding:0,u(s,(t=>{u(t.before,y),u(t.lines,y),u(t.after,y);})),_=0,i.font=c.string,u(t.footer,y),i.restore(),x+=p.width,{width:x,height:m}}function La(t,e,i,s){const{x:n,width:o}=i,{width:a,chartArea:{left:r,right:l}}=t;let h="center";return "center"===s?h=n<=(r+l)/2?"left":"right":n<=o/2?h="left":n>=a-o/2&&(h="right"),function(t,e,i,s){const{x:n,width:o}=s,a=i.caretSize+i.caretPadding;return "left"===t&&n+o+a>e.width||"right"===t&&n-o-a<0||void 0}(h,t,e,i)&&(h="center"),h}function Ea(t,e,i){const s=i.yAlign||e.yAlign||function(t,e){const{y:i,height:s}=e;return i<s/2?"top":i>t.height-s/2?"bottom":"center"}(t,i);return {xAlign:i.xAlign||e.xAlign||La(t,e,i,s),yAlign:s}}function Ra(t,e,i,s){const{caretSize:n,caretPadding:o,cornerRadius:a}=t,{xAlign:r,yAlign:l}=i,h=n+o,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:f}=wi(a);let g=function(t,e){let{x:i,width:s}=t;return "right"===e?i-=s:"center"===e&&(i-=s/2),i}(e,r);const p=function(t,e,i){let{y:s,height:n}=t;return "top"===e?s+=i:s-="bottom"===e?n+i:n/2,s}(e,l,h);return "center"===l?"left"===r?g+=h:"right"===r&&(g-=h):"left"===r?g-=Math.max(c,u)+n:"right"===r&&(g+=Math.max(d,f)+n),{x:Z(g,0,s.width-e.width),y:Z(p,0,s.height-e.height)}}function Ia(t,e,i){const s=ki(i.padding);return "center"===e?t.x+t.width/2:"right"===e?t.x+t.width-s.right:t.x+s.left}function za(t){return Ca([],Oa(t))}function Fa(t,e){const i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}const Va={beforeTitle:e,title(t){if(t.length>0){const e=t[0],i=e.chart.data.labels,s=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(s>0&&e.dataIndex<s)return i[e.dataIndex]}return ""},afterTitle:e,beforeBody:e,beforeLabel:e,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const i=t.formattedValue;return s(i)||(e+=i),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return {borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return {pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:e,afterBody:e,beforeFooter:e,footer:e,afterFooter:e};function Ba(t,e,i,s){const n=t[e].call(i,s);return void 0===n?Va[e].call(i,s):n}class Wa extends $s{static positioners=Da;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0;}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0;}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,n=new Ts(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(n)),n}getContext(){return this.$context||(this.$context=(t=this.chart.getContext(),e=this,i=this._tooltipItems,Ci(t,{tooltip:e,tooltipItems:i,type:"tooltip"})));var t,e,i;}getTitle(t,e){const{callbacks:i}=e,s=Ba(i,"beforeTitle",this,t),n=Ba(i,"title",this,t),o=Ba(i,"afterTitle",this,t);let a=[];return a=Ca(a,Oa(s)),a=Ca(a,Oa(n)),a=Ca(a,Oa(o)),a}getBeforeBody(t,e){return za(Ba(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,s=[];return u(t,(t=>{const e={before:[],lines:[],after:[]},n=Fa(i,t);Ca(e.before,Oa(Ba(n,"beforeLabel",this,t))),Ca(e.lines,Ba(n,"label",this,t)),Ca(e.after,Oa(Ba(n,"afterLabel",this,t))),s.push(e);})),s}getAfterBody(t,e){return za(Ba(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,s=Ba(i,"beforeFooter",this,t),n=Ba(i,"footer",this,t),o=Ba(i,"afterFooter",this,t);let a=[];return a=Ca(a,Oa(s)),a=Ca(a,Oa(n)),a=Ca(a,Oa(o)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],n=[],o=[];let a,r,l=[];for(a=0,r=e.length;a<r;++a)l.push(Aa(this.chart,e[a]));return t.filter&&(l=l.filter(((e,s,n)=>t.filter(e,s,n,i)))),t.itemSort&&(l=l.sort(((e,s)=>t.itemSort(e,s,i)))),u(l,(e=>{const i=Fa(t.callbacks,e);s.push(Ba(i,"labelColor",this,e)),n.push(Ba(i,"labelPointStyle",this,e)),o.push(Ba(i,"labelTextColor",this,e));})),this.labelColors=s,this.labelPointStyles=n,this.labelTextColors=o,this.dataPoints=l,l}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let n,o=[];if(s.length){const t=Da[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const e=this._size=Ta(this,i),a=Object.assign({},t,e),r=Ea(this.chart,i,a),l=Ra(i,a,r,this.chart);this.xAlign=r.xAlign,this.yAlign=r.yAlign,n={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y};}else 0!==this.opacity&&(n={opacity:0});this._tooltipItems=o,this.$context=void 0,n&&this._resolveAnimations().update(this,n),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e});}drawCaret(t,e,i,s){const n=this.getCaretPosition(t,i,s);e.lineTo(n.x1,n.y1),e.lineTo(n.x2,n.y2),e.lineTo(n.x3,n.y3);}getCaretPosition(t,e,i){const{xAlign:s,yAlign:n}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:r,topRight:l,bottomLeft:h,bottomRight:c}=wi(a),{x:d,y:u}=t,{width:f,height:g}=e;let p,m,x,b,_,y;return "center"===n?(_=u+g/2,"left"===s?(p=d,m=p-o,b=_+o,y=_-o):(p=d+f,m=p+o,b=_-o,y=_+o),x=p):(m="left"===s?d+Math.max(r,h)+o:"right"===s?d+f-Math.max(l,c)-o:this.caretX,"top"===n?(b=u,_=b-o,p=m-o,x=m+o):(b=u+g,_=b+o,p=m+o,x=m-o),y=b),{x1:p,x2:m,x3:x,y1:b,y2:_,y3:y}}drawTitle(t,e,i){const s=this.title,n=s.length;let o,a,r;if(n){const l=Oi(i.rtl,this.x,this.width);for(t.x=Ia(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",o=Si(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=o.string,r=0;r<n;++r)e.fillText(s[r],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,r+1===n&&(t.y+=i.titleMarginBottom-a);}}_drawColorBox(t,e,i,s,n){const a=this.labelColors[i],r=this.labelPointStyles[i],{boxHeight:l,boxWidth:h}=n,c=Si(n.bodyFont),d=Ia(this,"left",n),u=s.x(d),f=l<c.lineHeight?(c.lineHeight-l)/2:0,g=e.y+f;if(n.usePointStyle){const e={radius:Math.min(h,l)/2,pointStyle:r.pointStyle,rotation:r.rotation,borderWidth:1},i=s.leftForLtr(u,h)+h/2,o=g+l/2;t.strokeStyle=n.multiKeyBackground,t.fillStyle=n.multiKeyBackground,Le(t,e,i,o),t.strokeStyle=a.borderColor,t.fillStyle=a.backgroundColor,Le(t,e,i,o);}else {t.lineWidth=o(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,t.strokeStyle=a.borderColor,t.setLineDash(a.borderDash||[]),t.lineDashOffset=a.borderDashOffset||0;const e=s.leftForLtr(u,h),i=s.leftForLtr(s.xPlus(u,1),h-2),r=wi(a.borderRadius);Object.values(r).some((t=>0!==t))?(t.beginPath(),t.fillStyle=n.multiKeyBackground,He(t,{x:e,y:g,w:h,h:l,radius:r}),t.fill(),t.stroke(),t.fillStyle=a.backgroundColor,t.beginPath(),He(t,{x:i,y:g+1,w:h-2,h:l-2,radius:r}),t.fill()):(t.fillStyle=n.multiKeyBackground,t.fillRect(e,g,h,l),t.strokeRect(e,g,h,l),t.fillStyle=a.backgroundColor,t.fillRect(i,g+1,h-2,l-2));}t.fillStyle=this.labelTextColors[i];}drawBody(t,e,i){const{body:s}=this,{bodySpacing:n,bodyAlign:o,displayColors:a,boxHeight:r,boxWidth:l,boxPadding:h}=i,c=Si(i.bodyFont);let d=c.lineHeight,f=0;const g=Oi(i.rtl,this.x,this.width),p=function(i){e.fillText(i,g.x(t.x+f),t.y+d/2),t.y+=d+n;},m=g.textAlign(o);let x,b,_,y,v,M,w;for(e.textAlign=o,e.textBaseline="middle",e.font=c.string,t.x=Ia(this,m,i),e.fillStyle=i.bodyColor,u(this.beforeBody,p),f=a&&"right"!==m?"center"===o?l/2+h:l+2+h:0,y=0,M=s.length;y<M;++y){for(x=s[y],b=this.labelTextColors[y],e.fillStyle=b,u(x.before,p),_=x.lines,a&&_.length&&(this._drawColorBox(e,t,y,g,i),d=Math.max(c.lineHeight,r)),v=0,w=_.length;v<w;++v)p(_[v]),d=c.lineHeight;u(x.after,p);}f=0,d=c.lineHeight,u(this.afterBody,p),t.y-=n;}drawFooter(t,e,i){const s=this.footer,n=s.length;let o,a;if(n){const r=Oi(i.rtl,this.x,this.width);for(t.x=Ia(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=r.textAlign(i.footerAlign),e.textBaseline="middle",o=Si(i.footerFont),e.fillStyle=i.footerColor,e.font=o.string,a=0;a<n;++a)e.fillText(s[a],r.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing;}}drawBackground(t,e,i,s){const{xAlign:n,yAlign:o}=this,{x:a,y:r}=t,{width:l,height:h}=i,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:f}=wi(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+c,r),"top"===o&&this.drawCaret(t,e,i,s),e.lineTo(a+l-d,r),e.quadraticCurveTo(a+l,r,a+l,r+d),"center"===o&&"right"===n&&this.drawCaret(t,e,i,s),e.lineTo(a+l,r+h-f),e.quadraticCurveTo(a+l,r+h,a+l-f,r+h),"bottom"===o&&this.drawCaret(t,e,i,s),e.lineTo(a+u,r+h),e.quadraticCurveTo(a,r+h,a,r+h-u),"center"===o&&"left"===n&&this.drawCaret(t,e,i,s),e.lineTo(a,r+c),e.quadraticCurveTo(a,r,a+c,r),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke();}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,n=i&&i.y;if(s||n){const i=Da[t.position].call(this,this._active,this._eventPosition);if(!i)return;const o=this._size=Ta(this,t),a=Object.assign({},i,this._size),r=Ea(e,t,a),l=Ra(t,a,r,e);s._to===l.x&&n._to===l.y||(this.xAlign=r.xAlign,this.yAlign=r.yAlign,this.width=o.width,this.height=o.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,l));}}_willRender(){return !!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},n={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=ki(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(n,t,s,e),Ai(t,e.textDirection),n.y+=o.top,this.drawTitle(n,t,e),this.drawBody(n,t,e),this.drawFooter(n,t,e),Ti(t,e.textDirection),t.restore());}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map((({datasetIndex:t,index:e})=>{const i=this.chart.getDatasetMeta(t);if(!i)throw new Error("Cannot find a dataset at index "+t);return {datasetIndex:t,element:i.data[e],index:e}})),n=!f(i,s),o=this._positionChanged(s,e);(n||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=true,this.update(true));}handleEvent(t,e,i=true){if(e&&this._ignoreReplayEvents)return  false;this._ignoreReplayEvents=false;const s=this.options,n=this._active||[],o=this._getActiveElements(t,n,e,i),a=this._positionChanged(o,t),r=e||!f(o,n)||a;return r&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(true,e))),r}_getActiveElements(t,e,i,s){const n=this.options;if("mouseout"===t.type)return [];if(!s)return e.filter((t=>this.chart.data.datasets[t.datasetIndex]&&void 0!==this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index)));const o=this.chart.getElementsAtEventForMode(t,n.mode,n,i);return n.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:i,caretY:s,options:n}=this,o=Da[n.position].call(this,t,e);return  false!==o&&(i!==o.x||s!==o.y)}}var Na={id:"tooltip",_element:Wa,positioners:Da,afterInit(t,e,i){i&&(t.tooltip=new Wa({chart:t,options:i}));},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i);},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i);},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const i={tooltip:e};if(false===t.notifyPlugins("beforeTooltipDraw",{...i,cancelable:true}))return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i);}},afterEvent(t,e){if(t.tooltip){const i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=true);}},defaults:{enabled:true,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:true,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Va},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:false,callbacks:{_scriptable:false,_indexable:false},animation:{_fallback:false},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};return Tn.register(Un,$o,go,t),Tn.helpers={...Hi},Tn._adapters=In,Tn.Animation=As,Tn.Animations=Ts,Tn.animator=bt,Tn.controllers=nn.controllers.items,Tn.DatasetController=js,Tn.Element=$s,Tn.elements=go,Tn.Interaction=Ki,Tn.layouts=ls,Tn.platforms=Ds,Tn.Scale=tn,Tn.Ticks=ae,Object.assign(Tn,Un,$o,go,t,Ds),Tn.Chart=Tn,"undefined"!=typeof window&&(window.Chart=Tn),Tn}));
		
	} (chart_umd_min$1));
	return chart_umd_min$1.exports;
}

var chart_umd_minExports = requireChart_umd_min();
var Chart$1 = /*@__PURE__*/getDefaultExportFromCjs(chart_umd_minExports);

var hammer_min = {exports: {}};

/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */

var hasRequiredHammer_min;

function requireHammer_min () {
	if (hasRequiredHammer_min) return hammer_min.exports;
	hasRequiredHammer_min = 1;
	(function (module) {
		!function(a,b,c,d){function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),true):false}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a);}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c);}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,false);});}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,false);});}function o(a,b){for(;a;){if(a==b)return  true;a=a.parentNode;}return  false}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++;}return  -1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=a[f][b];r(e,g)<0&&d.push(a[f]),e[f]=g,f++;}return (d=d.sort(function(a,c){return a[b]>c[b]})),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++;}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b);},this.init();}function y(a){var c=a.options.inputClass;return new(c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c;}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=false);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k;}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y);}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b;}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g;}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return {timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return {x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return {x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return {x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=false,x.apply(this,arguments);}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[];}function N(){this.evTarget=$a,this.evWin=_a,this.started=false,x.apply(this,arguments);}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier")),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments);}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=true,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=true,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier"),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[];}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b);}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1);};setTimeout(e,cb);}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return  true}return  false}function V(a,b){this.manager=a,this.set(b);}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return  false;var b={},c=a.CSS&&a.CSS.supports;return ["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):true;}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,true),this.state=nb,this.simultaneous={},this.requireFail=[];}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments);}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null;}function ca(){aa.apply(this,arguments);}function da(){Y.apply(this,arguments),this._timer=null,this._input=null;}function ea(){aa.apply(this,arguments);}function fa(){aa.apply(this,arguments);}function ga(){Y.apply(this,arguments),this.pTime=false,this.pCenter=false,this._timer=null,this._input=null,this.count=0;}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,true),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3]);},this);}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||"";}),b||(a.oldCssProps={});}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,true,true),d.gesture=c,c.target.dispatchEvent(d);}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f]);}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,true)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler);},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler);}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=true),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=false),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}));}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=false,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=true),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1));}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=true),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=false),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a});}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a});}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c);}},destroy:function(){this.touch.destroy(),this.mouse.destroy();}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim();},update:function(){this.set(this.manager.options.touchAction);},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()));}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=true,a.preventDefault();}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return !!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a);}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d));},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return  false;a++;}return  true},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=true,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a);}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return [jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b;}this._super.emit.call(this,a);}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return [hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit();},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer);},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)));}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return [jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a);}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return [ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:true,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit();},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb;},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer);},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input));}}),ha.VERSION="2.0.7",ha.defaults={domEvents:false,touchAction:gb,enable:true,inputTarget:null,inputClass:null,preset:[[ea,{enable:false}],[ca,{enable:false},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub;},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++;}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update());}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b);}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a];}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault();};for(var d=0;d<c.length;)c[d](b),d++;}},destroy:function(){this.element&&ja(this,false),this.handlers={},this.session={},this.input.destroy(),this.element=null;}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,module.exports?module.exports=ha:a[c]=ha;}(window,document,"Hammer");
		
	} (hammer_min));
	return hammer_min.exports;
}

requireHammer_min();

var chartjsPluginZoom_min$1 = {exports: {}};

const helpers = Chart$1.helpers;
const {
    each,
    callback,
    requestAnimFrame,
    valueOrDefault,
    sign,
    getRelativePosition,
    clipArea,
    unclipArea,
    noop,
    isNullOrUndef,
    isArray,
    isObject,
    isFinite: isFinite$1,
    merge,
    clone,
    resolve,
    toFont,
    toPadding,
    toTRBL,
    toTRBLCorners
} = helpers;

var chartHelpersAdapter = /*#__PURE__*/Object.freeze({
    __proto__: null,
    callback: callback,
    clipArea: clipArea,
    clone: clone,
    default: helpers,
    each: each,
    getRelativePosition: getRelativePosition,
    isArray: isArray,
    isFinite: isFinite$1,
    isNullOrUndef: isNullOrUndef,
    isObject: isObject,
    merge: merge,
    noop: noop,
    requestAnimFrame: requestAnimFrame,
    resolve: resolve,
    sign: sign,
    toFont: toFont,
    toPadding: toPadding,
    toTRBL: toTRBL,
    toTRBLCorners: toTRBLCorners,
    unclipArea: unclipArea,
    valueOrDefault: valueOrDefault
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(chartHelpersAdapter);

/*!
* chartjs-plugin-zoom v2.0.1
* undefined
 * (c) 2016-2023 chartjs-plugin-zoom Contributors
 * Released under the MIT License
 */
var chartjsPluginZoom_min = chartjsPluginZoom_min$1.exports;

var hasRequiredChartjsPluginZoom_min;

function requireChartjsPluginZoom_min () {
	if (hasRequiredChartjsPluginZoom_min) return chartjsPluginZoom_min$1.exports;
	hasRequiredChartjsPluginZoom_min = 1;
	(function (module, exports$1) {
		!function(e,t){module.exports=t(requireChart_umd_min(),requireHammer_min(),require$$2);}(chartjsPluginZoom_min,(function(e,t,n){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(t);const i=e=>e&&e.enabled&&e.modifierKey,c=(e,t)=>e&&t[e+"Key"],r=(e,t)=>e&&!t[e+"Key"];function s(e,t,n){return void 0===e||("string"==typeof e?-1!==e.indexOf(t):"function"==typeof e&&-1!==e({chart:n}).indexOf(t))}function l(e,t){return "function"==typeof e&&(e=e({chart:t})),"string"==typeof e?{x:-1!==e.indexOf("x"),y:-1!==e.indexOf("y")}:{x:false,y:false}}function u(e,t,o){const{mode:a="xy",scaleMode:i,overScaleMode:c}=e||{},r=function({x:e,y:t},n){const o=n.scales,a=Object.keys(o);for(let n=0;n<a.length;n++){const i=o[a[n]];if(t>=i.top&&t<=i.bottom&&e>=i.left&&e<=i.right)return i}return null}(t,o),s=l(a,o),u=l(i,o);if(c){const e=l(c,o);for(const t of ["x","y"])e[t]&&(u[t]=s[t],s[t]=false);}if(r&&u[r.axis])return [r];const m=[];return n.each(o.scales,(function(e){s[e.axis]&&m.push(e);})),m}const m=new WeakMap;function d(e){let t=m.get(e);return t||(t={originalScaleLimits:{},updatedScaleLimits:{},handlers:{},panDelta:{}},m.set(e,t)),t}function f(e,t,n){const o=e.max-e.min,a=o*(t-1),i=e.isHorizontal()?n.x:n.y,c=Math.max(0,Math.min(1,(e.getValueForPixel(i)-e.min)/o||0));return {min:a*c,max:a*(1-c)}}function p(e,t,o,a,i){let c=o[a];if("original"===c){const o=e.originalScaleLimits[t.id][a];c=n.valueOrDefault(o.options,o.scale);}return n.valueOrDefault(c,i)}function h(e,{min:t,max:n},o,a=false){const i=d(e.chart),{id:c,axis:r,options:s}=e,l=o&&(o[c]||o[r])||{},{minRange:u=0}=l,m=p(i,e,l,"min",-1/0),f=p(i,e,l,"max",1/0),h=a?Math.max(n-t,u):e.max-e.min,x=(h-n+t)/2;return n+=x,(t-=x)<m?(t=m,n=Math.min(m+h,f)):n>f&&(n=f,t=Math.max(f-h,m)),s.min=t,s.max=n,i.updatedScaleLimits[e.id]={min:t,max:n},e.parse(t)!==e.min||e.parse(n)!==e.max}const x=e=>0===e||isNaN(e)?0:e<0?Math.min(Math.round(e),-1):Math.max(Math.round(e),1);const g={second:500,minute:3e4,hour:18e5,day:432e5,week:3024e5,month:1296e6,quarter:5184e6,year:157248e5};function y(e,t,n,o=false){const{min:a,max:i,options:c}=e,r=c.time&&c.time.round,s=g[r]||0,l=e.getValueForPixel(e.getPixelForValue(a+s)-t),u=e.getValueForPixel(e.getPixelForValue(i+s)-t),{min:m=-1/0,max:d=1/0}=o&&n&&n[e.axis]||{};return !!(isNaN(l)||isNaN(u)||l<m||u>d)||h(e,{min:l,max:u},n,o)}function b(e,t,n){return y(e,t,n,true)}const v={category:function(e,t,n,o){const a=f(e,t,n);return e.min===e.max&&t<1&&function(e){const t=e.getLabels().length-1;e.min>0&&(e.min-=1),e.max<t&&(e.max+=1);}(e),h(e,{min:e.min+x(a.min),max:e.max-x(a.max)},o,true)},default:function(e,t,n,o){const a=f(e,t,n);return h(e,{min:e.min+a.min,max:e.max-a.max},o,true)}},w={default:function(e,t,n,o){h(e,function(e,t,n){const o=e.getValueForPixel(t),a=e.getValueForPixel(n);return {min:Math.min(o,a),max:Math.max(o,a)}}(e,t,n),o,true);}},z={category:function(e,t,n){const o=e.getLabels().length-1;let{min:a,max:i}=e;const c=Math.max(i-a,1),r=Math.round(function(e){return e.isHorizontal()?e.width:e.height}(e)/Math.max(c,10)),s=Math.round(Math.abs(t/r));let l;return t<-r?(i=Math.min(i+s,o),a=1===c?i:i-c,l=i===o):t>r&&(a=Math.max(0,a-s),i=1===c?a:a+c,l=0===a),h(e,{min:a,max:i},n)||l},default:y,logarithmic:b,timeseries:b};function M(e,t){n.each(e,((n,o)=>{t[o]||delete e[o];}));}function k(e,t){const{scales:o}=e,{originalScaleLimits:a,updatedScaleLimits:i}=t;return n.each(o,(function(e){(function(e,t,n){const{id:o,options:{min:a,max:i}}=e;if(!t[o]||!n[o])return  true;const c=n[o];return c.min!==a||c.max!==i})(e,a,i)&&(a[e.id]={min:{scale:e.min,options:e.options.min},max:{scale:e.max,options:e.options.max}});})),M(a,o),M(i,o),a}function S(e,t,o,a){const i=v[e.type]||v.default;n.callback(i,[e,t,o,a]);}function P(e,t,o,a,i){const c=w[e.type]||w.default;n.callback(c,[e,t,o,a,i]);}function D(e){const t=e.chartArea;return {x:(t.left+t.right)/2,y:(t.top+t.bottom)/2}}function j(e,t,o="none"){const{x:a=1,y:i=1,focalPoint:c=D(e)}="number"==typeof t?{x:t,y:t}:t,r=d(e),{options:{limits:s,zoom:l}}=r;k(e,r);const m=1!==a,f=1!==i,p=u(l,c,e);n.each(p||e.scales,(function(e){e.isHorizontal()&&m?S(e,a,c,s):!e.isHorizontal()&&f&&S(e,i,c,s);})),e.update(o),n.callback(l.onZoom,[{chart:e}]);}function O(e,t,o,a="none"){const i=d(e),{options:{limits:c,zoom:r}}=i,{mode:l="xy"}=r;k(e,i);const u=s(l,"x",e),m=s(l,"y",e);n.each(e.scales,(function(e){e.isHorizontal()&&u?P(e,t.x,o.x,c):!e.isHorizontal()&&m&&P(e,t.y,o.y,c);})),e.update(a),n.callback(r.onZoom,[{chart:e}]);}function C(e){const t=d(e);let o=1,a=1;return n.each(e.scales,(function(e){const i=function(e,t){const o=e.originalScaleLimits[t];if(!o)return;const{min:a,max:i}=o;return n.valueOrDefault(i.options,i.scale)-n.valueOrDefault(a.options,a.scale)}(t,e.id);if(i){const t=Math.round(i/(e.max-e.min)*100)/100;o=Math.min(o,t),a=Math.max(a,t);}})),o<1?o:a}function R(e,t,o,a){const{panDelta:i}=a,c=i[e.id]||0;n.sign(c)===n.sign(t)&&(t+=c);const r=z[e.type]||z.default;n.callback(r,[e,t,o])?i[e.id]=0:i[e.id]=t;}function Z(e,t,o,a="none"){const{x:i=0,y:c=0}="number"==typeof t?{x:t,y:t}:t,r=d(e),{options:{pan:s,limits:l}}=r,{onPan:u}=s||{};k(e,r);const m=0!==i,f=0!==c;n.each(o||e.scales,(function(e){e.isHorizontal()&&m?R(e,i,l,r):!e.isHorizontal()&&f&&R(e,c,l,r);})),e.update(a),n.callback(u,[{chart:e}]);}function T(e){const t=d(e);k(e,t);const n={};for(const o of Object.keys(e.scales)){const{min:e,max:a}=t.originalScaleLimits[o]||{min:{},max:{}};n[o]={min:e.scale,max:a.scale};}return n}function L(e,t){const{handlers:n}=d(e),o=n[t];o&&o.target&&(o.target.removeEventListener(t,o),delete n[t]);}function E(e,t,n,o){const{handlers:a,options:i}=d(e),c=a[n];c&&c.target===t||(L(e,n),a[n]=t=>o(e,t,i),a[n].target=t,t.addEventListener(n,a[n]));}function F(e,t){const n=d(e);n.dragStart&&(n.dragging=true,n.dragEnd=t,e.update("none"));}function H(e,t){const n=d(e);n.dragStart&&"Escape"===t.key&&(L(e,"keydown"),n.dragging=false,n.dragStart=n.dragEnd=null,e.update("none"));}function Y(e,t,o){const{onZoomStart:a,onZoomRejected:i}=o;if(a){const o=n.getRelativePosition(t,e);if(false===n.callback(a,[{chart:e,event:t,point:o}]))return n.callback(i,[{chart:e,event:t}]),false}}function V(e,t){const o=d(e),{pan:a,zoom:s={}}=o.options;if(0!==t.button||c(i(a),t)||r(i(s.drag),t))return n.callback(s.onZoomRejected,[{chart:e,event:t}]);false!==Y(e,t,s)&&(o.dragStart=t,E(e,e.canvas,"mousemove",F),E(e,window.document,"keydown",H));}function K(e,t,o,a){const i=s(t,"x",e),c=s(t,"y",e);let{top:r,left:l,right:u,bottom:m,width:d,height:f}=e.chartArea;const p=n.getRelativePosition(o,e),h=n.getRelativePosition(a,e);i&&(l=Math.min(p.x,h.x),u=Math.max(p.x,h.x)),c&&(r=Math.min(p.y,h.y),m=Math.max(p.y,h.y));const x=u-l,g=m-r;return {left:l,top:r,right:u,bottom:m,width:x,height:g,zoomX:i&&x?1+(d-x)/d:1,zoomY:c&&g?1+(f-g)/f:1}}function N(e,t){const o=d(e);if(!o.dragStart)return;L(e,"mousemove");const{mode:a,onZoomComplete:i,drag:{threshold:c=0}}=o.options.zoom,r=K(e,a,o.dragStart,t),l=s(a,"x",e)?r.width:0,u=s(a,"y",e)?r.height:0,m=Math.sqrt(l*l+u*u);if(o.dragStart=o.dragEnd=null,m<=c)return o.dragging=false,void e.update("none");O(e,{x:r.left,y:r.top},{x:r.right,y:r.bottom},"zoom"),setTimeout((()=>o.dragging=false),500),n.callback(i,[{chart:e}]);}function X(e,t){const{handlers:{onZoomComplete:o},options:{zoom:a}}=d(e);if(!function(e,t,o){if(r(i(o.wheel),t))n.callback(o.onZoomRejected,[{chart:e,event:t}]);else if(false!==Y(e,t,o)&&(t.cancelable&&t.preventDefault(),void 0!==t.deltaY))return  true}(e,t,a))return;const c=t.target.getBoundingClientRect(),s=1+(t.deltaY>=0?-a.wheel.speed:a.wheel.speed);j(e,{x:s,y:s,focalPoint:{x:t.clientX-c.left,y:t.clientY-c.top}}),o&&o();}function q(e,t,o,a){o&&(d(e).handlers[t]=function(e,t){let n;return function(){return clearTimeout(n),n=setTimeout(e,t),t}}((()=>n.callback(o,[{chart:e}])),a));}function W(e,t){return function(o,a){const{pan:s,zoom:l={}}=t.options;if(!s||!s.enabled)return  false;const u=a&&a.srcEvent;return !u||(!(!t.panning&&"mouse"===a.pointerType&&(r(i(s),u)||c(i(l.drag),u)))||(n.callback(s.onPanRejected,[{chart:e,event:a}]),false))}}function B(e,t,n){if(t.scale){const{center:o,pointers:a}=n,i=1/t.scale*n.scale,c=n.target.getBoundingClientRect(),r=function(e,t){const n=Math.abs(e.clientX-t.clientX),o=Math.abs(e.clientY-t.clientY),a=n/o;let i,c;return a>.3&&a<1.7?i=c=true:n>o?i=true:c=true,{x:i,y:c}}(a[0],a[1]),l=t.options.zoom.mode;j(e,{x:r.x&&s(l,"x",e)?i:1,y:r.y&&s(l,"y",e)?i:1,focalPoint:{x:o.x-c.left,y:o.y-c.top}}),t.scale=n.scale;}}function A(e,t,n){const o=t.delta;o&&(t.panning=true,Z(e,{x:n.deltaX-o.x,y:n.deltaY-o.y},t.panScales),t.delta={x:n.deltaX,y:n.deltaY});}const I=new WeakMap;function U(e,t){const o=d(e),i=e.canvas,{pan:c,zoom:r}=t,s=new a.default.Manager(i);r&&r.pinch.enabled&&(s.add(new a.default.Pinch),s.on("pinchstart",(()=>function(e,t){t.options.zoom.pinch.enabled&&(t.scale=1);}(0,o))),s.on("pinch",(t=>B(e,o,t))),s.on("pinchend",(t=>function(e,t,o){t.scale&&(B(e,t,o),t.scale=null,n.callback(t.options.zoom.onZoomComplete,[{chart:e}]));}(e,o,t)))),c&&c.enabled&&(s.add(new a.default.Pan({threshold:c.threshold,enable:W(e,o)})),s.on("panstart",(t=>function(e,t,o){const{enabled:a,onPanStart:i,onPanRejected:c}=t.options.pan;if(!a)return;const r=o.target.getBoundingClientRect(),s={x:o.center.x-r.left,y:o.center.y-r.top};if(false===n.callback(i,[{chart:e,event:o,point:s}]))return n.callback(c,[{chart:e,event:o}]);t.panScales=u(t.options.pan,s,e),t.delta={x:0,y:0},clearTimeout(t.panEndTimeout),A(e,t,o);}(e,o,t))),s.on("panmove",(t=>A(e,o,t))),s.on("panend",(()=>function(e,t){t.delta=null,t.panning&&(t.panEndTimeout=setTimeout((()=>t.panning=false),500),n.callback(t.options.pan.onPanComplete,[{chart:e}]));}(e,o)))),I.set(e,s);}function G(e,t,n){const o=n.zoom.drag,{dragStart:a,dragEnd:i}=d(e);if(o.drawTime!==t||!i)return;const{left:c,top:r,width:s,height:l}=K(e,n.zoom.mode,a,i),u=e.ctx;u.save(),u.beginPath(),u.fillStyle=o.backgroundColor||"rgba(225,225,225,0.3)",u.fillRect(c,r,s,l),o.borderWidth>0&&(u.lineWidth=o.borderWidth,u.strokeStyle=o.borderColor||"rgba(225,225,225)",u.strokeRect(c,r,s,l)),u.restore();}var J={id:"zoom",version:"2.0.1",defaults:{pan:{enabled:false,mode:"xy",threshold:10,modifierKey:null},zoom:{wheel:{enabled:false,speed:.1,modifierKey:null},drag:{enabled:false,drawTime:"beforeDatasetsDraw",modifierKey:null},pinch:{enabled:false},mode:"xy"}},start:function(e,t,o){d(e).options=o,Object.prototype.hasOwnProperty.call(o.zoom,"enabled")&&console.warn("The option `zoom.enabled` is no longer supported. Please use `zoom.wheel.enabled`, `zoom.drag.enabled`, or `zoom.pinch.enabled`."),(Object.prototype.hasOwnProperty.call(o.zoom,"overScaleMode")||Object.prototype.hasOwnProperty.call(o.pan,"overScaleMode"))&&console.warn("The option `overScaleMode` is deprecated. Please use `scaleMode` instead (and update `mode` as desired)."),a.default&&U(e,o),e.pan=(t,n,o)=>Z(e,t,n,o),e.zoom=(t,n)=>j(e,t,n),e.zoomRect=(t,n,o)=>O(e,t,n,o),e.zoomScale=(t,n,o)=>function(e,t,n,o="none"){k(e,d(e)),h(e.scales[t],n,void 0,true),e.update(o);}(e,t,n,o),e.resetZoom=t=>function(e,t="default"){const o=d(e),a=k(e,o);n.each(e.scales,(function(e){const t=e.options;a[e.id]?(t.min=a[e.id].min.options,t.max=a[e.id].max.options):(delete t.min,delete t.max);})),e.update(t),n.callback(o.options.zoom.onZoomComplete,[{chart:e}]);}(e,t),e.getZoomLevel=()=>C(e),e.getInitialScaleBounds=()=>T(e),e.isZoomedOrPanned=()=>function(e){const t=T(e);for(const n of Object.keys(e.scales)){const{min:o,max:a}=t[n];if(void 0!==o&&e.scales[n].min!==o)return  true;if(void 0!==a&&e.scales[n].max!==a)return  true}return  false}(e);},beforeEvent(e){const t=d(e);if(t.panning||t.dragging)return  false},beforeUpdate:function(e,t,n){d(e).options=n,function(e,t){const n=e.canvas,{wheel:o,drag:a,onZoomComplete:i}=t.zoom;o.enabled?(E(e,n,"wheel",X),q(e,"onZoomComplete",i,250)):L(e,"wheel"),a.enabled?(E(e,n,"mousedown",V),E(e,n.ownerDocument,"mouseup",N)):(L(e,"mousedown"),L(e,"mousemove"),L(e,"mouseup"),L(e,"keydown"));}(e,n);},beforeDatasetsDraw(e,t,n){G(e,"beforeDatasetsDraw",n);},afterDatasetsDraw(e,t,n){G(e,"afterDatasetsDraw",n);},beforeDraw(e,t,n){G(e,"beforeDraw",n);},afterDraw(e,t,n){G(e,"afterDraw",n);},stop:function(e){!function(e){L(e,"mousedown"),L(e,"mousemove"),L(e,"mouseup"),L(e,"wheel"),L(e,"click"),L(e,"keydown");}(e),a.default&&function(e){const t=I.get(e);t&&(t.remove("pinchstart"),t.remove("pinch"),t.remove("pinchend"),t.remove("panstart"),t.remove("pan"),t.remove("panend"),t.destroy(),I.delete(e));}(e),function(e){m.delete(e);}(e);},panFunctions:z,zoomFunctions:v,zoomRectFunctions:w};return e.Chart.register(J),J})); 
	} (chartjsPluginZoom_min$1));
	return chartjsPluginZoom_min$1.exports;
}

requireChartjsPluginZoom_min();

/* detailed-charts-panel-logic.js */
console.log(
    "%c📉 DetailedChartsPanelLogic: v_2.8 ready",
    "background: #5596c5; color: #000; padding: 2px 6px; border-radius: 4px; font-weight: bold;"
);

// Register essentials
// window.Chart and window.Hammer are set by the imported scripts


class DetailedChartsLogic extends HTMLElement {
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
                const module = await import('../../../../../../local/detailed-charts-views.js');
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
        const calcStats = (points, unit, type, precision = 2, entityId = null) => {
            const values = points.map(p => p.y);
            const min = values.length ? Math.min(...values) : 0;
            const max = values.length ? Math.max(...values) : 0;
            const sum = values.reduce((a, b) => a + b, 0);
            const avg = values.length ? (sum / values.length) : 0;
            const curr = values.length ? values[values.length - 1] : 0;

            let sumVal = null;
            if (entityId && this._isCumulative(entityId, unit)) {
                const hours = (endTime - startTime) / 3600000;
                const isAggregated = (type === 'bar' && hours > 24);
                sumVal = calculateEnergySum(values, isAggregated).toFixed(precision);
            }
            return { min: min.toFixed(precision), max: max.toFixed(precision), avg: avg.toFixed(precision), curr: curr.toFixed(precision), label: t('current'), sum: sumVal };
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
                        const stats = calcStats(points, unit, type, precision, s.entityId);
                        footer.innerHTML = getSplitStatsHTML(stats.label, s.color, stats.curr, unit, stats.min, stats.avg, stats.max, stats.sum);
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
                const stats = calcStats(points, unit, type, precision, s.entityId);
                html += createStatsCard(s, stats.min, stats.avg, stats.max, stats.curr, unit, stats.label, stats.sum);
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
            let sumVal = null;
            if (this._isCumulative(conf.entityId, unit)) {
                const hours = (xMax - xMin) / 3600000;
                let type = conf.typeOverride || this.content.querySelector('#chart-type').value;
                if (type === 'stackedArea') type = 'line';
                if (this.stackedBars) type = 'bar';
                const isAggregated = (type === 'bar' && hours > 24);
                sumVal = calculateEnergySum(values, isAggregated).toFixed(precision);
            }

            const card = this.shadowRoot.querySelector(`.split-chart-card[data-index="${sensorIndex}"]`);
            if (card) {
                const footer = card.querySelector('.split-stats-box');
                if (footer) {
                    footer.innerHTML = getSplitStatsHTML(displayLabel, conf.color, displayVal, unit, min.toFixed(precision), avg.toFixed(precision), max.toFixed(precision), sumVal);
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
                let sumVal = null;
                if (this._isCumulative(conf.entityId, unit)) {
                    const hours = (xMax - xMin) / 3600000;
                    let type = this.content.querySelector('#chart-type').value;
                    if (type === 'stackedArea') type = 'line';
                    if (this.stackedBars) type = 'bar';
                    const isAggregated = (type === 'bar' && hours > 24);
                    sumVal = calculateEnergySum(values, isAggregated).toFixed(precision);
                }
                html += createStatsCard(conf, min.toFixed(precision), avg.toFixed(precision), max.toFixed(precision), displayVal, unit, displayLabel, sumVal);
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
                        let sumVal = null;
                        if (this._isCumulative(sensorConfig.entityId, unit)) {
                            const hours = (endTime - startTime) / 3600000;
                            const isAggregated = (currentType === 'bar' && hours > 24);
                            sumVal = calculateEnergySum(values, isAggregated).toFixed(precision);
                        }

                        footer.innerHTML = getSplitStatsHTML(
                            displayLabel,
                            sensorConfig.color,
                            displayVal,
                            unit,
                            min.toFixed(precision),
                            avg.toFixed(precision),
                            max.toFixed(precision),
                            sumVal
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

        getComputedStyle(this);
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

        const legendItems = [];
        // Recalculate the total sum and each slice's percentage from the currently VISIBLE slices.
        const updateDonutTotals = () => {
            const meta = chart.getDatasetMeta(0);
            let vis = 0;
            values.forEach((v, j) => { if (!meta.data[j] || !meta.data[j].hidden) vis += v; });
            if (totalContainer) totalContainer.textContent = `${vis.toFixed(2)} ${units[0] || ''}`;
            legendItems.forEach((el, j) => {
                const hidden = !!(meta.data[j] && meta.data[j].hidden);
                const right = el.querySelector('.donut-legend-right');
                if (right) right.textContent = hidden ? '\u2014' : `${(vis > 0 ? (values[j] / vis * 100) : 0).toFixed(1)}%`;
                el.classList.toggle('hidden', hidden);
            });
        };

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
                    meta.data[i].hidden = !meta.data[i].hidden;
                    chart.update();
                    updateDonutTotals();
                };
                legendItems.push(item);
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
            let sumVal = null;
            if (this._isCumulative(conf.entityId, unit)) {
                const hours = (et - st) / 3600000;
                const isAggregated = (effectiveType === 'bar' && hours > 24);
                sumVal = calculateEnergySum(values, isAggregated).toFixed(precision);
            }
            allStatsHTML += createStatsCard(conf, min.toFixed(precision), avg, max.toFixed(precision), displayVal, unit, displayLabel, sumVal);

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
            let sumVal = null;
            if (this._isCumulative(conf.entityId, unit)) {
                const isAggregated = (currentType === 'bar' && hours > 24);
                sumVal = calculateEnergySum(values, isAggregated).toFixed(precision);
            }

            const footer = card.querySelector(`#footer-${idx}`);
            const statsBox = footer.querySelector('.split-stats-box');
            if (this.showStats) {
                statsBox.innerHTML = getSplitStatsHTML(displayLabel, conf.color, displayVal, unit, min.toFixed(precision), avg, max.toFixed(precision), sumVal);
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

/* detailed-charts-panel.js */
console.log(
    "%c📉️ DetailedChartsPanel: v_2.8 ready",
    "background: #5596c5; color: #000; padding: 2px 6px; border-radius: 4px; font-weight: bold;"
);

class DetailedChartsPanel extends DetailedChartsLogic {
    constructor() {
        super();
        this.STORAGE_KEY_CONFIG = 'detailed-charts-config';
        this.STORAGE_KEY_VIEWS = 'detailed-charts-saved-views';
    }

    // --- EDITOR SUPPORT ---
    static async getConfigElement() {
        await Promise.resolve().then(function () { return detailedChartsPanelEditor; });
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

var detailedChartsPanelEditor = /*#__PURE__*/Object.freeze({
    __proto__: null
});
