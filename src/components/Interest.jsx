import React from 'react'

const Interest = ({ data = {} }) => {
  return (
    <div className="Interest-container col-6">
      <h2 className="Interest-title title">Interests</h2>
      {data.interest.map((interest) => (
        <div className="Interest-item" key={interest}>
          <h5>{interest}</h5>
        </div>
      ))}
    </div>
  )
}

export default Interest
