import React from 'react';

export default function ExperienceCard({ item }) {
  return (
    <>
      <h4>{item.jobTitle}</h4>
      <h5>
        {item.company}
        :
        {' '}
        {item.startDate}
        {' '}
        -
        {' '}
        {item.endDate}
      </h5>
      <span>{item.jobDescription}</span>
    </>
  );
}
