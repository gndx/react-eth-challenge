import React from 'react';
import Card from './Card';

const Interest = ({ interest = Array(3).fill('') }) => {
  return (
    <Card>
      <h2 className="Interest-title">Interest</h2>
      <ul>
        {interest.map((individualinterest, index) => (
          <li key={`${individualinterest}_${index}`} className="Interest-item">
            <h4>{individualinterest}</h4>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Interest;
