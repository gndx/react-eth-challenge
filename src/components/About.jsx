import React from 'react';
import { withTranslation } from 'react-i18next';
import Title from '@/components/Title';
import '@/assets/styles/components/About.scss';

/** Shows about information*/
const About = ({ t }) => (
  <section className="about-section p-4 rounded bg-section mb-4">
    <span className="typing-name">{t?.('hello')}</span>
    <hr />
    <Title title={t?.('descriptionTitle')} />
    <p className="mb-0">{t?.('description')}</p>
  </section>
);

export default withTranslation()(About);
