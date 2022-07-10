import React from 'react';
import { withTranslation } from 'react-i18next';
import { ReactComponetProps } from '@/types/global';
import Title from '@/components/Title';
import '@/assets/styles/components/About.scss';

const About = ({ t }: ReactComponetProps) => (
  <section className="about-section p-4 rounded bg-section mb-4">
    <h2 className="typing-name">{t?.('hello')}</h2>
    <hr />
    <Title title={t?.('descriptionTitle')} />
    <p className="mb-0">{t?.('description')}</p>
  </section>
);

export default withTranslation()(About);
