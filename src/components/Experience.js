import React from 'react';

const Card = ({ company, endDate, jobDescription, jobTitle, startDate }) => {
  return (
    <li className="Experience-item">
      <h3>{jobTitle}</h3>
      <em>
        {startDate} - {endDate}
      </em>
      <hr />
      <p>{jobDescription}</p>
      <em>{company}</em>
    </li>
  );
};

function Experience({ experience = [] }) {
  return (
    <section className="Experience">
      <h2 className="Experience-title">Experience</h2>
      <ul className="experience-list">
        {experience.map((item, i) => (
          <Card key={Date.now() + i} {...item} />
        ))}
      </ul>
    </section>
  );
}

export default Experience;
