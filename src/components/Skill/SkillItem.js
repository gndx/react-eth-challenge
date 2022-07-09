import React from 'react';
import PropTypes from 'prop-types';

const SkillItem = ({ data, color = 'bg-cyan-400' }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <span className={`rounded-sm ${color} mr-2 h-2.5 w-2.5 mr-2 mt-0.5`} />
          <span className='text-slate-500 dark:text-slate-400'>{data.name}</span>
        </div>
        <div className='text-sm font-medium dark:text-white'>
          {data.percentage}
          %
        </div>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-0.5 dark:bg-gray-700'>
        <div className='bg-gray-600 h-0.5 rounded-full dark:bg-gray-300' style={{ width: `${data.percentage}%` }} />
      </div>
    </div>
  );
};

SkillItem.propType = {
  data: PropTypes.object.isRequired,
  color: PropTypes.string,
};

export default SkillItem;
