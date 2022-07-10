import React from 'react'

export const Languages = ({title = 'Languages', data}) => {

  const languages = data ? data.map(data => data.name) : null

  const languagesHtml = languages ? languages.map(language => <div className='Languages-item'>{language}</div>) : null

  return (
    <div>
      
      <h1 className='Languages-title'>{title}</h1>

      { languagesHtml }

    </div>
    )
    
}