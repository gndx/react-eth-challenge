import React from 'react';


const Interest = (props) => {
  const { interest } = props;
  return (
    <>
    <div className="Interest">
    <div className="Interest-title">
      interest
    </div>
    <ul>
  {interest.map((item, index) => 
  <li className='Interest-item' >{item}</li>) }
    </ul>
    </div>
    </>
  )
};
 export default Interest;