import React from 'react'
import { useAppContext} from '../context/AppContext';

const Experience = () => {
  const { experience } = useAppContext();
  return (
    <div className='container'>
        <h1 className="Experience-title">Experience</h1>
      <ul>
        { experience.map( ({company, endDate, jobDescription, jobTitle, startDate}) => (
          <li className='Experience-item'>
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