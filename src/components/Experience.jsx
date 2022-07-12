import React from 'react';
import ExperienceItem from './items/ExperienceItem';
import '../styles/components/Experience.styl';
import CompleteData from '../../data.json';

function Experience() {
  const { data } = CompleteData;
  return (
    <section className='Experience'>
      <h2 className='Experience-title'>Experience</h2>
      <div className='Experience__items'>
        {data.experience.map((item, index) => <ExperienceItem className='Experience-item' key={`${index + 1}-experience`} item={item} />)}
      </div>
    </section>
  );
};

export default Experience;
