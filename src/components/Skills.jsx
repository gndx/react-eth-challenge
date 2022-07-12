import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Skills = () => {
  const data = useContext(Context);

  return (
    <div>
      <h2 className="neon-title Skills-title">Habilidades</h2>

      <div className="flex flex-row flex-wrap gap-3 mt-1 justify-center items-center">
        {data &&
          data.skills?.map((skill, index) => {
            return (
              <div
                className="flex flex-row rounded-sm items-center justify-center mt-2 py-2 px-4 glass-card Skills-item"
                key={index}
              >
                <img className="w-9 h-9" src={skill.img} />
                <p className="ml-2">{skill.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Skills;
