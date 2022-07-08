import React from 'react';
import '../styles/components/App.styl';
import db from '../../data.json'

const Header = () => {
  return (
    <div className='Header-title'>
      <h1>{db.data.name}</h1>
    </div>
  )
}

export default Header;