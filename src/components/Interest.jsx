import React from 'react'

export default function Interest(props) {
  return (
    <div className='Interest section content is-size-4'>
      <h2 className='Interest-title subtitle is-2'>Interest</h2>
      <ul>
        {props.data.interest.map((interest, k) => (
          <li className="Interest-item" key={k}>
            <p className="Interest-item-title">
              {interest} 
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
