import React from 'react';
import './styles.styl';
import PropTypes from 'prop-types';
/**
 * This is a Custom container that maps Experience element props to Experience items
 */

export function Experience({ experience = [{}, {}, {}] }) {

  return (
    <div className='container fast-animation'>
      <div className='Experience-title'>Experience 🌟 </div>
      <ul>
        {
          experience.map((element, id) => (
            <li key={id} className='Experience-item'>
              <div>
                <b> Company:</b>
                {' '}
                {element.company}
              </div>
              <div>
                <b>Job Title:</b>
                {' '}
                {element.jobTitle}
              </div>
              <div>
                <b>Job Description:</b>
                {' '}
                {element.jobDescription}
              </div>
              <div>
                <b>Time: start Date:</b>
                {' '}
                {element.startDate}
                {' '}
                - end Date
                {' '}
                {element.endDate}
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

Experience.propTypes = {
  /** ```json
 "experience": [
      {
        "company": "Universidad Pontificia Bolivariana",
        "endDate": "Present",
        "jobDescription": "Developer of .NET solutions for supervising colombian electrical national system.",
        "jobTitle": "Researcher and developer",
        "startDate": "Jan 2017"
      }]
``` */
  experience: PropTypes.array,

};
