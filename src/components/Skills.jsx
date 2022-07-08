import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({ data }) => {
  return (
    <div className="Skills">
      <h3 className="Skills-title">Habilidades</h3>
      <ul>
        {
          data ?
              data.map((skill, index) => {
                return (
                  <li key={index} className="Skills-item">
                    {skill.name} - {skill.percentage}
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
