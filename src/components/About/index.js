import React from 'react';
import { AboutStyle } from './styles';

export default function About({ data = {} }) {
  return (
    <AboutStyle key='AboutStyle'>
      <h2 className='About-title'>About</h2>
      <p className='About-item' key='Profession'>
        <b>Profession:</b>
        {' '}
        {data.profession}
        {' '}

      </p>
      <p className='About-item' key='Phone'>
        <b>Phone:</b>
        {' '}
        {data.phone}
        {' '}

      </p>
      <p className='About-item' key='Email'>
        <b>Email:</b>
        {' '}
        {data.email}
        {' '}

      </p>
      <p className='About-item' key='Website'>
        <b>Website:</b>
        {' '}
        {data.website}
        {' '}

      </p>
      <p className='About-item' key='Address'>
        <b>Address:</b>
        {' '}
        {data.address}

      </p>
    </AboutStyle>
  );
};
