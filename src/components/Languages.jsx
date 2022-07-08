import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ data }) => {
  return (
    <div className="Languages">
      <h3 className="Languages-title">Languages</h3>
      <ul>
        {
          data ?
              data.map((language, index) => {
                return (
                  <li key={index} className="Languages-item">
                    {language.name} - {language.percentage}
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

export default Languages;
