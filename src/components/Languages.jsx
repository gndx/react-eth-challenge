import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ data }) => {
  return (
    <div className="Languages">
      <h3 className="Languages-title">Languages</h3>
      <div>
        <ul>
          {
            data ?
                data.map((language, index) => {
                  return (
                    <li key={index}>
                      {language.name} - {language.percentage}
                    </li>
                  )
                })
              :
                <>Cargando data...</>
          }
        </ul>
      </div>

    </div>
  );
}

export default Languages;
