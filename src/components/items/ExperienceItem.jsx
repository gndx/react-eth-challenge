import React from 'react';

function ExperienceItem({ className, item }) {
  console.log(item);
  return (
    <div className={className}>
      <img className='Experience-item__img' src={item.img} alt='Experience Item' />
      <h3 className='Experience-item__institution'>{item.jobTitle}</h3>
      <p className='Experience-item__time'>{`${item.startDate} - ${item.endDate}`}</p>
    </div>
  );
}

export default ExperienceItem;
