import React from 'react';
import data from '../../../data.json';

import '../../styles/components/Header.styl';

function Header({ children }) {
  return (
    <div className='Header'>
      <img src={data.data?.avatar} alt={data.data?.name} />
      <div className='Header-data'>
        <h2 className='Header-title'>
          { data.data?.name }
        </h2>
        <h4 className='Header-job-title'>
          { data.data?.profession }
        </h4>
        { children }
        <div className='Header-address'>
          { data.data?.address }
        </div>
      </div>
    </div>
  );
}

export default Header;
