[![HACS validation](https://img.shields.io/github/actions/workflow/status/jayjojayson/detailed-charts-panel/validate.yml?label=HACS%20Validation)](https://github.com/jayjojayson/detailed-charts-panel/actions?query=workflow%3Avalidate)
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/release/jayjojayson/detailed-charts-panel?include_prereleases=&sort=semver&color=blue)](https://github.com/jayjojayson/detailed-charts-panel/releases/)
![File size](https://img.shields.io/github/size/jayjojayson/detailed-charts-panel/detailed-charts-panel.js?label=Panel%20Size)
![last commit](https://img.shields.io/github/last-commit/jayjojayson/detailed-charts-panel)
[![README German](https://img.shields.io/badge/README-DE-orange)](https://github.com/jayjojayson/detailed-charts-panel/blob/main/README.md)
[![stars](https://img.shields.io/github/stars/jayjojayson/detailed-charts-panel)](https://github.com/jayjojayson/detailed-charts-panel/stargazers)


# Detailed Charts Panel
Interactive High-Performance Charts for Home Assistant


The 📉 **Detailed Charts Panel** is a powerful visualization solution for Home Assistant designed to deeply analyze historical data of your sensors. It offers features far beyond the standard history view, such as seamless Zoom, Pan, Grid Layouts, and persistent configuration.

The panel automatically saves your settings (selected sensors, colors, view options) in the browser (Local Storage), ensuring your analysis environment is ready immediately after a reload.

If you like this panel, I would be very happy about a star rating ⭐. 🤗

## Features

- ### 📉 **Interactive Charts:** Seamless Zoom & Pan (Touch & Mouse Wheel)
- ### 🖱️ **Infinite Scrolling:** Data is automatically loaded as you move along the timeline
- ### 📊 **Split View & Grid:** Choose between one large combined chart or a grid (1-4 columns)
- ### 💾 **Auto-Save:** Sensors, colors, and view settings are persisted automatically
- ### 🎨 **Modern UI:** Native Home Assistant toggles, gradient fills, and Dark Mode support
- ### ⚡ **Smart Loading:** Only loads necessary data; instant updates on changes
- ### 📈 **Statistics:** Live display of Min / Max / Average / Current values
- ### 🛠️ **Quick Controls:** Instantly toggle between Line and Bar charts per sensor

<img width="48%" height="auto" alt="Split View Grid" src="https://github.com/jayjojayson/detailed-charts-panel/blob/main/docs/split_view.png" /> <img width="48%" height="auto" alt="Combined View" src="https://github.com/jayjojayson/detailed-charts-panel/blob/main/docs/combined_view.png" />
<img width="96%" height="auto" alt="Full Interface" src="https://github.com/jayjojayson/detailed-charts-panel/blob/main/docs/main_interface.png" />

---

## Installation

### HACS (Recommended)

- Add this repository via the link in Home Assistant.
 
  [![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=jayjojayson&repository=detailed-charts-panel&category=plugin)

- The "Detailed Charts Panel" should now be available in HACS. Click on "INSTALL".
- The resource will be automatically added to your Lovelace configuration.

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