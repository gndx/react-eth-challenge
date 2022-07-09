import React from 'react';

function MyAcademic({ degree, startDate, endDate, institution }) {
  return (
    <div className='card shadow-sm p-3 m-2 col-12 col-sm-6 col-md-4'>
      <p className=''>{degree}</p>
      <p>{institution}</p>
      <p>
        {startDate}
        {' '}
        -
        {' '}
        {endDate}
      </p>
    </div>
  );
}

export default MyAcademic;
