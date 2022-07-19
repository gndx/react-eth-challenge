import React from 'react';
import Card from '../Card';
import '../../styles/components/Header.css';

function Header({ children, avatar, name }) {
  return (
    <Card Tag='header' flexDirection='row'>
      <div className='Header-img'>
        <img src={avatar} alt={`${name}`} />
      </div>
      <div className='Header-info'>
        <h1 className='Header-title'>{name}</h1>
        {children}
      </div>
    </Card>
  );
}

export default Header;
