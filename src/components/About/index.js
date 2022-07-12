import React from 'react';
import './styles.styl';

const About = ({ data }) => {
  return (
    <div className='about'>
      <h2 className="About-title">Cualidades</h2>
      {data.map((item) => (
        <p key={item} className="About-item">
          {item}
        </p>
      ))}
    </div>
  );
};

export default About;
