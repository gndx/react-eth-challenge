import React from 'react';
import { Title } from './style';

const About = () => {
  return (
    <>
      <Title className="About-title">About</Title>
      <ul>
        <li className="About-item">home</li>
        <li className="About-item">about us</li>
        <li className="About-item">contact</li>
      </ul>
    </>
  );
};

export default About;
