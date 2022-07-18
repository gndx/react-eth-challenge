import React from 'react';
import { Boxing } from "../styles/components/Languages"

const Languages = ({
  languages = Array(3).fill({ name: '', percentage: '' }),
}) => {
  return (
    <Boxing>
      <h2 className="Languages-title">Languages</h2>
      <ul>
        {languages.map(({ name, percentage }, index) => (
          <div key={`${name}_${percentage}_${index}`} className="Languages-item">
            <h4>
              {name} - {percentage}
            </h4>
          </div>
        ))}
      </ul>
    </Boxing>
  );
};

export default Languages;