import React from 'react'
import db from '../../data.json';
import MyLanguajes from './MyLanguajes';

const Languages = () => {

    return (
      <div className='p-2 m-5'>
      <h2 className='Languages-title font-bold size-lg'>Languages</h2>
      <div>
        {db.data.languages.map((e) => (
        <MyLanguajes className='Languages-item' key={e.name} {...e}/>
        ))}
      </div>
    </div>
    )
  
}

export default Languages