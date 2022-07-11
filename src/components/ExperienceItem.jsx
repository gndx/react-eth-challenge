import React from 'react';

function ExperienceItem({ experience }) {
  const { jobTitle, jobDescription, company, startDate, endDate } = experience;
  // symmetric style

  return (
    <>
      <h3 className='Experience-title'>
        {jobTitle}
        {' | '}
        <span className='info'>{company}</span>
      </h3>
      <p className='Experience-description'>{jobDescription}</p>
      <p className='Experience-dates'>
        <span className='info'>{`${startDate} - ${endDate}`}</span>
      </p>
    </>
  );
}

export default ExperienceItem;
