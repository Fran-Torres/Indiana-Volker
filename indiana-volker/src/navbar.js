import React from 'react'
import './navbar-footer.css'

export default function Navbar() {
  return (
    <nav>
      <i className="fas fa-bars" id="hamburguer-menu"></i>
      <img src={require ("./assets/Logo_indiana_volker_fondo_transaprente_Big.png") } id="nav-logo" alt="Indiana Volker Logo"/>
      <i className="fas fa-shopping-cart" id="shopping-cart"></i>
    </nav>
  )
}


