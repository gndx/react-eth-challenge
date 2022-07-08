import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Skills = ({ data }) => {
  return (
    <Section id="Skills" className="flex flex-col">
      <span className="flex items-center">
        <Icon name="Lightning" className="mr-0.5 text-yellow-300" />
        <h3 className="Skills-title mb-2">Skills</h3>
      </span>
      <div className="grid grid-rows-2 grid-cols-8">
        {data.skills.map((skill) => (
          <span
            className="Skills-item py-[1.2vw] px-[0.8vw] m-[0.5vw] bg-white/10 hover:bg-white/20 transition duration-300 rounded-md flex flex-col items-center justify-center cursor-pointer"
            key={skill.name}
          >
            <img
              className={`w-[5vw] h-[5vw] mb-[0.3vw] object-contain drop-shadow-lg ${skill.name === 'Alchemy' && "rounded-full"}`}
              src={skill.image}
              alt={skill.name}
            />
            <span className="font-semibold text-md">{skill.name}</span>
          </span>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
