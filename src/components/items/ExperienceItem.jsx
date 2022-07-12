import React from 'react';

function ExperienceItem({ className }) {
  return (
    <div className={className}>
      <img className='Experience-item__img' src='https://via.placeholder.com/150' alt='Experience Item' />
      <h3 className='Experience-item__institution'>Experience Item</h3>
      <p className='Experience-item__time'>Time</p>
    </div>
  );
}

export default ExperienceItem;
