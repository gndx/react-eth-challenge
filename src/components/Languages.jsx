import React from 'react';
import '../styles/components/Languages.styl';
import ProgressBar from './ProgressBar'

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
                    <ProgressBar
                      name={ language.name }
                      percentage={ language.percentage }
                    />
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
