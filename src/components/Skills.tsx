import React from 'react';
import { withTranslation } from 'react-i18next';
import { ReactComponetProps, ExperienceProps } from '@/types/global';
import Title from '@/components/Title';
import '@/assets/styles/components/Skills.scss';

const Skills = ({ t }: ReactComponetProps) => {
  return (
    <section className="middle-section p-4 rounded bg-section mb-4 position-relative overflow-hidden">
      <Title title={t?.('skillsTitle')} />
      <ul>
        {t?.('skills', { returnObjects: true }).map(
          (item: string, index: number) => (
            <li key={index}>{item}</li>
          )
        )}
      </ul>
    </section>
  );
};

export default withTranslation()(Skills);
