import React from 'react';
import Card from './Card';

const Languages = ({ languages }) => {
  return (
    <Card>
      <h2 className="Languages-title">Languages</h2>
      <ul>
        {languages &&
          languages.map((item) => {
            return (
              <li key={item.name}>
                <div className=".Languages-item">
                  <h3 className=".Languages-item">{item.name}</h3>
                  <p className=".Languages-item">{item.percentage}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </Card>
  );
};

export default Languages;
