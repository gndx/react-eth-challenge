import React from 'react';
import data from '../../data.json';

const Academic = () => {
  return (
    <div className="Academic">
      <h2 className="Academic-title">
        Academico
      </h2>
      {data && data.data.Academic.map(
        item => (
          <span key={item.degree} className="Academic-item">
            {item.degree} ({item.startDate} - {item.endDate})
          </span>
        )
      )}
    </div>
  );
}

export default Academic;