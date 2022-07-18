import React from 'react';
import { Boxing } from "../styles/components/Interest" 

const Interest = (props) => {
  const { data = new Array(3).fill('No interests submitted') } = props;
  return (
    <Boxing>
    <section className="Interest">
      <h2 className="Interest-title">Interest</h2>
      {data.map((item, i) => (
        <p key={`Interest-${i}`} className="Interest-item">
          {item}
        </p>
      ))}
    </section>
    </Boxing>
  );
};

export default Interest;