import './Home.scss';
import '../../variable.scss';
import Feature from './components/Feature';
import Work from './components/Works';
function Home() {
  return (
    <div className="main-content">
      <Feature></Feature>
      <Work></Work>
    </div>
  );
}

export default Home;
