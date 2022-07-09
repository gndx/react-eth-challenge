import React from 'react'

function Languages({languages}) {
  return (
    <div className='Languages'>
      <div className='section'>
        <div>
          <span className='Languages-title title'>Languages</span>
          <div>
          <div className='body-column'>
            {languages?.map((l, i) => ( 
           
                <div key={i} className='Languages-item'>
                  <span className='descrip'>🗨 {l.name} </span>
                  <span className='descrip'> 📈 {l.percentage}</span>
                </div>                
         
            ))}
          </div>
          </div>         
        </div>
      </div>
    </div>
  )
}

export default Languages