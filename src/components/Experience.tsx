import React from 'react';
import { withTranslation } from 'react-i18next';
import { ReactComponetProps, ExperienceProps } from '@/types/global';
import Title from '@/components/Title';
import '@/assets/styles/components/Experience.scss';

const Experience = ({ t }: ReactComponetProps) => {
  const ExperienceItem = ({
    title,
    company,
    year,
    description
  }: ExperienceProps) => (
    <div className="experience-item p-4 rounded mb-4 h-100">
      <h3 className="title">{title}</h3>
      <h4 className="company">{company}</h4>
      <h4 className="year">{year}</h4>
      <p>{description}</p>
    </div>
  );

  return (
    <section className="experience-section p-4 rounded bg-section mb-4 position-relative overflow-hidden">
      <Title title={t?.('experienceTitle')} />
      <ul className="ps-0 d-flex justify-content-between flex-wrap">
        {t?.('experience', { returnObjects: true }).map(
          (item: ExperienceProps, index: number) => (
            <li key={index} className="mb-4">
              <ExperienceItem
                title={item.title}
                company={item.company}
                year={item.year}
                description={item.description}
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default withTranslation()(Experience);
