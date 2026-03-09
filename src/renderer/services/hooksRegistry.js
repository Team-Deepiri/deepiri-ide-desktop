/**
 * Lifecycle hooks for IDE events (beforeSave, afterOpen, etc.).
 * Handlers are called in order; async handlers are awaited.
 */
const hooks = new Map();

export function registerHook(name, handler) {
  if (!hooks.has(name)) hooks.set(name, []);
  hooks.get(name).push(handler);
  return () => {
    const list = hooks.get(name);
    if (list) {
      const i = list.indexOf(handler);
      if (i !== -1) list.splice(i, 1);
    }
  };
}

export function getHooks(name) {
  return hooks.get(name) ?? [];
}

export async function runHooks(name, payload) {
  const list = hooks.get(name);
  if (!list?.length) return;
  for (const fn of list) {
    try {
      await Promise.resolve(fn(payload));
    } catch (e) {
      console.error(`[hooks] ${name} handler error:`, e);
    }
  }
}

export const HOOK_NAMES = {
  BEFORE_SAVE: 'beforeSave',
  AFTER_SAVE: 'afterSave',
  AFTER_OPEN: 'afterOpen',
  BEFORE_CLOSE: 'beforeClose'
};
