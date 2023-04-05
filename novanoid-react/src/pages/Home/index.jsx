import './Home.scss';
import '../../variable.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faDesktop, faEye, faFont, faCodeFork, faLightbulb } from '@fortawesome/free-solid-svg-icons';
function Home() {
  return (
    <div className="main-content">
      <div className="feature-container">
        <div className="feature feat1">
          <FontAwesomeIcon icon={faLeaf} className="feat-i" size="lg" />
          <h3>CLEAN THEMES</h3>
          <div>
            Nulla fringilla urna ac urna volutpat, quis congue massa dignissim. Suspendisse quis orci id dolor vehicula
            porta quis in dolor. Phasellus volutpat metus.
          </div>
        </div>
        <div className="feature feat2">
          <FontAwesomeIcon icon={faDesktop} className="feat-i" size="lg" />
          <h3>FULLY RESPONSIVE</h3>
          <div>
            Ut magna diam, placerat ac diam et, ornare volutpat libero. Curabitur erat nisl, sollicitudin sit amet
            rhoncus interdum, adipiscing aliquet est.
          </div>
        </div>
        <div className="feature feat3">
          <FontAwesomeIcon icon={faEye} className="feat-i" size="lg" />
          <h3>PIXELS PERFECT</h3>
          <div>
            Phasellus eget massa quam. Cras mi purus, accumsan id pretium sed, faucibus quis diam. Maecenas aliquet,
            lacus a porttitor porta, sapien.
          </div>
        </div>
        <div className="feature feat4">
          <FontAwesomeIcon icon={faFont} className="feat-i" size="lg" />
          <h3>GOOGLE FONTS</h3>
          <div>
            Etiam sollicitudin tempus quam, at lacinia urna rutrum sed. Integer quis arcu quis metus sagittis feugiat.
            Nulla facilisi. Integer molestie nec justo in convallis.
          </div>
        </div>
        <div className="feature feat5">
          <FontAwesomeIcon icon={faCodeFork} className="feat-i" size="lg" />
          <h3>STRUCTURES CODE</h3>
          <div>
            Suspendisse nec lacus id urna mollis convallis. Sed risus massa, sodales sed porta eu, elementum ac magna.
            Phasellus et suscipit ipsum.
          </div>
        </div>
        <div className="feature feat6">
          <FontAwesomeIcon icon={faLightbulb} className="feat-i" size="lg" />
          <h3>CREATIVE IDEAS</h3>
          <div>
            Aenean luctus, nisl et congue commodo, ligula neque fringilla lorem, quis vehicula est leo et tortor. Cum
            sociis natoque penatibus et magnis dis.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
