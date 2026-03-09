/**
 * LocalStorage helpers with safe parse and defaults.
 */
export function getItem(key, defaultValue = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw != null ? raw : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function getJSON(key, defaultValue = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw != null ? JSON.parse(raw) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function setItem(key, value) {
  try {
    localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function removeItem(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}
