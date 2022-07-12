import React from 'react';
import ExperienceItem from './items/ExperienceItem';
import '../styles/components/Experience.styl';

function Experience() {
  return (
    <section className='Experience'>
      <h2 className='Experience-title'>Experience</h2>
      <div className='Experience__items'>
        <ExperienceItem className='Experience-item' />
        <ExperienceItem className='Experience-item' />
        <ExperienceItem className='Experience-item' />
        <ExperienceItem className='Experience-item' />
      </div>
    </section>
  );
};

export default Experience;
