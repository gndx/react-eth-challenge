import React from 'react';
import { Boxing } from "../styles/components/Languages"

const Languages = (props) => {
  const { data = new Array(3).fill('No interests submitted') } = props;
  return (
    <Boxing>
    <section className="Languages">
      <h2 className="Languages-title">Languages</h2>
      {data.map((item, i) => (
        <p key={`Languages-${i}`} className="Languages-item">
          {item.name} <span>{item.percentage}</span>
        </p>
      ))}
    </section>
    </Boxing>
  );
};

export default Languages;