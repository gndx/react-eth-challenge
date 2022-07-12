import React from 'react';

function SkillItem({ className, item }) {
  return (
    <div className={className}>
      <img className='skill-item__img' src={item.img} alt='Skill Item' />
      <h3 className='skill-item__institution'>{item.name}</h3>
      {/* <p className='skill-item__time'>Time</p> */}
    </div>
  );
};

export default SkillItem;
