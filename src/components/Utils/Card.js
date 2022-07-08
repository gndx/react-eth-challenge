import React from 'react';

const Card = ({ children, className }) => {

  const cardClasses = 'bg-slate-800 ring-1 ring-slate-900/5 dark:text-slate-400 shadow-md p-6 rounded-md mb-5';
  const classes = className ? `${cardClasses} ${className}` : cardClasses;
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;
