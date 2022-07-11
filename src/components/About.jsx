import React from 'react';
import '../styles/components/About.styl';

const About = ({ profession, address, email, website, phone }) => {
  return (
    <div className="About-container">
      <h2 className="About-title">{profession}</h2>
      <p className="About-item">{address}</p>
      <p className="About-item"><a href={`mailto:${email}`}>{email}</a></p>
      <p className="About-item"><a href={website} target="_blank">{website}</a></p>
      <p className="About-item"><a href={`tel:${phone}`}>{phone}</a></p>
    </div>
  );
};

export default About;