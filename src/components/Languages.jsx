import React from 'react';
import {Lengua} from "../styles/components/Languajes"

const Languages = ({
  languages = Array(3).fill({ name: '', percentage: '' }),
}) => {
  return (
    <div>
      <h2 className="Languages-title">Languages</h2>
      <ul>
        {languages.map(({ name, percentage }, index) => (
          <Lengua key={`${name}_${percentage}_${index}`} className="Languages-item">
            <h4>
              {name} - {percentage}
            </h4>
          </Lengua>
        ))}
      </ul>
    </div>
  );
};

export default Languages;