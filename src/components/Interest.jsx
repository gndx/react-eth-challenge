import React from 'react'
import { useDataContext } from '../context/DataContext'

function Interest() {
  const { data } = useDataContext()
  return (
    <div id='w-50' className='card bg-dark'>
      <h1 className='Interest-title'>Interest</h1>
      <ul>
        {data.data?.interest.map(item => {
          return <li key={item} style={{'marginLeft': '1rem'}} className='Interest-item'>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default Interest