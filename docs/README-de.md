[![HACS validation](https://img.shields.io/github/actions/workflow/status/jayjojayson/detailed-charts-panel/validate.yml?label=HACS%20Validation)](https://github.com/jayjojayson/detailed-charts-panel/actions?query=workflow%3Avalidate)
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/v/release/jayjojayson/detailed-charts-panel?include_prereleases&sort=semver&color=blue&style=flat-square)](https://github.com/jayjojayson/detailed-charts-panel/releases/)
![Panel Size](https://img.shields.io/badge/Panel%20Size-427%20kB-blue)
[![README English](https://img.shields.io/badge/README-Eng-orange)](https://github.com/jayjojayson/detailed-charts-panel/blob/main/README.md)
![Downloads](https://img.shields.io/github/downloads/jayjojayson/detailed-charts-panel/total?label=Downloads&color=blue)
[![Support](https://img.shields.io/badge/%20-Support%20Me-steelblue?style=flat&logo=paypal&logoColor=white)](https://www.paypal.me/quadFlyerFW)
[![stars](https://img.shields.io/github/stars/jayjojayson/detailed-charts-panel)](https://github.com/jayjojayson/detailed-charts-panel/stargazers)


# Detailed Charts Panel
Interaktive High-Performance Charts für Home Assistant


Das 📉 **Detailed Charts Panel** ist eine leistungsstarke Visualisierungslösung für Home Assistant, um historische Daten deiner Sensoren tiefgehend zu analysieren. Es bietet Funktionen, die weit über die Standard-History hinausgehen, wie z.B. Zoom, Pan, Grid-Layouts, verschiedene Diagrammtype und eine fortbestehende Konfiguration. Zudem läuft alles rein lokal mit Hilfe der Websocket Api von Home Assistant.

Das Panel speichert deine Einstellungen (ausgewählte Sensoren, Farben, Ansichten) automatisch im Browser (Local Storage), sodass du deine Analyseumgebung nach einem Neustart sofort wieder vorfindest.

Wenn euch das Panel gefällt, würde ich mich sehr über eine Sternebewertung ⭐ freuen. 🤗

[![Wiki](https://img.shields.io/badge/📖_Doku-Wiki-blue?style=for-the-badge)](https://jayjojayson.github.io/detailed-charts-panel/)


<img width="100%" height="auto" alt="detailed-charts-panel" src="https://github.com/jayjojayson/detailed-charts-panel/blob/main/docs/images/example1.png" />

## Features

- **📉 Interaktive Charts:** Stufenloser Zoom & Pan (Touch & Mausrad) mit automatischem Nachladen der Daten.
- **📉 Vorjahresvergleich:** Vergleiche aktuelle Daten direkt mit dem Vorjahr (als graue Hinterlegung).
- **📉 Short-Term & Long-Term Charts:** Unterstütz die Kurz- und Langezeitedaten-Auswertung.
- **🌍 Mehrsprachig:** Komplette Übersetzung in Deutsch und Englisch.
- **✨ Panel Modus & Card Modus:** Zwei Möglichkeiten der Betrachtung, komplettes Panel oder als Dashboard Card.
- **⚡ Auto-Scale (W ➡ kW):** Rechnet Werte von `W`/`Wh` automatisch in `kW`/`kWh` um – kein Kopfrechnen mehr!
- **🍩 Donut Sidebar:** Optionale Seitenleiste für die prozentuale Verteilung (ideal für Stromverbrauch).
- **📊 Flexible Layouts:**
    - *Combined:* Alles in einem Chart.
    - *Grid:* 1 bis 4 Spalten nebeneinander.
    - *Mixed:* Übersicht oben, Details unten.
- **🔴 Referenzlinien:** Beliebig viele Referenzlinien mit eigener Farbe und Bezeichnung.
- **📐 Y-Achse manuell:** Optional festes Min/Max der Y-Achse (leer = Auto-Skalierung).
- **🏷️ Sensor-Alias:** Vergib je Sensor einen eigenen Anzeigenamen.
- **🧱 Stacked Area:** Zusätzlicher gestapelter Flächen-Diagrammtyp.
- **🧮 Zähler-Sensoren (m³, kWh):** Kumulative Zähler (`total_increasing`, z.B. Wasser/Gas in m³ oder Energie) werden als Verbrauch (Summe der Zuwächse) aggregiert statt gemittelt.
- **🔧 Anzeige-Optionen:** Legende ausblenden, Min/Max-Hervorhebungs-Button ausblenden und Datumsformat wählen (Tag.Monat / Monat/Tag).
- **📊 Live-Range-Statistiken:** Statistiken werden beim Zoomen/Pannen für den sichtbaren Bereich neu berechnet.
- **🎨 Farbpalette:** Ein Klick vergibt einen harmonischen, theme-tauglichen Farbsatz ("Farben neu würfeln").
- **➕ Mehrfachauswahl & Bereiche/Geräte:** Mehrere Sensoren auf einmal wählen oder alle Sensoren eines Bereichs/Geräts hinzufügen.
- **📍 Peak-Marker:** Optionale Min-/Max-/Aktuell-Marker mit Beschriftung direkt an der Linie.
- **🕒 Jetzt-Linie & Tag/Nacht:** Optionale „Jetzt"-Linie und Tag/Nacht-Hintergrundschattierung für bessere Lesbarkeit.
- **💾 Duales Speichern:** Speichere Ansichten lokal im Browser oder global in einer Datei.
- **📈 Live-Statistiken:** Min / Max / Durchschnitt / Summe / Aktuell – intelligent berechnet.
- **🏗️ Drag & Drop:** Ordne Charts im Grid-Modus einfach per Maus neu an.
- **🌑 Modern UI:** Voller Support für Home Assistant Themes (Light & Dark Mode).
- **🟢 Binary Sensoren:** Automatische Erkennung und Darstellung von binären Sensoren (z.B. Heizung, Fenster).
- **🎯 Präzision & Rundung:** Werte in Tooltips und Statistiken verwenden `display_precision` Einstellung des Sensors aus HA.
- **💡 Intelligente Tooltips:** Info-Fenster weicht dem Mauszeiger automatisch aus, um den Chart nicht zu verdecken. 


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
- Erstelle die Datei `detail-charts-views.js` im Ordner `/config/www/`.
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

3.  **Ressource zu Home Assistant hinzufügen:**
    * Gehe in Home Assistant zu **Einstellungen > Dashboards**.
    * Klicke auf das Menü mit den drei Punkten oben rechts und wähle **Ressourcen**.
    * Klicke auf **+ Ressource hinzufügen**.
    * Gebe als URL `/local/community/detailed-charts-panel/detailed-charts-panel.js` ein.
    * Wähle als Ressourcentyp **JavaScript-Modul**.
    * Klicke auf **Erstellen**.
</details>

4.  Erstelle die Datei `detail-charts-views.js` im Ordner `/config/www/`.

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
