import React from 'react';
import '../styles/components/Interests.css';

const Interest = (props) => {
    return (
      <section className='Interest'>
        <h1 className='Interest-title'>Interest</h1>
        <div className='Interest-items'>
        {props.data?.interest.map((interest) => (
          <card className='Interest-item' key={interest}>
            <h4>{interest}</h4>
          </card>
        ))}
        </div>
      </section>
    )
  };
  
  export default Interest;
  