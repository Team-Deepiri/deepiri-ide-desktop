import { useRef, useEffect } from 'react';

/**
 * Returns the previous value of the given value (from last render).
 */
export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
