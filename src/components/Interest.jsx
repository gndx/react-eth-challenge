import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ 
  items = Array(3).fill({
    "name": ""
  })
}) => {
  return (
    <div className="Interest-container hoverable">
      <h2 className="Interest-title">Interest</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="Interest-item">
            <p>{item}</p>
          </li>
        )
        )}
      </ul>
    </div>
  );
};

export default Interest;