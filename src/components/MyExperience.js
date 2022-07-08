import React from 'react'

const MyExperience = ({ company, endDate, jobDescription, jobTitle, startDate  }) => {
    return (
        <div className="p-2">
          <p className='font-semibold'>{company}</p>
          <p>{jobTitle}</p>
          <p>{jobDescription}</p>
          <p>{startDate} to {endDate}</p> 
        </div>
    );
  };

export default MyExperience;