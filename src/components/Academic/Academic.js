import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Utils/Card';
import AcademicItem from './AcademicItem';

const Academic = ({ data }) => {
  return (
    <Card className='w-full'>
      <h1 className='Academic-title text-xl font-semibold mb-2 text-slate-900 dark:text-white'>Education</h1>
      <div className='grid grid-rows-flow border-l-4 border-cyan-400 rounded-sm'>
        {data.map((academic) => {
          return <AcademicItem className='Academic-item mb-2' data={academic} key={academic.id} />;
        })}
      </div>
    </Card>
  );
};

Academic.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Academic;
