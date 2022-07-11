import React from 'react';
import Card from './Card';

function About({ social = [] }) {
  return (
    <Card>
      <div className="About-title">
        {social.map((item, index) => {
          return (
            <a key={index} href={item.url} className="About-item">
              <img src={item.image} width="32" height="32" alt={item.name} />
              {item.name}
            </a>
          );
        })}
      </div>
    </Card>
  );
}

export default About;
