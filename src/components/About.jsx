import React from 'react';

const About = ({profession, email, phone, address, website}) => {
  return (
      <>
        <h3 className="About-title">{profession}</h3>
        <p className="About-item">
          <span>📞 {phone}</span>
          <span>📬 {email}</span>
          <span>🌎 {website}</span>
        </p>
        <p className="About-item">{address}</p>
      </>
  );
}

export default About;
