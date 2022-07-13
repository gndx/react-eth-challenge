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
    <div className='Academic-item' key={index}>
    <li>{item.degree}</li>
    <p key={index} >{item.institution}</p>
    <p key={index} >{item.startDate}</p>
    <p key={index} >{item.endDate}</p>
   </div>
   </React.Fragment>
   )}
    </ul>
    </div>
    </>
  )
};
 export default Academic;