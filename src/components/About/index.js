import React from 'react';
import './styles.styl';

export function About({ email = '', profession = '', address = '', website = '' }) {
  return (
    <div className='About-title'>
      <p className='About-item'>
        Email:
        {email}
      </p>
      <p className='About-item'>
        Profesion:
        {profession}
      </p>
      <p className='About-item'>
        Address:
        {address}
      </p>
      <p className='About-item'>
        Website:
        {website}
      </p>
    </div>
  );
}
