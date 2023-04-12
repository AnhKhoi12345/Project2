import { useRef } from 'react';
import './WorkImage.scss';

function WorkImage(item) {
  //   const ref = useRef(null);
  //   console.log(item.img);
  //   console.log('filter in WorkImage: ' + item.filter);
  //   if (item.filter === false) {
  //     ref.current.style.opacity = 0;
  //   }
  return (
    <li className="work-item work-collection2" id="work-item-2">
      {/* <li ref={ref} className="work-item"> */}
      <div className="image" /*id="work-image-2"*/>
        <div
          //   onMouseOver={(evt) => workoverlayOn(evt)}
          //   onMouseOut={(evt) => workoverlayOff(evt)}
          className="overlay"
          id="work-overlay-2"
        >
          <h3 id="work-title-2">TITLE</h3>
        </div>
        <img
          src={item.img}
          id="img2"
          alt="work-img"
          //   ref={img2}
        />
      </div>
    </li>
  );
}

export default WorkImage;
