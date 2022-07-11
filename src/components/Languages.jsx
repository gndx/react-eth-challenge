import React from 'react';
import useUserData from '../hooks/useUserData';

const Languages = () => {
  const { userData } = useUserData();
  return (
    <>
      {(userData) &&
        <div>
          <h2 className='Languages-title'>Languages</h2>

          <div className='Items-container'>
            {userData.languages.map(({ name, percentage }, idx) => (

              <h4 className='Languages-item' id={`${idx}-${idx}`} >
                {name} - {percentage}
              </h4>
            ))}

          </div>
        </div>
      }
    </>
  )
};

export default Languages;
