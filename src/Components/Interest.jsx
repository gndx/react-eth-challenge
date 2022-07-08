
import React from 'react';
import data from '../../data.json';

const Interest = () => {
  return (
    <div className="Interest">
      <h2 className="Interest-title">
        Intereses
      </h2>
      {data && data.data.interest.map(
        item => (
          <span key={item} className="Interest-item">
            {item}
          </span>
        )
      )}
    </div>
  );
}

export default Interest; 