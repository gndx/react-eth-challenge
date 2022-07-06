import React from 'react';
import Picture from '../Picture';

const About = () => {
  return (
    <section className='about-content'>
      <Picture/>
      <div className='description'>
        <h1 className='About-title'>
          Acerca de mi
        </h1>
        <ul>
          <li className='About-item'>profession</li>
          <li className='About-item'>About</li>
          <li className='About-item'>About</li>
          <li className='About-item'>About</li>
        </ul>
      </div>
    </section>
  );
}

export default About;