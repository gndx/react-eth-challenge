import React from 'react';

const Languages = (props) => {
  const { languages } = props;
  console.log("🚀 ~ file: Languages.jsx ~ line 5 ~ Languages ~ languages", languages)
  // //console.log('lenfuajes kinea 5 Languajes.jsx',languages)
  return (
    <>
    <div className="Languages">
    <div className="Languages-title">
      idiomas
    </div>
    <ul>
  {languages.map((item, index) => 
  <li className='Languages-item' key={index} >{item.name}</li>)}
    </ul> 
    </div>
    </>
  )
};
 export default Languages;