import React from 'react'

const Profile = ({ data = {} }) => {
  return (
    <div className='Profile-container container'>
      <h2 className='Profile-title'>Desarrollador Web</h2>
      <p className='Profile-desc'>{data.Profile}</p>
    </div>
  )
}

export default Profile
