import React from 'react'

function Languages({data}) {
  if(data){
    return (
      <div id='w-50' className='card bg-black'>
        <h1 className='Languages-title'>Languages</h1>
        {data.data?.languages.map(lang => {
          return <p key={lang.name} className='Languages-item'>{lang.name} - {lang.percentage}</p>
        })}
      
      </div>
    )
  }

  return(
    <div className='card bg-black'>
      <h1 className='Languages-title'>Languages</h1>
      <p className='Languages-item'></p>
      <p className='Languages-item'></p>
      <p className='Languages-item'></p>
    </div>
  )
  
}

export default Languages