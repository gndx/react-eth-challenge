import React, { useContext } from 'react';
import ExperiencesItem from './ExperiencesItem';

const Experience = ({experiences=Array(3).fill()}) => {
    return (
        <div id="experience" className="prose">
        <h2 className="Experience-title section-headline">Experience</h2>
        {experiences.map((experience, index)=><div  key={`experiende-${index}`} className='Experience-item'><ExperiencesItem experience={experience}/></div>)}
      </div>
    );
};

export default Experience;