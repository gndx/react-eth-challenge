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
  <>
  <li className='Academic-item' >{item.degree}</li>
   <p className='Experience-item-desc'>{item.description}</p>
   </>
   )}
    </ul>
    </div>
    </>
  )
};
 export default Academic;