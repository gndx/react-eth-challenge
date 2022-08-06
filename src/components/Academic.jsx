import React from 'react'

function Academic({data}) {
  if(data){
    return (
      <div id='w-50' className='card bg-black'>
        <h1 className='Academic-title'>Academic</h1>
        <p className='Academic-item'>{data.data?.Academic[0].institution}</p>
        <p className='Academic-item'>{data.data?.Academic[0].startDate} - {data.data?.Academic[0].endDate}</p>
        <p className='Academic-item'>{data.data?.Academic[0].degree}</p>
      </div>
    )
  }

  return(
    <div id='w-50' className='card bg-black'>
        <h1 className='Academic-title'>Academic</h1>
        <p className='Academic-item'></p>
        <p className='Academic-item'></p>
        <p className='Academic-item'></p>
      </div>
  )
}

export default Academic