import React from 'react'

export default function Skills({
  skills = Array(3).fill({
    name: 'name',
    percentage: 'percentage',
  }),
}) {
  return (
    <div className='Skills'>
      <h2 className="Skills-title">Skills</h2>
      <ul>
          {skills.map(({ name, percentage }, index) => (
            <li key={`skill-${index}`} className='Skills-item'>{name}</li>
          ))}
        </ul>
    </div>
  )
}
