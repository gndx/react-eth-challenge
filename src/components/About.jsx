import React from 'react';
import '../styles/components/About.styl';

function About({ phone, email, website, address }) {
  return (
    <section className='About'>
      <h2 className='About-title'>Contacts</h2>
      <ul className='About-list'>
        <li className='About-item'>
          <span>Phone: </span>
          {phone}
        </li>
        <li className='About-item'>
          <span>Email: </span>
          {email}
        </li>
        <li className='About-item'>
          <span>Web: </span>
          {website}
        </li>
        <li className='About-item'>
          <span>Address: </span>
          {address}
        </li>
      </ul>
    </section>
  );
}

export default About;
