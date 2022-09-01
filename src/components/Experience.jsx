import React from 'react';

export default function Experience(props) {
  return (
    <div className="Experience section content is-size-4">
      <h2 className="Experience-title subtitle is-2">Experience</h2>
      <ul>
        {props.data.experience.map((experience, k) => (
          <li className="Experience-item" key={k}>
            <p className="Experience-item-title">
              <span className='subtitle'>{experience.company}</span> <span className='tag is-medium is-info'>{experience.jobTitle}</span>
              <br />
              <span className="Experience-item-duration">
                {experience.startDate}- {experience.endDate}
              </span>
            </p>
            <p className="Experience-item-description">{experience.jobDescription}</p>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
