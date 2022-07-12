import React from 'react';
import './styles.styl';

const Languages = ({ data }) => {
  return (
    <div className="languages">
      <h2 className="Languages-title">Languages</h2>
      {data.map((item, i) => (
        <p key={`languages-${i}`} className="Languages-item">
          {item.name} <span>{item.percentage}</span>
        </p>
      ))}
    </div>
  );
};

export default Languages;
