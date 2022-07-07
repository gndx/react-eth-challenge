import React from 'react';

const ExperiencesItem = ({experience}) => {
    return (        
        <>
          <h3>{experience.company}</h3>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
            {`${experience.startDate} - ${experience.endDate}`}
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              {experience.jobTitle}
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Description:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
            {experience.jobDescription}
            </div>
          </section>
        </>
    );
};

export default ExperiencesItem;