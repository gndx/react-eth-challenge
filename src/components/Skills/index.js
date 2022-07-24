import React from 'react';

const Skills = ({ skills }) => {
  return (
    <>
      <div className="SkillsContainer">
        <div className="section">
          <h4>Skills:</h4>
          {skills === undefined
            ? 'Loading...'
            : skills.map((skill, index) => {
                return (
                  <div className="AcademicContainer" key={index}>
                    <p>{skill.name}</p>
                    <p> - {skill.tools}</p>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default Skills;
