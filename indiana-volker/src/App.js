import React from 'react';
import './App.css';
import './index.css';
import './components/Navbar-footer.css';
import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faShoppingCart, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter, Link } from "react-router-dom";
import Balanza1 from './pages/Balanza1.js';
import Balanza2 from './pages/Balanza2.js';
import McCarthys from './pages/McCarthys.js';

library.add(fab, faBars, faShoppingCart, faEnvelope)

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Balanza1' component={Balanza1} />
          <Route exact path='/Balanza2' component={Balanza2} />
          <Route exact path='/McCarthys' component={McCarthys} />

        </Switch>
        <Footer />
      </Router>
    </>
  );

}

export default App;
