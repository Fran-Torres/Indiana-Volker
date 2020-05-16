import React from 'react';
import './App.css';
import './index.css';
import './navbar-footer.css';
import './latestNews.css'
import LatestNews from './latestNews';
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
    <LatestNews/>
    <Footer/>
    </>
  );
}

export default App;
