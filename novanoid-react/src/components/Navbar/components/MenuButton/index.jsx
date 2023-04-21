import './MenuButton.scss';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRef, useState } from 'react';
function MenuButton() {
  const menuIcon = useRef(null);
  const navListContainer = useRef(null);
  const navListItem = useRef(null);
  const greyButton = 'color: var(--darker-blueish-gray)';
  const whiteNavbar = 'backgroundColor: white';
  function classNames(...args) {
    return args.filter(String).join(' ');
  }
  let [menuShow, setMenuShow] = useState(null);
  console.log('menuShow: ' + menuShow);
  function menuBtn() {
    if (menuShow !== 'show') {
      setMenuShow('show');
      console.log('menuShow: ' + menuShow);
    } else if (menuShow === 'show') {
      setMenuShow('hide');
      console.log('menuShow: ' + menuShow);
    } else {
      console.log('error');
    }
    console.log('menu button clicked');
  }
  const menuList = [
    { id: 1, title: 'HOME', href: '#' },
    { id: 2, title: 'WORK', href: '#work' },
    { id: 3, title: 'SERVICES', href: '#service' },
    { id: 4, title: 'TEAM', href: '#team' },
    { id: 5, title: 'PRICES', href: '#price' },
    { id: 6, title: 'BLOG', href: '#blog' },
    { id: 7, title: 'CONTACTS', href: '#contact' },
  ];
  function navbarScroll() {
    let scrollTop = window.pageYOffset;
    if (scrollTop >= 550) {
      menuIcon.current.style = greyButton;
      navListContainer.current.style = whiteNavbar;
    } else {
      navListContainer.current.style = menuIcon.current.style = '';
    }
  }
  window.addEventListener('scroll', navbarScroll);
  return (
    <>
      <IconButton onClick={menuBtn} id="navbar-toggle">
        <MenuIcon id="menu-icon" ref={menuIcon} />
      </IconButton>
      <div
        className={classNames('nav-list-container', menuShow === 'show' && 'show', menuShow === 'hide' && 'hide')}
        id="nav-list-container"
        ref={navListContainer}
      >
        <ul className="nav-list">
          {menuList.map((item) => {
            return (
              <li className="nav-list-item" key={item.id} ref={navListItem}>
                <a href={item.href}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default MenuButton;
