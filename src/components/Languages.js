import React from 'react';

const Languages = ({ languages = [{}, {}, {}] }) => {
  return (
    <div className="second-half-wrapper">
      <div className="Languages-title">Languages</div>
      <div className="custom-list">
        {languages &&
          languages.map((item, index) => {
            return (
              <span key={index} className="Languages-item">
                {item.name + ' ' + item.percentage}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Languages;
