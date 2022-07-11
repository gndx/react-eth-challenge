import React from 'react';

const About = ({data}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom:20 }}>
      <span className="About-title">About</span>

      <span className="Header-job-title">{data.profession}</span>
      <div>
        <span className="Header-phone About-item">{data.phone}</span>
        <span className="Header-email About-item">{data.email}</span>
        <span className="Header-website About-item">{data.website}</span>
      </div>
      <div>
        <span className="Header-adress">{data.address}</span>
      </div>
    </div>
  );
};

export default About;
