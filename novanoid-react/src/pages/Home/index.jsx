import './Home.scss';
import '../../variable.scss';
import Feature from './components/Feature';
import Work from './components/Works';
import Service from './components/Service';
import Parallax from './components/Parallax';
import Team from './components/Team';
import Stat from './components/Stat';
import Buy from './components/Buy';
import Blog from './components/Blog';
import Contact from './components/Contact';
function Home() {
  return (
    <div className="main-content">
      <Feature></Feature>
      <Work></Work>
      <Service></Service>
      <Parallax></Parallax>
      <Team></Team>
      <hr className="dashed-hr" />
      <Stat></Stat>
      <Buy></Buy>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
}

export default Home;
