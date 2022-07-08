import React from 'react';
import PropTypes from 'prop-types';

const AcademicItem = ({ data, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className='text-cyan-400 mr-2 ml-1'>-</span>
      <div className='flex flex-col'>
        <span className='font-medium text-slate-500 dark:text-slate-400'>{data.degree}</span>
        <span>
          {data.institution}
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

AcademicItem.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default AcademicItem;
