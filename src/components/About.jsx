import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const About = ({ data = { about: { title: '', items: [{}, {}, {}] } } }) => {
  return (
    <Section id="About">
      <div className="flex flex-col">
        <span className="flex items-center mb-3">
          <Icon name="User" className="mr-0.5 text-cyan-400" />
          <h3 className="About-title">About</h3>
        </span>
        <ul className="flex flex-col">
          {data.about.items.map((item, index) => (
            <li className="About-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default About;
