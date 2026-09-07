# Usage & Operation

Video with all Details. Sorry for my mic quality. :) It is in German, but you can add English subtitles.
[![Watch the video](https://img.youtube.com/vi/o3h9qdb1-Fk/0.jpg)](https://www.youtube.com/watch?v=o3h9qdb1-Fk)


## Step-by-Step Guide

The panel is designed so that you can intuitively click through the sidebar from top to bottom:

1.  **Select Sensors:**
    * Type in the search field.
    * Choose a color (optional).
    * Click on `+` to add the sensor.
    * Add several at once: tick the checkboxes in the suggestion list and click "Add selection".
    * Add whole areas/devices: search for an area or device name to add all of its sensors at once.
    * 🎨 Shuffle colors: assigns a harmonious color set to all sensors with one click.

2.  **Determine Layout:**
    * Choose between `Combined`, `Separated (Grid)`, or `Mixed`.
    * In Grid mode, use the slider to set the number of columns (1-4).
    * Use the zoom slider to adjust the size of the complete panel.
    * Define further presets for the layout.
    * The created sensor list can be changed later via drag & drop.
    * You can change the color later using the color dot in front of the sensor in the list.
    * Clicking on a sensor name in the list allows you to customize it as desired.

3.  **Set Time Period:**
    * **Relative:** (e.g., "Last 24h") for quick checks.
    * **Calendar:** (From/To) for exact analyses of past events.

4.  **Refine Chart Type:**
    * Select global `Line`, `Bar`, `Stacked Area`, `Scatter`, `Doughnut`, or `Stepped`.
    * Add any number of **reference lines** – each with its own color and label.
    * Optionally fill the area in the Line Chart.
    * Optionally set a fixed **Y-axis min/max** (empty = automatic).
    * Optionally hide the **legend** or the **min/max highlight button**.
    * Choose the **date format** (day.month or month/day).
    * Optionally give each sensor an **alias** (display name).
    * *Note:* Cumulative counters (`total_increasing`, e.g. water/gas in m³ or energy in kWh) are summed as consumption, not averaged.
    * Optionally enable **peak markers** (min/max/current), the **now line**, or **day/night shading**.
    * *Tip:* In Grid and Mixed modes, you can switch between Line and Bar for each sensor individually.
    * *Tip:* If you have defined kWh sensors in the Bar Chart View and then add a % sensor like (SoC Battery), the percentage sensor will be displayed as a Line.

---

## Panel Mode vs. Card Mode

The project is designed with a dual concept:

### 1. Panel Mode ("Editor" & "Laboratory")
This is the full-screen view via the sidebar (see Installation). Here you have all freedoms: Search, Drag & Drop, Live Analysis, Colors, Times, etc.
This mode is your "laboratory" to explore data or to configure a Dashboard Card in "combined" mode. However, it serves primarily for the detailed analysis of your data.

* Search & Find: Search your sensors at lightning speed.
* Drag & Drop: Simply rearrange charts in Split-View with the mouse.
* Configuration: Set time periods (relative or fixed calendar), colors, and chart types via UI.
* Save: Save views and recall them later.

<img src="../images/details-chart-panel.png" alt="Dashboard Card" width="55%">

In Panel Mode, you can also create a JSON file via the Copy button, insert it into `detail-charts-views.js`, and thus make the view available on all end devices. The `detail-charts-views.js` must be inserted as a file into the `/www/` folder of your Home Assistant instance. More information can be found under the menu item "Saving & Export".  

*New* Experimental: Other Custom Cards can now also be imported. Copy the Yaml code of your card, then click on the Add Card button and paste your code. The card is only displayed in the Separated and Mixed views. But it can be placed anywhere there.

### 2. Card Mode ("Dashboard Card")
You have created a perfect view in Panel Mode and want to have it permanently on your dashboard?

1.  Configure your view in Panel Mode.
2.  Click on the **Copy** button (📋 Icon) in the sidebar.
3.  Go to your dashboard, select "Add Card" -> "details-chart-card".
4.  Paste the copied code.

<img src="https://raw.githubusercontent.com/jayjojayson/detailed-charts-panel/main/docs/images/example4.png" alt="Dashboard Card" width="40%">

*Result:* A permanently defined card, configured exactly as you created it in Panel Mode.

<img src="https://raw.githubusercontent.com/jayjojayson/detailed-charts-panel/main/docs/images/details-chart-card-2.png" alt="Dashboard Card" width="40%">

#### 2.1. Card Editor ("Dashboard Card")

1. Configure your charts directly in the card on the dashboard.
2. Almost all options from the panel are also available for the card on the dashboard.
3. The editor shows you all corresponding possibilities.

<img src="https://raw.githubusercontent.com/jayjojayson/detailed-charts-panel/main/docs/images/example5.png" alt="Dashboard Card" width="40%">

*Result:* A custom Card, created directly in the dashboard.

<img src="https://raw.githubusercontent.com/jayjojayson/detailed-charts-panel/main/docs/images/details-chart-card.png" alt="Dashboard Card" width="40%">

**Example Code**
A simple example for a line diagram for the last 7 days:

```yml
type: custom:detailed-charts-panel
chartType: line
timeMode: relative
timeSelect: "168"
fillArea: true
layoutMode: combined
stackedBars: false
showStats: true
showDonutSidebar: false
zoomLevel: 0.9
autoScale: false
sensors:
  - entityId: sensor.gunstigster_benzinpreis
    color: "#59025f"
```

Or here with a **fixed time period** an example for a bar diagram for the last 24 days:

```yml
type: custom:detailed-charts-panel
chartType: bar
timeMode: fixed
dateStart: "2025-12-23T22:35"
dateEnd: "2025-12-24T23:35"
fillArea: false
layoutMode: combined
stackedBars: false
showStats: true
showDonutSidebar: false
zoomLevel: 0.9
autoScale: false
sensors:
  - entityId: sensor.gunstigster_benzinpreis
    color: "#59025f"
```

This example has a **fixed start**, but no end and therefore always displays the values up to the current day.

```yml
type: custom:detailed-charts-panel
chartType: bar
timeMode: fixed
dateStart: "2026-01-01 00:00:00"
fillArea: false
layoutMode: combined
stackedBars: false
showStats: true
showDonutSidebar: false
zoomLevel: 0.9
autoScale: false
sensors:
  - entityId: sensor.gunstigster_benzinpreis
    color: "#59025f"
```
