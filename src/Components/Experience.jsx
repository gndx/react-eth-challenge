import React from 'react';
import data from '../../data.json';

import '../styles/components/Experience.styl';

const Experience = () => {
  return (
    <div className="Experience">
      <h2 className="Experience-title">
        Experiencia
      </h2>
      {data && data.data.experience.map(
        item => (
          <span key={item.company} className="Experience-item">
            {item.company} ({item.startDate} - {item.endDate})
          </span>
        )
      )}
    </div>
  );
}

export default Experience; 