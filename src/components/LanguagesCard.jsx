import React from 'react';

const LanguagesCard = ({ name, percentage }) => {
  return (
    <article>
      <div className="Languages-item">
        {name} - {percentage}
      </div>
    </article>
  );
};

export default LanguagesCard;
