import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {
  return (
  <div>
    <div className="social-media" id="social-media">
      <FontAwesomeIcon icon={['fab', 'youtube']} className="social-media-icon"/>
      <FontAwesomeIcon icon={['fab', 'twitter']} className="social-media-icon"/>
      <a href="https://open.spotify.com/artist/6TBGcnLbwLJUJVjJojqg0a?si=t2wAjLQgRKanQfI3PyehEQ"><FontAwesomeIcon icon={['fab', 'spotify']} className="social-media-icon"/></a>
      <a href="https://www.instagram.com/indianavolker/"> <FontAwesomeIcon icon={['fab', 'instagram']} className="social-media-icon"/></a>
      <FontAwesomeIcon icon="envelope" className="social-media-icon" />
      <a href="https://www.facebook.com/indianavolker"> <FontAwesomeIcon icon={['fab', 'facebook']} className="social-media-icon"/></a>
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
