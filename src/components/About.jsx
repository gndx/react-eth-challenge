import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const About = ({ data = { about: { title: '', items: [{}, {}, {}] } } }) => {
  return (
    <Section id="About" className="">
      <div className="flex flex-col">
        <span className="flex items-center mb-3">
          <Icon name="User" className="mr-0.5 text-cyan-400" />
          <h3 className="About-title">About</h3>
        </span>
        <div className="flex">
          {data.about.items.map((item, index) => (
            <p className="About-item" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
