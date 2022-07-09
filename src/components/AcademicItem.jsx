import React from 'react';

function AcademicItem({ academic }) {
  const { degree, description, endDate, institution, startDate } = academic;

  return (
    <>
      <h3 className='Card-title'>
        {degree}
        {' | '}
        <span className='info'>{institution}</span>
      </h3>
      <p className='Card-description'>{description}</p>
      <p className='Academic-dates'>
        <span className='info'>{`${startDate} - ${endDate}`}</span>
      </p>
    </>
  );
}

export default AcademicItem;
