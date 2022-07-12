import React from 'react'

function Languages({languages = Array(3).fill({ name: '', percentage: '' }),}) {
  return (
    <div className='lng'>
        <h2 className="Languages-title">Languages</h2>
        <ul className='lng-lst'>
          {
              languages.map(
                ({ name, percentage }, index) => {
                  return (
                      <li key={`${name}_${percentage}_${index}`} className="Languages-item">
                      <p>{name}:</p>
                      <progress id="file" value={percentage.replace(/%/, '')} max="100">{percentage}</progress>
                      </li>
                  )
                }
          )}
        </ul>

    </div>
  )
}

export default Languages