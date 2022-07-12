import React from 'react';

function Interest({ interest = [] }) {
  return (
    <div className="Interest">
      <h2 className="Interest-title">Interest</h2>
      <ul>
        {interest.map((item, i) => (
          <li className="Interest-item" key={Date.now() + i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Interest;
