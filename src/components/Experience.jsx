import React from 'react';
import '../styles/components/Experience.scss';
const Experience = (props) => {
  const { experiences } = props;
  return (
    <section>
      <h2 className="Experience-title">Experience</h2>
      <article className="Experience-box">
        {experiences.map((experience) => (
          <div className="Experience-item" key={experience.company}>
            <h3>{experience.company}</h3>
            <h4>{experience.jobTitle}</h4>
            <p>{experience.startDate} - {experience.endDate}</p>
            <p>{experience.jobDescription}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Experience;
