import React from 'react';
import './Academic.styl';

export const Academic = ({ academic }) => {
  return (
    <div className="Academic-title wrapper">
      <h3>Formación académica</h3>
      <hr />
      {academic.map((item, index) => (
        <div key={index} className="Academic-item">
          <a
            className="Academic-item-institue"
            target="_blank"
            href={item.link}
          >
            {item.title}
          </a>
          <p className="Academic-item-period">{item.periodRole}</p>
          <p className="Academic-item-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};
