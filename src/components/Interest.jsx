import React from 'react';

function Interest({ interest: interests }) {
  return (
    <div className="Interest">
      <div className="card">
        <div className="Interest-title">Interest</div>
        {interests?.map((interest) => (
          <div key={interest} className="Interest-item">
            {interest}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interest;
