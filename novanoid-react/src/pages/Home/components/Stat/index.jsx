import { faBriefcase, faBuilding, faEarthAmericas, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Stat.scss';
import StatList from './components';
function Stat() {
  const stats = [
    { id: 1, name: 'CLIENTS', icon: faUsers, number: 1642 },
    { id: 2, name: 'PROJECTS', icon: faBriefcase, number: 2758 },
    { id: 3, name: 'COUNTRIES', icon: faEarthAmericas, number: 53 },
    { id: 4, name: 'OFFICES', icon: faBuilding, number: 3 },
  ];
  return (
    <ul className="stats-container">
      {stats.map((item) => {
        return <StatList {...item} key={item.id}></StatList>;
      })}
    </ul>
  );
}
export default Stat;
