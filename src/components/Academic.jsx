import React from 'react'
import { useDataContext } from '../context/DataContext';

function Academic() {
  const { data } = useDataContext()

  return (
    <div id='w-50' className='card bg-black'>
      <h1 className='Academic-title'>Academic</h1>
      <p className='Academic-item'>{data.data?.Academic[0].institution}</p>
      <p className='Academic-item'>{data.data?.Academic[0].startDate} - {data.data?.Academic[0].endDate}</p>
      <p className='Academic-item'>{data.data?.Academic[0].degree}</p>
    </div>
  )
}

export default Academic