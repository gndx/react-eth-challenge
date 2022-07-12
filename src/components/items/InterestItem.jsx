import React from 'react';

function InterestItem({ className }) {
  return (
    <div className={className}>
      <img className='Interest-item__img' src='https://via.placeholder.com/150' alt='Interest Item' />
      <h3 className='Interest-item__institution'>Interest Item</h3>
      <p className='Interest-item__time'>Time</p>
    </div>
  );
};

export default InterestItem;
