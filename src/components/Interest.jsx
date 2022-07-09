import React from 'react'

function Interest({interest}) {
  return (
    <div className='Interest'>
      <div className='section'>
        <div>          
          <span className='Interest-title title'>Interest</span>
          <div className='body'>
            {interest?.map((i, key) => <span key={key} className='Interest-item descrip'>🖱 {i}</span>)}
          </div>         
        </div>
      </div>
    </div>
  )
}

export default Interest