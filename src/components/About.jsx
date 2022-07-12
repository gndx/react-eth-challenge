import React from 'react';
import '../styles/components/About.css';

function About({
  profession,
  address,
  email,
  website,
  phone,
}) {

  return (
    <>
      <h2 className='About-title'>
        {profession}
      </h2>
      <div>
        <a href={`tel:${phone}`} target='_blank' rel='noopener noreferrer' className='About-item'>
          {phone}
        </a>
        <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer' className='About-item'>
          {email}
        </a>
        <a href={website} target='_blank' rel='noopener noreferrer' className='About-item'>
          {website}
        </a>
      </div>
      <p>
        {address}
      </p>
    </>
  );
}

export default About;
