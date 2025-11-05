# 📊 Airtable Timeline Assignment

A compact and zoomable **Timeline component** built with **React + TypeScript**, designed to efficiently visualize items across time in horizontal lanes.

---

## 🚀 Features

- **Compact lane layout** – items that don’t overlap share the same lane
- **Zoom in / Zoom out** – dynamically adjusts spacing and scale
- **Date scale** – synchronized with item positions
- **Smooth scroll** – horizontal scrolling for long timelines
- **Clean UI** – subtle design using CSS variables for consistent theming
- **Performance optimized** – memoized computations for lanes and layout

---

## 🧠 Design Decisions

- Used **absolute positioning** for precise control over each item’s start and end dates
- Implemented a **custom lane assignment algorithm (`assignLanes`)** to maximize space efficiency
- Adopted **rem-based scaling** (`dateToRem`) to support zoom and responsive design
- Applied **CSS variables** (`:root`) for theming consistency and easy color management
- Used **`useMemo`** to prevent unnecessary re-renders when zooming
- Styled purely with **CSS**, avoiding timeline-specific libraries for full control

---

## 🧩 Implementation Overview

**Project Structure**
