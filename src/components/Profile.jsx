import React from 'react';
import './Profile.styl';

export const Profile = ({ description }) => {
  console.log(description);
  return (
    <div className="Profile-title wrapper">
      <p className="Profile-desc">{description}</p>
    </div>
  );
};
