import React from 'react';

const Languages = ({ languages }) => {
  return (
    <div>
      <h1 className="Languages-title">Languages</h1>
      <div className="languages-container-items">
        {languages ? languages.map((items) => (
          <div className='single-item-languages Languages-item' key={`${items.name}-${items.percentage}`}>
            <h3>{items.name}</h3>
            <h3>{items.percentage}</h3>
          </div>
        )) : ''}
      </div>
    </div>
  );
};

export default Languages;
