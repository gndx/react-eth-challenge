import React from 'react';

function Languages({languages}) {
  return (
    <div className="Languages">
      <div className="card">
        <div className="Languages-title">Languages</div>
        {languages && languages?.map((language) => (
          <div key={language?.name} className="Languages-item">
            <div>Language: {language?.name}</div>
            <div>Percentage: {language?.percentage}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
