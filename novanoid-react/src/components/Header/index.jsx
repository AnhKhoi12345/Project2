import './Header.scss';
import Navbar from '../Navbar';
import { useState, useRef } from 'react';
import { useLayoutEffect } from 'react';

function Header() {
  const sliderButton = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
  ];
  const titleList = [
    { id: 1, name: 'NOVANOID', active: true },
    { id: 2, name: 'MINIMALISM', active: false },
    { id: 3, name: 'CREATIVE', active: false },
  ];
  const dot = useRef(null);
  const title = useRef(null);
  const headerBackground = [
    {
      background: 'url(http://demo.rommar.in.ua/novanoid/novanoid-1/img/header-1.jpg) no-repeat top',
    },
    {
      background: 'url(http://demo.rommar.in.ua/novanoid/novanoid-1/img/header-2.jpg) no-repeat top',
    },
    {
      background: 'url(http://demo.rommar.in.ua/novanoid/novanoid-1/img/header-3.jpg) no-repeat top',
    },
    {
      background: 'url(http://demo.rommar.in.ua/novanoid/novanoid-1/img/header-4.jpg) no-repeat top',
    },
    {
      background: 'url(http://demo.rommar.in.ua/novanoid/novanoid-1/img/header-5.jpg) no-repeat top',
    },
  ];
  let autoSlider = 1;
  const [sliderList, setSliderList] = useState(sliderButton);
  const [activeTitle, setActiveTitle] = useState(titleList);
  const slider = (id) => {
    const nextSlider = sliderList.map((sliderBtn) => {
      if (sliderBtn.id === id) {
        return {
          ...sliderBtn,
          active: true,
        };
      } else {
        return { ...sliderBtn, active: false };
      }
    });
    setSliderList(nextSlider);

    const nextTitle = activeTitle.map((titles) => {
      if (titles.id === id) {
        return {
          ...titles,
          active: true,
        };
      } else {
        return { ...titles, active: false };
      }
    });
    setActiveTitle(nextTitle);
  };

  const titleAutoChange = () => {
    const nextSlider = sliderList.map((sliderBtn) => {
      if (sliderBtn.id === autoSlider) {
        return {
          ...sliderBtn,
          active: true,
        };
      } else {
        return { ...sliderBtn, active: false };
      }
    });
    setSliderList(nextSlider);

    const nextTitle = activeTitle.map((titles) => {
      if (titles.id === autoSlider) {
        return {
          ...titles,
          active: true,
        };
      } else {
        return { ...titles, active: false };
      }
    });
    setActiveTitle(nextTitle);
    if (autoSlider < 3) {
      autoSlider++;
    } else {
      autoSlider = 1;
      console.log('slider end reach');
    }
    setTimeout(titleAutoChange, 7000);
  };

  useLayoutEffect(() => {
    titleAutoChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const pic = getRandomInt(5) + 1;
  console.log('header bg: ' + pic);
  const [headerStyle] = useState(headerBackground[pic - 1]);

  return (
    <header className="header">
      <div className="header-container" id="header-container" style={headerStyle}>
        <Navbar></Navbar>
        {activeTitle.map((item) => {
          return (
            <h1 ref={title} id="novanoid" className={`${item.active ? 'display-show' : ''} fade`} key={item.id}>
              {item.name}
            </h1>
          );
        })}
        <span>simple minimal.</span>
        <div>
          {sliderList.map((item) => {
            return (
              <span
                ref={dot}
                className={`${item.active ? 'dot-active' : ''} dot`}
                onClick={() => slider(item.id)}
                key={item.id}
              ></span>
            );
          })}
        </div>
      </div>
    </header>
  );
}
export default Header;
