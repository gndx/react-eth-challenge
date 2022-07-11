import React from 'react';

const Academic = ({ academic = [{}, {}, {}] }) => {
  return (
    <div className="half-wrapper">
      <div className="Academic-title">Academic</div>
      <div className='custom-list'>
        {academic &&
          academic.map((item, index) => {
            return (
              <span key={index} className="Academic-item">
                {item.degree} | {item.startDate} - {item.endDate}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Academic;
