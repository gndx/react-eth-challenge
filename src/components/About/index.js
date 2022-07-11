import React from 'react'
import './styles.css'

function About(props) {
  return (
    <div className='About'>
      <h1 className='About-title'>{props.name}</h1>
      <ul className='About-items'>
        <li className='About-item'>{props.email}</li>
        <li className='About-item'>{props.phone}</li>
        <li className='About-item'>{props.address}</li>
        <li className='About-item'>{props.website}</li>
      </ul>
    </div>
  )
}

export default About