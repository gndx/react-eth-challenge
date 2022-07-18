import React from 'react';
import '../styles/components/Languages.styl';


const Languages = (props) => {
  return (
    <div className='Languages'>
    <h1 className='Languages-title'>My Languages</h1>
    <div className='enum'>
      {
        props.DATOSL.map(elemento=>(
          <div className='Languages-item'><span className='Language-name'>{elemento.name}:</span><span className='Language-percentage'>{elemento.percentage}</span></div>
        ))
      }
      </div>
    </div>
  );
};

export default Languages;