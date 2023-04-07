import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './variable.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" id="body">
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
