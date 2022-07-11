import React from 'react';

const About = ({ profession, phone, email, website, address }) => {
  return (
    <>
      <h3 className="About-title">{profession}</h3>
      <ul>
        <div className='about-li-coontainer'>
          <li className="About-item">{phone}</li>
          <li className="About-item">{email}</li>
          <li className="About-item">
            {address}
          </li>
        </div>
        <li className="About-item"><a href="https://rubenescalante.com">{website}</a></li>
      </ul>
    </>
  );
};

export default About;
