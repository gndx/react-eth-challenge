import React from 'react';

const Skills = ({ skills = [{}, {}, {}] }) => {
  return (
    <div className="second-half-wrapper">
      <div className="Skills-title">Skills</div>
      <div className="custom-list">
        {skills &&
          skills.map((item, index) => {
            return (
              <span key={index} className="Skills-item">
                {item.name + ' ' + item.percentage}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Skills;
