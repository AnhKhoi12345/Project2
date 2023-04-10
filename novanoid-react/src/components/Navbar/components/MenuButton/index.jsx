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
  const hashtag = '#';
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
          <li className="nav-list-item nav-list-item1">
            <a href={hashtag}>HOME</a>
          </li>
          <li className="nav-list-item nav-list-item2">
            <a href="#work">WORK</a>
          </li>
          <li className="nav-list-item nav-list-item3">
            <a href="#service">SERVICES</a>
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
    </>
  );
}

export default MenuButton;
