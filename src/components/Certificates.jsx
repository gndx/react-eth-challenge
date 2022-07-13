import React from 'react';

const Certificates = (props) => {
  const { items = new Array(3).fill('No academic title yet') } = props;

  return (
    <section className="Certificates">
      <h2 className="Certificate-title">Certificates</h2>
      <div className="Certificate-items">
        {items.map((item, index) => (
          <ul key={`certificate-item-${index}`} className="Certificate-item">
            <h4 className="certificate-name">
              <li>
                {item?.name} - {item.date} - {item.institution}
              </li>
            </h4>
            <p className="certificate-descr">{item.description}</p>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
