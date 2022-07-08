import React from 'react'

export const Profile = ({title = 'Profile', data}) => {

  const profile = data ?? null

  const profileHtml = profile ? <div className='Profile-desc'>{profile}</div> : null


  return (
    <div>
      
      <h1 className='Profile-title'>{title}</h1>

      { profileHtml }

    </div>
    )
    
}