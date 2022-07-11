import React from 'react';
import useUserData from '../hooks/useUserData';

const Experience = () => {
  const { userData } = useUserData();

  return (
    <>
      {(userData) &&
        <>
          <h2 className='Experience-title'>Experience</h2>

          <div className='Items-container'>
            {userData.experience.map(({ jobTitle, jobDescription, company, startDate, endDate }, idx) => (
              <>
                <div className='Experience-item' id={`${idx}-${idx}`}>
                  <span><b>Title: </b>{jobTitle}</span>
                  <span><b>Company: </b>{company}</span>
                  <span><b>{startDate} - {endDate} </b></span>
                  <p>{jobDescription}</p>
                </div>
              </>
            ))}
          </div>
        </>
      }
    </>
  )
};

export default Experience;
