import React from 'react';
import '../styles/academic.css'

const Academic = (props) => {
  const { academic } = props;
  return (
    <>
    <div className="container">
    <div className="container-left">
    <h3 className='Academic-title'>    Estudios</h3>
    </div>
    <div className="container-right">
  {academic.map((item, index) => 
  <React.Fragment key={index}>
    <div className='Academic-item' key={index}>
      <p className="item-full">{item.degree}</p>
    <div className='item-details'>
      <div className="item-details-left">
      <p className="item-details-left-first" key={index} >{item.institution} |</p>
      </div> 
      <div className="item-details-right">
      <p key={index} >{item.startDate} - {item.endDate}</p>
      </div>
    </div>
   </div>
   </React.Fragment>
   )}
    </div>
    </div>
    </>
  )
};
 export default Academic;