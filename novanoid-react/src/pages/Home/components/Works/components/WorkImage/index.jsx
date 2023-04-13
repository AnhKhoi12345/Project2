import { useEffect, useRef } from 'react';
import './WorkImage.scss';

function WorkImage(item) {
  let workItem = useRef(null);
  const workUnfilter = ' animation: fade 0.5s  forwards, zoomin 0.5s  forwards';
  const workFilter = ' animation: fadeout 0.5s  forwards, zoomout  0.5s  forwards';

  const workOverlayShow = ' animation: fadein09 0.5s forwards';
  const workOverlayHide = 'animation: fadeout09 0.5s forwards';
  function workoverlayOn(e) {
    e.target.style = workOverlayShow;
    console.log('mouseover');
  }
  function workoverlayOff(e) {
    e.target.style = workOverlayHide;
    console.log('mouseout');
  }
  console.log('WorkImg Filter ' + item.id + ': ' + item.filter);

  const img = useRef(null);
  const modal = useRef(null);
  const modalImg = useRef(null);
  const closeModal = useRef(null);
  function modalPic(img) {
    modal.current.style.display = 'block';
    modalImg.current.src = img.current.src;
    closeModal.current.onclick = function () {
      modal.current.style.display = 'none';
    };
  }
  useEffect(() => {
    if (item.filter === true) {
      workItem.current.style = workFilter;
    } else {
      workItem.current.style = workUnfilter;
    }
  }, [item.filter]);
  return (
    <>
      <li ref={workItem} className="work-item">
        <div className="image">
          <div
            onMouseOver={(e) => {
              workoverlayOn(e);
              console.log('onmouseover');
            }}
            onMouseOut={(e) => workoverlayOff(e)}
            onClick={() => modalPic(img)}
            className="overlay"
            id="work-overlay-2"
          >
            <h3 id="work-title-2">TITLE</h3>
          </div>
          <img src={item.img} id="img2" alt="work-img" ref={img} />
        </div>
      </li>
      <div id="myModal" className="modal" ref={modal}>
        <span className="close" ref={closeModal}>
          &times;
        </span>
        <img className="modal-content" id="img01" alt="modal" ref={modalImg} />
      </div>
    </>
  );
}

export default WorkImage;
