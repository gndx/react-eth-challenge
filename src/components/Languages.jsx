import React, { useEffect, useState } from 'react';
import { getData } from '../utils/getData';

export default function Languages() {
  const [languages, setLanguages] = useState([])

    useEffect(async () => {
      const { languages } = await getData('http://localhost:3000/data');
      setLanguages(languages);
    }, []);

  return (
    <div className="languages">
      <div className="Languages-title">
        <b>Languages</b>
      </div>
      <div className="list-interests">
        {languages.map((item, i) => (
          <div key={i} className="Languages-item">
            Language: {item.name} / Percentage: {item.percentage}
          </div>
        ))}
      </div>
    </div>
  );
}
