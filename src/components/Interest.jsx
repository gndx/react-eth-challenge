import React from 'react';

const Interest = ({ interest }) => {
  return (
    <div>
      <h1 className="Interest-title">Interest</h1>
      <div className="interest-container-items">
        {interest ? interest.map((items) => (
          <div className='single-item-interest Interest-item' key={`${items.name}-${items.percentage}`}>
            <h3>{items}</h3>
          </div>
        )) : ''}
      </div>
    </div>
  );
};

export default Interest;
