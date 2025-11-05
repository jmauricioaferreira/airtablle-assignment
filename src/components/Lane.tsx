import { TimelineItem as TimelineItemType } from "@models/timeline";
import "./Lane.css";
import { TimelineItem } from "./TimelineItem";

type LaneProps = {
  items: TimelineItemType[];
  baseDate: string;
  scale: number;
};

export function Lane({ items, baseDate, scale }: LaneProps) {
  return (
    <div className="lane">
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          item={item}
          baseDate={baseDate}
          scale={scale}
        />
      ))}
    </div>
  );
}
