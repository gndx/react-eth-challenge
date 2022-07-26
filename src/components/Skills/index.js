import React from 'react';

const Skills = ({ skills }) => {
  if (skills === undefined) {
    skills = [
      {
        name: '',
        tools: '',
      },
      {
        name: '',
        tools: '',
      },
      {
        name: '',
        tools: '',
      },
      {
        name: '',
        tools: '',
      },
      {
        name: '',
        tools: '',
      },
      {
        name: '',
        tools: '',
      },
    ];
  }
  return (
    <>
      <div className="SkillsContainer">
        <div className="section">
          <h4 className="Skills-title">Skills:</h4>
          <div className="Skills-item AcademicContainer">
            <p>{skills[0].name}</p>
            <p> - {skills[0].tools}</p>
          </div>
          <div className="Skills-item AcademicContainer">
            <p>{skills[1].name}</p>
            <p> - {skills[1].tools}</p>
          </div>
          <div className="Skills-item AcademicContainer">
            <p>{skills[2].name}</p>
            <p> - {skills[2].tools}</p>
          </div>
          <div className="Skills-item AcademicContainer">
            <p>{skills[3].name}</p>
            <p> - {skills[3].tools}</p>
          </div>
          <div className="Skills-item AcademicContainer">
            <p>{skills[4].name}</p>
            <p> - {skills[4].tools}</p>
          </div>
          <div className="Skills-item AcademicContainer">
            <p>{skills[5].name}</p>
            <p> - {skills[5].tools}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
