import React, {useState, useEffect} from 'react'

function Experience({experience}) {

  return (
    <div className='Experience'>
      <div className='exp-section-main'>
        <span className='Experience-title title'>Experience</span>
      </div>
      
      {experience?.map((e, i) => {
        return (
          <div key={i} className='exp-section'>
            <div>
              <span className='Experience-item title'>{e.jobTitle} - {e.company}</span>
              <div className='body-column'>
                <span className='descrip'>{e.startDate} - {e.endDate}</span>
                <span className='descrip'>{e.jobDescription}</span>
              </div>          
            </div>
          </div>
        )})}
      
      
    </div>
  )
}

export default Experience