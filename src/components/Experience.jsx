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
      <h3 className='Experience-title'>
        Experience
      </h3>
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
              <b>{jobTitle}</b>
              <p>{jobDescription}</p>
              <small>{startDate} - {endDate}</small>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Experience;
