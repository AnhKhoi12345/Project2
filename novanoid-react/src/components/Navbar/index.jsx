import './Navbar.scss';
import { Link } from 'react-router-dom';
import '../../variable.scss';
import MenuButton from './components/MenuButton';
import { useRef } from 'react';
function Navbar() {
  const navBar = useRef(null);
  const navLogo = useRef(null);
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
  // eslint-disable-next-line no-array-constructor
  const navOption = useRef(new Array());

  function navbarScroll() {
    let scrollTop = window.pageYOffset;
    console.log(navOption.current[1]);
    if (scrollTop >= 50) {
      navBar.current.style = fixedNavbar;
    }
    if (scrollTop >= 550) {
      navBar.current.style.backgroundColor = 'white';
      navLogo.current.style.background =
        'url(http://demo.rommar.in.ua/novanoid/novanoid-1/img/logo-dark.png) no-repeat';

      for (let i = 0; i < menuList.length; i++) {
        navOption.current[i].style.color = 'var(--dark-blueish-gray)';
      }
    } else {
      for (let i = 0; i < menuList.length; i++) {
        navOption.current[i].style.color = 'white';
      }
      navLogo.current.style.background = navBar.current.style.backgroundColor = '';
    }
  }
  //these 2 handle function exist cuz the above funciton somehow broke :hover in scss
  const handleMouseEnter = (e) => {
    console.log('handleMouseEnter');
    e.target.style.color = 'var(--darker-aquamarine)';
  };
  const handleMouseLeave = (e) => {
    console.log('handleMouseLeave');
    let scrollTop = window.pageYOffset;
    if (scrollTop >= 550) {
      e.target.style.color = 'var(--dark-blueish-gray)';
    } else {
      e.target.style.color = '';
    }
  };
  window.addEventListener('scroll', navbarScroll);
  return (
    <nav ref={navBar} className="nav-bar" id="nav-bar">
      <Link ref={navLogo} className="nav-logo" to="/"></Link>
      <MenuButton />
      <ul className="nav-flex">
        {menuList.map((item) => {
          return (
            <li className="nav-flex-item" key={item.id}>
              <a
                ref={(element) => navOption.current.push(element)}
                href={item.href}
                className="nav-option"
                onMouseEnter={(e) => handleMouseEnter(e)}
                onMouseLeave={(e) => handleMouseLeave(e)}
              >
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
