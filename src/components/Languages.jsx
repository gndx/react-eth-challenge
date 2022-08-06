import React from 'react'
import { useDataContext } from '../context/DataContext'

function Languages() {
  const { data } = useDataContext()

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
  
}

export default Languages