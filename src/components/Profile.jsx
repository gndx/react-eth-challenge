import React from 'react'

export default function Profile({profile}) {
  return (
    <div>
      <h2 className="Profile-title">Profile</h2>
      <p className="Profile-desc">{profile}</p>
    </div>
  )
}
