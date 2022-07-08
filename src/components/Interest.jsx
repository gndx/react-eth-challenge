import React from 'react';
import InterestCard from './InterestCard';
import Languages from './Languages';
import db from '../../data.json';


const Interest = () => {
  return (
    <div className="interestLanguages">
      <div className="interest">
        <h2 className="Interest-title">Interest</h2>
        <ul>
          {db.data.interest.map((int) => (
            <InterestCard key={int} className="Interest-item" {...int} />
          ))}
        </ul>
      </div>
      <div className="languages">
        <Languages />
      </div>
    </div>
  );
};

export default Interest;
