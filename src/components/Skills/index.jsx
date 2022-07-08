import React, {useContext} from 'react';
import AppContext from '../../context/AppContext';
import Content from '../Content';

const Skills = () => {
  const data = useContext(AppContext);
  const initalContent = [0, 1, 2];
  return (
    <section className="skills">
      <h1 className="Skills-title">Skills</h1>
      {initalContent.map((i) => (
        <div key={i} className="Skills-item"><Content data = {data.skills && data.skills[i]}/></div>
      ))}
    </section>
  );
}

export default Skills;