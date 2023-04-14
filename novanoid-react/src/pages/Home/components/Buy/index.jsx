import { useRef } from 'react';
import './Buy.scss';
import { fadeInScroll } from '../../../../GlobalFunction';
function Buy() {
  const hashtag = '#';
  const buy1 = useRef(null);
  const buy2 = useRef(null);
  const buy3 = useRef(null);
  const buyItem = [buy1, buy2, buy3];
  window.addEventListener('scroll', () => {
    for (let i = 0; i < buyItem.length; i++) {
      fadeInScroll(buyItem[i]);
    }
  });
  return (
    <div id="price" className="buy-container">
      <hr className="normal-hr" />
      <h2>HOW MANY</h2>
      <hr />
      <p>Praesent lacinia sem sed risus consectetur, et volutpat nulla bibendum.</p>
      <div className="buy-flexbox">
        <div className="buy-box buy-box-1" ref={buy1}>
          <h3>BASIC</h3>
          <hr className="dashed-hr" />
          <div className="buy-info">
            <div className="buy-cost">$29.99</div>
            <p>2 Domains</p>
            {/* <br> */}
            <p>5GB Hosting</p>
            {/* <br> */}
            <p>Limited Accounts</p>
            {/* <br> */}
            <p>FTP</p>
            {/* <br> */}
            <p>Full Support</p>
            <a href={hashtag}>
              <button id="buy-button-1">
                <span id="buy-now-1">BUY NOW</span>
                <i className="fa-solid fa-credit-card" id="buy-i-1" />
              </button>
            </a>
          </div>
        </div>
        <div className="buy-box buy-box-2" ref={buy2}>
          <h3>STANDART</h3>
          <hr className="dashed-hr" />
          <div className="buy-info">
            <div className="buy-cost">$59.99</div>
            <p>5 Domains</p>
            {/* <br> */}
            <p>25GB Hosting</p>
            {/* <br> */}
            <p>Unlimited Accounts</p>
            {/* <br> */}
            <p>FTP</p>
            {/* <br> */}
            <p>Full Support</p>
            <a href={hashtag}>
              <button id="buy-button-2">
                <span id="buy-now-2">BUY NOW</span>
                <i className="fa-solid fa-credit-card" id="buy-i-2" />
              </button>
            </a>
          </div>
        </div>
        <div className="buy-box buy-box-3" ref={buy3}>
          <h3>PRO</h3>
          <hr className="dashed-hr" />
          <div className="buy-info">
            <div className="buy-cost">$99.99</div>
            <p>40 Domains</p>
            {/* <br> */}
            <p>500GB Hosting</p>
            {/* <br> */}
            <p>Unlimited Accounts</p>
            {/* <br> */}
            <p>FTP + SSH</p>
            {/* <br> */}
            <p>24/7 Full Support</p>
            <a href={hashtag}>
              <button id="buy-button-3">
                <span id="buy-now-3">BUY NOW</span>
                <i className="fa-solid fa-credit-card" id="buy-i-3" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Buy;
