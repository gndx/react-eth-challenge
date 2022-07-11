import React from 'react';

function SkillsItem({ skill }) {
  const { name, percentage } = skill;
  const cleanPercentage = percentage.replace('%', '');
  return (
    <>
      <h3 className='Skills-name'>{name}</h3>
      <progress className='Skills-bar' value={cleanPercentage} max='100'>
        {percentage}
      </progress>
    </>
  );
}

export default SkillsItem;
