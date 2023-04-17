import { useEffect, useState } from 'react';

export function isInViewport(element) {
  const rect = element.current.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
export function fadeInScroll(element) {
  const textInFully = 'animation: fadeinfully 2s forwards';
  if (isInViewport(element) === true) {
    element.current.style = textInFully;
  }
}

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
