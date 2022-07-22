import React from 'react';
import Card from './Card';

const Languages = ({
  languages = Array(3).fill({ name: '', percentage: '' }),
}) => {
  return (
    <Card>
      <h2 className="Languages-title">Languages</h2>
      <ul>
        {languages.map(({ name, percentage }, index) => (
          <li key={`${name}_${percentage}_${index}`} className="Languages-item">
            <h4>
              {name} - {percentage}
            </h4>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Languages;