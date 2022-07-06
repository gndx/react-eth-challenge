import React from 'react';
import './Skills.styl';
const colors = {
  red: '#CE2028',
  orange: '#FF7E01',
  yellow: '#FDCC0E',
  green: '#03C03D',
};

function getColor(value) {
  if (value <= 2.5) {
    return 'red';
  }
  if (value <= 5.9) {
    return 'orange';
  }
  if (value <= 7.5) {
    return 'yellow';
  }
  return 'green';
}

export const Skills = ({ skills }) => {
  return (
    <div className="Skills-title wrapper">
      <h3>Skills</h3>
      <hr />
      <div className="Skills-container">
        {skills.map((item, index) => {
          const value = Math.round(item.level * 10) / 10;
          return (
            <div
              key={index}
              className="Skills-item progress"
              aria-label="circle progress bar"
            >
              <svg>
                <circle
                  stroke={colors[getColor(value)]}
                  style={{ strokeDashoffset: 110 }}
                  cx="70"
                  cy="70"
                  r="70"
                ></circle>
                <circle cx="70" cy="70" r="60"></circle>
                <text
                  className="progress_value"
                  x={Number.isInteger(value) ? 60 : 30}
                  y="90"
                >
                  {value}
                </text>
                <text className="progress_value-span" x="100" y="90">
                  /10
                </text>
              </svg>
              <h4>{item.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
