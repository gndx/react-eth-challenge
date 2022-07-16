import React from 'react';
import '../styles/components/Skills.css';

const Skills = (props) => {
  const { skills } = props;
  return (
    <section>
      <h2 className="Skills-title">Skills</h2>
      <div className="skill-box">
        {skills.map((skill, index) => (
          <div className="Skills-item" key={index}>
            <h4> {skill.name}</h4>
            <div
              className="skill-indicator"
              style={{ width: skill.percentage }}
            >
              {skill.percentage}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;