import React from 'react'

export const About = ({title = 'About', data}) => {

  return (
    <div>
      
      <h1 className='About-title'>{title}</h1>

      <div className='About-item'>{data.name ?? null}</div>
      <div className='About-item'>{data.profession ?? null}</div>
      <div className='About-item'>{data.address ?? null}</div>

    </div>
    )
    
}