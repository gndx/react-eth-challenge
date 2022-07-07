import React from 'react';

const Academic = () => (
  <div>
    <h2>.Academic-title</h2>
    {[1, 2].map(() => (
      <p>.Academic-item</p>
    ))}
  </div>
);

export default Academic;
