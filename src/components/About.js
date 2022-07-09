/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import db from '../../data.json';

function About() {
  return (
    <div className='row my-5'>
      <div className='col-12 col-md-6 d-flex'>
        <img src={db.data.avatar} className='w-50 mx-auto' />
      </div>
      <div className='col-12 col-md-6 d-flex flex-column'>
        <p className='About-title fs-2 fw-bold my-auto'>{db.data.name}</p>
        <p className='About-item fs-4 fw-semibold my-auto'>{db.data.profession}</p>
        <p className='About-item fs-5 my-auto'>{db.data.address}</p>
        <div className='d-flex my-md-auto my-4'>
          {db.data.social.map(
            (s) => <a key={s.name} className='About-item btn btn-outline-dark m-auto' href={s.url}>{s.name}</a>,
          )}
          <a className='About-item btn btn-outline-dark m-auto' href={db.data.website}>website</a>
          <a className='About-item btn btn-outline-dark m-auto' href={`mailto:${db.data.email}`} type='email'>email</a>
        </div>
      </div>
    </div>
  );
};

export default About;
