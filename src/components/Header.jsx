import React from 'react'

function Header({name, avatar, children}) {
  return (
    <header className="Header">
      <img src={avatar} alt="picture" />
      <h1 className='Header-title'>{name}</h1>
      {children}
    </header>
  )
}

export default Header