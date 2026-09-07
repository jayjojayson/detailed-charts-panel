# Changelog

All notable changes to the **Detailed Charts Panel** are documented in this file.
The format is loosely based on *Keep a Changelog*. Dates use the `YYYY-MM-DD` format.

## v_2.7 – 2026-09-07

### Added
- **Multiple reference lines:** Add any number of reference lines, each with its own value, color and label. Replaces the previous two fixed thresholds; existing configurations are migrated automatically.
- **Manual Y-axis limits:** Optionally set a fixed Y-axis minimum and maximum. Leave empty for automatic scaling.
- **Stacked Area chart type:** New stacked area visualization.
- **Sensor alias:** Give each sensor a custom display name in the card editor.
- **Hide legend / hide highlight button:** New display options.
- **Date format:** Choose between `day.month` and `month/day` for tooltips and axis labels.
- **Live range statistics:** Statistics are recalculated for the currently visible range while zooming and panning.
- **Color palette / shuffle colors:** One click assigns a harmonious, theme-friendly color set to all sensors. Newly added sensors follow the palette automatically.
- **Multi-select add:** Select several sensors via checkboxes in the suggestion list and add them all at once.
- **Add a whole area or device:** Search for an area or device name to add all of its sensors in one step (uses the Home Assistant registry).
- **Peak markers:** Optional min / max / current markers with labels directly on the line.
- **Now line:** Optional vertical marker at the current time.
- **Day/night shading:** Optional subtle background shading for night hours (shown for ranges from about 1 hour up to about 3 weeks).
- **Line smoothing in the card editor:** the line-smoothing control is now available when editing the dashboard card, too.

### Fixed
- **Cubic meters (m³) / cumulative meters:** Sensors with `state_class: total_increasing` or `total` (for example water or gas meters in m³) are now aggregated as consumption (sum of increases) and shown as a sum, just like energy meters, instead of being averaged. This fixes values that were displayed far too low for m³ meters.
- **Multi-select checkboxes:** The selection checkboxes now display their checked state correctly (the global input styling had previously hidden the checkmark).
- **Tooltip & statistics decimals:** values now respect the sensor's configured display precision instead of always showing two decimals.

### Notes
- The new display options (peak markers, now line, day/night shading) are **off by default**, so existing saved views keep their appearance until you enable them.
- The panel remains fully client-side and stores its configuration locally in the browser.
