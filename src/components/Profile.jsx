import React from 'react'
import '../styles/components/Profile.styl'

const Profile = ({data}) => {

  return (
    <div className="Profile-container">
      <h1 className="Profile-title">Profile</h1>
      <p className="Profile-desc">{data}</p>
    </div>
  )
}

export default Profile