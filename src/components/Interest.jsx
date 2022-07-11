import React from 'react';

function Interest({
  interest = Array(3).fill(''),
}) {
  return (
    <section>
      <h2 className='Interest-title'>Interest</h2>
      <ul>
        {
          interest.map((item, index) => {
            return (
              <li
                key={`interest-${index}`}
                className='Interest-item'
              >
                {item}
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}

export default Interest;
