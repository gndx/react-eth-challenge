import React from 'react'

function Interest(props) {
  return (
    <div className='Interest card'>
      <h1 className='Interest-title'>Interests</h1>
      <span className='Interest-item'>{props.interests ?  props.interests[0] : '' }</span>
      <span className='Interest-item'>{props.interests ?  props.interests[1] : '' }</span>
      <span className='Interest-item'>{props.interests ?  props.interests[2] : '' }</span>
    </div>

  )
}

export default Interest