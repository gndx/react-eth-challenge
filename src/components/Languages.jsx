import React from 'react';
import Card from './Card';

const Languages = () => {
  return (
    <Card>
      <h2 className="Languages-title">Languages</h2>
      <ul>
        <li className="Languages-item">Spanish</li>
        <li className="Languages-item">English</li>
        <li className="Languages-item">Portuguese</li>
      </ul>
    </Card>
  );
};

export default Languages;
