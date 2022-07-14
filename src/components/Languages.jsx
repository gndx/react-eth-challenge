import React from 'react';
import '../styles/languages.css'

const Languages = (props) => {
  const { languages } = props;
  return (
    <>
    <div className="container-grid-item">
      <div className="container-left">
    <h3 className="Languages-title">
      Languages
    </h3>
    </div>
    <ul className="container-right-interest">
  {languages.map((item, index) => 
  <li className='Languages-item' key={index} >{item.name}</li>)}
    </ul> 
    </div>
    </>
  )
};
 export default Languages;