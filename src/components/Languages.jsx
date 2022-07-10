import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ 
  items = Array(3).fill({
    "name": "",
    "percentage": ""
  })
}) => {
  return (
    <div className="Languages-container">
      <h2 className="Languages-title">Languages</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="Languages-item">
            <h3>{item.name}</h3>
            <p>{item.percentage}</p>
          </li>
        )
        )}
      </ul>
    </div>
  );
};

export default Languages;