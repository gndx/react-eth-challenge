import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Profile = ({ data }) => {
  return (
    <Section id="Profile" className="flex flex-col">
      <span className="flex items-center mb-3">
        <Icon name="Profile" className="w-[27px] mr-[1px] text-sky-500" />
        <h3 className="Profile-title">{data.profile.title}</h3>
      </span>
      <div className="Profile-desc">
        {data.profile.description.map((description, index) => (
          <p key={index} className="mb-2.5">
            {description}
          </p>
        ))}
      </div>
    </Section>
  );
};

export default Profile;
