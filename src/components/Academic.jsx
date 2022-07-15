import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import Title from './Title';
import '../assets/styles/components/Academic.scss';

/** Shows Academic information*/
const Academic = ({ t }) => {
  const [viewMore, setViewMore] = useState(false);

  /** AcademicItem component*/
  const AcademicItem = ({ title, institute, year, link }) => (
    <div className="academic-item p-4 rounded mb-4 h-100">
      <h3 className="title">{title}</h3>
      <h4 className="institute">{institute}</h4>
      <h4 className="year">{year}</h4>
      {link && (
        <a href={link} target="_blank" className="text-decoration-none">
          {t?.('credential')}
        </a>
      )}
    </div>
  );

  return (
    <section className="academic-section middle-section p-4 rounded bg-section mb-4 position-relative overflow-hidden">
      <Title title={t?.('academicTitle')} />

      <ul
        className={`ps-0 d-flex justify-content-between flex-wrap mb-0${
          viewMore ? ' show-all' : ''
        }`}
      >
        {t?.('academic', { returnObjects: true }).map((item, index) => (
          <li
            key={index}
            className={`mb-4${index > 3 && !viewMore ? ' d-none' : ''}`}
          >
            <AcademicItem
              title={item.title}
              institute={item.institute}
              year={item.year}
              link={item?.link}
            />
          </li>
        ))}
      </ul>
      {t?.('academic', { returnObjects: true }).length > 4 && (
        <div
          className="cursor-pointer link-style w-max-content"
          onClick={() => setViewMore(!viewMore)}
        >
          {viewMore ? t?.('viewLess') : t?.('viewMore')}
        </div>
      )}
    </section>
  );
};

export default withTranslation()(Academic);
