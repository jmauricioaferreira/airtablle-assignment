import { TimelineItem as TimelineItemType } from "@models/timeline";
import { dateToRem } from "@utils/dateToRem";
import "./TimelineItem.css";

export type TimelineItemProps = {
  item: TimelineItemType;
  baseDate: string;
  scale: number;
};

export const TimelineItem = ({ item, baseDate, scale }: TimelineItemProps) => {
  const left = dateToRem(item.start, baseDate, scale);
  const widthValue =
    ((new Date(item.end).getTime() - new Date(item.start).getTime()) /
      (1000 * 60 * 60 * 24)) *
    scale;
  const width = `${Math.max(widthValue, 0.75)}rem`;
  return (
    <div className="timeline-item" style={{ left, width }} title={item.name}>
      {item.name}
    </div>
  );
};
