/* eslint-disable react/style-prop-object */
import React from 'react';

function MyExperience({ company, endDate, jobDescription, jobTitle, startDate }) {
  return (
    <div className='card shadow-sm p-3 m-2 col-12 col-sm-6 col-md-4'>
      <p className=''>{company}</p>
      <p>{jobTitle}</p>
      <p>{jobDescription}</p>
      <p>
        {startDate}
        {' '}
        to
        {' '}
        {endDate}
      </p>
    </div>
  );
}

export default MyExperience;
