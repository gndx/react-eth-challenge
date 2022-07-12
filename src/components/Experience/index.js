import React from 'react';
import './styles.styl';

const Experience = ({ data }) => {
  return (
    <div className="experience">
      <h2 className="Experience-title">Experiencia</h2>
      {data.map((item, i) => (
        <div key={`experience-${i}`} className="Experience-item">
          <h4>{item.company}</h4>
          <b>
          {item.jobTitle}
          </b>
          <h5>{item.startDate} - {item.endDate}</h5>
          <p>{item.jobDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
