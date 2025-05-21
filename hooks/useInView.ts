// hooks/useInView.ts
import { useState, useEffect, useRef, RefObject } from 'react';

export function useInView(
  rootMargin = '0px',
  threshold = 0.1
): { ref: RefObject<HTMLElement>; inView: boolean } {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { root: null, rootMargin, threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  return { ref, inView };
}
