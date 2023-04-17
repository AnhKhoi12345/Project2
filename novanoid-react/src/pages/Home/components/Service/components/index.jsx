import { useRef } from 'react';
import { fadeInScroll } from '../../../../../GlobalFunction';
import './ServiceList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServiceList(item) {
  const service = useRef(null);
  window.addEventListener('scroll', () => {
    fadeInScroll(service);
  });
  return (
    <div ref={service} className="service">
      <FontAwesomeIcon icon={item.icon} className="feat-i" size="lg" />
      <h3>{item.service}</h3>
      <hr />
      <p>{item.description}</p>
    </div>
  );
}
export default ServiceList;
