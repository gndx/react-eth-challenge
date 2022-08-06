import React from 'react';
import { useDataContext } from '../context/DataContext';
import { MdLocationCity, MdDescription } from 'react-icons/md';
import {BsCalendarDateFill} from 'react-icons/bs';

function Experience() {
  const { data } = useDataContext()

  return (
    <div className='card bg-black'>
      <h1 className='Experience-title'>Experience</h1>
      <p className='Experience-item'><MdLocationCity className='m-5'/>{data.data?.experience[0].company} - {data.data?.experience[0].endDate}</p>
      <p className='Experience-item' style={{'fontWeight': 'bold'}}>{data.data?.experience[0].jobTitle}</p>
      <p className='Experience-item' style={{'width': '50%'}}>{data.data?.experience[0].jobDescription}</p>
    </div>
  )
}

export default Experience