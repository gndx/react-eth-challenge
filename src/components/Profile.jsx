import React from 'react';
import './Profile.styl';

export const Profile = ({ description }) => {
  return (
    <div className="Profile-title wrapper">
      <p className="Profile-desc">{description}</p>
    </div>
  );
};
