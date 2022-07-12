import React from 'react'

function Experience({ experience = Array(3).fill({company: '',endDate: '',jobDescription: '',jobTitle: '',startDate: '',}),}) 
{
  return (
    <div className='exp'>
      <h2 className="Experience-title">Experience</h2>
      <ul className='list'>
        {
        experience.map(
          ({ company, endDate, startDate, jobDescription, jobTitle},index) => {
            return (
              <li className="Experience-item" key={`${company}_${endDate}_${jobDescription}_${jobTitle}_${startDate}_${index}`}>
              <h3>{jobTitle}</h3>
              <p>{company} . {startDate} - {endDate}</p>
              <p>Description: {jobDescription}</p>
              </li>
            )
          }
      )}
      </ul>

    </div>
  )
}

export default Experience