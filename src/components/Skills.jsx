import React from 'react'

function Skills({skills}) {
  return (
    <div className='Skills'>
      <div className='exp-section-main'>
        <span className='Skills-title title'>Skills</span>
      </div>
      <div className='section'>
        {skills?.map((s,i) => {
          return (
            <div key={i} className=' item'>
              <span className='title'>{s.name}</span>
              <div className='body-column'>
                <span className=' descrip'>📈 {s.percentage}</span>
              </div>          
            </div>
          )
        })}
        
        
      </div>
    </div>
  )
}

export default Skills