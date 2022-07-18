import React from 'react';
import '../styles/components/Academic.styl';


const Academic = (props) => {
  return (
    <div className='Academic'>
    <h1 className='Academic-title'>My Degrees</h1>
    {console.log(props.DATOSA)}
      {
        props.DATOSA.map(elemento=>(
          <div className='Academic-item'><span className='degree'>{elemento.degree}:</span><span className='institution'>{elemento.institution}</span><span className='date'>({elemento.startDate}-{elemento.endDate})</span></div>
        ))
      }
    </div>
  );
};

export default Academic;