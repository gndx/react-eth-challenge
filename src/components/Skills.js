import React from 'react'
import db from '../../data.json';
import MySkills from './MySkills';

const Skills = () => {
  return (
    <div className='p-2 m-5'>
    <h2 className='Skills-title font-bold text-lg'>Skills</h2>
    <div>
      {db.data.skills.map((e) => (
      <MySkills className='Skills-item' key={e.name} {...e}/>
      ))}
    </div>
  </div>
  )
}

export default Skills