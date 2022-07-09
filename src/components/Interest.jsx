import React, { useEffect, useState } from 'react';
import { getData } from '../utils/getData';

export default function Interest() {

  const [interest, setInterest] = useState([])

  useEffect(async () => {
    const { interest } = getData('http://localhost:3000/data');
    setInterest(interest);
  }, []);

  return (
    <div className="interest">
      <div className="Interest-title">Interests</div>
      {interest.map((item, i) => (
        <div key={i} className="Interest-item">
          {item}
        </div>
      ))}
    </div>
  );
}
