import { getJSON, setItem } from '../utils/storage';
import { STORAGE_KEYS } from '../constants/storageKeys';

const DEFAULT_SIDEBAR_WIDTH = 300;
const DEFAULT_PANEL_HEIGHT = 280;
const MIN_SIDEBAR = 120;
const MAX_SIDEBAR = 600;
const MIN_PANEL = 120;
const MAX_PANEL = 600;

export const layoutService = {
  getSidebarWidth() {
    const w = getJSON(STORAGE_KEYS.SIDEBAR_WIDTH);
    return typeof w === 'number' && w >= MIN_SIDEBAR && w <= MAX_SIDEBAR ? w : DEFAULT_SIDEBAR_WIDTH;
  },

  setSidebarWidth(width) {
    const w = Math.max(MIN_SIDEBAR, Math.min(MAX_SIDEBAR, width));
    setItem(STORAGE_KEYS.SIDEBAR_WIDTH, w);
    return w;
  },

  getSidebarCollapsed() {
    return getJSON(STORAGE_KEYS.SIDEBAR_COLLAPSED, false);
  },

  setSidebarCollapsed(collapsed) {
    setItem(STORAGE_KEYS.SIDEBAR_COLLAPSED, Boolean(collapsed));
  },

  getPanelHeight() {
    const h = getJSON(STORAGE_KEYS.PANEL_HEIGHT);
    return typeof h === 'number' && h >= MIN_PANEL && h <= MAX_PANEL ? h : DEFAULT_PANEL_HEIGHT;
  },

  setPanelHeight(height) {
    const h = Math.max(MIN_PANEL, Math.min(MAX_PANEL, height));
    setItem(STORAGE_KEYS.PANEL_HEIGHT, h);
    return h;
  }
};
