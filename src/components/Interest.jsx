import React from 'react'

export default function Interest({
  interest = Array(3).fill(''),
}) {
  return (
    <div>
      <h2 className="Interest-title">Interest</h2>
        <ul>
          {interest.map((item) => (
            <li className='Interest-item'>{item}</li>
          ))}
        </ul>
    </div>
  )
}
