import React from 'react';
import Card from './Card';

const Skills = ({ skills }) => {
  return (
    <Card>
      <h2 className="Skills-title">Skills</h2>

      <ul>
        {skills &&
          skills.map((item) => {
            return (
              <li className="Skills-item" key={item.name}>
                <div>
                  <h3 className="Skills-item">{item.name}</h3>
                  <p className="Skills-item">{item.percentage}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </Card>
  );
};

export default Skills;
