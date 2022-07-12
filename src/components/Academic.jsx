import React from 'react';
import { Boxing } from '../styles/components/Academic'

const Academic = ({
  academic = Array(3).fill({ degree: '', description: '', institution: '' }),
}) => {
  return (
    <Boxing>
      <h1 className="Academic-title">Academic</h1>
      <ul>
        {academic.map(({ degree, description, institution }, index) => (
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
    </Boxing>
  );
};

export default Academic;