import React from 'react';

const Languages = ({ data = ['', '', ''] }) => {
  return (
    <div key="language">
      <h3 className="Languages-title">Languages</h3>
      {data?.map((el, i) => {
        return (
          <div key={el.percentage} className="Languages-item">
            <h3>Language: {el.name} </h3>
            <h4>Percentage: {el.percentage}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default Languages;
