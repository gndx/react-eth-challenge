import React from 'react';

function Academic(props) {
  const { academic = new Array(3).fill({
    degree: 'No education',
    description: '',
    endDate: '',
    institution: '',
    startDate: '',
  }) } = props;
  return (
    <section className='Academic'>
      <h2 className='Academic-title'>Academic</h2>
      <article className='Academic-items'>
        {academic.map((item, index) => (
          <ul key={`academic-item-${index}`} className='Academic-item'>
            <h4 className='academic-institution'>
              <li>
                {item.degree}
                {' '}
                •
                {' '}
                {item?.institution}
              </li>
            </h4>
            <p className='academic-dates'>{`${item.startDate} - ${item.endDate}`}</p>
            <p className='academic-descr'>{item.description}</p>
          </ul>
        ))}
      </article>
    </section>
  );
}

export default Academic;
