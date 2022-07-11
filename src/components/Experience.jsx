import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({ 
  items = Array(3).fill({
    "company": "",
    "endDate": "",
    "jobDescription": "",
    "jobTitle": "",
    "startDate": ""
  })
}) => {
  return (
    <div className="Experience-container hoverable">
      <h2 className="Experience-title">Experience</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="Experience-item">
            <h3>{item.company}</h3>
            <p>{item.startDate}-{item.endDate}</p>
            <p>{item.jobTitle}</p>
            <p>{item.jobDescription}</p>
          </li>
        )
        )}
      </ul>
    </div>
  );
};

export default Experience;