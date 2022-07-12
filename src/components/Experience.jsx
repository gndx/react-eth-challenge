import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Experience = () => {
  const data = useContext(Context);

  return (
    <div>
      <h2 className="neon-title Experience-title">Experiencia</h2>

      <div className="flex flex-col gap-5 justify-center mt-3">
        {data &&
          data.experience?.map((experience, index) => {
            return (
              <div className="flex flex-col p-1 Experience-item" key={index}>
                <div>
                  <a
                    href={experience.site}
                    target="_blank"
                    className="cursor-pointer neon-link"
                  >
                    {experience.jobTitle} - {experience.company}
                  </a>
                </div>
                <p>
                  {experience.startDate} - {experience.endDate}
                </p>
                <p className="mt-2">{experience.jobDescription}</p>
                <p className="mt-2">{experience.jobStack}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Experience;
