import React from 'react'

export const Academic = ({title = 'Academic', data}) => {

  const degrees = data ? data.map(data => data.degree) : null

  const degreesHtml = degrees ? degrees.map(degree => <div className='Academic-item'>{degree}</div>) : null

  return (
    <div>
      
      <h1 className='Academic-title'>{title}</h1>

      { degreesHtml }

    </div>
    )
    
}
