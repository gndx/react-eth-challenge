import React from 'react'
import db from '../../data.json';
import MyInterest from './MyInterest';

const Interest = () => {
  return (
    <div className='p-2 m-5'>
    <p className='Interest-title font-bold size-lg'>Interest</p>
      {db.data.interest.map((e,i) => (
      <MyInterest className='Interest-item' key={i} e={e}/>
      ))}
    </div>
  )
}

export default Interest