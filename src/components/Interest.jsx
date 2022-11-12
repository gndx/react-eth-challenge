import React from 'react';
import Card from './Card';

const Interest = ({ interest }) => {
  return (
    <Card>
      <h2 className="Interest-title">Interest</h2>
      <div className="Interest-item"></div>
      <div className="Interest-item"></div>
      <ul className="Interest-item">
        {interest &&
          interest.map((item) => {
            return (
              <li className="Interest-item" key={item}>
                {item}
              </li>
            );
          })}
      </ul>
    </Card>
  );
};

export default Interest;
