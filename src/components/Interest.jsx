import React from 'react';

const Interest = ({ data = ['', '', ''] }) => {
  return (
    <div>
      <h3 className="Interest-title">Interest</h3>
      <ul>
        {data.map((item, i) => {
          return (
            <li className="Interest-item" key={`item${i}`}>
              <h3> {item}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Interest;
