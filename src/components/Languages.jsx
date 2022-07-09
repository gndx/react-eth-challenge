import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ data }) => {
  return (
    <div className="Languages">
      <h2 className="Languages-title">Languages</h2>
      <ul>
        {
          data ?
              data.map((language, index) => {
                return (
                  <li key={index} className="Languages-item">
                    <div className="Progress-bar">
                      <div style={{width: language.percentage}}>
                        <small>{language.name} - {language.percentage}</small>
                      </div>
                    </div>
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
