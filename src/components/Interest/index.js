import React from 'react';
import './styles.styl';

const Interest = ({ data }) => {
  return (
    <div className="interest">
      <h2 className="Interest-title">Interest title</h2>
      {data.map((item, i) => (
        <p key={`interest-${i}`} className="Interest-item">
          {item}
        </p>
      ))}
    </div>
  );
};

export default Interest;
