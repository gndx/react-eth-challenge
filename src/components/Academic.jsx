import React from 'react';

function Academic({ Academic }) {
  return (
    <div className="Academic">
      <div className="card">
        <div className="Academic-title">Academic</div>
        {Academic?.map((academic) => (
          <div key={academic?.institution + academic?.startDate} className="Academic-item">
            <div>Degree: {academic?.degree}</div>
            <div>Description: {academic?.description}</div>
            <div>End Date: {academic?.startDate}</div>
            <div>Start Date: {academic?.endDate}</div>
            <div>Institution: {academic?.institution}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academic;
