import React from 'react';

const Languages = ({ data }) => {
  return (
    <div>
      <h2 className="Languages-title">Languages</h2>
      {data.map((item,i) => (
        <p key={`languages-${i}`} className="Languages-item">{item.name}</p>
      ))}
    </div>
  );
};

export default Languages;
