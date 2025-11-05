/**
 * Takes an array of items and assigns them to lanes based on start/end dates.
 * @returns an array of arrays containing items.
 */

import { TimelineItem } from "@models/timeline";

export function assignLanes(items: TimelineItem[]): TimelineItem[][] {
  const sortedItems = [...items].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );

  const lanes: { id: number; items: TimelineItem[] }[] = [];

  for (const item of sortedItems) {
    let placed = false;

    for (const lane of lanes) {
      const lastItem = lane.items.at(-1);

      if (!lastItem || new Date(lastItem.end) <= new Date(item.start)) {
        lane.items.push(item);
        placed = true;
        break;
      }
    }

    if (!placed) {
      lanes.push({ id: lanes.length + 1, items: [item] });
    }
  }

  return lanes.map((l) => l.items);
}
