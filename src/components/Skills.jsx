import React from 'react'

export default function Skills({
  skills = Array(3).fill({
    name: 'name',
    percentage: 'percentage',
  }),
}) {
  return (
    <div>
      <h2 className="Skills-title">Skills</h2>
      <ul>
          {skills.map((item) => (
            <li className='Skills-item'>{item.name}</li>
          ))}
        </ul>
    </div>
  )
}
