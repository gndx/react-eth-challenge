/* eslint-disable react/no-array-index-key */
import React from 'react';
import db from '../../data.json';
import MyInterest from './MyInterest';

function Interest() {
  return (
    <div className='container my-2'>
      <p className='Interest-title h3 fw-bold'>Interest</p>
      <div className='row m-2'>
        {db.data.interest.map((e, i) => (
          <MyInterest className='Interest-item' key={i} e={e} />
        ))}
      </div>
    </div>
  );
};

export default Interest;
