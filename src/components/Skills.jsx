import React from 'react'
import { useDataContext } from '../context/DataContext';

function Skills() {
  const { data } = useDataContext()
  return (
    <div id='w-50' className='card bg-primary'>
      <h1 className='Skills-title'>Skills</h1>
      <div className='d-flex'>
        <ul style={{'marginLeft': '1rem'}}>
          <li className='Skills-item'>{data.data?.skills[3].name}</li>
          <li className='Skills-item'>{data.data?.skills[4].name}</li>
          <li className='Skills-item'>{data.data?.skills[5].name}</li>
        </ul>
        <ul style={{'marginLeft': '40px'}}>
          <li className='Skills-item'>{data.data?.skills[6].name}</li>
          <li className='Skills-item'>{data.data?.skills[7].name}</li>
          <li className='Skills-item'>{data.data?.skills[8].name}</li>
        </ul>
      </div> 
    </div>
  )
}

export default Skills