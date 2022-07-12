import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const Profile = () => {
  const data = useContext(AppContext)
  return (
    <section className='Profile'>
      <h1 className='Profile-title'>Hi there, I am Carlos 🤘🏻</h1>
      <p className='Profile-desc'>
        {data.Profile}
      </p>
    </section>
  )
}

export default Profile