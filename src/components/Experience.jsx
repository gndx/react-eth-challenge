import React from 'react'

export default function Experience({
  experience = Array(3).fill({
    company: 'company',
    endDate: 'endDate',
    jobDescription: 'jobDescription',
    jobTitle: 'jobTitle',
    startDate: 'startDate',
  }),
}) {
  return (
    <div className='Experience'>
      <h2 className="Experience-title">Experience</h2>
      {experience.map(({company, endDate, jobDescription, jobTitle, startDate}, index) => (
        <div key={`${company}_${endDate}_${jobDescription}_${jobTitle}_${startDate}_${index}`} className='Experience-item'>
          <h3>{jobTitle} - {company}</h3>
            <p>{jobDescription}</p>
            <p>{startDate} - {endDate}</p>
        </div>
      ))}
    </div>
  )
}
