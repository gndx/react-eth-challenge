import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ data }) => {
  return (
    <div className='Interest'>
      <h2 className='Interest-title'>Interest</h2>
      <ul>
        {
          data ?
            data.map((interest) => {
              return (
                <li key={interest} className='Interest-item'>
                  {interest}
                </li>
              );
            }) : <>Cargando data...</>
        }
      </ul>
    </div>
  );
};

export default Interest;
