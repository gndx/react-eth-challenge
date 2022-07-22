import React from 'react';
import { Titulo } from './Aboutstyles';

const About = ({ address, email, phone, profession, website }) => {
  return (
    <article>
      <Titulo className="About-title">{profession}</Titulo>
      <ul>
        <li className="About-item">Mobile Phone: +57 {phone}</li>
        <li className="About-item">Email: {email}</li>
        <li className="About-item">{website}</li>
        <li className="About-item">{address}</li>
      </ul>
    </article>
  );
};

export default About; 