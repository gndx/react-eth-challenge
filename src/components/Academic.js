import React from 'react'
import db from '../../data.json';
import MyAcademic from './MyAcademic';

const Academic = () => {
    return (
      <div className='p-2 m-5'>
        <h2 className='Academic-title font-bold text-lg'>Academic</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12'>
          {db.data.Academic.map((e) => (
          <MyAcademic className='Academic-item' key={e.institution} {...e}/>
          ))}
        </div>
      </div>
    )
}

export default Academic