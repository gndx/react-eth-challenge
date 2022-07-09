import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Languages = ({ data }) => {
  return (
    <Section id="Languages" className="flex flex-col">
      <span className="flex items-center mb-4">
        <Icon name="Language" className="mr-0.5" />
        <h3 className="Languages-title">{data.languages.title}</h3>
      </span>
      <div className="flex flex-col">
        {data.languages.languages.map((item, index) => (
          <span key={index} className="mb-4 flex items-center">
            <img
              className="w-11 h-7 object-cover rounded-sm drop-shadow-lg mr-2.5"
              src={item.image}
              alt={item.name.concat(' flag')}
            />
            <h3 className="mr-2">
              {item.name} {item.level}
            </h3>
          </span>
        ))}
      </div>
    </Section>
  );
};

export default Languages;
