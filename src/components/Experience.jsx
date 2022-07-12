<<<<<<< HEAD
import React from 'react'

const Experience = () => {
  return (
    <>
    
    </>
  )
}

export default Experience
=======
import React from 'react';
import '../styles/components/Experience.styl';

function Experience({ experience = [{}, {}, {}] }) {
  return (
    <section className='Experience-section'>
      <h2 className='Experience-title'>Experience</h2>
      {experience?.map((elem, index) => (
        <section className='Experience-grid' key={index}>
          <h3 className='Experience-item'>{elem.jobTitle}</h3>
          <p className='Experience-item'>{elem.company}</p>
          <p className='Experience-item'>
            {elem.startDate}
            {' - '}
            {elem.endDate}
          </p>
          <p className='Experience-item'>{elem.jobDescription}</p>
        </section>
      ))}
    </section>
  );
}

export default Experience;
>>>>>>> test
