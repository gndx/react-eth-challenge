import React from 'react'

export default function Languages({
  languages = Array(3).fill({
    name: 'name',
    percentage: 'percentage',
  }),
}) {
  return (
    <div>
      <h2 className="Languages-title">Languages</h2>
        <ul>
          {languages.map((item) => (
            <li className='Languages-item'>{item.name}</li>
          ))}
        </ul>
    </div>
  )
}
