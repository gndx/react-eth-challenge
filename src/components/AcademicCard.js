import React from 'react';

export default function AcademicCard({ item }) {
  console.log(item);
  return (
    <>
      <h4>{item.degree ? item.degree : item.name}</h4>
      <h5>
        {item.institution}
        :
        {' '}
        {item.endDate}
      </h5>
      <span>{item.description}</span>
    </>
  );
}
