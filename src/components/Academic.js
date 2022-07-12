import React, { useId } from 'react';

const Card = ({ degree, description, endDate, institution, startDate }) => {
  return (
    <li className="Academic-item">
      <h3>
        {degree} -{' '}
        <time>
          {startDate} / {endDate}
        </time>
      </h3>
      <p>{description} ( <em>{institution}</em> )</p>
      
    </li>
  );
};

function Academic({ academic = [] }) {
  return (
    <div className="Academic">
      <h2 className="Academic-title">Academic</h2>
      <ul className="academic-list">
        {academic.map((item) => (
          <Card key={useId()} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default Academic;
