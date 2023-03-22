import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div>
      <p>Contact me by:</p>
      </div>
      <div className='socialMedia'>
      {/* <FontAwesomeIcon icon={faTwitter} /> */}
      <a href='https://www.linkedin.com/in/mickey-arnold/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href='https://github.com/mickey-40' target='_blank' rel='noreferrer' ><FontAwesomeIcon icon={faGithub} /></a>
      {/* <FontAwesomeIcon icon={faFacebook} /> */}
      </div>
      <p> &copy; 2023 mickeys-portfolio.netlify.app</p>
    </div>
  )
}

export default Footer