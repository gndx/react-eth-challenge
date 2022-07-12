import React from 'react';

const Item = ({ name, percentage = '' }) => {
  const number = percentage.slice(0, 2);

  return (
    <li className="Languages-item">
      <p>{name}</p>
      <progress max="100" value={number}>
        {percentage}
      </progress>
      <span>{percentage}</span>
    </li>
  );
};

function Languages({ languages = [] }) {
  return (
    <div className="Languages">
      <h2 className="Languages-title">Languages</h2>
      <ul className="Languages-list">
        {languages.map((item, i) => (
          <Item key={Date.now() + i} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default Languages;
