<<<<<<< HEAD
import React from 'react'

const Interest = () => {
  return (
    <>
    
    </>
  )
}

export default Interest
=======
import React from 'react';
import '../styles/components/Interest.styl';

function Interest({ interest = ['', '', ''] }) {
  return (
    <section className='Interest-section'>
      <h2 className='Interest-title'>Interest</h2>
      <div className='Interest-grid'>
        {interest?.map((elem, index) => (
          <div key={index}>
            <p className='Interest-item'>{elem}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interest;
>>>>>>> test
