import React from 'react';

function Experience({ experience: experiences }) {
  return (
    <div className="Experience">
      <div className="card">
        <div className="Experience-title">Experience</div>
        {experiences?.map((experience) => (
          <div key={experience?.jobTitle + experience?.startDate} className="Experience-item">
            <div>Company: {experience?.company}</div>
            <div>Start Date: {experience?.startDate}</div>
            <div>End Date: {experience?.endDate}</div>
            <div>Job Title: {experience?.jobTitle}</div>
            <div>Job Description: {experience?.jobDescription}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
