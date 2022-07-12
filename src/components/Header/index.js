import React from 'react';
import PropTypes from 'prop-types';
import './styles.styl';

const DEFAULT_IMAGE = 'https://avatars.githubusercontent.com/LuisFDuarte';
/**
 * This is a Custom Header that uses two props avatar and name
 */
export function Header({ name, avatar = DEFAULT_IMAGE }) {

  return (
    <div className='Container-Header'>
      <img src={avatar} className='avatar' alt='photo' />
      <div className='Header-title'>
        <h1>{name}</h1>
      </div>
    </div>
  );
}

Header.propTypes = {
  /** Name of CV user */
  name: PropTypes.string,
  /** URL of CV photo */
  avatar: PropTypes.string,
};
