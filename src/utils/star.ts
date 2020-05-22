export default function getStarCount(count?: number): string {
  if (count === undefined) return '';
  if (count > 1000000) return Math.floor(count / 1000000) + 'm';
  if (count > 1000) return Math.floor(count / 1000) + 'k';
  return String(count);
}
