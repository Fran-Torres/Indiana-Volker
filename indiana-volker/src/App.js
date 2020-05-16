import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./Pages/LandPage.css";
import fluid from "react-bootstrap"
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <>
      <div className="bannerselector" id="main-banner" >
            <img className="banner" alt="banner" src="./IV_background.png" fluid />
            <div className="main-banner_data s-center">
            </div>
          </div>
       
    </>
  )
}

export default App;