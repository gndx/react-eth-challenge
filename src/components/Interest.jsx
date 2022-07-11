import React from 'react';

const Interest = ({ interest }) => {
  return (
    <div>
      <h1 className="Interest-title">Interest</h1>
      <div className="interest-container-items">
        {interest ? interest.map((items, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className='single-item-interest Interest-item' key={`${items.name}-${items.percentage}-${i}`}>
            <h3>{items}</h3>
          </div>
        )) : ''}
      </div>
    </div>
  );
};

export default Interest;
