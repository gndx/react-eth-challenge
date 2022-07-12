import React from 'react';

function LanguagesItem({ className }) {
  return (
    <div className={className}>
      <img className='Languages-item__img' src='https://via.placeholder.com/150' alt='Languages Item' />
      <h3 className='Languages-item__institution'>Languages Item</h3>
      <p className='Languages-item__time'>Time</p>
    </div>
  );
};

export default LanguagesItem;
