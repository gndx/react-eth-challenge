import React from 'react'

export const Skills = ({title = 'Skills', data}) => {

  const skills = data ? data.map(data => data.name) : null

  const skillsHtml = skills ? skills.map(skill => <div className='Skills-item'>{skill}</div>) : null

  return (
    <div>
      
      <h1 className='Skills-title'>{title}</h1>

      { skillsHtml }

    </div>
  )
    
}