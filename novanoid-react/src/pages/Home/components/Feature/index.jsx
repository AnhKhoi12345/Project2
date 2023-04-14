import './feature.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faDesktop, faEye, faFont, faCodeFork, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { fadeInScroll } from '../../../../GlobalFunction';
function Feature() {
  const feat1 = useRef(null);
  const feat2 = useRef(null);
  const feat3 = useRef(null);
  const feat4 = useRef(null);
  const feat5 = useRef(null);
  const feat6 = useRef(null);
  const featItem = [feat1, feat2, feat3, feat4, feat5, feat6];
  window.addEventListener('scroll', () => {
    for (let i = 0; i < featItem.length; i++) {
      fadeInScroll(featItem[i]);
    }
  });
  return (
    <div className="feature-container">
      <div ref={feat1} className="feature feat1">
        <FontAwesomeIcon icon={faLeaf} className="feat-i" size="lg" />
        <h3>CLEAN THEMES</h3>
        <div>
          Nulla fringilla urna ac urna volutpat, quis congue massa dignissim. Suspendisse quis orci id dolor vehicula
          porta quis in dolor. Phasellus volutpat metus.
        </div>
      </div>
      <div ref={feat2} className="feature feat2">
        <FontAwesomeIcon icon={faDesktop} className="feat-i" size="lg" />
        <h3>FULLY RESPONSIVE</h3>
        <div>
          Ut magna diam, placerat ac diam et, ornare volutpat libero. Curabitur erat nisl, sollicitudin sit amet rhoncus
          interdum, adipiscing aliquet est.
        </div>
      </div>
      <div ref={feat3} className="feature feat3">
        <FontAwesomeIcon icon={faEye} className="feat-i" size="lg" />
        <h3>PIXELS PERFECT</h3>
        <div>
          Phasellus eget massa quam. Cras mi purus, accumsan id pretium sed, faucibus quis diam. Maecenas aliquet, lacus
          a porttitor porta, sapien.
        </div>
      </div>
      <div ref={feat4} className="feature feat4">
        <FontAwesomeIcon icon={faFont} className="feat-i" size="lg" />
        <h3>GOOGLE FONTS</h3>
        <div>
          Etiam sollicitudin tempus quam, at lacinia urna rutrum sed. Integer quis arcu quis metus sagittis feugiat.
          Nulla facilisi. Integer molestie nec justo in convallis.
        </div>
      </div>
      <div ref={feat5} className="feature feat5">
        <FontAwesomeIcon icon={faCodeFork} className="feat-i" size="lg" />
        <h3>STRUCTURES CODE</h3>
        <div>
          Suspendisse nec lacus id urna mollis convallis. Sed risus massa, sodales sed porta eu, elementum ac magna.
          Phasellus et suscipit ipsum.
        </div>
      </div>
      <div ref={feat6} className="feature feat6">
        <FontAwesomeIcon icon={faLightbulb} className="feat-i" size="lg" />
        <h3>CREATIVE IDEAS</h3>
        <div>
          Aenean luctus, nisl et congue commodo, ligula neque fringilla lorem, quis vehicula est leo et tortor. Cum
          sociis natoque penatibus et magnis dis.
        </div>
      </div>
    </div>
  );
}

export default Feature;
