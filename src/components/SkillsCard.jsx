import React from 'react';


const SkillsCard = ({name, percentage }) => {
  return (
    <article>
    <div className="Skills-item">
        {name} - {percentage}
    </div>
  </article>
  )
}

export default SkillsCard;