import React from 'react'

function Interest({data}) {
  if(data){
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
  
  return(
    <div className='card bg-dark'>
      <h1 className='Interest-title'>Interest</h1>
      <p className='Interest-item'></p>
      <p className='Interest-item'></p>
      <p className='Interest-item'></p>
    </div>
  )
}

export default Interest