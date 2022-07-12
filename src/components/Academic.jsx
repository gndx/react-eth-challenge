import React from 'react'

function Academic({academic = Array(3).fill({ degree: '', description: '', institution: '', startDate: '', endDate: '' }),}) {
  return (
    <div className='accd'>
      <h2 className="Academic-title">Academic</h2>
      <ul className='list'>
        {
          academic.map(
            ({ degree, description, institution, startDate, endDate  }, index) => {
              return (
                <li className="Academic-item" key={`${degree}_${description}_${institution}_${index}`}>
                <h3> Institution: {institution}</h3>
                <p>Duration: {startDate}-{endDate}</p>
                <h3>{degree}</h3>
                <p>Description: {description}</p>
                </li>
              )
            }
        )}
      </ul>

    </div>
  )
}

export default Academic