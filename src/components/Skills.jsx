import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Skills = ({ data }) => {
  return (
    <Section id="Skills" className="flex flex-col mb-2">
      <span className="flex items-center">
        <Icon name="Lightning" className="mr-0.5 text-yellow-300" />
        <h3 className="Skills-title">Skills</h3>
      </span>
      <div className="grid grid-rows-4 grid-cols-4 lg:grid-rows-2 lg:grid-cols-8">
        {data.skills.map((skill) => (
          <span
            className="Skills-item py-[2vw] lg:py-[1.2vw] px-[0.8vw] m-[0.5vw] bg-white/10 hover:bg-white/20 transition duration-300 rounded-md flex flex-col items-center justify-center cursor-pointer"
            key={skill.name}
          >
            <img
              className={`w-[7vw] h-[7vw] md:w-[5vw] lg:h-[5vw] 2xl:w-[3.6vw] 2xl:h-[3.6vw] mb-[0.3vw] object-contain drop-shadow-lg ${
                skill.name === 'Alchemy' && 'rounded-full'
              }`}
              src={skill.image}
              alt={skill.name}
            />
            <span className="font-semibold text-sm md:text-md">
              {skill.name}
            </span>
          </span>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
