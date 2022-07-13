import React from 'react';

export default function AcademicItem({
  degree,
  endDate,
  startDate,
  institution }) {
  return (
    <article>
      <h3>{degree}</h3>
      <p>{startDate} - {endDate}</p>
      <p><span>{institution}</span></p>
    </article>
  );
}
