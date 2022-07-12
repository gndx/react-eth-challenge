import React from 'react'

const Skills = ({ data = {} }) => {
  return (
    <div className="Skills-container col-4">
      <h2 className="Skills-title title">Skills</h2>
      {data.skills.map((skills) => (
        <div className="Skills-item" key={skills.name}>
          <h6>{skills.name}</h6>
        </div>
      ))}
    </div>
  )
}

export default Skills
