import React from 'react';
import './styles.styl';
import PropTypes from 'prop-types';
/**
 * This is a Custom container that shows Profile object
 */
export function Profile({ Profile: profile }) {
  return (
    <div className='container fast-animation'>
      <div className='Profile-title'>Profile 👨‍🚀</div>
      <div className='Profile-desc'>
        <p>
          {profile}
        </p>
      </div>
    </div>
  );
}

Profile.propTypes = {
  /** ```json
  Experienced Researcher with a demonstrated history of working in the electrical and electronic manufacturing industry. Skilled in Entrepreneurship Education, Machine learning with Python, C#, Web Applications, Internet of Things, and Software Development. Strong research professional with a Bachelor's degree focused in Electrical and Electronics Engineering and Master of engineering from Universidad Pontificia Bolivariana.,
``` */
  Profile: PropTypes.string,

};
