import React from 'react';

const Skills = ({ data = ['', '', ''] }) => {
  return (
    <div>
      <h3 className="Skills-title">Skills</h3>
      {data.map((el) => {
        return (
          <div className="Skills-item" key={el.name}>
            {el.name}
          </div>
        );
      })}
    </div>
  );
};
export default Skills;
