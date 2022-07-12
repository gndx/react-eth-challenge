import React, { useId } from 'react';

function Interest({ interest = [] }) {
  return (
    <div className="Interest">
      <h2 className="Interest-title">Interest</h2>
      <ul>
        {interest.map((item) => (
          <li className="Interest-item" key={useId()}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Interest;
