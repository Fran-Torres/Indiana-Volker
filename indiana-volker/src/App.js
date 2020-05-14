import React from 'react';
import './App.css';
import './index.css';
import './navbar-footer.css';
import './latestNews.css'
import LatestNews from './latestNews';
import Navbar from './navbar';
import Footer from './footer';

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
