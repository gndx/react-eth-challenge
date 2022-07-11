import React from 'react';
import useUserData from '../hooks/useUserData';

const Skills = () => {
  const { userData } = useUserData();

  return (
    <>
      {(userData) &&
        <div>
          <h2 className='Skills-title'>Skills</h2>

          {userData.skills.map(({ name, percentage }, idx) => (

            <div className='Skills-item' id={`${idx}-${idx}`} >
              <h4>{name} - {percentage}</h4>
            </div>
          ))}
        </div>
      }
    </>
  )
};

export default Skills;
