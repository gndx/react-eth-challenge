import React from 'react'
import { useAppContext} from '../context/AppContext';

const Experience = () => {
  const { experience } = useAppContext();
  return (
    <div className='container'>
        <h1 className="Experience-title">Experience</h1>
      <ul className='margin_top_10'>
        { experience.map( ({company, endDate, jobDescription, jobTitle, startDate}) => (
          <li key={company} className='Experience-item'>
            <h2>{ company } - {jobTitle}</h2>
            <p>{jobDescription}</p>
            <span>{startDate} - {endDate}</span>
          </li>
        )) 
        }
      </ul>
    </div>
  )
}
export default Experience;