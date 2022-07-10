import React from 'react';

function Header({ data = {} }) {
  console.log(data);
  return (
    <div className='header'>
      <img src={data.avatar} alt='avatar' />
      <h1 className='Header-title'>{data.name}</h1>
      <h2 className='Header-job-title'>{data.profession}</h2>
    </div>
  );
};

export default Header;
