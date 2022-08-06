import React from 'react';
import { MdLocationCity} from 'react-icons/md';

function Experience({data}) {
  if(data){
    return (
      <div className='card bg-black'>
        <h1 className='Experience-title'>Experience</h1>
        <p className='Experience-item'><MdLocationCity className='m-5'/>{data.data?.experience[0].company} - {data.data?.experience[0].endDate}</p>
        <p className='Experience-item' style={{'fontWeight': 'bold'}}>{data.data?.experience[0].jobTitle}</p>
        <p className='Experience-item' style={{'width': '50%'}}>{data.data?.experience[0].jobDescription}</p>
      </div>
    )
  }

  return(
    <div className='card bg-black'>
      <h1 className='Experience-title'>Experience</h1>
      <p className='Experience-item'></p>
      <p className='Experience-item'></p>
      <p className='Experience-item'></p>
    </div>
  )
 
}

export default Experience