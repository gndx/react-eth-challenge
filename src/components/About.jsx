import React from 'react';
import '../styles/components/About.styl';

const About = ({ address, email, phone, profession, website }) => {
  return (
    <article>
      <h2 className="About-title">{profession}</h2>
      <ul>
        <li className="About-item">
          <a href={`tel:${phone}`}>{phone}</a>
        </li>
        <li className="About-item">
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li className="About-item">
          <a href={website}>{website}</a>
        </li>
        <li className="About-item">{address}</li>
      </ul>
    </article>
  );
};

export default About;
