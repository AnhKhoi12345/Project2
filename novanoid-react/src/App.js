import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './variable.scss';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <div className="page">
        <Header></Header>
        <Routes>
          <Route>
            <Route path="/" element={<Home></Home>}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
