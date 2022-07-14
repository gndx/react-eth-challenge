import React from 'react';
import '../styles/experience.css'


const Experience = (props) => {
  const { experience } = props;
  return (
    <>
    <div className="container">
    <div className="container-left">
    <h2 className="Experience-title">
      Experiencia
    </h2>
    </div>
    <div className="container-right">
  {experience.map((item, index) => 
    <React.Fragment key={index}>
  <div className='Experience-item' key={index}>
  <p className='item-full'>{item.jobTitle}</p>
  <div className='item-details'>
    <div className="item-details-left">
  <p className="item-details-left-first">{item.company} |</p>
  </div>
  <div className="item-details-right">
      <p key={index} >{item.startDate} - {item.endDate}</p>
      </div>  </div>
  <p>{item.jobDescription}</p>
  </div>
  </React.Fragment>
  ) }
  </div>
  </div>
    </>
  )
};
 export default Experience;