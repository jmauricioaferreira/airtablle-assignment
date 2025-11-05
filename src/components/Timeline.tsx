import { assignLanes } from "@utils/assignLanes";

import { TimelineItem as TimelineItemType } from "@models/timeline";
import timelineItems from "@utils/timelineItems";
import { useMemo, useState } from "react";
import { Lane } from "./Lane";
import "./Timeline.css";
import { TimelineScale } from "./TimelineScale";
import { ZoomControls } from "./ZoomControls";

export function Timeline() {
  const lanes: TimelineItemType[][] = assignLanes(timelineItems);
  const baseDate = "2021-01-01";
  const maxDate = new Date(
    Math.max(...timelineItems.map((item) => new Date(item.end).getTime()))
  );

  const totalDays = Math.ceil(
    (maxDate.getTime() - new Date(baseDate).getTime()) / (1000 * 60 * 60 * 24)
  );

  const [scale, setScale] = useState(0.625);
  const marginRightRem = 5;

  const totalWidthRem = useMemo(() => totalDays * scale, [totalDays, scale]);
  return (
    <>
      <div className="timeline-header">
        <h2>Timeline</h2>

        <ZoomControls
          onZoomIn={() => setScale((prev) => prev + 0.1)}
          onZoomOut={() => setScale((prev) => Math.max(0.2, prev - 0.1))}
        />
      </div>
      <div className="timeline-container">
        <TimelineScale
          baseDate={baseDate}
          totalDays={totalDays}
          scale={scale}
          step={7}
        />
        <div
          className="timeline-lanes"
          style={{ width: `${totalWidthRem + marginRightRem}rem` }}
        >
          {lanes.map((laneItems, index) => (
            <Lane
              key={`lane-${index}`}
              items={laneItems}
              baseDate={baseDate}
              scale={scale}
            />
          ))}
        </div>
      </div>
    </>
  );
}
