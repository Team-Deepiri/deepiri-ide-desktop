/**
 * Date formatting utilities.
 */
export function formatRelative(date) {
  const d = date instanceof Date ? date : new Date(date);
  const now = new Date();
  const diffMs = now - d;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return d.toLocaleDateString();
}

export function formatDateTime(date) {
  const d = date instanceof Date ? date : new Date(date);
  return d.toLocaleString(undefined, {
    dateStyle: 'short',
    timeStyle: 'short'
  });
}
