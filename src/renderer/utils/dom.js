/**
 * DOM utilities.
 */
export function getScrollParent(el) {
  if (!el) return null;
  let node = el.parentElement;
  while (node) {
    const { overflowY } = getComputedStyle(node);
    if (/(auto|scroll|overlay)/.test(overflowY)) return node;
    node = node.parentElement;
  }
  return document.documentElement;
}

export function isDescendant(parent, child) {
  if (!parent || !child) return false;
  return parent === child || parent.contains(child);
}

export function getViewportRect() {
  return {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  };
}
