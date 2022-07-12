import React from 'react';
import './styles.styl';
import PropTypes from 'prop-types';
/**
 * This is a Custom container that shows Languages dictionary  as progress bar
 */
export function Languages({ languages = ['', '', ''] }) {

  return (
    <div className='two-cols slow-animation'>
      <div className='Languages-title'><h2>Languages 📖</h2></div>
      <ul className='No-point'>
        {
          languages.map((element, id) => (
            <li key={id} className='Languages-item'>
              <div>
                {element.name}
              </div>
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

Languages.propTypes = {
  /** ```json
  "languages": [
      {
        "name": "Spanish",
        "percentage": "100%"
      }]
``` */
  languages: PropTypes.array,

};
