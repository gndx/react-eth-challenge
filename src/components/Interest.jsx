import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ data }) => {
  return(
    <div className="Interest">
      <h3 className="Interest-title">Interest</h3>
      <ul>
        {
          data ?
              data.map((interest, index) => {
                return (
                  <li key={index} className="Interest-item">
                    {interest}
                  </li>
                )
              })
            :
              <>Cargando data...</>
        }
      </ul>
    </div>
  );
}

export default Interest;
