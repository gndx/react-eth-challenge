import React from 'react'
import '../styles/components/Skills.styl'


const Skills = ({data}) => {

  return (
    <div className="Skills-container">
      <h1 className="Skills-title">Skills</h1>
      <li className="Skills-list">
        {data.map((skill,idx) => {
          return (
          <ul key={idx} className="Skills-item">
            <span>{skill["name"]}</span>
            <span>{skill["percentage"]}</span>
          </ul>
        )})}
      </li>
    </div>
  )
}

export default Skills