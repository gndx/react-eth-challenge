import React from 'react'

const ExpCard = ({ company, endDate, jobDescription, jobTitle, startDate  }) => {
    return (
      <article>
        <div className="Experience-item">
            {company} - {jobTitle} - {jobDescription} - {startDate} to {endDate}
        </div>
      </article>
    );
  };

export default ExpCard;