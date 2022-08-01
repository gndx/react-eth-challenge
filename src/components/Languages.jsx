import React from 'react';

function Languages(props) {
  const {
    languages = new Array(3).fill({
      name: 'No languages yet',
      percentage: '0%',
    }),
  } = props;

  return (
    <section className='Languages'>
      <h2 className='Languages-title'>Languages</h2>
      <article className='Languages-items'>
        {languages.map((item, index) => (
          <div className='Languages-item' key={`language-item-${index}`}>
            {item.name} {item.level && (<span className='Languages-level'>{item.level}</span>)}
          </div>
        ))}
      </article>
    </section>
  );
}

export default Languages;
