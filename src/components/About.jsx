import React from 'react';
import '../styles/App.css';
import PropTypes from 'prop-types';
import { useVite } from '../context/ViteContext';

const About = ({ className }) => {
  const { profile } = useVite();
  return (
    <div className={`${className}}`}>
      <h2 className={'About-title'}>{profile?.profession}</h2>
      <ul>
        <li className={'About-item'}>{profile?.phone}</li>
        <li className={'About-item'}>{profile?.email}</li>
        <li className={'About-item'}>{profile?.website}</li>
        <li className={'About-item'}>{profile?.address}</li>
      </ul>
    </div>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;
