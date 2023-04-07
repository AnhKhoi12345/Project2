import './work.scss';
import { useEffect } from 'react';
function Work() {
  function allBtn() {
    var work1 = document.getElementById('work-item-1').classList;
    var work2 = document.getElementById('work-item-2').classList;
    var work3 = document.getElementById('work-item-3').classList;
    var work4 = document.getElementById('work-item-4').classList;
    var work5 = document.getElementById('work-item-5').classList;
    var work6 = document.getElementById('work-item-6').classList;
    var work7 = document.getElementById('work-item-7').classList;
    var work8 = document.getElementById('work-item-8').classList;
    var work9 = document.getElementById('work-item-9').classList;

    var btnAll = document.getElementById('btn-all').classList;
    var btnTravel = document.getElementById('btn-travel').classList;
    var btnRoad = document.getElementById('btn-road').classList;
    var btnMountains = document.getElementById('btn-mountains').classList;
    var btnNature = document.getElementById('btn-nature').classList;

    work1.remove('work-animation-filter');
    work2.remove('work-animation-filter');
    work3.remove('work-animation-filter');
    work4.remove('work-animation-filter');
    work5.remove('work-animation-filter');
    work6.remove('work-animation-filter');
    work7.remove('work-animation-filter');
    work8.remove('work-animation-filter');
    work9.remove('work-animation-filter');

    work1.add('work-image-unfilter');
    work2.add('work-image-unfilter');
    work3.add('work-image-unfilter');
    work4.add('work-image-unfilter');
    work5.add('work-image-unfilter');
    work6.add('work-image-unfilter');
    work7.add('work-image-unfilter');
    work8.add('work-image-unfilter');
    work9.add('work-image-unfilter');

    btnAll.add('work-button-active');
    btnTravel.remove('work-button-active');
    btnRoad.remove('work-button-active');
    btnMountains.remove('work-button-active');
    btnNature.remove('work-button-active');
  }

  function travelBtn() {
    var work1 = document.getElementById('work-item-1').classList;
    var work2 = document.getElementById('work-item-2').classList;
    var work3 = document.getElementById('work-item-3').classList;
    var work4 = document.getElementById('work-item-4').classList;
    var work5 = document.getElementById('work-item-5').classList;
    var work6 = document.getElementById('work-item-6').classList;
    var work7 = document.getElementById('work-item-7').classList;
    var work8 = document.getElementById('work-item-8').classList;
    var work9 = document.getElementById('work-item-9').classList;

    var btnAll = document.getElementById('btn-all').classList;
    var btnTravel = document.getElementById('btn-travel').classList;
    var btnRoad = document.getElementById('btn-road').classList;
    var btnMountains = document.getElementById('btn-mountains').classList;
    var btnNature = document.getElementById('btn-nature').classList;

    work1.remove('work-animation-filter');
    work2.add('work-animation-filter');
    work3.remove('work-animation-filter');
    work4.add('work-animation-filter');
    work5.remove('work-animation-filter');
    work6.add('work-animation-filter');
    work7.add('work-animation-filter');
    work8.add('work-animation-filter');
    work9.remove('work-animation-filter');

    work1.add('work-image-unfilter');
    work2.remove('work-image-unfilter');
    work3.add('work-image-unfilter');
    work4.remove('work-image-unfilter');
    work5.add('work-image-unfilter');
    work6.remove('work-image-unfilter');
    work7.remove('work-image-unfilter');
    work8.remove('work-image-unfilter');
    work9.add('work-image-unfilter');

    btnAll.remove('work-button-active');
    btnTravel.add('work-button-active');
    btnRoad.remove('work-button-active');
    btnMountains.remove('work-button-active');
    btnNature.remove('work-button-active');
  }
  function roadlBtn() {
    var work1 = document.getElementById('work-item-1').classList;
    var work2 = document.getElementById('work-item-2').classList;
    var work3 = document.getElementById('work-item-3').classList;
    var work4 = document.getElementById('work-item-4').classList;
    var work5 = document.getElementById('work-item-5').classList;
    var work6 = document.getElementById('work-item-6').classList;
    var work7 = document.getElementById('work-item-7').classList;
    var work8 = document.getElementById('work-item-8').classList;
    var work9 = document.getElementById('work-item-9').classList;

    var btnAll = document.getElementById('btn-all').classList;
    var btnTravel = document.getElementById('btn-travel').classList;
    var btnRoad = document.getElementById('btn-road').classList;
    var btnMountains = document.getElementById('btn-mountains').classList;
    var btnNature = document.getElementById('btn-nature').classList;

    work1.add('work-animation-filter');
    work2.remove('work-animation-filter');
    work3.add('work-animation-filter');
    work4.remove('work-animation-filter');
    work5.add('work-animation-filter');
    work6.add('work-animation-filter');
    work7.remove('work-animation-filter');
    work8.add('work-animation-filter');
    work9.remove('work-animation-filter');

    work1.remove('work-image-unfilter');
    work2.add('work-image-unfilter');
    work3.remove('work-image-unfilter');
    work4.add('work-image-unfilter');
    work5.remove('work-image-unfilter');
    work6.remove('work-image-unfilter');
    work7.add('work-image-unfilter');
    work8.remove('work-image-unfilter');
    work9.add('work-image-unfilter');

    btnAll.remove('work-button-active');
    btnTravel.remove('work-button-active');
    btnRoad.add('work-button-active');
    btnMountains.remove('work-button-active');
    btnNature.remove('work-button-active');
  }

  function mountainsBtn() {
    var work1 = document.getElementById('work-item-1').classList;
    var work2 = document.getElementById('work-item-2').classList;
    var work3 = document.getElementById('work-item-3').classList;
    var work4 = document.getElementById('work-item-4').classList;
    var work5 = document.getElementById('work-item-5').classList;
    var work6 = document.getElementById('work-item-6').classList;
    var work7 = document.getElementById('work-item-7').classList;
    var work8 = document.getElementById('work-item-8').classList;
    var work9 = document.getElementById('work-item-9').classList;

    var btnAll = document.getElementById('btn-all').classList;
    var btnTravel = document.getElementById('btn-travel').classList;
    var btnRoad = document.getElementById('btn-road').classList;
    var btnMountains = document.getElementById('btn-mountains').classList;
    var btnNature = document.getElementById('btn-nature').classList;

    work1.add('work-animation-filter');
    work2.remove('work-animation-filter');
    work3.remove('work-animation-filter');
    work4.add('work-animation-filter');
    work5.remove('work-animation-filter');
    work6.remove('work-animation-filter');
    work7.add('work-animation-filter');
    work8.remove('work-animation-filter');
    work9.add('work-animation-filter');

    work1.remove('work-image-unfilter');
    work2.add('work-image-unfilter');
    work3.add('work-image-unfilter');
    work4.remove('work-image-unfilter');
    work5.add('work-image-unfilter');
    work6.add('work-image-unfilter');
    work7.remove('work-image-unfilter');
    work8.add('work-image-unfilter');
    work9.remove('work-image-unfilter');

    btnAll.remove('work-button-active');
    btnTravel.remove('work-button-active');
    btnRoad.remove('work-button-active');
    btnMountains.add('work-button-active');
    btnNature.remove('work-button-active');
  }
  function natureBtn() {
    var work1 = document.getElementById('work-item-1').classList;
    var work2 = document.getElementById('work-item-2').classList;
    var work3 = document.getElementById('work-item-3').classList;
    var work4 = document.getElementById('work-item-4').classList;
    var work5 = document.getElementById('work-item-5').classList;
    var work6 = document.getElementById('work-item-6').classList;
    var work7 = document.getElementById('work-item-7').classList;
    var work8 = document.getElementById('work-item-8').classList;
    var work9 = document.getElementById('work-item-9').classList;

    var btnAll = document.getElementById('btn-all').classList;
    var btnTravel = document.getElementById('btn-travel').classList;
    var btnRoad = document.getElementById('btn-road').classList;
    var btnMountains = document.getElementById('btn-mountains').classList;
    var btnNature = document.getElementById('btn-nature').classList;

    work1.remove('work-animation-filter');
    work2.add('work-animation-filter');
    work3.add('work-animation-filter');
    work4.remove('work-animation-filter');
    work5.add('work-animation-filter');
    work6.remove('work-animation-filter');
    work7.remove('work-animation-filter');
    work8.remove('work-animation-filter');
    work9.add('work-animation-filter');

    work1.add('work-image-unfilter');
    work2.remove('work-image-unfilter');
    work3.remove('work-image-unfilter');
    work4.add('work-image-unfilter');
    work5.remove('work-image-unfilter');
    work6.add('work-image-unfilter');
    work7.add('work-image-unfilter');
    work8.add('work-image-unfilter');
    work9.remove('work-image-unfilter');

    btnAll.remove('work-button-active');
    btnTravel.remove('work-button-active');
    btnRoad.remove('work-button-active');
    btnMountains.remove('work-button-active');
    btnNature.add('work-button-active');
  }
  useEffect(() => {
    allBtn();
  }, []);

  return (
    <div id="work" className="work-container">
      <h2>OUR WORKS</h2>
      <hr />
      <p>Praesent lacinia sem sed risus consectetur, et volutpat nulla bibendum.</p>
      <ul className="work-category">
        <li>
          <button id="btn-all" className="btn-category-all" onClick={allBtn}>
            ALL
          </button>
        </li>
        <li>
          <button id="btn-travel" className="btn-category-travel" onClick={travelBtn}>
            TRAVEL
          </button>
        </li>
        <li>
          <button id="btn-road" className="btn-category-road" onClick={roadlBtn}>
            ROAD
          </button>
        </li>
        <li>
          <button id="btn-mountains" className="btn-category-mountains" onClick={mountainsBtn}>
            MOUNTAINS
          </button>
        </li>
        <li>
          <button id="btn-nature" className="btn-category-nature" onClick={natureBtn}>
            NATURE
          </button>
        </li>
      </ul>
      <ul className="work-collection">
        <li className="work-item work-collection1" id="work-item-1">
          <div className="image" id="work-image-1">
            <div
              className="overlay"
              id="work-overlay-1"
              src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-1.jpg"
              alt="Snow"
            >
              <h3 id="work-title-1">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-1.jpg" id="img1" alt="work-img" />
          </div>
        </li>
        {/* <div id="myModal" className="modal">
            <span className="close">&times;</span>
            <img className="modal-content" id="img01" />
          </div> */}
        <li className="work-item work-collection2" id="work-item-2">
          <div className="image" id="work-image-2">
            <div className="overlay" id="work-overlay-2">
              <h3 id="work-title-2">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-2.jpg" id="img2" alt="work-img" />
          </div>
        </li>
        <li className="work-item work-collection3" id="work-item-3">
          <div className="image" id="work-image-3">
            <div className="overlay" id="work-overlay-3">
              <h3 id="work-title-3">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-3.jpg" id="img3" alt="work-img" />
          </div>
        </li>
        <li className="work-item work-collection4" id="work-item-4">
          <div className="image" id="work-image-4">
            <div className="overlay" id="work-overlay-4">
              <h3 id="work-title-4">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-4.jpg" id="img4" alt="work-img" />
          </div>
        </li>
        <li className="work-item work-collection5" id="work-item-5">
          <div className="image" id="work-image-5">
            <div className="overlay" id="work-overlay-5">
              <h3 id="work-title-5">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-5.jpg" id="img5" alt="work-img" />
          </div>
        </li>
        <li className="work-item work-collection6" id="work-item-6">
          <div className="image" id="work-image-6">
            <div className="overlay" id="work-overlay-6">
              <h3 id="work-title-6">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-6.jpg" id="img6" alt="work-img" />
          </div>
        </li>
        <li className="work-item work-collection7" id="work-item-7">
          <div className="image" id="work-image-7">
            <div className="overlay" id="work-overlay-7">
              <h3 id="work-title-7">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-7.jpg" id="img7" alt="work-img" />
          </div>
        </li>
        <li className="work-item work-collection8" id="work-item-8">
          <div className="image" id="work-image-8">
            <div className="overlay" id="work-overlay-8">
              <h3 id="work-title-8">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-8.jpg" id="img8" alt="work-img" />
          </div>
        </li>
        <li className="work-item work-collection9" id="work-item-9">
          <div className="image" id="work-image-9">
            <div className="overlay" id="work-overlay-9">
              <h3 id="work-title-9">TITLE</h3>
            </div>
            <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-9.jpg" id="img9" alt="work-img" />
          </div>
        </li>
      </ul>
    </div>
  );
}
export default Work;
