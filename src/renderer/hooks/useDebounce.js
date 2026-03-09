import { useState, useEffect } from 'react';
import { debounce } from '../utils/debounce';

/**
 * Debounced value. Updates after `ms` of no changes.
 */
export function useDebounce(value, ms) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(value), ms);
    return () => clearTimeout(id);
  }, [value, ms]);

  return debouncedValue;
}

/**
 * Debounced callback. Returns a stable function that debounces invocations.
 */
export function useDebouncedCallback(fn, ms) {
  const [debouncedFn] = useState(() => debounce(fn, ms));
  useEffect(() => {
    debouncedFn.cancel?.();
    const d = debounce(fn, ms);
    return () => d.cancel?.();
  }, [fn, ms]);
  return debouncedFn;
}
