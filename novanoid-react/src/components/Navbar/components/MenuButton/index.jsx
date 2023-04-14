import './MenuButton.scss';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
function MenuButton() {
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
  return (
    <>
      <IconButton onClick={menuBtn}>
        <MenuIcon id="menu-icon" />
      </IconButton>
      <div
        className={classNames('nav-list-container', menuShow === 'show' && 'show', menuShow === 'hide' && 'hide')}
        id="nav-list-container"
      >
        <ul className="nav-list">
          {menuList.map((item) => {
            return (
              <li className="nav-list-item" key={item.id}>
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
