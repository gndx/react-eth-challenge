import React from 'react';
import Card from './Card';

function Academic({ academic = [] }) {
  return (
    <Card>
      <div className="Experience-container">
        <header>
          <p className="Experience-title Academic-title">Academic</p>
        </header>
        <div className="Experience-content">
          <div className="Experience-separator" />
          <div className="Experience-list">
            {academic.map((item, index) => {
              return (
                <div key={index} className="Experience-item Academic-item">
                  <p>
                    {item.degree} at {item.institution} / {item.endDate}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Academic;
