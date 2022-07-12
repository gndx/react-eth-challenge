import React from 'react';

function SkillItem({ className }) {
  return (
    <div className={className}>
      <img className='skill-item__img' src='https://via.placeholder.com/150' alt='Skill Item' />
      <h3 className='skill-item__institution'>Skill Item</h3>
      <p className='skill-item__time'>Time</p>
    </div>
  );
};

export default SkillItem;
