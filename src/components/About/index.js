import React from 'react';

function About({ profession, address, phone, email, website }) {
  return (
    <>
      <h2 className='About-title'>{profession}</h2>
      <div className='Header-contact'>
        <li className='About-item'>
          <a
            className='Header-phone'
            href={phone}
            target='_blank'
            rel='noreferrer'
          >
            Call me 📲
          </a>
        </li>
        <li className='About-item'>
          <a
            className='Header-email'
            href={email}
            target='_blank'
            rel='noreferrer'
          >
            Mail me 📧
          </a>
        </li>
        <li className='About-item'>
          <a
            className='Header-website'
            href={website}
            target='_blank'
            rel='noreferrer'
          >
            Check my website 🐱‍💻
          </a>
        </li>
        <p className='Header-adress'>{address}</p>
      </div>
    </>
  );
}
export default About;
