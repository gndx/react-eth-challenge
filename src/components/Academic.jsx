import React from 'react';
import '../styles/components/Academic.css';

const Academic = (props) => {
    return (
      <section className='Academic'>
        <h1 className='Academic-title'>Academic</h1>
        <div className='Academic-items'>
        {props.data?.Academic.map((academic) => (
          <card className='Academic-item' key={academic.degree}>
            <h3>{academic.degree}</h3>
            <h4>{academic.institution}</h4>
            <p>
              {academic.startDate}{' - '}{academic.endDate}
            </p>
            <p>{academic.description}</p>
          </card>
        ))}
        </div>
      </section>
    )
  };
  
  export default Academic;
  