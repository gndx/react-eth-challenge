import React from 'react';
import '../styles/components/About.styl';

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
        <li className='About-item'>
          <a href={`tel:${phone}`} target='_blank' rel='noopener noreferrer'>
            {phone}
          </a>
        </li>
        <li className='About-item'>
          <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>
            {email}
          </a>
        </li>
        <li className='About-item'>
          <a href={website} target='_blank' rel='noopener noreferrer'>
            {website}
          </a>
        </li>
      </ul>
      <p>{address}</p>
    </>
  );
}

export default About;
