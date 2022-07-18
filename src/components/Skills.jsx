import React from 'react';
import { Boxing } from "../styles/components/Skills"

const Skills = (props) => {
  const { data = new Array(3).fill('No interests submitted') } = props;
  return (
    <Boxing>
    <section className="Skills">
      <h2 className="Skills-title">Skills</h2>
      {data.map((item, i) => (
        <p key={`Skills-${i}`} className="Skills-item">
          {item.name} <span>{item.percentage}</span>
        </p>
      ))}
    </section>
    </Boxing>
  );
};

export default Skills;