import React from 'react';
import Card from './Card';

function Skills({ skills = [] }) {
  return (
    <Card>
      <div className="Experience-container">
        <header>
          <p className="Experience-title Skills-title">Skills</p>
        </header>
        <div className="Skills-content">
          <div className="Skills-list">
            {skills.map((item, index) => {
              return (
                <div key={index} className="Skills-item">
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

export default Skills;
