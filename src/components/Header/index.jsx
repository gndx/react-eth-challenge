import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const Header = ({ children }) => {
  const data = useContext(AppContext)
  return (
    <section className='header'>
      <img src= {data.avatar} alt="imagen de perfil" />
      <div className='header-info'>
        <h1 className='header-title'>{data.name }</h1>
        <h3 className='header-job-title'>{data.profession }</h3>
        {children}
        <p className='header-address'>{data.address }</p>
      </div>
    </section>
  )
}

export default Header