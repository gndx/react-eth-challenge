import React from 'react'

function Skills({ skills = Array(4).fill({ name: '', percentage: '' }),}) {
  return (
    <div className='skl'>
        <h2 className="Skills-title">Skills</h2>
        {
          skills.map(
            ({name, percentage}, index) => {
              return (
                <li className="Skills-item" key={`${name}_${index}`}>
                  <p>{name}:</p>
                  <progress id="file" value={percentage.replace(/%/, '')} max="100">{percentage}</progress>
                </li>
              )
            }
      )}
    </div>
  )
}

export default Skills