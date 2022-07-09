import React from 'react';

function MySkills({ name, percentage }) {
  return (
    <div className='card shadow-sm p-3 m-2 col-12 col-sm-6 col-md-4'>
      {name}
    </div>
  );
};

export default MySkills;
