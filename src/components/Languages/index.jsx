import React from 'react';

const Languages = () => (
  <div>
    <h2>.Languages-title</h2>
    {[1, 2, 3].map(() => (
      <p>.Languages-item</p>
    ))}
  </div>
);

export default Languages;
