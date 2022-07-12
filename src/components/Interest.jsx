import React from 'react';
import { withTranslation } from 'react-i18next';
import Title from '@/components/Title';
import '@/assets/styles/components/Interest.scss';

/** Shows Interest information*/
const Interest = ({ t }) => {
  return (
    <section className="middle-section p-4 rounded bg-section mb-4 position-relative overflow-hidden">
      <Title title={t?.('interestsTitle')} />
      <ul>
        {t?.('interests', { returnObjects: true }).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default withTranslation()(Interest);
