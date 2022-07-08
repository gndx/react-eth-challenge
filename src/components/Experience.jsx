import React from 'react';
import '../styles/components/Experience.styl';

function Experience({
  experience = Array(3).fill({
    company: '',
    endDate: '',
    jobDescription: '',
    jobTitle: '',
    startDate: '',
  }),
}) {
  return (
    <section className='Experience'>
      <h2 className='Experience-title'>Experience</h2>
      <div className='container'>
        {
          experience.map(({
            company,
            endDate,
            jobDescription,
            jobTitle,
            startDate,
          }, index) => (
            <div className='Experience-item' key={`experience-${index}`}>
              <h3>{company}</h3>
              <h5>{jobTitle}</h5>
              <p>{jobDescription}</p>
              <h5>
                {startDate}
                -
                {endDate}
              </h5>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Experience;
