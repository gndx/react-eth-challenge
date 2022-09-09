import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Interest = ({
  data = { interest: { title: '', interests: [{}, {}, {}] } },
}) => {
  return (
    <Section id="Interest" className="flex flex-col">
      <span className="flex items-center mb-3">
        <Icon name="Fire" className="mr-0.5 text-red-500" />
        <h3 className="Interest-title">{data.interest.title}</h3>
      </span>
      <div className="flex flex-col">
        {data.interest.interests.map((interest, index) => (
          <p className="Interest-item mb-2" key={index}>
            {interest}
          </p>
        ))}
      </div>
    </Section>
  );
};

export default Interest;
