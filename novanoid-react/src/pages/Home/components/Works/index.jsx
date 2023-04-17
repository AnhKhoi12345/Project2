import './work.scss';
import { useState } from 'react';
import '../../../../variable.scss';
import WorkImage from './components/WorkImage';
function Work() {
  let workImage = [
    {
      id: 1,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-1.jpg',
      category: ' all , travel , nature ',
      filter: false,
    },
    {
      id: 2,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-2.jpg',
      category: ' all , road , mountains ',
      filter: false,
    },
    {
      id: 3,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-3.jpg',
      category: ' all , travel , mountains ',
      filter: false,
    },
    {
      id: 4,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-4.jpg',
      category: ' all , road, nature ',
      filter: false,
    },
    {
      id: 5,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-5.jpg',
      category: ' all , travel , mountains ',
      filter: false,
    },
    {
      id: 6,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-6.jpg',
      category: ' all , mountains , nature ',
      filter: false,
    },
    {
      id: 7,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-7.jpg',
      category: ' all , road, nature ',
      filter: false,
    },
    {
      id: 8,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-8.jpg',
      category: ' all , mountains , nature ',
      filter: false,
    },
    {
      id: 9,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-9.jpg',
      category: ' all , travel , road ',
      filter: false,
    },
  ];
  let buttonList = [
    { id: 1, name: 'all', active: true },
    { id: 2, name: 'travel', active: false },
    { id: 3, name: 'road', active: false },
    { id: 4, name: 'mountains', active: false },
    { id: 5, name: 'nature', active: false },
  ];
  const [workImgs, setWorkImg] = useState(workImage);
  const [buttonActive, setButtonActive] = useState(buttonList);
  const filterButton = (filter) => {
    const nextWorkImage = workImgs.map((workImg) => {
      if (workImg.category.includes(filter) === true) {
        return {
          ...workImg,
          filter: false,
        };
      } else {
        return { ...workImg, filter: true };
      }
    });
    setWorkImg(nextWorkImage);

    const nextWorkButton = buttonActive.map((btnList) => {
      if (btnList.name.includes(filter)) {
        return {
          ...btnList,
          active: true,
        };
      } else {
        return { ...btnList, active: false };
      }
    });
    setButtonActive(nextWorkButton);
  };
  return (
    <div id="work" className="work-container">
      <h2>OUR WORKS</h2>
      <hr />
      <p>Praesent lacinia sem sed risus consectetur, et volutpat nulla bibendum.</p>
      <ul className="work-category">
        {buttonActive.map((item) => {
          return (
            <li key={item.id}>
              <button className={`${item.active ? 'work-button-active' : ''}`} onClick={() => filterButton(item.name)}>
                {item.name.toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
      <ul className="work-collection">
        {workImgs.map((item) => {
          return <WorkImage {...item} key={item.id} />;
        })}
      </ul>
    </div>
  );
}
export default Work;
