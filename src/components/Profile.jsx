import React from 'react'
import { useAppContext} from '../context/AppContext';

const Profile = () => {
  const { Profile } = useAppContext();
  return (
    <div className='profile_container'>
        <h1 className="Profile-title">Profile</h1>
      <p className="Profile-desc">
        { Profile }</p>
    </div>
  )
}

export default Profile
