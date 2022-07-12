import React from 'react';

function AcademicItem({ className, item }) {
  return (
    <div className={className}>
      <img className='Experience-item__img' src={item.img} alt='Experience Item' />
      <h3 className='Experience-item__institution'>{item.name}</h3>
      <p className='Experience-item__time'>{item.date}</p>
    </div>
  );
};

export default AcademicItem;
