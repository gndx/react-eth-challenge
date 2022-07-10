import React from 'react'

export const Experience = ({title = 'Experience', data}) => {

  const experiences = data ? data.map(data => data.company) : null

  const experiencesHtml = experiences ? experiences.map(experience => <div className='Experience-item'>{experience}</div>) : null
  

  return (
    <div>
      
      <h1 className='Experience-title'>{title}</h1>

      { experiencesHtml }

    </div>
    )
    
}