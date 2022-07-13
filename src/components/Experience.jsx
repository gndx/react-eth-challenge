import React from 'react';


const Experience = (props) => {
  const { experience } = props;
  return (
    <>
    <div className="Experience">
    <div className="Experience-title">
      experiencia
    </div>
    <ul>
  {experience.map((item, index) => 
  <li className='Experience-item' >{item.jobTitle}</li>) }
    </ul>
    </div>
    </>
  )
};
 export default Experience;