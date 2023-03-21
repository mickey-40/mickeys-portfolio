import React from 'react'
import { useParams } from 'react-router-dom'
import {ProjectList} from '../helpers/ProjectList.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className='project'>
      <h1> {project.name} </h1>
      <a href={project.projectLink}><img src={project.image} alt='Project display' /></a>
      <p>
        <b>Skills:</b> {project.skill}
      </p>
      <FontAwesomeIcon icon={faGithub}/>
    </div>
  )
}

export default ProjectDisplay