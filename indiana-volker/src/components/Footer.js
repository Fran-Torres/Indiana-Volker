import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
  <div>
    <div className="social-media" id="social-media">
      <FontAwesomeIcon icon={['fab', 'youtube']} className="social-media-icon"/>
      <FontAwesomeIcon icon={['fab', 'twitter']} className="social-media-icon"/>
      <FontAwesomeIcon icon={['fab', 'spotify']} className="social-media-icon"/>
      <FontAwesomeIcon icon={['fab', 'instagram']} className="social-media-icon"/>
      <FontAwesomeIcon icon="envelope" className="social-media-icon" />
      <FontAwesomeIcon icon={['fab', 'facebook']} className="social-media-icon"/>
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
