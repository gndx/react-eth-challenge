import React from 'react';
import Icon from '../containers/Icon';
import Section from '../containers/Section';

const Academic = () => {
  return (
    <Section id="Academic" className="flex flex-col">
      <span className="flex items-center">
        <Icon name="Education" className="mr-0.5 text-neutral-900" />
        <h3 className="Academic-title">Academic</h3>
      </span>
      <div className="flex">
        <p className="Academic-item mr-2">Academic-item</p>
        <p className="Academic-item mr-2">Academic-item</p>
        <p className="Academic-item mr-2">Academic-item</p>
      </div>
    </Section>
  );
};

export default Academic;
