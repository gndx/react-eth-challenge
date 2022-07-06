import React from 'react';
import './About.styl';

export const About = (descriptionList) => {
  const itemList = Object.values(descriptionList);
  return (
    <div className="About-title">
      {itemList.map((item, index) => (
        <p className="About-item" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};
