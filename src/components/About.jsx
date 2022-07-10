import React from 'react'

export default function About({ avatar, name, address, email, phone, profession, website }) {
  return (
    <div>
      <h2 className="About-title">About</h2>
      <img src="{avatar}" alt="avatar" />
      <ul>
        <li className="About-item">{name}</li>
        <li className="About-item">{address}</li>
        <li className="About-item">{email}</li>
        <li className="About-item">{phone}</li>
        <li className="About-item">{profession}</li>
        <li className="About-item">{website}</li>
      </ul>
    </div>
  )
}

