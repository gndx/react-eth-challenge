import React from 'react';

const InterestCard = ({interest}) => {
  return (
    <article>
      <div className="Interest-item">
        {interest}
      </div>
    </article>
  )
}

export default InterestCard;