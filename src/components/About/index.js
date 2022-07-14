import React from 'react';
import './styles.styl';

const About = (props) => {
  const { data = new Array(3).fill('No hay dato') } = props;
  
  return (
    <div className='about'>
      <h2 className="About-title">About</h2>
      {data.map((item) => (
        <p key={item} className="About-item">
          {item}
        </p>
      ))}
    </div>
  );
};

export default About;
