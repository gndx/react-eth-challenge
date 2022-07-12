import React from 'react'

function Interest({ interest = Array(3).fill('') }) {
  return (
    <div className='int'>
      <h2 className="Interest-title">Interest</h2>
      <ul className='int-lst'>
          {
            interest.map(
              (interest, index) => {
                return (
                  <li key={`${interest}_${index}`} className="Interest-item">
                    <p>{interest}</p>
                  </li>
                )
              }
        )}
      </ul>
    </div>

  )
}

export default Interest