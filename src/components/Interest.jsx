import React from 'react';
import useUserData from '../hooks/useUserData';

const Interest = () => {
  const { userData } = useUserData();

  return (
    <>
      {(userData) &&
        <div>
          <h2 className='Interest-title'>Interest</h2>

          <div className='Items-container'>
            {userData.interest.map((interest, idx) => (
              <h4 className='Interest-item' id={`${idx}-${idx}`}>
                {interest}
              </h4>
            ))}
          </div>
        </div>
      }
    </>
  )
};

export default Interest;
