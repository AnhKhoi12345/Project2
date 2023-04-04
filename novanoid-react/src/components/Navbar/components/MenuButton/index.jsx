import './MenuButton.scss';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function MenuButton() {
  function menuBtn() {
    let navtoggle = document.getElementById('nav-list-container').classList;
    if (navtoggle[1] === 'show') {
      navtoggle.add('hide');
      navtoggle.toggle('show');
      console.log(navtoggle[0] + ' if');
      console.log(navtoggle[1] + ' if');
    } else if (navtoggle[1] !== 'show') {
      navtoggle.remove('hide');
      navtoggle.toggle('show');
      console.log(navtoggle[0] + ' else if');
      console.log(navtoggle[1] + ' else if');
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
