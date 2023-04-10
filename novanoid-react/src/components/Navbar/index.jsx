import './Navbar.scss';
import { Link } from 'react-router-dom';
import '../../variable.scss';
import MenuButton from './components/MenuButton';
import { useRef } from 'react';
function Navbar() {
  const navBar = useRef(null);
  function navbarScroll() {
    let scrollTop = window.pageYOffset;
    // console.log(scrollTop);
    let elementBody = document.getElementById('body');
    let elementNavBtn = document.getElementById('menu-icon');
    let elementListContainer = document.getElementById('nav-list-container');
    let navFlexItem = document.getElementsByClassName('nav-flex-item');

    if (scrollTop >= 147) {
      navBar.current.classList.add('fix-navbar');
      elementBody.classList.add('noPadBody');
      // console.log('navbar stick Activated');
    } else {
      navBar.current.classList.remove('fix-navbar');
      elementBody.classList.remove('noPadBody');
      // console.log('navbar stick Deactivated');
    }

    if (scrollTop >= 550) {
      for (let i = 0; i < navFlexItem.length; i++) {
        navFlexItem[i].classList.add('navBtnGray');
      }
      elementNavBtn.classList.add('navBtnGray');
      navBar.current.classList.add('white-navbar');
      elementListContainer.classList.add('white-navbar');
    } else {
      for (let i = 0; i < navFlexItem.length; i++) {
        navFlexItem[i].classList.remove('navBtnGray');
      }
      elementNavBtn.classList.remove('navBtnGray');
      navBar.current.classList.remove('white-navbar');
      elementListContainer.classList.remove('white-navbar');
    }
  }
  window.addEventListener('scroll', navbarScroll);
  return (
    <nav ref={navBar} className="nav-bar" id="nav-bar">
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
    </nav>
  );
}

export default Navbar;
