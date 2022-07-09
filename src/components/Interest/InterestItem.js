import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Utils/Card';

const InterestItem = ({ image, children }) => {
  return (
    <Card className='container content-between text-center flex flex-col justify-between hover:scale-105 transition ease-in-out shadow-xl'>
      <img src={image} alt='icon' className='h-12 pr-0 mr-0' />
      <span className='text-slate-500 dark:text-slate-400'>{children}</span>
    </Card>
  );
};

InterestItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default InterestItem;
