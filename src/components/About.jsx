import React from 'react';
import '../styles/components/About.styl';

function About({ avatar, name, profession, phone, email, website, address }) {
  return (
    <>
      <img src={avatar} alt='' />
      <section className='About-section'>
        <h2 className='About-title'>{name}</h2>
        <p className='About-item'>{profession}</p>
        <p className='About-item'>{phone}</p>
        <p className='About-item'>{email}</p>
        <a href={website} className='About-item'>Website</a>
        <p className='About-item'>{address}</p>
      </section>
    </>
  );
}

export default About;
