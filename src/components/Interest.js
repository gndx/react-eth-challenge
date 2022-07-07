import React from 'react'

export default function Interest({ interests = ['', '', ''] }) {
  return (
    <article className='Interest'>
      <h2 className='Interest-title'>Intereses</h2>
      <ul>
        {interests.map((item, index) => (
          <li key={`interest-${item}`} className='Interest-item'>
            <h4 className='Interest-item-description'>{item}</h4>
          </li>
        ))}
      </ul>
    </article>
  )
}
