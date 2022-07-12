import React from 'react';
import '../styles/components/Academic.css';

function Academic({ academic = Array(3).fill({
  degree: '',
  description: '',
  endDate: '',
  institution: '',
  startDate: '',
})
}) {
  return (
    <section className='Academic-Container'>
      <h3 className='Academic-title'>
        Academic achievements
      </h3>
      <div className='Academic-description'>
      {
        academic.map(({
          degree,
          description,
          endDate,
          institution,
          startDate,
        }, index) => (
          <div key={index} className='Academic-item'>
            <h4>{degree}</h4>
            <p>{institution} - {description}</p>
            <small>{startDate} - {endDate}</small>
          </div>
        ))
      }
      </div>
    </section>
  );
}

export default Academic;
