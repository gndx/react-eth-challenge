import React from 'react'

export default function About({ avatar, name, address, email, phone, profession, website }) {
  return (
    <div className='About'>
      <div>
        <h2 className="About-title"></h2>
        <img src={avatar} alt="avatar" />
      </div>
      <div>
        <ul>
          <li className="About-item">{name}</li>
          <li className="About-item">{profession}</li>
          <li className="About-item">{address}</li>
          <li className="About-item">{email}</li>
          <li className="About-item">{phone}</li>
          <li className="About-item">
            <a href={website} target='_blank'>Linkedln</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

