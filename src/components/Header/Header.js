import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Utils/Card';
import About from './About';

const Header = ({ data }) => {
  return (
    <Card className='flex space-x-10'>
      <img src={data.avatar} alt='avatar' className='rounded-full h-21 ml-5' />
      <div className='flex justify-between flex-col'>
        <div>
          <h1 className='text-slate-900 dark:text-white Header-title text-2xl font-semibold'>{data.name}</h1>
          <span className='About-title font-medium text-slate-500 dark:text-slate-400'>{data.profession}</span>
        </div>
        <About data={data} />
      </div>
    </Card>
  );
};

Header.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Header;
