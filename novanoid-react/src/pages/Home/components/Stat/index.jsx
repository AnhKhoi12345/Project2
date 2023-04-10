import { faBriefcase, faBuilding, faEarthAmericas, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Stat.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Stat() {
  return (
    <ul className="stats-container">
      <li className="stats">
        <FontAwesomeIcon icon={faUsers} className="icon" size="lg" />
        <b>
          <span className="stats-number" id="clients"></span>
        </b>
        <br />
        <b>
          <span className="stat-text">CLIENTS</span>
        </b>
      </li>
      <li className="stats">
        <FontAwesomeIcon icon={faBriefcase} className="icon" size="lg" />
        <b>
          <span className="stats-number" id="projects"></span>
        </b>
        <br />
        <b>
          <span className="stat-text">PROJECTS</span>
        </b>
      </li>
      <li className="stats">
        <FontAwesomeIcon icon={faEarthAmericas} className="icon" size="lg" />
        <b>
          <span className="stats-number" id="countries"></span>
        </b>
        <br />
        <b>
          <span className="stat-text">COUNTRIES</span>
        </b>
      </li>
      <li className="stats">
        <FontAwesomeIcon icon={faBuilding} className="icon" size="lg" />
        <b>
          <span className="stats-number" id="offices"></span>
        </b>
        <br />
        <b>
          <span className="stat-text">OFFICES</span>
        </b>
      </li>
    </ul>
  );
}
export default Stat;
