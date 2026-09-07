[![HACS validation](https://img.shields.io/github/actions/workflow/status/jayjojayson/detailed-charts-panel/validate.yml?label=HACS%20Validation)](https://github.com/jayjojayson/detailed-charts-panel/actions?query=workflow%3Avalidate)
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/v/release/jayjojayson/detailed-charts-panel?include_prereleases&sort=semver&color=blue&style=flat-square)](https://github.com/jayjojayson/detailed-charts-panel/releases/)
![Panel Size](https://img.shields.io/badge/Panel%20Size-427%20kB-blue)
![last commit](https://img.shields.io/github/last-commit/jayjojayson/detailed-charts-panel)
[![README English](https://img.shields.io/badge/README-Eng-orange)](https://github.com/jayjojayson/detailed-charts-panel/blob/main/docs/README-eng.md)
[![stars](https://img.shields.io/github/stars/jayjojayson/detailed-charts-panel)](https://github.com/jayjojayson/detailed-charts-panel/stargazers)

# Detailed Charts Panel
**Interaktive High-Performance Charts für Home Assistant – Deine Daten, endlich verständlich.**

Das 📉 **Detailed Charts Panel** ist eine leistungsstarke Visualisierungslösung für Home Assistant, um historische Daten deiner Sensoren tiefgehend zu analysieren, ohne auf externe Lösungen zurückgreifen zu müssen.
Es bietet Funktionen, die weit über die Standard-History hinausgehen.

Das Panel läuft vollständig lokal im Browser und nutzt die Websocket API von Home Assistant für maximale Performance.

Wenn euch die Details-Charts gefallen, würde ich mich sehr über einen Stern ⭐ freuen. 🤗

## Features im Überblick

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

Panel-View:

<img src="images/details-chart-panel.png" alt="Panel View" width="50%">

Card on Dashboard:

<img src="images/details-chart-card-2.png" alt="Dashboard Card" width="45%">


---

## Features im Detail

🖱️ Interaktive Maus-Steuerung
* Zoom: Ziehe mit gedrückter linker Maustaste einen Rahmen im Chart, um genau in diesen Zeitbereich hineinzuzoomen. 
* Ein Button 🔍 ZOOM ZURÜCKSETZEN erscheint dann automatisch in der Sidebar.
* Tooltips: Fahre mit der Maus über die Punkte, um exakte Werte, Uhrzeiten und Einheiten zu sehen.
* Legende: Klicke oben im Chart auf den Namen eines Sensors (z.B. "Solar"), um ihn temporär auszublenden, ohne ihn zu löschen.

📊 Intelligente Statistik-Boxen  
Egal welche Ansicht du wählst, das Panel berechnet live Statistiken für den gewählten Zeitraum:

* Min / Max: Der niedrigste und höchste Wert.
* Ø (Avg): Der Durchschnittswert.
* Summe / Aktuell: Intelligente Umschaltung! Bei Leistung (Watt) wird der aktuelle Wert gezeigt. Bei Energie (kWh) wird automatisch die Summe (Verbrauch/Ertrag) für den Zeitraum berechnet.

✨ Panel Modus und Card Modus  
Du kannst dir bequem über den Panel Modus mit Menüeintrag in der Seitenleiste ein komplettes Dashboard mit Übersichten erstellen oder einfach ein Dashboard Card erstellen.

* Panel Modus: Komplette Übersicht auf einen Blick mit beliebigen Sensoren.
* Panel Modus: Die Ansichten können gespeichert und zwischen verschiedenen Geräten ausgetauscht werden.
* Card Modus: Kopieren Button im Panel Modus nutzen und akt. Ansicht auf das Dashboard in die details-chart-card einfügen.
* Card Modus: Bequeme Konfiguration von Charts über die details-chart-card auf dem Dashboard.

🟢 Binary Sensoren  
Automatische Erkennung und Darstellung von binären Sensoren (z.B. Heizung, Fenster).  
Diese werden als halbtransparente Flächen im Hintergrund visualisiert (An/Aus).

⚡ Auto-Scale (W ➡ kW) NEU  
Ein häufiges Problem: Deine Solaranlage liefert 4500 Watt, aber du willst "4,5 kW" lesen.  
* Aktiviere den Schalter Auto-Scale. 
* Das Panel rechnet Werte von Sensoren mit der Einheit W oder Wh automatisch durch 1000 und ändert die Einheit im Chart auf kW bzw. kWh. Kein Kopfrechnen mehr nötig!

🏗️ Drag & Drop (Nur im "Getrennt"-Modus)  
Wenn du das Layout auf Getrennt (Grid) oder Mixed stellst, kannst du die Reihenfolge der kleinen Charts ändern:  

* Klicke auf das Verschiebe-Symbol (die kleinen Punkte oben rechts im Mini-Chart).  
* Halte die Maus gedrückt und ziehe das Chart an die gewünschte Position. Die anderen Charts machen automatisch Platz.  

* Die Sensoren in der Sensorliste können nun auch über drag&drop neu sortiert werden (Namen und Farbanpassung ebenfalls mögl.)

🍩 Die Donut-Sidebar  
Möchtest du wissen, wer am meisten Strom verbraucht hat?  

* Aktiviere den Schalter Donut Sidebar. 
* Rechts neben dem Hauptchart erscheint ein Ringdiagramm.  
* Es summiert automatisch alle Werte (ideal für kWh) und zeigt die prozentuale Verteilung an.  

🔴 Schwellwert-Linie (Threshold)  
Willst du sehen, wann dein Balkonkraftwerk über 600W produziert hat?  

* Trage bei Referenzlinie den Wert 600 ein. 
* Eine gestrichelte rote Linie erscheint im Chart bei genau diesem Wert als Orientierungshilfe.  

📉 Vorjahresvergleich
Möchtest du sehen, wie sich dein Stromverbrauch oder Ertrag im Vergleich zum letzten Jahr entwickelt hat?

* Aktiviere den Schalter "Vorjahresvergleich" in der Sidebar.
* Die Daten vom exakt gleichen Zeitraum vor einem Jahr werden als graue Balken oder Linien im Hintergrund eingeblendet.
* Ideal um Trends zu erkennen!

💾 Speichern & Laden  
Lokal speichern: Das Diskette-Symbol 💾 speichert die aktuelle Ansicht im Browser.  

* Global speichern (Code): Über den Kopieren Button kommst du an den Code für die detailed-charts-views.js. Damit kannst du Ansichten "festverdrahten", sodass sie auf Tablet, Handy und PC gleichermaßen verfügbar sind und ein Schloss-Symbol 🔒 erhalten.