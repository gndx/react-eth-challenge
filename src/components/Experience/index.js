import React from 'react';
import './styles.styl';

const Experience = ({ data }) => {
  return (
    <div className="experience">
      <h2 className="Experience-title">Experience Title</h2>
      {data.map((item, i) => (
        <p key={`experience-${i}`} className="Experience-item">
          {item.jobDescription}
        </p>
      ))}
    </div>
  );
};

export default Experience;
