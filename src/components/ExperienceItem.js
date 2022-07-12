import React from 'react';

export default function ExperienceItem({ company, endDate, jobDescription, jobTitle, startDate }) {
  return (
    <ul>
      <li>{company}</li>
      <li>{endDate}</li>
      <li>{jobDescription}</li>
      <li>{jobTitle}</li>
      <li>{startDate}</li>
    </ul>
  );
}
