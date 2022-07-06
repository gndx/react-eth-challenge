import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Languages = () => {
  return (
    <Section id="Languages" className="flex flex-col">
      <span className="flex items-center">
        <Icon name="Language" className="mr-0.5" />
        <h3 className="Languages-title">Languages</h3>
      </span>
      <div className="flex">
        <p className="Languages-item mr-2">Spanish C2</p>
        <p className="Languages-item mr-2">English C1</p>
      </div>
    </Section>
  );
};

export default Languages;
