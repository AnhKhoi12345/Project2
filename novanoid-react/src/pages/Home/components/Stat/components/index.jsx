import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StatList.scss';
import { useRef } from 'react';
import { isInViewport } from '../../../../../GlobalFunction';
function StatList(item) {
  let stat = useRef(null);
  let statNumber = useRef(null);
  window.addEventListener('scroll', () => {
    if (isInViewport(stat) === true) {
      if (item.number === 1642) {
        statNumber.current.classList.add('client-increase');
      } else if (item.number === 2758) {
        statNumber.current.classList.add('project-increase');
      } else if (item.number === 53) {
        statNumber.current.classList.add('country-increase');
      } else if (item.number === 3) {
        statNumber.current.classList.add('office-increase');
      } else {
        console.log('Stat error');
      }
    }
  });

  return (
    <li className="stats" ref={stat}>
      <FontAwesomeIcon icon={item.icon} className="icon" size="2xl" />
      <b>
        <span className="stats-number" id="clients" ref={statNumber}></span>
      </b>
      <br />
      <b>
        <span className="stat-text">{item.name}</span>
      </b>
    </li>
  );
}
export default StatList;
