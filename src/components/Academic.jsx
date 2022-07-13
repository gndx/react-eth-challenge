import React from 'react';

const Academic = (props) => {
  const { items = new Array(3).fill('No academic title yet') } = props;

  return (
    <section className="Academic">
      <h2 className="Academic-title">Academic</h2>
      <div className="Academic-items">
        {items.map((item, index) => (
          <ul key={`academic-item-${index}`} className="Academic-item">
            <h4 className="academic-institution">
              <li>
                {item.degree} - {item?.institution}
              </li>
            </h4>
            <p className="academic-dates">{`${item.startDate} - ${item.endDate}`}</p>
            <p className="academic-descr">{item.description}</p>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Academic;
