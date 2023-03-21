import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div>Contact me by:</div>
      {/* <div className='socalMedia'><FontAwesomeIcon icon={faTwitter} /> */}
      <FontAwesomeIcon icon={faLinkedin} />
      <a href='https://github.com/mickey-40'><FontAwesomeIcon icon={faGithub} /></a>
      {/* <FontAwesomeIcon icon={faFacebook} /></div> */}
      <p> &copy; 2023 mickeys-portfolio.netlify.app</p>
    </div>
  )
}

export default Footer