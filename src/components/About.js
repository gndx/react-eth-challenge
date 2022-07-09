import React from 'react';
import '../styles/components/App.styl';

function About({ data = {} }) {
  return (
    <div className='about'>
      <h2 className='About-title'>Contact</h2>
      <a className='About-item' href={`mailto:${data.email}`}>{data.email}</a>
      <p className='About-item'>{data.phone}</p>
      <a className='About-item' href={data.website}>{data.website}</a>
      <p className='About-item'>{data.address}</p>
    </div>
  );
};

export default About;
