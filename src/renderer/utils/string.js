/**
 * String utilities.
 */
export function truncate(str, maxLen, suffix = '…') {
  if (str == null) return '';
  const s = String(str);
  return s.length <= maxLen ? s : s.slice(0, maxLen - suffix.length) + suffix;
}

export function capitalize(str) {
  if (str == null || !str.length) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function escapeRegex(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function pluralize(count, singular, plural = singular + 's') {
  return count === 1 ? singular : plural;
}
