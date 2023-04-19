import './Navbar.scss';
import { Link } from 'react-router-dom';
import '../../variable.scss';
import MenuButton from './components/MenuButton';
import { useRef } from 'react';
// import { scrollChange } from '../../GlobalFunction';
function Navbar() {
  const navBar = useRef(null);
  const fixedNavbar = 'position: fixed; zIndex: 2;';
  const menuList = [
    { id: 1, title: 'HOME', href: '#' },
    { id: 2, title: 'WORK', href: '#work' },
    { id: 3, title: 'SERVICES', href: '#service' },
    { id: 4, title: 'TEAM', href: '#team' },
    { id: 5, title: 'PRICES', href: '#price' },
    { id: 6, title: 'BLOG', href: '#blog' },
    { id: 7, title: 'CONTACTS', href: '#contact' },
  ];
  const navOption = useRef(null);
  function navbarScroll() {
    let scrollTop = window.pageYOffset;
    if (scrollTop >= 50) {
      navBar.current.style = fixedNavbar;
    }
    if (scrollTop >= 550) {
      navBar.current.classList.add('white-navbar');
    } else {
      navBar.current.classList.remove('white-navbar');
    }
  }
  window.addEventListener('scroll', navbarScroll);
  return (
    <nav ref={navBar} className="nav-bar" id="nav-bar">
      <Link className="nav-logo" to="/"></Link>
      <MenuButton />
      <ul className="nav-flex">
        {menuList.map((item) => {
          return (
            <li className="nav-flex-item" key={item.id}>
              <a ref={navOption} href={item.href} className="nav-option">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
