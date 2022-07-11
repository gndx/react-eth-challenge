import React from 'react';

const Interest = ({ userData }) => {

  return (
    <div>
      <h2 className='Interest-title'>Interest</h2>

      <section className='Items-container'>
        {userData.interest.map((interest, idx) => (
          <h4 className='Interest-item' key={`${idx}-${idx}`}>
            {interest}
          </h4>
        ))}
      </section>
    </div>
  )
};

export default Interest;
