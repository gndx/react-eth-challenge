import React from 'react';

const Item = ({ name, percentage = '' }) => {
  const number = percentage.slice(0, 2);

  return (
    <li className="Skills-item">
      <p>{name}</p>
      <progress max="100" value={number}>
        {percentage}
      </progress>
      <span>{percentage}</span>
    </li>
  );
};

function Skills({ skills = [] }) {
  return (
    <div className="Skills">
      <h2 className="Skills-title">Skills</h2>
      <ul className="Skills-list">
        {skills.map((item, i) => (
          <Item key={Date.now() + i} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default Skills;
