import React from 'react';
import '../styles/interest.css'
const Interest = (props) => {
  const { interest } = props;
  return (
    <>
     <div className="container-grid-item">
      <div className="container-left">
    <h3 className="Interest-title">
      Interest
    </h3>
    </div>
    <ul className="container-right-interest">
  {interest.map((item, index) => 
  <li className='Interest-item' key={index} >{item}</li>) }
    </ul>
    </div>
    </>
  )
};
 export default Interest;