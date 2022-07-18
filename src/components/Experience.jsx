import React from 'react';
import '../styles/components/Experience.styl';


const Experience = (props) => {
  return (
    <div className='Experience'>
    <h1 className='Experience-title'>My experience</h1>
      {
        props.DATOSE.map(elemento=>(
          <div className='Experience-item'><span className='job-title'>{elemento.jobTitle}:</span><span className='company-name'>{elemento.company}</span><span className='date'>({elemento.startDate}-{elemento.endDate})</span></div>
        ))
      }
    </div>
  );
};

export default Experience;