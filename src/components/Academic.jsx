import React from 'react';
import Skills from './Skills';
import db from '../../data.json';
import AcademicCard from './AcademicCard';

const Academic = () => {
  return (
    <div className="academic">
      <h2 className="Academic-title">Academic</h2>
      <ul>
      {db.data.Academic.map((acd) => (
        <AcademicCard key={acd.degree} className="Academic-item" {...acd}/>
      ))}
    </ul>
      <div className="skills">
        <Skills />
      </div>
    </div>
  );
};

export default Academic;
