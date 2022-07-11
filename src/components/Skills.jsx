import React, {useContext} from 'react';
import { InfoContext } from '../containers/App';

const Skills = (props) => {
      const data = useContext(InfoContext);
      const {skills=Array(4).fill({name:"JavaScript",percentage:"80%"})} = data;
    return(
        <section>
      <h2 className='Skills-title'>Skills</h2>
      {
        skills.map(({ name, percentage }, index) => (
          <div className='Skills-item' key={`skill-${index}`}>
            <h3>{name} {percentage}</h3>
            <progress max='100' value={percentage.split('%')[0]} />
          </div>
        ))
      }
    </section>
    )
};

export default Skills;