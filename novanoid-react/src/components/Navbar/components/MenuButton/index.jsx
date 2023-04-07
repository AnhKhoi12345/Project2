import './MenuButton.scss';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
function MenuButton() {
  const [menuShow, setMenuShow] = useState('hide');

  function menuBtn(evt) {
    let navtoggle = document.getElementById('nav-list-container').classList;
    if (menuShow !== 'show') {
      navtoggle.toggle('show');
      setMenuShow('show');
      navtoggle.remove('hide');

      console.log(menuShow);
    } else if (menuShow === 'show') {
      navtoggle.add('hide');
      navtoggle.toggle('show');
      setMenuShow('hide');

      console.log(menuShow);
    } else {
      console.log('error');
    }
    console.log('menu button clicked');
  }
  return (
    <IconButton onClick={menuBtn}>
      <MenuIcon id="menu-icon" />
    </IconButton>
  );
}

export default MenuButton;
