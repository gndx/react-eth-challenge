import React from 'react';

const Academic = ({ data = ['', '', ''] }) => {
  return (
    <div>
      <h3 className="Academic-title">Academic</h3>
      {data?.map((el) => {
        return (
          <div key={el.degree} className="Academic-item">
            <h3>degree: {el.degree}</h3>
            <h4>description: {el.description}</h4>
            <h4>endDate: {el.endDate}</h4>
            <h4>startDate: {el.startDate}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default Academic;
