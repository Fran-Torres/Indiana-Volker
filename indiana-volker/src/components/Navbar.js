import React from 'react'
import './Navbar-footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <FontAwesomeIcon icon="bars" id="hamburguer-menu" className="icon" />
      <Link to ="/"> <img src={require ("../assets/Logo_indiana_volker_fondo_transaprente_Big.png") } id="nav-logo" alt="Indiana Volker Logo"/> </Link>
      <FontAwesomeIcon icon="shopping-cart" id="shopping-cart" className="icon" />
    </nav>
  )
};


