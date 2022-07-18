import React from 'react';
import '../styles/components/Interest.styl';

const Interest = (props) => {
  return (
    <div className='Interest'>
      <h1 className='Interest-title'>My Interests</h1>
      <ul>
        {
          props.DATOSI ?
            props.DATOSI.map((interest) => {return (<li className='Interest-item'>{interest}</li>);}) : 
            <div>props.DATOSI is not ready</div>
        }
      </ul>
    </div>
  );
};

export default Interest;