import React from 'react';

export default function ExperienceItem({ company, endDate, jobDescription, jobTitle, startDate }) {
  return (
    <article className='experience__item'>
      <h3>{company} - <span>{jobTitle}</span></h3>
      <p className='experience__dates'>{startDate} - {endDate}</p>
      <p className='experience__description'>{jobDescription}</p>
    </article>
  );
}
