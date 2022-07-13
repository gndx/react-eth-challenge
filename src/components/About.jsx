import React from 'react';
import CompleteData from '../../data.json';

function About() {
  const { data } = CompleteData;
  return (
    <>
      <h2 className='Header-job-title About-title'>{data.profession}</h2>
      <div className='Header-contact'>
        <h3 className='Header-email About-item'>{data.email}</h3>
        <h3 className='Header-website About-item'>{data.website}</h3>
      </div>
      <h3 className='Header-address About-item'>{data.address}</h3>
    </>
  );
};

export default About;
