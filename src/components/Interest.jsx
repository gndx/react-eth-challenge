import React from 'react';
import './Interest.styl';

export const Interest = ({ interest }) => {
  return (
    <section className="Interest-title wrapper">
      <h3>Intereses</h3>
      <hr />
      {interest.map((item, index) => (
        <div key={index} className="Interest-item">
          <h5 className="Interest-item-title">{item.title}</h5>
        </div>
      ))}
    </section>
  );
};
