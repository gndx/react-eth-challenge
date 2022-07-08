import React from 'react';
import PropTypes from 'prop-types';

const ExperienceItem = ({ data, className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className='text-cyan-400 mr-2 ml-1'>-</span>
      <div className='flex flex-col'>
        <span className='About-title font-medium text-slate-500 dark:text-slate-400'>{data.jobTitle}</span>
        <span>
          {data.company}
          ,
          {' '}
          {data.startDate}
          {' '}
          -
          {' '}
          {data.endDate}
        </span>
      </div>
    </div>

  );
};

ExperienceItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ExperienceItem;
