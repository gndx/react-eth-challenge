import React from 'react';

function Header({data, children}) {
 if(data){
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

 return(
  <div className='card d-flex bg-dark'>
    <div>
      <img className='avatar' src='#' alt='avatar'/>
    </div>
    <div>
      <h1 className='Header-title'></h1>
      <p></p>
      {children}
    </div>
  </div>
 )
}

export default Header;