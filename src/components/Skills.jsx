import React from 'react'

function Skills({data}) {
  if(data){
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
  return(
    <div className='card bg-primary'>
      <h1 className='Skills-title'>Skills</h1>
      <p className='Skills-item'></p>
      <p className='Skills-item'></p>
      <p className='Skills-item'></p>
    </div>
  )
}

export default Skills