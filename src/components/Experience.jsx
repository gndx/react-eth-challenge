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
    <div>
      <h2 className="Experience-title">Experience</h2>
      {experience.map((item) => (
        <div className='Experience-item'>
          <h3>{item.degree} - {item.jobTitle} - {item.company}</h3>
          <ul>
            <li>{item.jobDescription}</li>
            <li>{item.startDate} - {item.endDate}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}
