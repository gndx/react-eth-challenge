import React from 'react';
import { AboutStyle } from './styles';
import db from '../../../data.json';

export default function About() {
  return (
    <AboutStyle key='AboutStyle'>
      <h2 className='About-title'>About</h2>
      <div className='About-item' key='Profession'>
        <b>Profession:</b>
        {' '}
        {db.data.profession}
        {' '}

      </div>
      <div className='About-item' key='Phone'>
        <b>Phone:</b>
        {' '}
        {db.data.phone}
        {' '}

      </div>
      <div className='About-item' key='Email'>
        <b>Email:</b>
        {' '}
        {db.data.email}
        {' '}

      </div>
      <div className='About-item' key='Website'>
        <b>Website:</b>
        {' '}
        {db.data.website}
        {' '}

      </div>
      <div className='About-item' key='Address'>
        <b>Address:</b>
        {' '}
        {db.data.address}

      </div>
    </AboutStyle>
  );
};
