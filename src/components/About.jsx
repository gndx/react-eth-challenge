import React from 'react';
import data from '../../data.json';

import '../styles/components/About.styl';

const About = () => {
  return (
    <div className="About">
      <h2 className="About-title"></h2>
      <span className="About-phone About-item">
        { data.data?.phone }
      </span>
      <span className="About-email About-item">
        { data.data?.email }
      </span>
      <span className="About-website About-item">
        { data.data?.website }
      </span>
    </div>
  );
}

export default About;