import React from 'react'

const Skills = ({ data = {} }) => {
  return (
    <div className="Skill-container col-6">
      <h2 className="Skill-title">Skills</h2>
      {data.skills.map((skills) => (
        <div className="Skill-item" key={skills.name}>
          <h5>{skills.name}</h5>
        </div>
      ))}
    </div>
  )
}

export default Skills
