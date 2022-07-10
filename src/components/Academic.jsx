import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({ 
  items = Array(3).fill({
    "degree": "",
    "description": "",
    "endDate": "",
    "institution": "",
    "startDate": ""
  })
}) => {
  return (
    <div className="Academic-container hoverable">
      <h2 className="Academic-title">Academic</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="Academic-item">
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <p>{item.startDate}-{item.endDate}</p>
            <p>{item.description}</p>
          </li>
        )
        )}
      </ul>
    </div>
  );
};

export default Academic;