import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';
import {
  faFacebook,
  faGooglePlus,
  faLinkedin,
  faSquareInstagram,
  faTumblr,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const hashtag = '#';
  return (
    <footer>
      <div className="footer-container">
        <a href="index.html">
          <div className="footer-logo">
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/logo-light.png" alt="footer-logo" />
          </div>
        </a>
        <div className="footer-icon-box">
          <a href="https://www.facebook.com/cmctssgvn/">
            <FontAwesomeIcon icon={faFacebook} className="icon" size="lg" />
          </a>
          <a href={hashtag}>
            <FontAwesomeIcon icon={faTwitter} className="icon" size="lg" />
          </a>
          <a href={hashtag}>
            <FontAwesomeIcon icon={faBasketball} className="icon" size="lg" />
          </a>
          <a href={hashtag}>
            <FontAwesomeIcon icon={faLinkedin} className="icon" size="lg" />
          </a>
          <a href={hashtag}>
            <FontAwesomeIcon icon={faGooglePlus} className="icon" size="lg" />
          </a>
          <a href={hashtag}>
            <FontAwesomeIcon icon={faSquareInstagram} className="icon" size="lg" />
          </a>
          <a href={hashtag}>
            <FontAwesomeIcon icon={faTumblr} className="icon" size="lg" />
          </a>
        </div>
        <p>Novanoid © 2014</p>
      </div>
    </footer>
  );
}
export default Footer;
