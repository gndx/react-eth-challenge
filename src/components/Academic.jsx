import React from 'react'

const Academic = ({ data = {} }) => {
  return (
    <div className="Academic-container col-8">
      <h2 className="Academic-title title">Education</h2>
      <div className="row">
        {data.Academic.map((academic) => (
          <div className="Academic-item col-12 col-md-6" key={academic.degree}>
            <h5 className='subtitle'>{academic.degree}</h5>
            <p>{academic.description}</p>
            <p>{academic.endDate}</p>
            <p>{academic.institution}</p>
            <p>{academic.startDate}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Academic
