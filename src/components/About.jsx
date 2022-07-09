import React from 'react';
import '../styles/components/About.styl';
import AboutItem from './AboutItem';

function About({
  profession,
  address,
  email,
  website,
  phone,
}) {

  return (
    <>
      <h3 className='About-title'>{profession}</h3>
      <ul>
        <AboutItem url={`tel:${phone}`} text={phone} className='About-item' />
        <AboutItem url={`mailto:${email}`} text={email} className='About-item' />
        <AboutItem url={website} text={website} className='About-item' />
      </ul>
      <p>{address}</p>
    </>
  );
}

export default About;
