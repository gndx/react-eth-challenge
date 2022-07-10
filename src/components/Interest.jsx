import React from 'react'

export const Interest = ({title = 'Interest', data}) => {

  const interestsHtml = data ? data.map(interest => <div className='Interest-item'>{interest}</div>) : null

  return (
    <div>
      
      <h1 className='Interest-title'>{title}</h1>

      { interestsHtml }

    </div>
    )
    
}