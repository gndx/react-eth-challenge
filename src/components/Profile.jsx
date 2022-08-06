import React from 'react'
import { useDataContext } from '../context/DataContext';

function Profile() {
  const { data } = useDataContext()
  return (
    <div className='card bg-primary'>
      <h1 className='Profile-title'>{data.data?.Profile} &#128151;</h1>
      <p className='Profile-desc'></p>
    </div>
  )
}

export default Profile