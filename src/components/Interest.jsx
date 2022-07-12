import React from 'react';
import {Interes} from "../styles/components/Interest" 

const Interest = ({ interest = Array(3).fill('') }) => {
  return (
    <div>
      <h2 className="Interest-title">Why are my interest?</h2>
      <Interes>
        {interest.map((individualinterest, index) => (
          <li key={`${individualinterest}_${index}`} className="Interest-item">
            <h4>{individualinterest}</h4>
          </li>
        ))}
      </Interes>
    </div>
  );
};

export default Interest;