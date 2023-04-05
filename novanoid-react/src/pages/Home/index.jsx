import './Home.scss';
import '../../variable.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faDesktop, faEye, faFont, faCodeFork, faLightbulb } from '@fortawesome/free-solid-svg-icons';
function Home() {
  return (
    <div className="main-content">
      <div className="feature-container">
        <div className="feature feat1">
          <FontAwesomeIcon icon={faLeaf} className="feat-i" size="lg" />
          <h3>CLEAN THEMES</h3>
          <div>
            Nulla fringilla urna ac urna volutpat, quis congue massa dignissim. Suspendisse quis orci id dolor vehicula
            porta quis in dolor. Phasellus volutpat metus.
          </div>
        </div>
        <div className="feature feat2">
          <FontAwesomeIcon icon={faDesktop} className="feat-i" size="lg" />
          <h3>FULLY RESPONSIVE</h3>
          <div>
            Ut magna diam, placerat ac diam et, ornare volutpat libero. Curabitur erat nisl, sollicitudin sit amet
            rhoncus interdum, adipiscing aliquet est.
          </div>
        </div>
        <div className="feature feat3">
          <FontAwesomeIcon icon={faEye} className="feat-i" size="lg" />
          <h3>PIXELS PERFECT</h3>
          <div>
            Phasellus eget massa quam. Cras mi purus, accumsan id pretium sed, faucibus quis diam. Maecenas aliquet,
            lacus a porttitor porta, sapien.
          </div>
        </div>
        <div className="feature feat4">
          <FontAwesomeIcon icon={faFont} className="feat-i" size="lg" />
          <h3>GOOGLE FONTS</h3>
          <div>
            Etiam sollicitudin tempus quam, at lacinia urna rutrum sed. Integer quis arcu quis metus sagittis feugiat.
            Nulla facilisi. Integer molestie nec justo in convallis.
          </div>
        </div>
        <div className="feature feat5">
          <FontAwesomeIcon icon={faCodeFork} className="feat-i" size="lg" />
          <h3>STRUCTURES CODE</h3>
          <div>
            Suspendisse nec lacus id urna mollis convallis. Sed risus massa, sodales sed porta eu, elementum ac magna.
            Phasellus et suscipit ipsum.
          </div>
        </div>
        <div className="feature feat6">
          <FontAwesomeIcon icon={faLightbulb} className="feat-i" size="lg" />
          <h3>CREATIVE IDEAS</h3>
          <div>
            Aenean luctus, nisl et congue commodo, ligula neque fringilla lorem, quis vehicula est leo et tortor. Cum
            sociis natoque penatibus et magnis dis.
          </div>
        </div>
      </div>

      <div id="work" class="work-container">
        <h2>OUR WORKS</h2>
        <hr />
        <p>Praesent lacinia sem sed risus consectetur, et volutpat nulla bibendum.</p>
        <ul class="work-category">
          <li>
            <button id="btn-all" class="btn-category-all" onclick="allBtn()">
              ALL
            </button>
          </li>
          <li>
            <button id="btn-travel" class="btn-category-travel" onclick="travelBtn()">
              TRAVEL
            </button>
          </li>
          <li>
            <button id="btn-road" class="btn-category-road" onclick="roadlBtn()">
              ROAD
            </button>
          </li>
          <li>
            <button id="btn-mountains" class="btn-category-mountains" onclick="mountainsBtn()">
              MOUNTAINS
            </button>
          </li>
          <li>
            <button id="btn-nature" class="btn-category-nature" onclick="natureBtn()">
              NATURE
            </button>
          </li>
        </ul>
        <ul class="work-collection">
          <li class="work-item work-collection1" id="work-item-1">
            <div class="image" id="work-image-1">
              <div
                class="overlay"
                id="work-overlay-1"
                src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-1.jpg"
                alt="Snow"
              >
                <h3 id="work-title-1">TITLE</h3>
              </div>
              <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-1.jpg" id="img1" alt="work-img" />
            </div>
          </li>
          {/* <div id="myModal" class="modal">
            <span class="close">&times;</span>
            <img class="modal-content" id="img01" />
          </div> */}
          <li class="work-item work-collection2" id="work-item-2">
            <div class="image" id="work-image-2">
              <div class="overlay" id="work-overlay-2">
                <h3 id="work-title-2">TITLE</h3>
              </div>
              <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-2.jpg" id="img2" alt="work-img" />
            </div>
          </li>
          <li class="work-item work-collection3" id="work-item-3">
            <div class="image" id="work-image-3">
              <div class="overlay" id="work-overlay-3">
                <h3 id="work-title-3">TITLE</h3>
              </div>
              <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-3.jpg" id="img3" alt="work-img" />
            </div>
          </li>
          <li class="work-item work-collection4" id="work-item-4">
            <div class="image" id="work-image-4">
              <div class="overlay" id="work-overlay-4">
                <h3 id="work-title-4">TITLE</h3>
              </div>
              <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-4.jpg" id="img4" alt="work-img" />
            </div>
          </li>
          <li class="work-item work-collection5" id="work-item-5">
            <div class="image" id="work-image-5">
              <div class="overlay" id="work-overlay-5">
                <h3 id="work-title-5">TITLE</h3>
              </div>
              <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-5.jpg" id="img5" alt="work-img" />
            </div>
          </li>
          <li class="work-item work-collection6" id="work-item-6">
            <div class="image" id="work-image-6">
              <div class="overlay" id="work-overlay-6">
                <h3 id="work-title-6">TITLE</h3>
              </div>
              <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-6.jpg" id="img6" alt="work-img" />
            </div>
          </li>
          <li class="work-item work-collection7" id="work-item-7">
            <div class="image" id="work-image-7">
              <div class="overlay" id="work-overlay-7">
                <h3 id="work-title-7">TITLE</h3>
              </div>
              <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-7.jpg" id="img7" alt="work-img" />
            </div>
          </li>
          <li class="work-item work-collection8" id="work-item-8">
            <div class="image" id="work-image-8">
              <div class="overlay" id="work-overlay-8">
                <h3 id="work-title-8">TITLE</h3>
              </div>
              <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-8.jpg" id="img8" alt="work-img" />
            </div>
          </li>
          <li class="work-item work-collection9" id="work-item-9">
            <div class="image" id="work-image-9">
              <div class="overlay" id="work-overlay-9">
                <h3 id="work-title-9">TITLE</h3>
              </div>
              <img src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/work-9.jpg" id="img9" alt="work-img" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
