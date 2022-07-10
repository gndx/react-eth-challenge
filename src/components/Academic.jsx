import React from 'react'

export default function Academic({
  academic = Array(3).fill({
  degree: 'degree',
  description: 'description',
  endDate: 'endDate',
  institution: 'institucion',
  startDate: 'startDate',
}) }) {
  return (
    <div>
      <h2 className='Academic-title'>Academic</h2>
      
      {academic.map((item) => (
        <div className='Academic-item'>
          <h3>{item.degree} - {item.institution}</h3>
          <ul>
            <li>{item.description}</li>
            <li>{item.startDate} - {item.endDate}</li>
          </ul>
        </div>
      ))}
      
    </div>
  )
}
