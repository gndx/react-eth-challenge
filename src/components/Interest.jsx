import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Interest = () => {
  return (
    <Section id="Interest" className="flex flex-col">
        <span className="flex items-center">
          <Icon name="Fire" className="mr-0.5 text-red-500" />
          <h3 className="Interest-title">Interest</h3>
        </span>
        <div className="flex">
          <p className="Interest-item mr-2">Interest-item</p>
          <p className="Interest-item mr-2">Interest-item</p>
          <p className="Interest-item mr-2">Interest-item</p>
        </div>
    </Section>
  );
};

export default Interest;
