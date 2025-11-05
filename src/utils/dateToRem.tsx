export function dateToRem(
  date: string,
  baseDate: string,
  scale = 0.625
): string {
  const dayMs = 1000 * 60 * 60 * 24;
  const diffDays =
    (new Date(date).getTime() - new Date(baseDate).getTime()) / dayMs;
  return `${diffDays * scale}rem`;
}
