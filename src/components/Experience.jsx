import React from 'react';
import Card from './Card';

function Experience({ experience = [] }) {
  return (
    <Card>
      <div className="Experience-container">
        <header>
          <p className="Experience-title">Experience</p>
        </header>
        <div className="Experience-content">
          <div className="Experience-separator" />
          <div className="Experience-list">
            {experience.map((item, index) => {
              return (
                <div key={index} className="Experience-item">
                  <p>
                    {item.jobTitle} at {item.company}
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

export default Experience;
