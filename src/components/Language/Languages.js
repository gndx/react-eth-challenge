import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Utils/Card';
import LanguageItem from './LanguageItem';

const Languages = ({ data }) => {
  return (
    <Card className='w-full'>
      <h1 className='Languages-title text-xl font-semibold mb-3 text-slate-900 dark:text-white'>Languages</h1>
      <div className='grid grid-rows-2 grid-flow-row gap-3'>
        {data.map((language) => (
          <LanguageItem className='Languages-item' key={language.id} data={language} />
        ))}
      </div>
    </Card>
  );
};

Languages.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Languages;
