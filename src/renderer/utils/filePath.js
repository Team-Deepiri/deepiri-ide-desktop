/**
 * File path utilities (cross-platform).
 */
export function basename(path) {
  if (path == null) return '';
  const normalized = path.replace(/\\/g, '/');
  const parts = normalized.split('/').filter(Boolean);
  return parts.pop() || path;
}

export function dirname(path) {
  if (path == null) return '';
  const normalized = path.replace(/\\/g, '/');
  const parts = normalized.split('/').filter(Boolean);
  parts.pop();
  return parts.join('/') || '';
}

export function extname(path) {
  if (path == null) return '';
  const name = basename(path);
  const i = name.lastIndexOf('.');
  return i > 0 ? name.slice(i) : '';
}

export function join(...segments) {
  const normalized = segments
    .filter(Boolean)
    .map((s) => String(s).replace(/\\/g, '/'))
    .join('/')
    .replace(/\/+/g, '/');
  return normalized || '';
}
