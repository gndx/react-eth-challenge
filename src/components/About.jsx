import React from 'react';
import db from '../../data.json';
import AboutCard from './AboutCard';

const About = () => {
  return (
    <div className='about'>
    <h2 className='About-title'>About</h2>
    <ul >
      {db.data.social.map((about) => (
        <AboutCard className='About-item' {...about}/>
      ))}
    </ul>
    </div>
  )
}

export default About;