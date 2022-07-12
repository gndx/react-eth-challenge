import React from 'react';

function LanguagesItem({ className, item }) {
  return (
    <div className={className}>
      <img className='Languages-item__img' src={item.img} alt='Languages Item' />
      <h3 className='Languages-item__institution'>{item.name}</h3>
      <p className='Languages-item__time'>{`Level: ${item.level}`}</p>
    </div>
  );
};

export default LanguagesItem;
