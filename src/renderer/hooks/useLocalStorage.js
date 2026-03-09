import { useState, useCallback } from 'react';
import { getJSON, setItem } from '../utils/storage';

/**
 * Persist state in localStorage. Syncs with other tabs if storage event fires.
 */
export function useLocalStorage(key, initialValue) {
  const [stored, setStored] = useState(() => getJSON(key, initialValue));

  const setValue = useCallback(
    (value) => {
      const toStore = value instanceof Function ? value(stored) : value;
      setStored(toStore);
      setItem(key, toStore);
    },
    [key, stored]
  );

  return [stored, setValue];
}
