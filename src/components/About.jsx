import React from 'react';

const About = ({profession, email, phone, address, website}) => {
  return (
      <>
        <h3 className="About-title">{profession}</h3>
        <div>
          <span className="About-item">📞 {phone}</span>
          <span className="About-item">📬 {email}</span>
          <span className="About-item">🌎 {website}</span>
          <p className="About-item">{address}</p>
        </div>
      </>
  );
}

export default About;
