import React from 'react'

function About({social}) {

  
  return (
    <div className='About'>
     
        <span className='About-title title'>Social Media</span>
     
      <div className='body'>
            {social?.map((s, i) => ( 
           
                <div key={i} className='About-item'>
                  <span className='descrip'><a href={s.url} target="_blank">📲 {s.name}</a></span>
                </div>                
         
            ))}
          </div>
    </div>
  )
}

export default About