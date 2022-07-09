import React from 'react'

function Academic({academic}) {
  return (
    <div className='Academic'>
      <div className='section'>
        <span className='Academic-title title'>Academic</span>
      </div>
      <div className='section'>

        {academic?.map((e,i) => {
          return(
            <div key={i} className='Academic-item item'>
              <span className='title'>{e.degree}</span>
              <div className='body-column'>
                <span className='descrip'>{e.institution}</span>
                <span className='descrip'>{e.startDate} - {e.endDate}</span>
                <span className='descrip'><a href={e.description}>💻 {e.description} </a></span>
              </div>          
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Academic