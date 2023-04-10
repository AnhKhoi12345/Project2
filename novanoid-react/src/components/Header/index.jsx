import './Header.scss';
import Navbar from '../Navbar';
import { useState, useEffect, useCallback, useRef } from 'react';

function Header() {
  const nova = useRef(null);
  const mini = useRef(null);
  const crea = useRef(null);
  const dotst = useRef(null);
  const dotnd = useRef(null);
  const dotrd = useRef(null);
  const dotActive = 'rgba(255, 255, 255)';
  const dotInactive = 'rgba(255, 255, 255,0)';
  const headerBackground = [
    {
      background: 'url(http://demo.rommar.in.ua/novanoid/novanoid-1/img/header-1.jpg) no-repeat top',
    },
    {
      background: 'url(http://demo.rommar.in.ua/novanoid/novanoid-1/img/header-2.jpg) no-repeat top',
    },
    {
      background: 'url(http://demo.rommar.in.ua/novanoid/novanoid-1/img/header-3.jpg) no-repeat top',
    },
    {
      background: 'url(http://demo.rommar.in.ua/novanoid/novanoid-1/img/header-4.jpg) no-repeat top',
    },
    {
      background: 'url(http://demo.rommar.in.ua/novanoid/novanoid-1/img/header-5.jpg) no-repeat top',
    },
  ];

  let slideIndex = useRef(0);
  const [firstSlider, setFirstSlide] = useState(true);
  const titleAutoChange = useCallback(() => {
    if (slideIndex.current === 0) {
      dotOne();
      slideIndex.current++;
      console.log('titleAuto 0');
    } else if (slideIndex.current === 1) {
      dotTwo();
      slideIndex.current++;
      console.log('titleAuto 1');
    } else if (slideIndex.current === 2) {
      dotThree();
      slideIndex.current++;
      console.log('titleAuto 2');
    } else {
      console.log('titleAuto error');
    }

    if (slideIndex.current === 3) {
      slideIndex.current = 0;
    }
    setTimeout(titleAutoChange, 5000);
  }, [slideIndex]);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  useEffect(() => {
    if (firstSlider === true) {
      nova.current.style.display = 'block';
      dotst.current.style.background = dotActive;
      setFirstSlide(false);
      titleAutoChange();
    }
  }, [firstSlider, titleAutoChange]);

  function dotOne() {
    nova.current.style.display = 'block';
    mini.current.style.display = 'none';
    crea.current.style.display = 'none';
    dotst.current.style.background = dotActive;
    dotnd.current.style.background = dotInactive;
    dotrd.current.style.background = dotInactive;
  }

  function dotTwo() {
    nova.current.style.display = 'none';
    mini.current.style.display = 'block';
    crea.current.style.display = 'none';
    dotst.current.style.background = dotInactive;
    dotnd.current.style.background = dotActive;
    dotrd.current.style.background = dotInactive;
  }

  function dotThree() {
    nova.current.style.display = 'none';
    mini.current.style.display = 'none';
    crea.current.style.display = 'block';
    dotst.current.style.background = dotInactive;
    dotnd.current.style.background = dotInactive;
    dotrd.current.style.background = dotActive;
  }
  let pic = getRandomInt(5) + 1;
  console.log('header bg: ' + pic);
  const headerStyle = headerBackground[pic - 1];
  return (
    <header className="header">
      <div className="header-container" id="header-container" style={headerStyle}>
        <Navbar></Navbar>
        <h1 ref={nova} id="novanoid" className="fade">
          NOVANOID
        </h1>
        <h1 ref={mini} id="minimalism" className="fade">
          MINIMALISM
        </h1>
        <h1 ref={crea} id="creative" className="fade">
          CREATIVE
        </h1>
        <span>simple minimal.</span>
        <div>
          <span ref={dotst} id="dot-1" className="dot" onClick={dotOne}></span>
          <span ref={dotnd} id="dot-2" className="dot" onClick={dotTwo}></span>
          <span ref={dotrd} id="dot-3" className="dot" onClick={dotThree}></span>
        </div>
      </div>
    </header>
  );
}
export default Header;
