import { useRef } from 'react';
import './WorkButton.scss';

function WorkButton() {
  let workButton = useRef(null);
  function filterCategory() {}
  return (
    <button ref={workButton} id="btn-all" className="btn-category-all" onClick={filterCategory}>
      ALL
    </button>
  );
}
