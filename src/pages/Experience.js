import React from 'react'
import { VerticalTimeline, VerticalTimelineElement  } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faBolt, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className='vertical-timeline-element--work' 
          date='2000-2012' 
          contentStyle={{ background: '#3e497a', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #3e497a' }}
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<FontAwesomeIcon icon={faBolt} />}>
          <h3 className="vertical-timeline-element-title">Electrican</h3>
          <p className="vertical-timeline-element-subtitle">Company: Equipment Management Services Location: Austin, Tx</p>
        </VerticalTimelineElement>        
      </VerticalTimeline>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          contentStyle={{ background: '#e9d35b', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #3e497a' }}
          date='2012-2016' 
          iconStyle={{background: '#e9d35b', color: '#3e497a'}}
          icon={<FontAwesomeIcon icon={faSchool} />}>
          <h3 className="vertical-timeline-element-title">University of Houston-Downtown</h3>
          <p className="vertical-timeline-element-subtitle">Degree in Interdisciplinary Studies (BS)</p>
        </VerticalTimelineElement>        
      </VerticalTimeline>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className='vertical-timeline-element--work' 
          contentStyle={{ background: '#3e497a', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #3e497a' }}
          date='2016-Current' 
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<FontAwesomeIcon icon={faPersonChalkboard} />}>
          <h3 className="vertical-timeline-element-title">Teacher</h3>
          <p className="vertical-timeline-element-subtitle">Middle School Math Teacher with Houston ISD and Spring Branch ISD</p>
        </VerticalTimelineElement>        
      </VerticalTimeline>
     
    </div>
  )
}

export default Experience