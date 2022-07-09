/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import db from '../../data.json';
import MyAcademic from './MyAcademic';

function Academic() {
  return (
    <div className='container my-2'>
      <h2 className='Academic-title h3 fw-bold'>Academic</h2>
      <div className='row m-2'>
        {db.data.Academic.map((e) => (
          <MyAcademic className='Academic-item' key={e.institution} {...e} />
        ))}
      </div>
    </div>
  );
};

export default Academic;
