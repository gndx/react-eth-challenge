import React from 'react';

const Interest = (props) => {
  const { items = new Array(3).fill('No interests submitted') } = props;

  return (
    <section>
      <h2 className="Interest-title">Interests</h2>
      <ul className="li__inline">
        {items.map((item, index) => (
          <li key={`interes-item-${index}`} className="Interest-item">
            - {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interest;
