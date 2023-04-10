import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Parallax.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Parallax() {
  const hashtag = '#';
  return (
    <div className="parallax-bg">
      <h1>
        WE <FontAwesomeIcon icon={faHeart} className="heart-i" size="lg" /> PARALLAX BACKGROUNDS.
      </h1>
      <p>
        Ut consectetur eros vitae mi imperdiet, nec ullamcorper risus dignissim. Fusce ac
        <br />
        consectetur ligula, ut luctus tellus. Nulla in orci pharetra, placerat magna nec, pretium.
      </p>
      <a href={hashtag}>
        <button id="parallax-button" type="button">
          <b>
            <FontAwesomeIcon icon={faEye} className="eye-i" size="lg" /> READ MORE
          </b>
        </button>
      </a>
    </div>
  );
}
export default Parallax;
