import React from 'react';
import '../styles/components/About.css';

const About = (props) => {
  const { info } = props;
  return (
    <div className="About-box">
      <h2 className="About-title">About</h2>
      <p className="About-item">
        <strong>E-mail:</strong> {info?.email}
      </p>
      <p className="About-item">
        <strong>Website:</strong> {info?.website}
      </p>
      <p className="About-item">{info?.address}</p>
    </div>
  );
};

export default About;