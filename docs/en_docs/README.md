[![HACS validation](https://img.shields.io/github/actions/workflow/status/jayjojayson/detailed-charts-panel/validate.yml?label=HACS%20Validation)](https://github.com/jayjojayson/detailed-charts-panel/actions?query=workflow%3Avalidate)
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/v/release/jayjojayson/detailed-charts-panel?include_prereleases&sort=semver&color=blue&style=flat-square)](https://github.com/jayjojayson/detailed-charts-panel/releases/)
![Panel Size](https://img.shields.io/badge/Panel%20Size-427%20kB-blue)
![last commit](https://img.shields.io/github/last-commit/jayjojayson/detailed-charts-panel)
[![README English](https://img.shields.io/badge/README-Eng-orange)](https://github.com/jayjojayson/detailed-charts-panel/blob/main/docs/README-eng.md)
[![stars](https://img.shields.io/github/stars/jayjojayson/detailed-charts-panel)](https://github.com/jayjojayson/detailed-charts-panel/stargazers)

# Detailed Charts Panel
**Interactive High-Performance Charts for Home Assistant – Your Data, Finally Understandable.**

The 📉 **Detailed Charts Panel** is a powerful visualization solution for Home Assistant to deeply analyze historical data of your sensors without having to rely on external solutions.
It offers functions that go far beyond standard history.

The panel runs entirely locally in the browser and uses the Home Assistant Websocket API for maximum performance.

If you like the Detailed Charts, I would be very happy about a Star ⭐. 🤗

## Features at a Glance

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

Panel-View:

<img src="https://raw.githubusercontent.com/jayjojayson/detailed-charts-panel/main/docs/images/details-chart-panel.png" alt="Panel View" width="50%">

Card on Dashboard:

<img src="https://raw.githubusercontent.com/jayjojayson/detailed-charts-panel/main/docs/images/details-chart-card-2.png" alt="Dashboard Card" width="45%">


---

## Features in Detail

🖱️ Interactive Mouse Control
* Zoom: Drag a frame in the chart with the left mouse button pressed to zoom exactly into this time range.
* A button 🔍 RESET ZOOM then appears automatically in the sidebar.
* Tooltips: Hover over the points to see exact values, times, and units.
* Legend: Click on the name of a sensor (e.g., "Solar") at the top of the chart to temporarily hide it without deleting it.

📊 Intelligent Statistic Boxes
No matter which view you choose, the panel calculates live statistics for the selected period:

* Min / Max: The lowest and highest value.
* Ø (Avg): The average value.
* Sum / Current: Intelligent switching! For power (Watt), the current value is shown. For energy (kWh), the sum (consumption/yield) for the period is automatically calculated.

✨ Panel Mode and Card Mode
You can conveniently create a complete dashboard with overviews via the Panel Mode with a menu entry in the sidebar or simply create a Dashboard Card.

* Panel Mode: Complete overview at a glance with any sensors.
* Panel Mode: Views can be saved and exchanged between different devices.
* Card Mode: Use the Copy button in Panel Mode and insert current view onto the dashboard into the details-chart-card.
* Card Mode: Convenient configuration of charts via the details-chart-card on the dashboard.


🟢 Binary Sensors  
Automatic detection and visualization of binary sensors (e.g., heating, windows).  
These are displayed as semi-transparent background areas (On/Off).

⚡ Auto-Scale (W ➡ kW) NEW
A common problem: Your solar system delivers 4500 Watts, but you want to read "4.5 kW".
* Activate the Auto-Scale switch.
* The panel automatically divides values of sensors with unit W or Wh by 1000 and changes the unit in the chart to kW or kWh. No more mental arithmetic needed!

🏗️ Drag & Drop (Only in "Separated" Mode)
If you set the layout to Separated (Grid) or Mixed, you can change the order of the small charts:

* Click on the move icon (the small dots top right in the mini-chart).
* Keep the mouse pressed and drag the chart to the desired position. The other charts automatically make space.

* The sensors in the sensor list can now also be re-sorted via drag & drop (name and color adjustment also possible).

🍩 The Donut Sidebar
Do you want to know who consumed the most electricity?

* Activate the Donut Sidebar switch.
* A ring diagram appears to the right of the main chart.
* It automatically sums up all values (ideal for kWh) and displays the percentage distribution.

🔴 Threshold Line
Do you want to see when your balcony power plant produced over 600W?

* Enter the value 600 at Reference Line.
* A dashed red line appears in the chart at exactly this value as an orientation aid.

📉 Previous Year Comparison
Do you want to see how your electricity consumption or yield has developed compared to last year?

* Activate the "Previous Year Comparison" switch in the sidebar.
* The data from the exact same period a year ago is displayed as grey bars or lines in the background.
* Ideal for identifying trends!

💾 Saving & Loading
Save locally: The floppy disk symbol 💾 saves the current view in the browser.

* Save globally (Code): Via the Copy button, you get the code for `detailed-charts-views.js`. With this, you can "hardwire" views so that they are equally available on tablet, mobile, and PC and receive a lock symbol 🔒.
