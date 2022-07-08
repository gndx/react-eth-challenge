import React from 'react';
import PropTypes from 'prop-types';

const CertificateItem = ({ data, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className='text-cyan-400 mr-2 ml-1'>-</span>
      <div className='flex flex-col'>
        <span className='font-medium text-slate-500 dark:text-slate-400'>{data.description}</span>
        <span>
          {data.institution}
          ,
          {' '}
          {data.date}
        </span>

      </div>

    </div>

  );
};

CertificateItem.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default CertificateItem;
