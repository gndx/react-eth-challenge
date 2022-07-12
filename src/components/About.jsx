import React from 'react';
import '../styles/components/App.styl'

const About = ({ address, email, phone, profession, website }) => {
  return (
    <article>
      <h2 className='About-title'>{profession}</h2>
      <ul>
        <li className="About-item">{phone}</li>
        <li className="About-item">{email}</li>
        <li className="About-item">{website}</li>
        <li className="About-item">{address}</li>
      </ul>
    </article>
  );
};

export default About;