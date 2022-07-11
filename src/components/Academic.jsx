import React from 'react';
import Item from './Item';
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
      {
        academic.map(({
          degree,
          description,
          endDate,
          institution,
          startDate,
        }, index) => (
          <div key={index}>
            <h4>{degree}</h4>
            <p>{institution} - {description}</p>
            <p>{startDate} - {endDate}</p>
          </div>
        ))
      }
    </section>
  );
}

export default Academic;
