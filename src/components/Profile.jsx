import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Profile = () => {
  return (
    <Section id="Profile" className="flex flex-col">
        <span className="flex items-center mb-2">
          <Icon name="Profile" className="w-[27px] mr-[1px] text-sky-500" />
          <h3 className="Profile-title">Profile title</h3>
        </span>
        <p className="Profile-desc">Profile description</p>
    </Section>
  );
};

export default Profile;
