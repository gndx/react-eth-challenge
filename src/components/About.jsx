import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const About = () => {
  return (
    <Section id="About" className="">
      <div className="flex flex-col">
        <span className="flex items-center">
          <Icon name="User" className="mr-0.5 text-cyan-400" />
          <h3 className="About-title">About</h3>
        </span>
        <div className="flex">
          <p className="About-item mr-2">abouttext1</p>
          <p className="About-item mr-2">abouttext1</p>
          <p className="About-item mr-2">abouttext1</p>
        </div>
      </div>
    </Section>
  );
};

export default About;
