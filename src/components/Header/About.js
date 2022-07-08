import React from 'react';
import PropTypes from 'prop-types';
import AboutItem from './AboutItem';

const About = ({ data }) => {
  return (
    <div>
      <div className='About-title mt-1 text-sm flex flex-wrap gap-x-5'>
        <AboutItem className='About-item'>{data.phone}</AboutItem>
        <AboutItem className='About-item'>{data.email}</AboutItem>
        <AboutItem className='About-item'>{data.website}</AboutItem>
      </div>
      <span className='About-item text-sm text-slate-500 dark:text-slate-400'>{data.address}</span>
    </div>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;
