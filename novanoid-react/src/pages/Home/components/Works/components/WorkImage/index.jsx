import { useRef } from 'react';
import './WorkImage.scss';

function WorkImage(item) {
  console.log('WorkImg Filter ' + item.id + ': ' + item.filter);
  const img = useRef(null);
  const modal = useRef(null);
  const modalImg = useRef(null);
  const closeModal = useRef(null);
  const modalPic = (img) => {
    modal.current.style.display = 'block';
    modalImg.current.src = img.current.src;
    closeModal.current.onclick = () => {
      modal.current.style.display = 'none';
    };
  };
  return (
    <>
      <li
        className="work-item"
        style={{
          animation: item?.filter
            ? 'fadeout 0.5s  forwards, zoomout  0.5s  forwards'
            : 'fade 0.5s  forwards, zoomin 0.5s  forwards',
        }}
      >
        <div className="image">
          <div onClick={() => modalPic(img)} className="overlay" id="work-overlay-2">
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
