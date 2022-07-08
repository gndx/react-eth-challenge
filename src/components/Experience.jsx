import React from 'react';
import './Experience.styl';

export const Experience = ({ experience }) => {
  return (
    <section className="Experience-title wrapper">
      <h3>Experiencia</h3>
      <hr />
      {experience.map((item, index) => (
        <div key={index} className="Experience-item">
          <a
            className="Experience-item-company"
            target="_blank"
            href={item.link}
          >
            {item.title}
          </a>
          <p className="Experience-item-period">{item.periodRole}</p>
          <p className="Experience-item-description">{item.description}</p>
        </div>
      ))}
    </section>
  );
};
