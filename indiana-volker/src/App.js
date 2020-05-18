import React from 'react';
import './App.css';
import './index.css';
import './navbar-footer.css';
import Home from './Home.js';
import Navbar from './navbar';
import Footer from './footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faShoppingCart, faEnvelope } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faBars, faShoppingCart, faEnvelope)

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;