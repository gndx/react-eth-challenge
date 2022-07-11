import React from 'react'
import './styles.css'

function Profile(props) {
  return (
    <div className='profile card'>
        <h1 className='Profile-title'>{props.profession}</h1>
        <h4 className='Profile-desc'>{props.profile}</h4>
    </div>
  )
}

export default Profile