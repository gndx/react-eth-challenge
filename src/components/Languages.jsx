import React from 'react';
import './Languages.styl';

export const Languages = ({ languages }) => {
  return (
    <section className="Languages-title wrapper">
      <h3>Idiomas</h3>
      <hr />
      {languages.map((item, index) => (
        <div key={index} className="Languages-item">
          <h5 className="Languages-item-title">{item.title}</h5>
          <p className="Languages-item-description">{item.description}</p>
        </div>
      ))}
    </section>
  );
};
