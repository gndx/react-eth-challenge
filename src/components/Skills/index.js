import React from 'react'

function Skills(props) {
  return (
    <div className='Skills card'>
      <h1 className='Skills-title'>Skills</h1>
      
        <li className='Skills-item'>
          {props.skills ? Object.values(props.skills)[0].name : ''}
        </li>
        <li className='Skills-item'>
          {props.skills ? Object.values(props.skills)[1].name : ''}
        </li>
        <li className='Skills-item'>
          {props.skills ? (Object.values(props.skills)[2].name + '-' + Object.values(props.skills)[2].percentage ) : ''}
        </li>
      
    </div>
  )
}

export default Skills