import React from 'react'

export default function Languages({
  languages = Array(3).fill({
    name: 'name',
    percentage: 'percentage',
  }),
}) {
  return (
    <div className='Language'>
      <h2 className="Languages-title">Languages</h2>
        <ul>
          {languages.map(({name, percentage}, index) => (
            <li key={`${name}_${percentage}_${index}`} className='Languages-item'>{name}</li>
          ))}
        </ul>
    </div>
  )
}
