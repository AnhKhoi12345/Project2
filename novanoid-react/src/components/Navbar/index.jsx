import './Navbar.scss';
import { Link } from 'react-router-dom';
import '../../variable.scss';
import MenuButton from './components/MenuButton';
function Navbar() {
  // (function ($) {
  //   window.onload = (event) => {
  window.onscroll = function () {
    let scrollTop = window.pageYOffset;
    console.log(scrollTop);
    let elementNavbar = document.getElementById('nav-bar');
    let elementBody = document.getElementById('body');
    let elementNavBtn = document.getElementById('menu-icon');
    let elementListContainer = document.getElementById('nav-list-container');
    let navFlexItem = document.getElementsByClassName('nav-flex-item');

    if (scrollTop >= 147) {
      elementNavbar.classList.add('fix-navbar');
      elementBody.classList.add('noPadBody');
      console.log('navbar stick Activated');
    } else {
      elementNavbar.classList.remove('fix-navbar');
      elementBody.classList.remove('noPadBody');
      console.log('navbar stick Deactivated');
    }

    if (scrollTop >= 550) {
      for (var i = 0; i < navFlexItem.length; i++) {
        navFlexItem[i].classList.add('navBtnGray');
      }
      elementNavBtn.classList.add('navBtnGray');
      elementNavbar.classList.add('white-navbar');
      elementListContainer.classList.add('white-navbar');
    } else {
      for (var i = 0; i < navFlexItem.length; i++) {
        navFlexItem[i].classList.remove('navBtnGray');
      }
      elementNavBtn.classList.remove('navBtnGray');
      elementNavbar.classList.remove('white-navbar');
      elementListContainer.classList.remove('white-navbar');
    }
  };
  // };
  // })();

  return (
    <nav className="nav-bar" id="nav-bar">
      <Link className="nav-logo" to="/"></Link>
      <MenuButton />
      {/* <ul className="nav-flex">
        <li className="nav-flex-item1">
          <Link className="nav-flex-item" to="/">
            HOME
          </Link>
        </li>
        <li className="nav-flex-item2">
          <a className="nav-flex-item" href="#work">
            WORK
          </a>
        </li>
        <li className="nav-flex-item3">
          <a className="nav-flex-item" href="#service">
            SERVICES
          </a>
        </li>
        <li className="nav-flex-item4">
          <a className="nav-flex-item" href="#team">
            TEAM
          </a>
        </li>
        <li className="nav-flex-item5">
          <a className="nav-flex-item" href="#price">
            PRICES
          </a>
        </li>
        <li className="nav-flex-item6">
          <a className="nav-flex-item" href="#blog">
            BLOG
          </a>
        </li>
        <li className="nav-flex-item7">
          <a className="nav-flex-item" href="#contact">
            CONTACTS
          </a>
        </li>
      </ul> */}
      <div className="nav-list-container" id="nav-list-container">
        <ul className="nav-list">
          <li className="nav-list-item nav-list-item1">
            <Link href="/">HOME</Link>
          </li>
          <li className="nav-list-item nav-list-item2">
            <a href="#work">WORK</a>
          </li>
          <li className="nav-list-item nav-list-item3">
            <a href="#servie">SERVICES</a>
          </li>
          <li className="nav-list-item nav-list-item4">
            <a href="#team">TEAM</a>
          </li>
          <li className="nav-list-item nav-list-item5">
            <a href="#price">PRICES</a>
          </li>
          <li className="nav-list-item nav-list-item6">
            <a href="#blog">BLOG</a>
          </li>
          <li className="nav-list-item nav-list-item7">
            <a href="#contact">CONTACTS</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
