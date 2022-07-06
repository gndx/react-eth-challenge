import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Experience = () => {
  return (
    <Section id="Experience" className="flex flex-col">
      <span className="flex items-center">
        <Icon name="Experience" className="mr-0.5 text-amber-800" />
        <h3 className="Experience-title">Experience</h3>
      </span>
      <div className="flex">
        <p className="Experience-item mr-2">experience-item</p>
        <p className="Experience-item mr-2">experience-item</p>
        <p className="Experience-item mr-2">experience-item</p>
      </div>
    </Section>
  );
};

export default Experience;
