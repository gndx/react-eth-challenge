import React from 'react';
import '../styles/components/Interest.css';

const Interest = (props) => {
  const { interests } = props;
  return (
    <section>
      <h2 className="Interest-title">Interests</h2>
      <div className="interest-box">
      {interests.map((interest, index) => (
        <div className="Interest-item" key={index}>
          <h3>{interest}</h3>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Interest;