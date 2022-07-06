import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Skills = () => {
  return (
    <Section id="Skills" className="flex flex-col">
        <span className="flex items-center">
          <Icon name="Lightning" className="mr-0.5 text-yellow-300" />
          <h3 className="Skills-title">Skills</h3>
        </span>
        <div className="flex">
          <p className="Skills-item mr-2">Skills-item</p>
          <p className="Skills-item mr-2">Skills-item</p>
          <p className="Skills-item mr-2">Skills-item</p>
        </div>
    </Section>
  );
};

export default Skills;
