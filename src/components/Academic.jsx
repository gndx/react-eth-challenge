import React, { useEffect } from 'react';
import Card from './Card';

const certificate = ({ certificate }) => {
  useEffect(() => {
    console.log(certificate);
  }, [certificate]);

  return (
    <>
      <Card>
        <h2 className="Academic-title">Academic</h2>
        <ul>
          {certificate &&
            certificate.map((item) => {
              return (
                <li key={item.date}>
                  <div>
                    <h3 className="Academic-item">{item.degree}</h3>
                    <p className="Academic-item">{item.description}</p>
                    <h4 className="Academic-item">{item.institution}</h4>
                    <p className="Academic-item">{item.date}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </Card>
    </>
  );
};

export default certificate;
