import React from 'react';
import { Boxing } from "../styles/components/Interest" 

const Interest = ({ interest = Array(3).fill('') }) => {
  return (
    <Boxing>
      <h2 className="Interest-title">Why are my interest?</h2>
      <ul>
        {interest.map((individualinterest, index) => (
          <li key={`${individualinterest}_${index}`} className="Interest-item">
            {individualinterest}
          </li>
        ))}
      </ul>
    </Boxing>
  );
};

export default Interest;