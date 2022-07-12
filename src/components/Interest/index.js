import React from 'react';
import './styles.styl';
import PropTypes from 'prop-types';
/**
 * This is a Custom container that shows Interest array
 */
export function Interest({ interest = ['', '', ''] }) {

  return (
    <div className='two-cols slow-animation'>
      <div className='Interest-title'>
        <h2>Interests 🌌</h2>
      </div>
      <ul>
        {
          interest.map((element, id) => (
            <li key={id}>
              <div className='Interest-item'>{element}</div>
            </li>
          ))
        }
      </ul>

    </div>
  );
}

Interest.propTypes = {
  /** ```json
   "interest": [
      "Renewable Energies",
      "Web 3",
      "IoT",
      "Machine Learning",
      "Soccer",
      "Vegan wanna be"
    ],
``` */
  interest: PropTypes.array,

};
