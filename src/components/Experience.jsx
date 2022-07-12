import React from 'react';
import '../styles/components/Experience.css';

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
            <div key={index} className='Experience-item'>
              <h4>{company}</h4>
              <p>{jobTitle} - {jobDescription}</p>
              <small>{startDate} - {endDate}</small>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Experience;
