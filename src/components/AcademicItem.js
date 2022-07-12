import React from 'react';

export default function AcademicItem({
  degree,
  description,
  endDate,
  startDate,
  institution }) {
  return (
    <ul className='academic__item'>
      <li>{degree}</li>
      <li>{description}</li>
      <li>{endDate}</li>
      <li>{startDate}</li>
      <li>{institution}</li>
    </ul>
  );
}
