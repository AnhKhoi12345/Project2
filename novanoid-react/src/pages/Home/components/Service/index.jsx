import './Service.scss';
import { faUser, faGear, faThumbsUp, faEye, faFlask, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fadeInScroll } from '../../../../GlobalFunction';
import { useRef } from 'react';
function Service() {
  const service1 = useRef(null);
  const service2 = useRef(null);
  const service3 = useRef(null);
  const service4 = useRef(null);
  const service5 = useRef(null);
  const service6 = useRef(null);
  const serviceItem = [service1, service2, service3, service4, service5, service6];
  window.addEventListener('scroll', () => {
    for (let i = 0; i < serviceItem.length; i++) {
      fadeInScroll(serviceItem[i]);
    }
  });
  return (
    <div id="service" className="service-container">
      <h2>OUR SERVICES</h2>
      <hr />
      <p>Praesent lacinia sem sed risus consectetur, et volutpat nulla bibendum.</p>
      <div className="service-grid">
        <div ref={service1} className="service service1">
          <FontAwesomeIcon icon={faUser} className="feat-i" size="lg" />
          <h3>GET CLIENT</h3>
          <hr />
          <p>
            Fusce varius pharetra nulla, eget porttitor orci. Nulla facilisi. Quisque pharetra enim nulla, a laoreet
            dolor malesuada ac. Donec at ipsum eu ante pellentesque.
          </p>
        </div>
        <div ref={service2} className="service service2">
          <FontAwesomeIcon icon={faGear} className="feat-i" size="lg" />
          <h3>EXECUTE ORDER</h3>
          <hr />
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus blandit
            dolor sit amet eros aliquam suscipit.
          </p>
        </div>
        <div ref={service3} className="service service3">
          <FontAwesomeIcon icon={faThumbsUp} className="feat-i" size="lg" />
          <h3>ENJOY RESULT</h3>
          <hr />
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus blandit
            dolor sit amet eros aliquam suscipit.
          </p>
        </div>
        <div ref={service4} className="service service4">
          <FontAwesomeIcon icon={faEye} className="feat-i" size="lg" />
          <h3>PIXEL PERFECT</h3>
          <hr />
          <p>
            Fusce varius pharetra nulla, eget porttitor orci. Nulla facilisi. Quisque pharetra enim nulla, a laoreet
            dolor malesuada ac. Donec at ipsum eu ante pellentesque.
          </p>
        </div>
        <div ref={service5} className="service service5">
          <FontAwesomeIcon icon={faFlask} className="feat-i" size="lg" />
          <h3>LABORATORY TESTS</h3>
          <hr />
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus blandit
            dolor sit amet eros aliquam suscipit.
          </p>
        </div>
        <div ref={service6} className="service service6">
          <FontAwesomeIcon icon={faComments} className="feat-i" size="lg" />
          <h3>BIG COMMUNITY</h3>
          <hr />
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus blandit
            dolor sit amet eros aliquam suscipit.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Service;
