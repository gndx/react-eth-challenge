import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Projects = () => {
  return (
    <Section id="Projects" className="flex flex-col">
        <span className="flex items-center">
          <Icon name="Experiment" className="mr-0.5 text-fuchsia-600 text-green-500" />
          <h3 className="Projects-title">Personal projects</h3>
        </span>
        <div className="flex">
          <p className="Projects-item mr-2">Projects-item</p>
          <p className="Projects-item mr-2">Projects-item</p>
          <p className="Projects-item mr-2">Projects-item</p>
        </div>
    </Section>
  );
};

export default Projects;
