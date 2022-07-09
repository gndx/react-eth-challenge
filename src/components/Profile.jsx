import React from 'react'

function Profile({profile}) {
  return (
    <div className='Profile'>
      <div className='section'>
        <div>
          <span className='Profile-title title'>Profile</span>
          <span className='Profile-desc descrip'>{profile}</span>
        </div>
      </div>
    </div>
  )
}

export default Profile