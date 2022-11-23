import React from 'react'
import { useAppContext} from '../context/AppContext';

const Header = ({ children }) => {
  const { name, profession, address, email, website, phone, avatar} = useAppContext();
  return (
  <div className='header'>
    <div className='header_container'>
      <div className="avatar_container">
        <img src={avatar} className="avatar"/>
      </div>
      <div className='info_container'>
        <h1 className='Header-title'>{name}</h1>
        <p className='Header-phone'>{profession}</p>
        <div className="inline_container">
          <p className='Header-phone'>{phone}</p>
          <p className='Header-email'>{email}</p>
          <p className='Header-website'>{website}</p>
        </div>
        <p className='Header-address'>{address}</p>
        {children}
      </div>
    </div>
  </div>
)}
export default Header;
