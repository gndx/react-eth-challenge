import React, { Children } from 'react'

export const Header = ({title = 'Header', children}) => {

  return (
    <div>
      
      <h1 className='Header-title'>{title}</h1>

      { children }

    </div>
    )
    
}