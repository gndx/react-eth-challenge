import React from 'react';
import '../styles/components/Academic.styl';

function Academic({ academic = [{}, {}, {}] }) {
  return (
    <section className='Academic-section'>
      <h2 className='Academic-title'>Academic</h2>
      {academic?.map((elem, index) => (
        <section className='Academic-section-desc' key={index}>
          <h3 className='Academic-item'>{elem.degree}</h3>
          <p className='Academic-item'>{elem.institution}</p>
          <p className='Academic-item'>
            {elem.startDate}
            {' - '}
            {elem.endDate}
          </p>
          <p className='Academic-item'>{elem.description}</p>
        </section>
      ))}
    </section>
  );
}

export default Academic;
