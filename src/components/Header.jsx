import React, { useEffect } from 'react';
import { useDataContext } from '../context/DataContext';

function Header({children}) {
  const { data } = useDataContext()
 
  return (
    <div className='card d-flex bg-dark'>
      <div>
        <img className='avatar' src={data.data?.avatar} alt={data.data?.name}/>
      </div>
      <div>
        <h1 className='Header-title'>{data.data?.name}</h1>
        <p>{data.data?.profession}</p>
        {children}
      </div>
      
      
    </div>
  );
}

export default Header;