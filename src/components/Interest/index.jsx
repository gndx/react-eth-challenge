import React from 'react';

const Interest = () => (
  <div>
    <h2>.Interest-title</h2>
    {[1, 2, 3].map(() => (
      <p>.Interest-item</p>
    ))}
  </div>
);

export default Interest;