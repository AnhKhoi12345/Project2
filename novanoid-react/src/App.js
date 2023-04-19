import './App.css';
import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './variable.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const body = useRef(null);
  const noTopPad = 'padding-top: 0px';
  function scrollBody() {
    let scrollTop = window.pageYOffset;
    if (scrollTop >= 50) {
      body.current.style = noTopPad;
      console.log('scrolling');
    } else {
      body.current.style = '';
    }
  }
  window.addEventListener('scroll', scrollBody);
  return (
    <div className="App" id="body" ref={body}>
      <div className="page">
        <Header></Header>
        <Routes>
          <Route>
            <Route path="/" element={<Home></Home>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
