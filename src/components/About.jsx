import React from 'react';

const About = ({profession, email, phone, address, website}) => {
  return (
      <>
        <h3 className="About-title">{profession}</h3>
        <p className="About-item">{phone}</p>
        <p className="About-item">{email}</p>
        <p className="About-item">{website}</p>
        <p className="About-item">{address}</p>
      </>
  );
}

export default About;
