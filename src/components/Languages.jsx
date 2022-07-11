import React from 'react';

const Languages = ({ userData }) => {
  return (

    <div>
      <h2 className='Languages-title'>Languages</h2>

      <section className='Items-container'>
        {userData.languages.map(({ name, percentage }, idx) => (

          <h4 key={`Languages-item-${idx}-${idx}`} className='Languages-item' >
            {name} - {percentage}
          </h4>
        ))}

      </section>
    </div >
  )
};

export default Languages;
