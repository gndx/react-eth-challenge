import React from 'react';

function Experience() {
  return (
    <div>
      <h2>.Experience-title</h2>
      {[1, 2, 3, 4].map((id) => (
        <p key={id}>.Experience-item</p>
      ))}
    </div>
  );
}

export default Experience;
