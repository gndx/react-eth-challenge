import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { Box } from './Box';

export function ExperienceItem({
  company,
  startDate,
  endDate,
  jobDescription,
  jobTitle,
}) {
  return (
    <div className="Experience-item">
      <p>
        <b>Company: </b>
        {company}
      </p>
      <p>
        <b>Time: </b>
        {`${startDate}-${endDate}`}
      </p>
      <p>
        <b>Job Title: </b>
        {jobTitle}
      </p>
      <p>
        <b>Job Description: </b>
        {jobDescription}
      </p>
    </div>
  );
}

export function Experience({ className, expList }) {
  const [experiences, setExperiences] = useState(expList);

  useEffect(() => {
    setExperiences(expList);
  }, [expList]);

  return (
    <Box
      className={className}
      classTitle="Experience-title"
      title="Experience-title"
    >
      <section style={{ display: 'flex', overflowWrap: 'break-word' }}>
        {experiences.map(
          ({ company, startDate, endDate, jobDescription, jobTitle }) => {
            return (
              <ExperienceItem
                key={`${company}-${startDate}`}
                {...{ company, startDate, endDate, jobDescription, jobTitle }}
              />
            );
          }
        )}
      </section>
    </Box>
  );
}

Experience.propTypes = {
  className: PropTypes.string,
  expList: PropTypes.arrayOf(
    PropTypes.exact({
      company: PropTypes.string,
      endDate: PropTypes.string,
      jobDescription: PropTypes.string,
      jobTitle: PropTypes.string,
      startDate: PropTypes.string,
    })
  ),
};

Experience.defaultProps = {
  className: '',
  expList: [
    {
      company: 'PugStar',
      endDate: 'Present',
      jobDescription:
        "scratch the furniture. Good now the other hand, too lay on arms while you're using the keyboard.",
      jobTitle: 'Frontend',
      startDate: 'Jan 2020',
    },
    {
      company: 'CatStore',
      endDate: 'Jan 2016',
      jobDescription:
        'Meow in empty rooms lick left leg for ninety minutes, still dirty.',
      jobTitle: 'Backend',
      startDate: 'Sept 2019',
    },
    {
      company: 'CatStore',
      endDate: 'Jan 2016',
      jobDescription:
        'Meow in empty rooms lick left leg for ninety minutes, still dirty.',
      jobTitle: 'Backend',
      startDate: 'Sept 2019',
    },
  ],
};
ExperienceItem.propTypes = {
  company: PropTypes.string,
  endDate: PropTypes.string,
  jobDescription: PropTypes.string,
  jobTitle: PropTypes.string,
  startDate: PropTypes.string,
};

export default Experience;
