import React from 'react';

const About = ({ data = ['', '', ''] }) => {
  return (
    <div>
      <h1 className="About-title">About</h1>
      {data?.map((el) => {
        return <div className="About-item">{el}</div>;
      })}
    </div>
  );
};
export default About;
