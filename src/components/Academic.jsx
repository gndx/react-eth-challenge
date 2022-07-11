import React from 'react'

export default function Academic({
  academic = Array(3).fill({
  degree: 'degree',
  description: 'description',
  endDate: 'endDate',
  institution: 'institution',
  startDate: 'startDate',
}) }) {
  return (
    <div className='Academic'>
      <h2 className='Academic-title'>Academic</h2>
      {academic.map(({degree, description, endDate, institution, startDate}, index) => (
        <div key={`${degree}_${description}_${institution}_${index}`} className='Academic-item'>
          <h3>{degree} - {institution}</h3>
            <p>{description}</p>
            <p>{startDate} - {endDate}</p>
        </div>
      ))}
    </div>
  )
}
