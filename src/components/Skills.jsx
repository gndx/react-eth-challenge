import React, { useContext } from 'react'
import AppContext from '../context/context'

const Skills = () => {
  const {
    skills
  } = useContext(AppContext)

  return (
    <div>
      <h1 className="Skills-title">Skills</h1>
      <ul>
        {
          skills?.map(({
            name,
            percentage
          }, index) => (
            <li className="Skills-item" key={name+index}>
              <span>{name}</span>
              {/* <span>{percentage}</span> */}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Skills