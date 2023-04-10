import './Team.scss';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Team() {
  const hashtag = '#';
  function teamOverlay() {
    var teamOverlay1 = document.getElementById('team-img-1');
    var teamOverlay2 = document.getElementById('team-img-2');
    var teamOverlay3 = document.getElementById('team-img-3');
    var teamOverlay4 = document.getElementById('team-img-4');
    var teamOverlay5 = document.getElementById('team-img-5');
    var teamOverlay6 = document.getElementById('team-img-6');
    teamOverlay1.addEventListener('mouseover', () => {
      document.getElementById('team-overlay-1').classList.add('display-show');
      document.getElementById('team-overlay-1').classList.add('fade-in-09');
      console.log('team-overlay hover success');
    });
    teamOverlay1.addEventListener('mouseout', () => {
      document.getElementById('team-overlay-1').classList.remove('display-show');
    });

    teamOverlay2.addEventListener('mouseover', () => {
      document.getElementById('team-overlay-2').classList.add('display-show');
      document.getElementById('team-overlay-2').classList.add('fade-in-09');
      console.log('team-overlay hover success');
    });
    teamOverlay2.addEventListener('mouseout', () => {
      document.getElementById('team-overlay-2').classList.remove('display-show');
    });

    teamOverlay3.addEventListener('mouseover', () => {
      document.getElementById('team-overlay-3').classList.add('display-show');
      document.getElementById('team-overlay-3').classList.add('fade-in-09');
      console.log('team-overlay hover success');
    });
    teamOverlay3.addEventListener('mouseout', () => {
      document.getElementById('team-overlay-3').classList.remove('display-show');
    });

    teamOverlay4.addEventListener('mouseover', () => {
      document.getElementById('team-overlay-4').classList.add('display-show');
      document.getElementById('team-overlay-4').classList.add('fade-in-09');
      console.log('team-overlay hover success');
    });
    teamOverlay4.addEventListener('mouseout', () => {
      document.getElementById('team-overlay-4').classList.remove('display-show');
    });

    teamOverlay5.addEventListener('mouseover', () => {
      document.getElementById('team-overlay-5').classList.add('display-show');
      document.getElementById('team-overlay-5').classList.add('fade-in-09');
      console.log('team-overlay hover success');
    });
    teamOverlay5.addEventListener('mouseout', () => {
      document.getElementById('team-overlay-5').classList.remove('display-show');
    });

    teamOverlay6.addEventListener('mouseover', () => {
      document.getElementById('team-overlay-6').classList.add('display-show');
      document.getElementById('team-overlay-6').classList.add('fade-in-09');
      console.log('team-overlay hover success');
    });
    teamOverlay6.addEventListener('mouseout', () => {
      document.getElementById('team-overlay-6').classList.remove('display-show');
    });
  }

  useEffect(() => {
    teamOverlay();
  }, []);

  return (
    <div id="team" className="team-container">
      <h2>OUR TEAM</h2>
      <hr />
      <p>Praesent lacinia sem sed risus consectetur, et volutpat nulla bibendum.</p>
      <ul className="team-flexbox">
        <li className="team-member">
          <div className="team-img" id="team-img-1">
            <div className="team-overlay" id="team-overlay-1">
              <div className="team-icon-box">
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faFacebook} className="facebook-i" size="lg" />
                </a>
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faTwitter} className="twitter-i" size="lg" />
                </a>
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faBasketball} className="basketball-i" size="lg" />
                </a>
              </div>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-1.jpg" alt="team-img" />
          </div>
          <h3>RUSSEL J.SPAN</h3>
          <span>Founder</span>
        </li>
        <li className="team-member">
          <div className="team-img" id="team-img-2">
            <div className="team-overlay" id="team-overlay-2">
              <div className="team-icon-box">
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faFacebook} className="facebook-i" size="lg" />
                </a>
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faTwitter} className="twitter-i" size="lg" />
                </a>
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faBasketball} className="basketball-i" size="lg" />
                </a>
              </div>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-2.jpg" alt="team-img" />
          </div>
          <h3>ETTA R.CARTER</h3>
          <span>Manager</span>
        </li>
        <li className="team-member">
          <div className="team-img" id="team-img-3">
            <div className="team-overlay" id="team-overlay-3">
              <div className="team-icon-box">
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faFacebook} className="facebook-i" size="lg" />
                </a>
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faTwitter} className="twitter-i" size="lg" />
                </a>
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faBasketball} className="basketball-i" size="lg" />
                </a>
              </div>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-3.jpg" alt="team-img" />
          </div>
          <h3>RONALD J.SMITH</h3>
          <span>Coder</span>
        </li>
        <li className="team-member">
          <div className="team-img" id="team-img-4">
            <div className="team-overlay" id="team-overlay-4">
              <div className="team-icon-box">
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faFacebook} className="facebook-i" size="lg" />
                </a>
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faTwitter} className="twitter-i" size="lg" />
                </a>
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faBasketball} className="basketball-i" size="lg" />
                </a>
              </div>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-4.jpg" alt="team-img" />
          </div>
          <h3>PATRICK J.LAMES</h3>
          <span>Developer</span>
        </li>
        <li className="team-member">
          <div className="team-img" id="team-img-5">
            <div className="team-overlay" id="team-overlay-5">
              <div className="team-icon-box">
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faFacebook} className="facebook-i" size="lg" />
                </a>
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faTwitter} className="twitter-i" size="lg" />
                </a>
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faBasketball} className="basketball-i" size="lg" />
                </a>
              </div>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-5.jpg" alt="team-img" />
          </div>
          <h3>TAMARA R.BURNS</h3>
          <span>Coodrdinator</span>
        </li>
        <li className="team-member">
          <div className="team-img" id="team-img-6">
            <div className="team-overlay" id="team-overlay-6">
              <div className="team-icon-box">
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faFacebook} className="facebook-i" size="lg" />
                </a>
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faTwitter} className="twitter-i" size="lg" />
                </a>
                <a href={hashtag}>
                  <FontAwesomeIcon icon={faBasketball} className="basketball-i" size="lg" />
                </a>
              </div>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-6.jpg" alt="team-img" />
          </div>
          <h3>JORGE E.MARR</h3>
          <span>Support</span>
        </li>
      </ul>
    </div>
  );
}
export default Team;
