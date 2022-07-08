import React from 'react'

const MyAcademic = ({ degree, startDate, endDate, institution  }) => {
    return (
        <div className="p-2">
          <p className='font-semibold'>{degree}</p>
          <p>{institution}</p>
          <p>{startDate} - {endDate}</p>
        </div>
    );
  };

export default MyAcademic;