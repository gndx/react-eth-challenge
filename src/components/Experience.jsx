import React, { useContext } from 'react'
import AppContext from '../context/context'

const Experience = () => {

  const {
    experience
  } = useContext(AppContext)

  return (
    <div>
      <h1 className="Experience-title">Experience</h1>
      <ul>
        {
          experience?.map(({
            startDate,
            endDate,
            company,
            jobTitle,
            jobDescription,
          }, index) => (
            <li className="Experience-item" key={company+index}>
              <span className='item-title'>{jobTitle},</span>
              <span className='item-title'> {company}</span>
              <p className='item-description'>{jobDescription}</p>
              <span className='item-description'>{startDate} - </span>
              <span className='item-description'>{endDate}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Experience