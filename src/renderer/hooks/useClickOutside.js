import { useEffect, useRef } from 'react';

/**
 * Invoke callback when a click happens outside the ref element.
 */
export function useClickOutside(ref, onClickOutside) {
  const handlerRef = useRef(onClickOutside);
  handlerRef.current = onClickOutside;

  useEffect(() => {
    const handle = (e) => {
      if (ref.current && !ref.current.contains(e.target)) handlerRef.current(e);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [ref]);
}
