/* eslint-disable import/no-cycle */
import React from 'react';
import { appContext } from '../containers/AppContext';

function About() {

  const { profession, address, email, phone, name } = appContext();
  return (
    <section className='About'>
      <span className='About-title'>{name}</span>
      <span className='About-item'>{profession}</span>
      <span className='About-item'>{phone}</span>
      <span className='About-item'>{email}</span>
      <span className='About-item'>{address}</span>
    </section>
  );
}

export default About;
