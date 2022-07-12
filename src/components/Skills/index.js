import React from 'react';
import './styles.styl';
import PropTypes from 'prop-types';
/**
 * This is a Custom container that shows Skills object as progress bar
 */
export function Skills({ skills = [{}, {}, {}] }) {

  return (
    <div className='two-cols slow-animation'>
      <div className='Skills-title'><h2>Skills 🚀</h2></div>
      <ul className='No-point'>
        {
          skills.map((element, id) => (
            <li key={id}>
              <div className='Skills-item'>{element.name}</div>
              <div className='w3-light-grey w3-round'>
                <div className='w3-container w3-blue w3-round' style={{ width: element.percentage }}>{element.percentage}</div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

Skills.propTypes = {
  /** ```json
   "skills": [
      {
        "name": "Python",
        "percentage": "75%"
      }
    ]
``` */
  skills: PropTypes.array,

};
