import React from 'react'
import '../styles/components/Interest.styl'

const Interest = ({data}) => {
  
  return (
    <div className="Interest-container">
      <h1 className="Interest-title">Interests</h1>
      <li className="Interest-list">
        {data.map((interest,idx) =>{
          return (
            <ul key={idx} className="Interest-item">
              <span>{interest}</span>
            </ul>
          )
        })}
      </li>
    </div>
  )
}

export default Interest