import React from 'react';


const Experience = (props) => {
  const { experience } = props;
  return (
    <>
    <h2 className="Experience-title">
      experiencia
    </h2>
 
  {experience.map((item, index) => 
    <React.Fragment key={index}>
  <div className='Experience-item' key={index}>
  <h3>{item.jobTitle}</h3>
  <p>{item.company}</p>
  <p>{item.startDate}</p>
  <p>{item.endDate}</p>
  <p>{item.jobDescription}</p>
  </div>
  </React.Fragment>
  ) }
    </>
  )
};
 export default Experience;