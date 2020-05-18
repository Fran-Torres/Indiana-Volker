import React from 'react';
import './App.css';
import './index.css';
import './components/Navbar-footer.css';
import Home from './Pages/Home.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faShoppingCart, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter, Link } from "react-router-dom";
import Balanza1 from './Pages/Balanza1';
import Balanza2 from './Pages/Balanza2';
import McCarthys from './Pages/McCarthys';

library.add(fab, faBars, faShoppingCart, faEnvelope)

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Footer />
        <Switch>
          <Route exact path='/Balanza1' component={Balanza1} />
          <Route exact path='/Balanza2' component={Balanza2} />
          <Route exact path='/McCarthys' component={McCarthys} />
          <Route exact path='/Home' component={Home} />
        </Switch>
      </Router>
    </>
  );

}

export default App;
