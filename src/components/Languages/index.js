import React from 'react';
import './styles.styl';

const Languages = (props) => {
  const { data = new Array(3).fill('No interests submitted') } = props;

  return (
    <section className="Languages">
      <h2 className="Languages-title">Languages</h2>
      {data.map((item, i) => (
        <p key={`Languages-${i}`} className="Languages-item">
          {item.name} <span>{item.percentage}</span>
        </p>
      ))}
    </section>
  );
};

export default Languages;
