/**
 * Simple classnames utility. Merges strings and filters falsy.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ').trim() || undefined;
}
