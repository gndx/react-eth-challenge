import React from 'react'
import db from '../../data.json';

const Profile = () => {
  return (
    <div className='p-2 m-5'>
      <p className='Profile-title text-lg font-bold'>Profile</p>
      <p className='Profile-desc'>{db.data.Profile}</p>
    </div>
  )
}

export default Profile