import React, { useEffect, useState } from 'react';
import { getData } from '../utils/getData';

export default function Academic() {

  const [academic, setAcademic] = useState([])

  useEffect(async () => {
    const { Academic } = await getData('http://localhost:3000/data');
    setAcademic(Academic);
  }, []);

  return (
    <div className="academics">
      <h4 className="Academic-title">Academic experience</h4>
      {academic.map((item, i) => (
        <div className="Academic-item" key={i}>
          -Degree: {item.degree} / Period: {item.startDate} - {item.endDate} /
          Institution: {item.institution}
        </div>
      ))}
    </div>
  );
}
