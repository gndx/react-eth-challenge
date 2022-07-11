import React from 'react';
import Card from './Card';

function Languages({ languages = [] }) {
  return (
    <Card>
      <div className="Experience-container">
        <header>
          <p className="Experience-title Languages-title">Languages</p>
        </header>
        <div className="Skills-content">
          <div className="Skills-list">
            {languages.map((item, index) => {
              return (
                <div key={index} className="Skills-item Languages-item">
                  <p>{item.name}</p>
                  <progress
                    max="100"
                    value={item.percentage.replace('%', '')}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Languages;
