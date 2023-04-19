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
  const iconList = [
    { id: 1, icon: faFacebook, href: 'https://www.facebook.com/cmcgloballtd' },
    { id: 2, icon: faTwitter, href: 'https://twitter.com/CMCGLOBAL_VN' },
    { id: 3, icon: faBasketball, href: hashtag },
    {
      id: 4,
      icon: faLinkedin,
      href: 'https://www.linkedin.com/company/cmc-global-company-limited/?originalSubdomain=vn',
    },
    { id: 5, icon: faGooglePlus, href: hashtag },
    { id: 6, icon: faSquareInstagram, href: hashtag },
    { id: 7, icon: faTumblr, href: hashtag },
  ];
  return (
    <footer>
      <div className="footer-container">
        <a href="index.html">
          <div className="footer-logo">
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/logo-light.png" alt="footer-logo" />
          </div>
        </a>
        <div className="footer-icon-box">
          {iconList.map((item) => {
            return (
              <a href={item.href} key={item.id} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={item.icon} className="icon" size="lg" />
              </a>
            );
          })}
        </div>
        <p>Novanoid © 2014</p>
      </div>
    </footer>
  );
}
export default Footer;
