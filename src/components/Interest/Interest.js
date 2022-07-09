import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Utils/Card';
import InterestItem from './InterestItem';

const Interest = ({ data }) => {
  return (
    <Card className='w-full'>
      <h1 className='Interest-title text-xl font-semibold mb-2 text-slate-500 dark:text-white'>Interest</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        {data.map((interest) => <InterestItem className='Interest-item' key={interest.id} image={interest.image}>{interest.name}</InterestItem>)}
      </div>
    </Card>
  );
};

Interest.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Interest;
