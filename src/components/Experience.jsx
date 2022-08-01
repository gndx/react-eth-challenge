import React from 'react';

function Experience(props) {
  const {
    experience = new Array(3).fill({
      jobDescription: 'No experience yet',
      company: '',
      jobTitle: 'No experience yet',
      startDate: '',
      endDate: '',
    }),
  } = props;
  return (
    <section className='Experience'>
      <h2 className='Experience-title'>Experience</h2>
      <article className='Experience-items'>
        {experience.map((item, index) => (
          <ul
            key={`experience-item-${index}`}
            className='Experience-item'
          >
            <h4 className='job-title'>
              <li>
                {item?.jobTitle}
                {' '}
                •
                {' '}
                {`${item?.startDate} - ${item?.endDate}`}
              </li>
            </h4>
            <p className='job-company'>{item?.company}</p>
            <p className='job-description'>
              Stack:
              {' '}
              {item?.jobDescription}
            </p>
          </ul>
        ))}
      </article>
    </section>
  );
}

export default Experience;
