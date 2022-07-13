import React from 'react';
import '../styles/components/Avatar.styl';

const Avatar = ({ avatar }) => {
  return <img className="Avatar" src={avatar} alt="avatar" />;
};

export default Avatar;
