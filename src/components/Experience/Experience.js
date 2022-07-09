import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Utils/Card';
import ExperienceItem from './ExperienceItem';

const Experience = ({ data }) => {
  return (
    <Card>
      <h1 className='Experience-title text-xl font-semibold mb-2 text-slate-900 dark:text-white'>Experience</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 border-l-4 border-cyan-400 rounded-sm'>
        {data.map((experience) => {
          return <ExperienceItem className='Experience-item' data={experience} key={experience.id} />;
        })}
      </div>
    </Card>
  );
};

Experience.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Experience;
