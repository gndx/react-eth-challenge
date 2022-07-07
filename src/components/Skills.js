import React from 'react';

function Skills() {
  return (
    <div>
      <h2>.Skills-title</h2>
      {[1, 2].map(() => (
        <p>.Skills-item</p>
      ))}
    </div>
  );
};

export default Skills;
