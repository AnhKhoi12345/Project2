import './work.scss';
import { useEffect, useRef } from 'react';
import '../../../../variable.scss';
import WorkImage from './components/WorkImage';
function Work() {
  // let work1 = useRef(null);
  // let work2 = useRef(null);
  // let work3 = useRef(null);
  // let work4 = useRef(null);
  // let work5 = useRef(null);
  // let work6 = useRef(null);
  // let work7 = useRef(null);
  // let work8 = useRef(null);
  // let work9 = useRef(null);
  // const workArray = [work1, work2, work3, work4, work5, work6, work7, work8, work9];
  let btnAll = useRef(null);
  let btnTravel = useRef(null);
  let btnRoad = useRef(null);
  let btnMountains = useRef(null);
  let btnNature = useRef(null);
  let category = '';
  // let filter = useRef(null);
  let workImage = [
    {
      id: 1,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-1.jpg',
      // all: true,
      // travel: true,
      // road: false,
      // mountains: false,
      // nature: true,
      category: 'all, travel, nature',
      filter: true,
    },
    {
      id: 2,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-2.jpg',
      // all: true,
      // travel: false,
      // road: true,
      // mountains: true,
      // nature: false,
      category: 'all, road, mountains',
    },
    {
      id: 3,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-3.jpg',
      // all: true,
      // travel: true,
      // road: false,
      // mountains: true,
      // nature: false,
      category: 'all, travel,mountains',
    },
    {
      id: 4,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-4.jpg',
      // all: true,
      // travel: false,
      // road: true,
      // mountains: false,
      // nature: true,
      category: 'all, road, nature',
    },
    {
      id: 5,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-5.jpg',
      // all: true,
      // travel: true,
      // road: false,
      // mountains: true,
      // nature: false,
      category: 'all, travel, mountains',
    },
    {
      id: 6,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-6.jpg',
      // all: true,
      // travel: false,
      // road: false,
      // mountains: true,
      // nature: true,
      category: 'all, mountains, nature',
    },
    {
      id: 7,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-7.jpg',
      // all: true,
      // travel: false,
      // road: true,
      // mountains: false,
      // nature: true,
      category: 'all, road, nature',
    },
    {
      id: 8,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-8.jpg',
      // all: true,
      // travel: false,
      // road: false,
      // mountains: true,
      // nature: true,
      category: 'all, mountains, nature',
    },
    {
      id: 9,
      img: 'http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-9.jpg',
      // all: true,
      // travel: true,
      // road: true,
      // mountains: false,
      // nature: false,
      category: 'all, travel, road',
    },
  ];
  // const workUnfilter = ' animation: fade 0.5s  forwards, zoomin 0.5s  forwards';
  // const workFilter = ' animation: fadeout 0.5s  forwards, zoomout  0.5s  forwards';
  const activeButton = 'color:white; background: var(--darker-aquamarine)';
  const inactiveButton = '';
  function allBtn() {
    // work1.current.style = workUnfilter;
    // work2.current.style = workUnfilter;
    // work3.current.style = workUnfilter;
    // work4.current.style = workUnfilter;
    // work5.current.style = workUnfilter;
    // work6.current.style = workUnfilter;
    // work7.current.style = workUnfilter;
    // work8.current.style = workUnfilter;
    // work9.current.style = workUnfilter;

    btnAll.current.style = activeButton;
    btnTravel.current.style = inactiveButton;
    btnRoad.current.style = inactiveButton;
    btnMountains.current.style = inactiveButton;
    btnNature.current.style = inactiveButton;

    // category = 'all';
    workImage[0].filter = false;
    console.log(workImage[0].filter);
  }

  function travelBtn() {
    // work1.current.style = workUnfilter;
    // work2.current.style = workFilter;
    // work3.current.style = workUnfilter;
    // work4.current.style = workFilter;
    // work5.current.style = workUnfilter;
    // work6.current.style = workFilter;
    // work7.current.style = workFilter;
    // work8.current.style = workFilter;
    // work9.current.style = workUnfilter;

    btnTravel.current.style = activeButton;
    btnAll.current.style = inactiveButton;

    btnRoad.current.style = inactiveButton;
    btnMountains.current.style = inactiveButton;
    btnNature.current.style = inactiveButton;
    // category = 'travel';
    // console.log(category);
  }
  function roadlBtn() {
    // work1.current.style = workFilter;
    // work2.current.style = workUnfilter;
    // work3.current.style = workFilter;
    // work4.current.style = workUnfilter;
    // work5.current.style = workFilter;
    // work6.current.style = workFilter;
    // work7.current.style = workUnfilter;
    // work8.current.style = workFilter;
    // work9.current.style = workUnfilter;

    btnRoad.current.style = activeButton;
    btnAll.current.style = inactiveButton;
    btnTravel.current.style = inactiveButton;

    btnMountains.current.style = inactiveButton;
    btnNature.current.style = inactiveButton;
    // category = 'road';
    // console.log(category);
  }

  function mountainsBtn() {
    // work1.current.style = workFilter;
    // work2.current.style = workUnfilter;
    // work3.current.style = workUnfilter;
    // work4.current.style = workFilter;
    // work5.current.style = workUnfilter;
    // work6.current.style = workUnfilter;
    // work7.current.style = workFilter;
    // work8.current.style = workUnfilter;
    // work9.current.style = workFilter;

    btnMountains.current.style = activeButton;
    btnAll.current.style = inactiveButton;
    btnTravel.current.style = inactiveButton;
    btnRoad.current.style = inactiveButton;

    btnNature.current.style = inactiveButton;
    // category = 'mountains';
    // console.log(category);
  }
  function natureBtn() {
    // work1.current.style = workUnfilter;
    // work2.current.style = workFilter;
    // work3.current.style = workFilter;
    // work4.current.style = workUnfilter;
    // work5.current.style = workFilter;
    // work6.current.style = workUnfilter;
    // work7.current.style = workUnfilter;
    // work8.current.style = workUnfilter;
    // work9.current.style = workFilter;

    btnNature.current.style = activeButton;
    btnAll.current.style = inactiveButton;
    btnTravel.current.style = inactiveButton;
    btnRoad.current.style = inactiveButton;
    btnMountains.current.style = inactiveButton;
    // category = 'nature';
    // console.log(category);
  }

  // const workOverlayShow = ' animation: fadein09 0.5s forwards';
  // const workOverlayHide = 'animation: fadeout09 0.5s forwards';
  // function workoverlayOn(e) {
  //   e.target.style = workOverlayShow;
  //   console.log('mouseover');
  // }
  // function workoverlayOff(e) {
  //   e.target.style = workOverlayHide;
  //   console.log('mouseout');
  // }
  // const img1 = useRef(null);
  // function modalPic(img) {
  //   let modal = document.getElementById('myModal');
  //   let modalImg = document.getElementById('img01');
  //   modal.style.display = 'block';
  //   modalImg.src = img.current.src;
  // }
  // function modalImage() {
  //   var modal = document.getElementById('myModal');
  //   var modalImg = document.getElementById('img01');

  //   // var img = document.getElementById('img1');
  //   // var overlay1 = document.getElementById('work-overlay-1');
  //   // overlay1.onclick = function () {
  //   //   modal.style.display = 'block';
  //   //   modalImg.src = img.src;
  //   // };

  //   var overlay2 = document.getElementById('work-overlay-2');
  //   var img2 = document.getElementById('img2');

  //   overlay2.onclick = function () {
  //     modal.style.display = 'block';
  //     modalImg.src = img2.src;
  //   };

  //   var overlay3 = document.getElementById('work-overlay-3');
  //   var img3 = document.getElementById('img3');

  //   overlay3.onclick = function () {
  //     modal.style.display = 'block';
  //     modalImg.src = img3.src;
  //   };

  //   var overlay4 = document.getElementById('work-overlay-4');
  //   var img4 = document.getElementById('img4');

  //   overlay4.onclick = function () {
  //     modal.style.display = 'block';
  //     modalImg.src = img4.src;
  //   };

  //   var overlay5 = document.getElementById('work-overlay-5');
  //   var img5 = document.getElementById('img5');

  //   overlay5.onclick = function () {
  //     modal.style.display = 'block';
  //     modalImg.src = img5.src;
  //   };

  //   var overlay6 = document.getElementById('work-overlay-6');
  //   var img6 = document.getElementById('img6');

  //   overlay6.onclick = function () {
  //     modal.style.display = 'block';
  //     modalImg.src = img6.src;
  //   };

  //   var overlay7 = document.getElementById('work-overlay-7');
  //   var img7 = document.getElementById('img7');

  //   overlay7.onclick = function () {
  //     modal.style.display = 'block';
  //     modalImg.src = img7.src;
  //   };

  //   var overlay8 = document.getElementById('work-overlay-8');
  //   var img8 = document.getElementById('img8');

  //   overlay8.onclick = function () {
  //     modal.style.display = 'block';
  //     modalImg.src = img8.src;
  //   };

  //   var overlay9 = document.getElementById('work-overlay-9');
  //   var img9 = document.getElementById('img9');

  //   overlay9.onclick = function () {
  //     modal.style.display = 'block';
  //     modalImg.src = img9.src;
  //   };
  //   // Get the <span> element that closes the modal
  //   var span = document.getElementsByClassName('close')[0];

  //   // When the user clicks on <span> (x), close the modal
  //   span.onclick = function () {
  //     modal.style.display = 'none';
  //   };
  // }
  useEffect(() => {
    allBtn();
    // modalImage();
  });
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
        {workImage
          // .filter((item) => item.artist === 'John')
          .map((item) => {
            return <WorkImage img={item.img} filter={item.filter} key={item.id} />;
          })}
        {/* <li ref={work1} className="work-item work-collection1" id="work-item-1">
          <div className="image" id="work-image-1">
            <div
              className="overlay"
              id="work-overlay-1"
              src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-1.jpg"
              alt="Snow"
              onMouseOver={(evt) => workoverlayOn(evt)}
              onMouseOut={(evt) => workoverlayOff(evt)}
              onClick={() => modalPic(img1)}
            >
              <h3 id="work-title-1">TITLE</h3>
            </div>
            <img
              src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-1.jpg"
              id="img1"
              alt="work-img"
              ref={img1}
            />
          </div>
        </li>
        <div id="myModal" className="modal">
          <span className="close">&times;</span>
          <img className="modal-content" id="img01" alt="modal" />
        </div>
        <li ref={work2} className="work-item work-collection2" id="work-item-2">
          <div className="image" id="work-image-2">
            <div
              onMouseOver={(evt) => workoverlayOn(evt)}
              onMouseOut={(evt) => workoverlayOff(evt)}
              className="overlay"
              id="work-overlay-2"
            >
              <h3 id="work-title-2">TITLE</h3>
            </div>
            <img
              src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-2.jpg"
              id="img2"
              alt="work-img"
              // ref={img2}
            />
          </div>
        </li>
        <li ref={work3} className="work-item work-collection3" id="work-item-3">
          <div className="image" id="work-image-3">
            <div
              onMouseOver={(evt) => workoverlayOn(evt)}
              onMouseOut={(evt) => workoverlayOff(evt)}
              className="overlay"
              id="work-overlay-3"
            >
              <h3 id="work-title-3">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-3.jpg" id="img3" alt="work-img" />
          </div>
        </li>
        <li ref={work4} className="work-item work-collection4" id="work-item-4">
          <div className="image" id="work-image-4">
            <div
              onMouseOver={(evt) => workoverlayOn(evt)}
              onMouseOut={(evt) => workoverlayOff(evt)}
              className="overlay"
              id="work-overlay-4"
            >
              <h3 id="work-title-4">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-4.jpg" id="img4" alt="work-img" />
          </div>
        </li>
        <li ref={work5} className="work-item work-collection5" id="work-item-5">
          <div className="image" id="work-image-5">
            <div
              onMouseOver={(evt) => workoverlayOn(evt)}
              onMouseOut={(evt) => workoverlayOff(evt)}
              className="overlay"
              id="work-overlay-5"
            >
              <h3 id="work-title-5">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-5.jpg" id="img5" alt="work-img" />
          </div>
        </li>
        <li ref={work6} className="work-item work-collection6" id="work-item-6">
          <div className="image" id="work-image-6">
            <div
              onMouseOver={(evt) => workoverlayOn(evt)}
              onMouseOut={(evt) => workoverlayOff(evt)}
              className="overlay"
              id="work-overlay-6"
            >
              <h3 id="work-title-6">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-6.jpg" id="img6" alt="work-img" />
          </div>
        </li>
        <li ref={work7} className="work-item work-collection7" id="work-item-7">
          <div className="image" id="work-image-7">
            <div
              onMouseOver={(evt) => workoverlayOn(evt)}
              onMouseOut={(evt) => workoverlayOff(evt)}
              className="overlay"
              id="work-overlay-7"
            >
              <h3 id="work-title-7">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-7.jpg" id="img7" alt="work-img" />
          </div>
        </li>
        <li ref={work8} className="work-item work-collection8" id="work-item-8">
          <div className="image" id="work-image-8">
            <div
              onMouseOver={(evt) => workoverlayOn(evt)}
              onMouseOut={(evt) => workoverlayOff(evt)}
              className="overlay"
              id="work-overlay-8"
            >
              <h3 id="work-title-8">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-8.jpg" id="img8" alt="work-img" />
          </div>
        </li>
        <li ref={work9} className="work-item work-collection9" id="work-item-9">
          <div className="image" id="work-image-9">
            <div
              onMouseOver={(evt) => workoverlayOn(evt)}
              onMouseOut={(evt) => workoverlayOff(evt)}
              className="overlay"
              id="work-overlay-9"
            >
              <h3 id="work-title-9">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-9.jpg" id="img9" alt="work-img" />
          </div>
        </li> */}
      </ul>
    </div>
  );
}
export default Work;
