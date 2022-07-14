import React from 'react';
import './styles.styl';

const Skills = (props) => {
  const { data = new Array(3).fill('No interests submitted') } = props;

  return (
    <section className="Skills">
      <h2 className="Skills-title">Skills</h2>
      {data.map((item, i) => (
        <p key={`Skills-${i}`} className="Skills-item">
          {item.name} <span>{item.percentage}</span>
        </p>
      ))}
    </section>
  );
};

export default Skills;
