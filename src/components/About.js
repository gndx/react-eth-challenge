import React from 'react';

const About = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
      <span className="About-title">About</span>

      <span className="Header-job-title">{data.profession}</span>
      <div className='about-info-wrapper'>
        <span className="Header-phone About-item">{data.phone}</span>
        <span className="Header-email About-item">{data.email}</span>
        <span className="Header-website About-item">
          <a href={'https://' + data.website} target="_blank">{data.website}</a>
        </span>
      </div>
      <div>
        <span className="Header-adress">{data.address}</span>
      </div>
    </div>
  );
};

export default About;
