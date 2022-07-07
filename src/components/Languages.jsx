import React from 'react';
import data from '../../data.json';

const Languages = () => {
  return (
    <div className="Languages">
      <h2 className="Languages-title">
        Lenguajes
      </h2>
      {data && data.data.languages.map(
        item => (
          <span key={item.name} className="Languages-item">
            {item.name} - {item.percentage}
          </span>
        )
      )}
    </div>
  );
}

export default Languages;