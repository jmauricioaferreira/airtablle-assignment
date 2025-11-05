import { dateToRem } from "@utils/dateToRem";
import { useMemo } from "react";
import "./TimelineScale.css";

type TimelineScaleProps = {
  baseDate: string;
  totalDays: number;
  scale: number;
  step?: number;
};

export function TimelineScale({
  baseDate,
  totalDays,
  scale,
  step = 7,
}: TimelineScaleProps) {
  const ticks = useMemo(() => {
    const arr = [];
    for (let i = 0; i <= totalDays; i += step) {
      const d = new Date(new Date(baseDate).getTime() + i * 86400000);
      const iso = d.toISOString().split("T")[0];
      arr.push({
        label: d.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        left: dateToRem(iso, baseDate, scale),
      });
    }
    return arr;
  }, [baseDate, totalDays, scale, step]);

  return (
    <div className="timeline-scale">
      {ticks.map((tick, i) => (
        <div key={i} className="timeline-tick" style={{ left: tick.left }}>
          <span>{tick.label}</span>
        </div>
      ))}
    </div>
  );
}
