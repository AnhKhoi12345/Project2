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
  const textInFully = 'animation: fadeinfully 1.5s forwards';
  if (isInViewport(element) === true) {
    element.current.style = textInFully;
  }
}
