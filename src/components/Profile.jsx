import React from 'react'

function Profile({p}) {
  return (
    <div className='prfl'>
      <h2 className="Profile-title">Profile</h2>
      <p className='Profile-desc'>
        {p}
      </p>
    </div>

  )
}

export default Profile