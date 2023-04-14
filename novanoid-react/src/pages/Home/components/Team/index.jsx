import './Team.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Team() {
  const hashtag = '#';
  let teamList = [
    {
      id: 1,
      name: 'RUSSEL J.SPAN',
      title: 'Founder',
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-1.jpg',
    },
    {
      id: 2,
      name: 'ETTA R.CARTER',
      title: 'Manager',
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-2.jpg',
    },
    {
      id: 3,
      name: 'RONALD J.SMITH',
      title: 'Coder',
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-3.jpg',
    },
    {
      id: 4,
      name: 'PATRICK J.LAMES',
      title: 'Developer',
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-4.jpg',
    },
    {
      id: 5,
      name: 'TAMARA R.BURNS',
      title: 'Coodrdinator',
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-5.jpg',
    },
    {
      id: 6,
      name: 'JORGE E.MARR',
      title: 'Support',
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/member-6.jpg',
    },
  ];
  // useEffect(() => {
  //   teamOverlay.current.style.height = teamImg.current.style.height;
  // }, []);
  return (
    <div id="team" className="team-container">
      <h2>OUR TEAM</h2>
      <hr />
      <p>Praesent lacinia sem sed risus consectetur, et volutpat nulla bibendum.</p>
      <ul className="team-flexbox">
        {teamList.map((item) => {
          return (
            <li className="team-member" key={item.id}>
              <div className="team-img">
                <div className="team-overlay">
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
                <img src={item.img} alt="team-img" />
              </div>
              <h3>{item.name}</h3>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Team;
