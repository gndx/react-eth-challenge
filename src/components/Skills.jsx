import React from 'react';
import '../styles/components/Skills.styl';
import ProgressBar from './ProgressBar';

const Skills = ({ data }) => {
  return (
    <div className="Skills">
      <h2 className="Skills-title">Habilidades</h2>
      <ul>
        {
          data ?
              data.map((skill, index) => {
                return (
                  <li key={index} className="Skills-item">
                    <ProgressBar
                      name={ skill.name }
                      percentage={ skill.percentage }
                    />
                  </li>
                )
              })
            :
              <>Cargando data...</>
        }
      </ul>
    </div>
  );
}

export default Skills;
