import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Skills.styl';

const Skills = () => {
    const data = useContext(AppContext);
    const skills = data.skills ? data.skills : [0,1,2];
    return (
        <section className="Skills">
            <div className="Skills-content">
              <h2 className="Skills-title">Skills</h2>
              <ul>
                {
                  skills.map((skill,i) => {
                    return (
                      <li key={i} className="Skills-item">
                        <p>{skill.name}</p>
                        <p>{skill.percentage}</p>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
        </section>
    )
};

export default Skills;
