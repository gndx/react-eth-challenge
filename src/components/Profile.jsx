import React from 'react'

function Profile({data}) {
  if(data){
    return (
      <div className='card bg-primary'>
        <h1 className='Profile-title'>{data.data?.Profile} &#128151;</h1>
        <p className='Profile-desc'></p>
      </div>
    )
  }
  return(
    <div className='card bg-primary'>
      <h1 className='Profile-title'></h1>
      <p className='Profile-desc'></p>
    </div>
  )
}

export default Profile