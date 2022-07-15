import React from 'react';
import { withTranslation } from 'react-i18next';
import Title from './Title';
import '../assets/styles/components/Skills.scss';

/** Shows Skills information*/
const Skills = ({ t }) => {
  return (
    <section className="middle-section p-4 rounded bg-section mb-4 position-relative overflow-hidden">
      <Title title={t?.('skillsTitle')} />
      <ul>
        {t?.('skills', { returnObjects: true }).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default withTranslation()(Skills);
