import React from 'react';

const About = (props) => {
  const { data = new Array(1).fill('.') } = props;
  
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