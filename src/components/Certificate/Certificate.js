import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Utils/Card';
import CertificateItem from './CertificateItem';

const Certificate = ({ data }) => {
  return (
    <Card className='w-full'>
      <h1 className='Certificate-title text-xl font-semibold mb-2 text-slate-900 dark:text-white'>Certificate</h1>
      <div className='grid grid-rows-flow border-l-4 border-cyan-400 rounded-sm'>
        {data.map((certificate, i) => {
          return <CertificateItem className='Certificate-item mb-2' data={certificate} key={certificate.id} />;
        })}
      </div>
    </Card>
  );
};

Certificate.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Certificate;
