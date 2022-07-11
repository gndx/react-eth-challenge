import React from 'react';
import Card from './Card';

function Interest({ interests = [] }) {
  return (
    <Card>
      <div className="Experience-container">
        <header>
          <p className="Experience-title Interest-title">Interest</p>
        </header>
        <div className="Experience-content">
          <div className="Experience-list">
            {interests.map((item, index) => {
              return (
                <div key={index} className="Experience-item Interest-item">
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Interest;
