import React from 'react';
import { withTranslation } from 'react-i18next';
import Title from '@/components/Title';
import '@/assets/styles/components/Experience.scss';

/** Shows Experience information*/
const Experience = ({ t }) => {
  /** ExperienceItem component*/
  const ExperienceItem = ({ title, company, year, description }) => (
    <div className="experience-item p-4 rounded mb-4 h-100">
      <h3 className="title">{title}</h3>
      <h4 className="company">{company}</h4>
      <h4 className="year">{year}</h4>
      <p>{description}</p>
    </div>
  );

  return (
    <section className="experience-section p-4 rounded bg-section mb-4 position-relative overflow-hidden">
      <Title className="Experience-title" title={t?.('experienceTitle')} />
      <ul className="ps-0 d-flex justify-content-between flex-wrap">
        {t?.('experience', { returnObjects: true }).map((item, index) => (
          <li key={index} className="mb-4">
            <ExperienceItem
              title={item.title}
              company={item.company}
              year={item.year}
              description={item.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default withTranslation()(Experience);
