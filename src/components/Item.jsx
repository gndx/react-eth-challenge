import React from 'react';

function Item({
  className,
  title,
  sub,
  description,
  date,
}) {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <h5>{sub}</h5>
      <p>{description}</p>
      <h5>{date}</h5>
    </div>
  );
};

export default Item;
