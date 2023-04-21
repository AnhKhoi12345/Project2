import { useRef } from 'react';
import './Loading.scss';

function Loading() {
  const loading = useRef(null);
  setTimeout(() => {
    loading.current.style = 'animation: fadeoutfully 0.5s forwards';
  }, 2500);
  setTimeout(() => {
    loading.current.style = 'display: none';
  }, 3000);
  return (
    <div className="loading" ref={loading}>
      <div className="loading-gif"></div>
    </div>
  );
}
export default Loading;
