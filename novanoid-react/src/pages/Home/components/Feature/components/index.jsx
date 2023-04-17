import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FeatList.scss';
import { useRef } from 'react';
import { fadeInScroll } from '../../../../../GlobalFunction';

function FeatList(item) {
  const feat = useRef(null);
  window.addEventListener('scroll', () => {
    fadeInScroll(feat);
  });
  return (
    <div ref={feat} className="feature" key={item.id}>
      <FontAwesomeIcon icon={item.icon} className="feat-i" size="lg" />
      <h3>{item.feature}</h3>
      <div>{item.description}</div>
    </div>
  );
}
export default FeatList;
