[![HACS validation](https://img.shields.io/github/actions/workflow/status/jayjojayson/detailed-charts-panel/validate.yml?label=HACS%20Validation)](https://github.com/jayjojayson/detailed-charts-panel/actions?query=workflow%3Avalidate)
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/v/release/jayjojayson/detailed-charts-panel?include_prereleases&sort=semver&color=blue&style=flat-square)](https://github.com/jayjojayson/detailed-charts-panel/releases/)
![Panel Size](https://img.shields.io/github/size/jayjojayson/detailed-charts-panel/dist/detailed-charts-panel.js?label=Panel%20Size)
![last commit](https://img.shields.io/github/last-commit/jayjojayson/detailed-charts-panel)
[![README English](https://img.shields.io/badge/README-Eng-orange)](https://github.com/jayjojayson/detailed-charts-panel/blob/main/docs/README-eng.md)
[![stars](https://img.shields.io/github/stars/jayjojayson/detailed-charts-panel)](https://github.com/jayjojayson/detailed-charts-panel/stargazers)


# Detailed Charts Panel
Interaktive High-Performance Charts für Home Assistant


Das 📉 **Detailed Charts Panel** ist eine leistungsstarke Visualisierungslösung für Home Assistant, um historische Daten deiner Sensoren tiefgehend zu analysieren. Es bietet Funktionen, die weit über die Standard-History hinausgehen, wie z.B. Zoom, Pan, Grid-Layouts und eine persistente Konfiguration.

Das Panel speichert deine Einstellungen (ausgewählte Sensoren, Farben, Ansichten) automatisch im Browser (Local Storage), sodass du deine Analyseumgebung nach einem Neustart sofort wieder vorfindest.

Wenn euch das Panel gefällt, würde ich mich sehr über eine Sternebewertung ⭐ freuen. 🤗

## Features

- ### 📉 **Interaktive Charts:** Stufenloser Zoom & Pan (Touch & Mausrad)
- ### 🖱️ **Infinite Scrolling:** Daten werden beim Bewegen der Zeitachse automatisch nachgeladen
- ### 📊 **Split View & Grid:** Wähle zwischen einem großen Chart oder einem Grid (1-4 Spalten)
- ### 💾 **Auto-Save:** Sensoren, Farben und Ansichtseinstellungen bleiben erhalten
- ### 🎨 **Modern UI:** Native Home Assistant Toggles, Gradient-Fills und Dark-Mode Support
- ### ⚡ **Smart Loading:** Lädt nur benötigte Daten nach; sofortiges Update bei Änderungen
- ### 📈 **Statistiken:** Live-Anzeige von Min / Max / Durchschnitt / Aktuell
- ### 🛠️ **Quick Controls:** Sofortiges Umschalten zwischen Line- und Bar-Chart pro Sensor


---

## Installation

### HACS (Empfohlen)

- Das github über den Link in Home Assistant einfügen.
 
  [![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=jayjojayson&repository=detailed-charts-panel&category=plugin)

- Das "Detailed Charts Panel" sollte nun in HACS verfügbar sein. Klicke auf "INSTALLIEREN" ("INSTALL").
- Die Ressource wird automatisch zu deiner Lovelace-Konfiguration hinzugefügt.

<details>
  <summary> <b>Manuelle Installation über Hacs</b></summary>  

### Manuelle Installation über Hacs 
Öffne HACS in Home Assistant.

- Gehe zu "Frontend" und klicke auf die drei Punkte in der oberen rechten Ecke.
- Wähle "Benutzerdefinierte Repositories" ("Custom repositories") aus.
- Füge die URL zu diesem GitHub-Repository hinzu und wähle "Lovelace" als Kategorie.
- Klicke auf "HINZUFÜGEN" ("ADD").
- Das "Detailed Charts Panel" sollte nun in HACS verfügbar sein. Klicke auf "INSTALLIEREN" ("INSTALL").
- Die Ressource wird automatisch zu deiner Lovelace-Konfiguration hinzugefügt.
</details>

<details>
  <summary> <b>Manuelle Installation in HA</b></summary>  
 
### Manuelle Installation in HA
1.  **Dateien herunterladen:**
    * Lade alle Dateien aus diesem Repository herunter (insbesondere `.js` Dateien).
    * **Wichtig:** Da dieses Panel externe Bibliotheken nutzt, stelle sicher, dass `chart.umd.min.js`, `hammer.min.js` und `chartjs-plugin-zoom.min.js` ebenfalls heruntergeladen werden.

2.  **Dateien in Home Assistant hochladen:**
    * Erstelle einen neuen Ordner namens `detailed-charts-panel` im `www/community`-Verzeichnis deiner Home Assistant-Konfiguration.
    * Kopiere **alle heruntergeladenen Dateien** in diesen neuen Ordner. Deine Ordnerstruktur sollte wie folgt aussehen:
        ```
        /config/www/community/detailed-charts-panel/detailed-charts-panel.js
        /config/www/community/detailed-charts-panel/chart.umd.min.js
        /config/www/community/detailed-charts-panel/hammer.min.js
        /config/www/community/detailed-charts-panel/chartjs-plugin-zoom.min.js
        ```

3.  **Ressource zu Home Assistant hinzufügen:**
    * Gehe in Home Assistant zu **Einstellungen > Dashboards**.
    * Klicke auf das Menü mit den drei Punkten oben rechts und wähle **Ressourcen**.
    * Klicke auf **+ Ressource hinzufügen**.
    * Gebe als URL `/local/community/detailed-charts-panel/detailed-charts-panel.js` ein.
    * Wähle als Ressourcentyp **JavaScript-Modul**.
    * Klicke auf **Erstellen**.
</details>

---

## WICHTIG!

Damit das Dashboard in der Sidebar angezeigt werden kann, müsst ihr in der configuration.yaml am Anfang diesen Code einfügen:

```yaml
panel_custom:
  - name: detailed-charts-panel
    sidebar_title: Detailed Charts
    sidebar_icon: mdi:chart-bell-curve-cumulative
    module_url: /local/community/detailed-charts-panel/detailed-charts-panel.js
```
