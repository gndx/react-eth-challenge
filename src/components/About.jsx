import React from 'react';

const About = ({ address, email, phone, profession, website }) => {
  return (
    <div className='abt'>
      <h2 className="About-title">{profession}</h2>
      <ul className='abt-lst'>
        <li className="About-item">{phone}</li>
        <li className="About-item">{email}</li>
        <li className="About-item">{website}</li>
        <li className="About-item">{address}</li>
      </ul>
    </div>
  );
};

export default About;