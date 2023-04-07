import './Service.scss';
import { faUser, faGear, faThumbsUp, faEye, faFlask, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Service() {
  return (
    <div id="service" className="service-container">
      <h2>OUR SERVICES</h2>
      <hr />
      <p>Praesent lacinia sem sed risus consectetur, et volutpat nulla bibendum.</p>
      <div className="service-grid">
        <div className="service service1">
          <FontAwesomeIcon icon={faUser} className="feat-i" size="lg" />
          <h3>GET CLIENT</h3>
          <hr />
          <p>
            Fusce varius pharetra nulla, eget porttitor orci. Nulla facilisi. Quisque pharetra enim nulla, a laoreet
            dolor malesuada ac. Donec at ipsum eu ante pellentesque.
          </p>
        </div>
        <div className="service service2">
          <FontAwesomeIcon icon={faGear} className="feat-i" size="lg" />
          <h3>EXECUTE ORDER</h3>
          <hr />
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus blandit
            dolor sit amet eros aliquam suscipit.
          </p>
        </div>
        <div className="service service3">
          <FontAwesomeIcon icon={faThumbsUp} className="feat-i" size="lg" />
          <h3>ENJOY RESULT</h3>
          <hr />
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus blandit
            dolor sit amet eros aliquam suscipit.
          </p>
        </div>
        <div className="service service4">
          <FontAwesomeIcon icon={faEye} className="feat-i" size="lg" />
          <h3>PIXEL PERFECT</h3>
          <hr />
          <p>
            Fusce varius pharetra nulla, eget porttitor orci. Nulla facilisi. Quisque pharetra enim nulla, a laoreet
            dolor malesuada ac. Donec at ipsum eu ante pellentesque.
          </p>
        </div>
        <div className="service service5">
          <FontAwesomeIcon icon={faFlask} className="feat-i" size="lg" />
          <h3>LABORATORY TESTS</h3>
          <hr />
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus blandit
            dolor sit amet eros aliquam suscipit.
          </p>
        </div>
        <div className="service service6">
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
