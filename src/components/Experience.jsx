import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import ExperiencesItem from './ExperiencesItem';

const Experience = () => {
  const {data: {experience}}=useContext(AppContext)
    return (
        <div id="experience" className="prose">
        <h2 className="Experience-title section-headline">Experience</h2>
        {experience?.map((experience, index)=><div  key={`experiende-${index}`} className='Experience-item'><ExperiencesItem experience={experience}/></div>)}
      </div>
    );
};

export default Experience;