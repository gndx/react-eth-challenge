import React from 'react';
import './styles.styl';

const Interest = (props) => {
  const { data = new Array(3).fill('No interests submitted') } = props;

  return (
    <section className="Interest">
      <h2 className="Interest-title">Interest</h2>
      {data.map((item, i) => (
        <p key={`Interest-${i}`} className="Interest-item">
          {item}
        </p>
      ))}
    </section>
  );
};

export default Interest;
