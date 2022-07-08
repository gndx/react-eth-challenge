import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Experience = ({ data }) => {
  return (
    <Section id="Experience" className="flex flex-col">
      <span className="flex items-center mb-2">
        <Icon name="Experience" className="mr-0.5 text-amber-800" />
        <h3 className="Experience-title">{data.experience.title}</h3>
      </span>
      <div className="flex flex-col">
        {data.experience.experiences.map((experience, index) => (
          <span
            key={index}
            className="Experience-item mb-4 bg-white/10  rounded py-5 px-4 flex"
          >
            {experience.image && (
              <img
                className="w-14 h-14 object-fit mr-3"
                src={experience.image}
                alt=""
              />
            )}
            <span>
              <p className="text-lg font-semibold">{experience.jobTitle}</p>
              <p className="text-lg ">{experience.company}</p>
              <p className="mb-1">
                {experience.startDate} - {experience.endDate}
              </p>
              <p>{experience.jobDescription}</p>
            </span>
          </span>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
