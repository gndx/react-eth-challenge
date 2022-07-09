import React, { useContext } from 'react';
import '../../styles/components/Skills.styl';
import AppContext from '../../context/AppContext';

/** Shows skills from data context */
const Skills = () => {
  const data = useContext(AppContext);
  //set inital layout
  const initalContent = data.skills ? data.skills : [0, 1, 2];
  return (
    <section className="skills">
      <h2 className="Skills-title">Skills</h2>
      <div className="skills-content">
        {initalContent.map((item, i) => (
          <div key={i} className="Skills-item">
            {data.skills && item.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
