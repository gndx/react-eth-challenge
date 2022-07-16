import React, { useContext } from 'react'
import AppContext from '../context/context'

const Header = ({children}) => {

  const {
    avatar,
    name
  } = useContext(AppContext)

  return (
    <div className='Header-container'>
      <img src={avatar} alt="Profile image" className='Profile-image'/>
      <div className='Header-info'>
        <h1 className='Header-title'>{ name }</h1>
        { children }
      </div>
    </div>
  )
}

export default Header