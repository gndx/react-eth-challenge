import React from 'react';
import ExperiencesItem from './ExperiencesItem';

const Experience = () => {
    return (
        <div id="experience" className="prose">
        <h2 className="Experience-title section-headline">Experience</h2>
        {[1,2,3].map(item=><div  key={item} className='Experience-item'><ExperiencesItem /></div>)}
      </div>
    );
};

export default Experience;