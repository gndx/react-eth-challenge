import React from 'react';
import Card from './Card';

const Academic = ({
  academic = Array(3).fill({ degree: '', description: '', institution: '' }),
}) => {
  return (
    <Card>
      <h2 className="Academic-title">Academic</h2>
      <ul>
        {academic?.map(({ degree, description, institution }, index) => (
          <li
            key={`${degree}_${description}_${institution}_${index}`}
            className="Academic-item"
          >
            <h3>{degree}</h3>
            <p>{description}</p>
            <h4>{institution}</h4>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Academic;