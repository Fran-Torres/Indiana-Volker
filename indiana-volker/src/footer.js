import React from 'react'

export default function Footer() {
  return (
  <div>
    <div className="social-media" id="social-media">
      <i className="fab fa-youtube"></i>
      <i className="fab fa-twitter-square"></i>
      <i className="fab fa-spotify"></i>
      <i className="fab fa-instagram"></i>
      <i className="fas fa-envelope"></i>
      <i className="fab fa-facebook-square"></i>
    </div>
    <footer>
      <p id="copyright">Copyright Indiana Volker 2020</p>
      <ul id="footer-links">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </footer>
  </div>
  )
}
