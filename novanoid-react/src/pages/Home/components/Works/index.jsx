import './work.scss';
import { useEffect, useRef, useState } from 'react';
import '../../../../variable.scss';
import WorkImage from './components/WorkImage';
function Work() {
  let btnAll = useRef(null);
  let btnTravel = useRef(null);
  let btnRoad = useRef(null);
  let btnMountains = useRef(null);
  let btnNature = useRef(null);
  let workImage = [
    {
      id: 1,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-1.jpg',
      category: ' all , travel , nature ',
      filter: true,
    },
    {
      id: 2,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-2.jpg',
      category: ' all , road , mountains ',
      filter: true,
    },
    {
      id: 3,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-3.jpg',
      category: ' all , travel , mountains ',
      filter: true,
    },
    {
      id: 4,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-4.jpg',
      category: ' all , road, nature ',
      filter: true,
    },
    {
      id: 5,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-5.jpg',
      category: ' all , travel , mountains ',
      filter: true,
    },
    {
      id: 6,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-6.jpg',
      category: ' all , mountains , nature ',
      filter: true,
    },
    {
      id: 7,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-7.jpg',
      category: ' all , road, nature ',
      filter: true,
    },
    {
      id: 8,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-8.jpg',
      category: ' all , mountains , nature ',
      filter: true,
    },
    {
      id: 9,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-9.jpg',
      category: ' all , travel , road ',
      filter: true,
    },
  ];
  const activeButton = 'color:white; background: var(--darker-aquamarine)';
  const inactiveButton = '';
  const [workImgs, setWorkImg] = useState(workImage);
  function allBtn() {
    btnAll.current.style = activeButton;
    btnTravel.current.style = inactiveButton;
    btnRoad.current.style = inactiveButton;
    btnMountains.current.style = inactiveButton;
    btnNature.current.style = inactiveButton;
    const nextWorkImage = workImgs.map((workImg) => {
      if (workImg.category.includes('all') === true) {
        return {
          ...workImg,
          filter: false,
        };
      } else {
        return { ...workImg, filter: true };
      }
    });
    setWorkImg(nextWorkImage);
  }

  function travelBtn() {
    btnTravel.current.style = activeButton;
    btnAll.current.style = inactiveButton;
    btnRoad.current.style = inactiveButton;
    btnMountains.current.style = inactiveButton;
    btnNature.current.style = inactiveButton;
    const nextWorkImage = workImgs.map((workImg) => {
      if (workImg.category.includes('travel') === true) {
        return {
          ...workImg,
          filter: false,
        };
      } else {
        return { ...workImg, filter: true };
      }
    });
    setWorkImg(nextWorkImage);
  }
  function roadlBtn() {
    btnRoad.current.style = activeButton;
    btnAll.current.style = inactiveButton;
    btnTravel.current.style = inactiveButton;
    btnMountains.current.style = inactiveButton;
    btnNature.current.style = inactiveButton;
    const nextWorkImage = workImgs.map((workImg) => {
      if (workImg.category.includes('road') === true) {
        return {
          ...workImg,
          filter: false,
        };
      } else {
        return { ...workImg, filter: true };
      }
    });
    setWorkImg(nextWorkImage);
  }

  function mountainsBtn() {
    btnMountains.current.style = activeButton;
    btnAll.current.style = inactiveButton;
    btnTravel.current.style = inactiveButton;
    btnRoad.current.style = inactiveButton;
    btnNature.current.style = inactiveButton;
    const nextWorkImage = workImgs.map((workImg) => {
      if (workImg.category.includes('mountains') === true) {
        return {
          ...workImg,
          filter: false,
        };
      } else {
        return { ...workImg, filter: true };
      }
    });
    setWorkImg(nextWorkImage);
  }
  function natureBtn() {
    btnNature.current.style = activeButton;
    btnAll.current.style = inactiveButton;
    btnTravel.current.style = inactiveButton;
    btnRoad.current.style = inactiveButton;
    btnMountains.current.style = inactiveButton;
    const nextWorkImage = workImgs.map((workImg) => {
      if (workImg.category.includes('nature') === true) {
        return {
          ...workImg,
          filter: false,
        };
      } else {
        return { ...workImg, filter: true };
      }
    });
    setWorkImg(nextWorkImage);
  }

  useEffect(() => {
    allBtn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="work" className="work-container">
      <h2>OUR WORKS</h2>
      <hr />
      <p>Praesent lacinia sem sed risus consectetur, et volutpat nulla bibendum.</p>
      <ul className="work-category">
        <li>
          <button ref={btnAll} id="btn-all" className="btn-category-all" onClick={allBtn}>
            ALL
          </button>
        </li>
        <li>
          <button ref={btnTravel} id="btn-travel" className="btn-category-travel" onClick={travelBtn}>
            TRAVEL
          </button>
        </li>
        <li>
          <button ref={btnRoad} id="btn-road" className="btn-category-road" onClick={roadlBtn}>
            ROAD
          </button>
        </li>
        <li>
          <button ref={btnMountains} id="btn-mountains" className="btn-category-mountains" onClick={mountainsBtn}>
            MOUNTAINS
          </button>
        </li>
        <li>
          <button ref={btnNature} id="btn-nature" className="btn-category-nature" onClick={natureBtn}>
            NATURE
          </button>
        </li>
      </ul>
      <ul className="work-collection">
        {workImgs.map((item) => {
          return <WorkImage img={item.img} filter={item.filter} id={item.id} key={item.id} />;
        })}
      </ul>
    </div>
  );
}
export default Work;
