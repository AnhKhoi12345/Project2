import './Header.scss';
import Navbar from '../Navbar';
function Header() {
  let slideIndex = 0;
  function dotOne() {
    var nova = document.getElementById('novanoid');
    var mini = document.getElementById('minimalism');
    var crea = document.getElementById('creative');
    nova.classList.add('display-show');
    mini.classList.remove('display-show');
    crea.classList.remove('display-show');
    document.getElementById('dot-1').classList.add('dot-active');
    document.getElementById('dot-2').classList.remove('dot-active');
    document.getElementById('dot-3').classList.remove('dot-active');
    slideIndex = 0;
  }

  function dotTwo() {
    var nova = document.getElementById('novanoid');
    var mini = document.getElementById('minimalism');
    var crea = document.getElementById('creative');
    nova.classList.remove('display-show');
    mini.classList.add('display-show');
    crea.classList.remove('display-show');
    document.getElementById('dot-1').classList.remove('dot-active');
    document.getElementById('dot-2').classList.add('dot-active');
    document.getElementById('dot-3').classList.remove('dot-active');
    slideIndex = 1;
  }

  function dotThree() {
    var nova = document.getElementById('novanoid');
    var mini = document.getElementById('minimalism');
    var crea = document.getElementById('creative');
    nova.classList.remove('display-show');
    mini.classList.remove('display-show');
    crea.classList.add('display-show');
    document.getElementById('dot-1').classList.remove('dot-active');
    document.getElementById('dot-2').classList.remove('dot-active');
    document.getElementById('dot-3').classList.add('dot-active');
    slideIndex = 2;
  }

  function titleAutoChange() {
    if (slideIndex === 0) {
      dotOne();
      slideIndex++;
      console.log('titleAuto 0');
    } else if (slideIndex === 1) {
      dotTwo();
      slideIndex++;
      console.log('titleAuto 1');
    } else if (slideIndex === 2) {
      dotThree();
      slideIndex++;
      console.log('titleAuto 2');
    } else {
      console.log('titleAuto error');
    }

    if (slideIndex === 3) {
      slideIndex = 0;
    }
    setTimeout(titleAutoChange, 5000);
  }
  (function ($) {
    window.onload = (event) => {
      var nova = document.getElementById('novanoid');
      nova.classList.add('display-show');
      document.getElementById('dot-1').classList.add('dot-active');
      titleAutoChange();
    };
  })();
  return (
    <header className="header">
      <div className="header-container" id="header-container">
        <Navbar></Navbar>
        <h1 id="novanoid" className="fade">
          NOVANOID
        </h1>
        <h1 id="minimalism" className="fade">
          MINIMALISM
        </h1>
        <h1 id="creative" className="fade">
          CREATIVE
        </h1>
        <span>simple minimal.</span>
        <div>
          <span id="dot-1" className="dot" onClick={dotOne}></span>
          <span id="dot-2" className="dot" onClick={dotTwo}></span>
          <span id="dot-3" className="dot" onClick={dotThree}></span>
        </div>
      </div>
    </header>
  );
}
export default Header;
