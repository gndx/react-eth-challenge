import React from 'react'

const Academic = ({ data = {} }) => {
  return (
    <div className="Academic-container col-6">
      <h2 className="Academic-title">Studies</h2>
      {data.Academic.map((academic) => (
        <div className="Academic-item" key={academic.degree}>
          <h5>{academic.degree}</h5>
          <p>{academic.description}</p>
          <p>{academic.endDate}</p>
          <p>{academic.institution}</p>
          <p>{academic.startDate}</p>
        </div>
      ))}
    </div>
  )
}

export default Academic
