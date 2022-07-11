import React from 'react';

export default function Academic(props) {
  return (
    <section className="Academic section content is-size-4">
          <h2 className="Academic-title subtitle is-2">Academic</h2>
          <ul>
            {props.data.Academic.map((academic, k) => (
              <li className="Academic-item" key={k}>
                <p className="Academic-item-title">
                  <span className='subtitle'>{academic.degree}</span> <span className='tag is-info is-medium'> {academic.institution} </span>
                  <br />
                  <span className="Academic-item-duration">
                    {academic.startDate}- {academic.endDate}
                  </span>
                </p>
                <p className="Academic-item-description">
                  {academic.description}
                </p>
                <br />
              </li>
            ))}
          </ul>
    </section>
  );
}
