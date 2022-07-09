import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Content from '../Content';
import dateFormat from '../../utils/dateFormat';

const Academic = () => {
  const data = useContext(AppContext);
  const initalContent = data.Academic ? data.Academic : [0, 1, 2];
  const academic = (dataAcademic) => {
    const { startDate, endDate, degree, institution } = dataAcademic;
    const dateAcademic = dateFormat(startDate, endDate);
    return { degree, dateAcademic, institution };
  };
  return (
    <section className="academic">
      <h2 className="Academic-title">Academic Information</h2>
      {initalContent.map((item, i) => (
        <div key={i} className="Academic-item">
          <Content data={data.Academic && academic(item)} />
        </div>
      ))}
    </section>
  );
};

export default Academic;
