import React from 'react';

const Academic = ({ userData }) => {

  return (
    <div>
      <h2 className='Academic-title'>Academic</h2>

      {userData.Academic.map(({ degree, description, institution, startDate, endDate }, idx) => (
        <section className='Academic-item' key={`Academic-${idx}-${idx}`}>
          <span><b>{degree}</b></span>
          <span>{institution}</span>
          <span><b>{startDate} - {endDate}</b></span>
          <p>{description}</p>
        </section>
      ))}
    </div>
  )
};

export default Academic;
