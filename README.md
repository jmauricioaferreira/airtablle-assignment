📊 Airtable Timeline Assignment

A compact and zoomable Timeline component built with React + TypeScript, designed to efficiently visualize items across time in horizontal lanes.

🚀 Features

Compact lane layout – items that don’t overlap share the same lane

Zoom in / Zoom out – dynamically adjusts spacing and scale

Date scale – synchronized with item positions

Smooth scroll – horizontal scrolling for long timelines

Clean UI – subtle design using CSS variables for consistent theming

Performance optimized – memoized computations for lanes and layout

🧠 Design Decisions

Used absolute positioning for precise control over each item’s start and end dates

Implemented a custom lane assignment algorithm (assignLanes) to maximize space efficiency

Adopted rem-based scaling (dateToRem) to support zoom and responsive design

Applied CSS variables (:root) for theming consistency and easy color management

Used useMemo to prevent unnecessary re-renders when zooming

Styled purely with CSS, avoiding timeline-specific libraries for full control

🧩 Implementation Overview

Structure

src/
├── components/
│ ├── Timeline/
│ │ ├── Timeline.tsx
│ │ ├── Lane.tsx
│ │ ├── TimelineItem.tsx
│ │ ├── TimelineScale.tsx
│ │ └── ZoomControls.tsx
│ └── ...
├── utils/
│ ├── assignLanes.ts
│ ├── dateToRem.ts
│ └── timelineItems.ts
├── models/
│ └── timeline.ts
├── styles/
│ └── global.css
└── index.html

⚙️ How to Run
npm install
npm start

This will open the app automatically in your default browser.
You’ll see a sample dataset rendered from src/utils/timelineItems.ts.

💬 What I Like

The zoom interaction feels smooth and visually synchronized

The lane assignment logic works consistently and is easy to extend

The UI feels balanced, with clean typography and spacing

Code organization is modular and easy to maintain

🔧 What I’d Improve (with more time)

Add drag and drop to adjust item start/end dates directly

Enable inline editing for item titles

Add unit tests for lane assignment and zoom behavior

Group dates by month for a more structured scale

Improve mobile responsiveness and touch zoom

🧪 Testing Approach (if more time)

Snapshot tests for the main Timeline rendering

Unit tests for assignLanes (non-overlapping items reuse lanes)

Visual regression test for zoom and scale alignment

🖌️ Design Inspiration

I took inspiration from:

Airtable’s timeline view

Notion’s project timeline layout

Linear’s clean use of white space and soft shadows

🖼️ Preview

You can include a screenshot in your repo root:

![Timeline Preview](screenshot.png)

💡 Tech Stack

React 18

TypeScript

Parcel (for fast local development)

CSS variables for design consistency

📦 Folder Setup (Starter Instructions Recap)

# install dependencies

npm install

# run locally

npm start

It will start a Parcel dev server and open the project in your browser.

🧾 Summary

✅ Functional compact timeline
✅ Zooming and date scale synchronized
✅ Clean, maintainable structure
✅ No external timeline libraries used
✅ Ready to extend with drag/drop or editing

📍 Author

José Maurício Azevedo Ferreira
Frontend Developer — React | TypeScript | Next.js
GitHub Profile
