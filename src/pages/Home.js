import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Mickey</h2>
        <div className='prompt'>
          <p>As an software engineer with five years of teaching experience and a background in electrical work spanning over a decade, I am eager to bring my unique blend of technical expertise, practical problem-solving skills, and effective communication to a software engineering role. </p>
          <div className='socalMedia'>
          {/* <FontAwesomeIcon icon={faTwitter} /> */}
          <a href='https://www.linkedin.com/in/mickey-arnold' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href='https://github.com/mickey-40' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
          {/* <FontAwesomeIcon icon={faFacebook} /> */}
          </div>
        </div>
      </div>
      <div className='skills'>

        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>JavaScript, ReactJS, Redux, HTML, CSS, StyledComponents, BootStrap </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>JavaScript, Python, NodeJS, ExpressJS, GraphQL, MySQL, MongoDB</span>
          </li>
          {/* <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Python</span>
          </li> */}
        </ol>
      </div>
    </div>
  )
}

export default Home