import React from 'react';
import '../styles/App.css';
import PropTypes from 'prop-types';
import { useVite } from '../context/ViteContext';

const About = ({ className }) => {
  const { profile } = useVite();
  const { profession, address, email, website, phone } = profile;
  return (
    <div className={`${className}}`}>
      <h2 className={'About-title'}>{profession}</h2>
      <ul>
        <li className={'About-item'}>{phone}</li>
        <li className={'About-item'}>{email}</li>
        <li className={'About-item'}>{website}</li>
        <li className={'About-item'}>{address}</li>
      </ul>
    </div>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;
