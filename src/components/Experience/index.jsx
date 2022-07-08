import React, {useContext} from 'react';
import AppContext from '../../context/AppContext';
import Content from '../Content';

const Experience = () => {
  const data = useContext(AppContext);
  const initalContent = [0, 1, 2];
  return (
    <section className="experience">
      <h1 className="Experience-title">Experience</h1>
      {initalContent.map((i) => (
        <div key={i} className="Experience-item"><Content data = {data.experience && data.experience[i]}/></div>
      ))}
    </section>
  );
};


export default Experience;