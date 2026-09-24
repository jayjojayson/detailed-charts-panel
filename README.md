[![HACS validation](https://img.shields.io/github/actions/workflow/status/jayjojayson/detailed-charts-panel/validate.yml?label=HACS%20Validation)](https://github.com/jayjojayson/detailed-charts-panel/actions?query=workflow%3Avalidate)
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/v/release/jayjojayson/detailed-charts-panel?include_prereleases&sort=semver&color=blue&style=flat-square)](https://github.com/jayjojayson/detailed-charts-panel/releases/)
![Panel Size](https://img.shields.io/badge/Panel%20Size-427%20kB-blue)
[![README Deutsch](https://img.shields.io/badge/README-DE-orange)](https://github.com/jayjojayson/detailed-charts-panel/blob/main/docs/README-de.md)
![Downloads](https://img.shields.io/github/downloads/jayjojayson/detailed-charts-panel/total?label=Downloads&color=blue)
[![Support](https://img.shields.io/badge/%20-Support%20Me-steelblue?style=flat&logo=paypal&logoColor=white)](https://www.paypal.me/quadFlyerFW)
[![stars](https://img.shields.io/github/stars/jayjojayson/detailed-charts-panel)](https://github.com/jayjojayson/detailed-charts-panel/stargazers)


# Detailed Charts Panel
Interactive High-Performance Charts for Home Assistant


The 📉 **Detailed Charts Panel** is a powerful visualization solution for Home Assistant, allowing for in-depth analysis of historical data from your sensors. It offers features that go far beyond standard history, such as zoom, pan, grid layouts, various chart types, and persistent configuration. Furthermore, everything runs entirely locally using the Home Assistant WebSocket API.

The panel automatically saves your settings (selected sensors, colors, view options) in the browser (Local Storage), ensuring your analysis environment is ready immediately after a reload.

If you like this panel, I would be very happy about a star rating ⭐. 🤗

[![Wiki](https://img.shields.io/badge/📖_Doku-Wiki-blue?style=for-the-badge)](https://jayjojayson.github.io/detailed-charts-panel/#/en_docs/)

<img width="100%" height="auto" alt="detailed-charts-panel" src="https://github.com/jayjojayson/detailed-charts-panel/blob/main/docs/images/example1.png" />

## Features

- **📉 Interactive Charts:** Smooth zoom & pan (touch & mouse wheel) with automatic data reloading.
- **📉 Previous Year Comparison:** Compare current data directly with the previous year.
- **📉 Short-Term & Long-Term Charts:** Supports short-term and long-term data analysis.
- **🌍 Multilingual:** Full translation support for English and German.
- **✨ Panel Mode & Card Mode:** Two viewing options — full panel view or as a dashboard card.
- **⚡ Auto-Scale (W ➡ kW):** Automatically converts values from `W`/`Wh` to `kW`/`kWh` — no mental math required!
- **🍩 Donut Sidebar:** Optional sidebar showing percentage distribution (ideal for power consumption).
- **📊 Flexible Layouts:**
    - *Combined:* Everything in a single chart.
    - *Grid:* 1 to 4 columns side by side.
    - *Mixed:* Overview on top, details below.
- **🔴 Reference Lines:** Add any number of reference lines, each with its own color and label.
- **📐 Manual Y-Axis:** Optionally set a fixed Y-axis min/max (leave empty for autoscale).
- **🏷️ Sensor Aliases:** Give each sensor a custom display name.
- **🧱 Stacked Area:** Additional stacked area chart type.
- **🧮 Meter Sensors (m³, kWh):** Cumulative counters (`total_increasing`, e.g. water/gas in m³ or energy) are aggregated as consumption (sum of increases) instead of being averaged.
- **🔧 Display Options:** Hide the legend, hide the min/max highlight button, and choose the date format (day.month / month/day).
- **📊 Live Range Statistics:** Statistics recalculate for the currently visible range while zooming/panning.
- **🎨 Color Palette:** One click assigns a harmonious, theme-friendly color set ("shuffle colors").
- **➕ Multi-Add & Areas/Devices:** Select several sensors at once, or add all sensors of a whole area or device.
- **📍 Peak Markers:** Optional min / max / current markers with labels directly on the line.
- **🕒 Now Line & Day/Night:** Optional "now" line and day/night background shading for easier reading.
- **💾 Dual Storage:** Save views locally in the browser or globally in a file.
- **📈 Live Statistics:** Min / Max / Average / Sum / Current — intelligently calculated.
- **🏗️ Drag & Drop:** Easily rearrange charts in grid mode using drag & drop.
- **🌑 Modern UI:** Full support for Home Assistant themes (light & dark mode).
- **🟢 Binary Sensors:** Automatic detection and visualization of binary sensors (e.g. heating, windows).
- **🎯 Precision & Rounding:** Values in tooltips and statistics respect the sensor’s `display_precision` setting from Home Assistant.
- **💡 Smart Tooltips:** The info popup automatically moves away from the cursor to avoid covering the chart.


---

## Installation

### HACS (Recommended)

- Add this repository via the link in Home Assistant.
 
  [![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=jayjojayson&repository=detailed-charts-panel&category=plugin)

- The "Detailed Charts Panel" should now be available in HACS. Click on "INSTALL".
- The resource will be automatically added to your Lovelace configuration.
- Create the file `detail-charts-views.js` in the `/config/www/` folder.

<details>
  <summary> <b>Manual Installation via HACS</b></summary>  

### Manual Installation via HACS
Open HACS in Home Assistant.

- Go to "Frontend" and click the three dots in the upper right corner.
- Select "Custom repositories".
- Paste the URL of this GitHub repository and select "Lovelace" as the category.
- Click "ADD".
- The "Detailed Charts Panel" should now be available in HACS. Click on "INSTALL".
- The resource will be automatically added to your Lovelace configuration.
</details>

<details>
  <summary> <b>Manual Installation in HA</b></summary>  
 
### Manual Installation in HA
1.  **Download Files:**
    * Download all files from this repository (especially the `.js` files).
    * **Important:** Since this panel uses external libraries, ensure that `chart.umd.min.js`, `hammer.min.js`, and `chartjs-plugin-zoom.min.js` are also downloaded.

2.  **Upload Files to Home Assistant:**
    * Create a new folder named `detailed-charts-panel` in the `www/community` directory of your Home Assistant configuration.
    * Copy **all downloaded files** into this new folder. Your folder structure should look like this:
        ```
        /config/www/community/detailed-charts-panel/detailed-charts-panel.js
        /config/www/community/detailed-charts-panel/detailed-charts-panel-logic.js
        /config/www/community/detailed-charts-panel/detailed-charts-panel-function.js
        /config/www/community/detailed-charts-panel/detailed-charts-panel-editor.js
        /config/www/community/detailed-charts-panel/detailed-charts-panel-langs.js
        /config/www/detailed-charts-views.js
        /config/www/community/detailed-charts-panel/lang-de.js
        /config/www/community/detailed-charts-panel/lang-en.js
        /config/www/community/detailed-charts-panel/chart.umd.min.js
        /config/www/community/detailed-charts-panel/hammer.min.js
        /config/www/community/detailed-charts-panel/chartjs-plugin-zoom.min.js
        ```

3.  **Add Resource to Home Assistant:**
    * Go to Home Assistant **Settings > Dashboards**.
    * Click the three dots menu in the top right corner and select **Resources**.
    * Click **+ Add Resource**.
    * Enter the URL `/local/community/detailed-charts-panel/detailed-charts-panel.js`.
    * Select **JavaScript Module** as the resource type.
    * Click **Create**.

4.  Create the file `detail-charts-views.js` in the `/config/www/` folder.

</details>

---

## IMPORTANT!

To display the dashboard in the sidebar, you must add the following code to the beginning of your configuration.yaml:

```yaml
panel_custom:
  - name: detailed-charts-panel
    sidebar_title: Detailed Charts
    sidebar_icon: mdi:chart-bell-curve-cumulative
    module_url: /local/community/detailed-charts-panel/detailed-charts-panel.js
```
