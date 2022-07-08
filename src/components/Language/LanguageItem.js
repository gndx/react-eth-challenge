import React from 'react';
import PropTypes from 'prop-types';

const LanguageItem = ({ data }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center'>
        <div className=' flex items-center'>
          <img src={data.image} alt={data.name} className='h-4 w-6 mr-2' />
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

LanguageItem.propType = {
  data: PropTypes.object.isRequired,
};

export default LanguageItem;
