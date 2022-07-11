import React from 'react';
import Card from './Card';
import ProgressBar from "@ramonak/react-progress-bar";

const Languages = ({
  languages = Array(3).fill({ name: '', percentage: '' }),
}) => {
  return (
    <Card>
      <h2 className="Languages-title">Languages</h2>
      <ul>
        {languages.map(({ name, percentage }, index) => (
          <li key={`${name}_${percentage}_${index}`} className="Languages-item">
            <h3>{name}</h3>
            <ProgressBar completed={percentage} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Languages;
