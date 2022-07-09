/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import db from '../../data.json';
import MyLanguajes from './MyLanguajes';

function Languages() {

  return (
    <div className='container my-2'>
      <h2 className='Languages-title h3 fw-bold'>Languages</h2>
      <div className='row m-2'>
        {db.data.languages.map((e) => (
          <MyLanguajes className='Languages-item' key={e.name} {...e} />
        ))}
      </div>
    </div>
  );

};

export default Languages;
