import React from 'react';

const Interest = ({ interests = [{}, {}, {}] }) => {
  return (
    <div className="half-wrapper">
      <div className="Interest-title">Interest</div>
      <div>
        {interests &&
          interests.map((item, index) => {
            return (
              <span key={index} className="Interest-item">
                {item + " "} 
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Interest;
