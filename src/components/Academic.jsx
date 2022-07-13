import React from 'react';


const Academic = (props) => {
  const { academic } = props;
  return (
    <>
    <div className="Academic">
    <div className="Academic-title">
      Seccion academic
    </div>
    <ul>

  {academic.map((item, index) => 
  <React.Fragment key={index}>
  <li className='Academic-item' key={index} >{item.degree}</li>
   <p className='Experience-item-desc' key={index} >{item.description}</p>
   </React.Fragment>
   )}
    </ul>
    </div>
    </>
  )
};
 export default Academic;