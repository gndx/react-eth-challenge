import React from 'react'

export default function Interest({
  interest = Array(3).fill(''),
}) {
  return (
    <div className='Interest'>
      <h2 className="Interest-title">Interest</h2>
        <ul>
          {interest.map((item, index) => (
            <li key={`${item}_${index}`} className='Interest-item'>{item}</li>
          ))}
        </ul>
    </div>
  )
}
