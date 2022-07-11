import React from 'react';
import Card from './Card';

const Academic = () => {
  return (
    <Card>
      <h2 className="Academic-title">Academic</h2>
      <ul>
        <li className="Academic-item">Software engineer</li>
        <li className="Academic-item">Ethereum Developer</li>
        <li className="Academic-item">Agile Coach</li>
      </ul>
    </Card>
  );
};

export default Academic;
