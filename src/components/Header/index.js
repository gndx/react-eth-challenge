import React from 'react'
import About from '../About'
import './styles.css'

function Header(props) {
  return (
    <div className='Header'>
      <img className='Header-avatar' src={props.avatar} alt={props.name}  />
      <div className='Header-title'>
        <About name={props.name} email={props.email} phone={props.phone} address={props.address} website={props.website} />
      </div>
    </div>
  )
}

export default Header