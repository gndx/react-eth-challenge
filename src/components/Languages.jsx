import React from 'react';
import { withTranslation } from 'react-i18next';
import Title from './Title';
import '../assets/styles/components/Languages.scss';

/** Shows Languages information*/
const Languages = ({ t }) => {
  /** LanguageItem component*/
  const LanguageItem = ({ language, level }) => (
    <div className="language-item p-4 rounded mb-4">
      <h3 className="title">{language}</h3>
      <h4 className="level">{level}</h4>
    </div>
  );
  
  return (
    <section className="languages-section middle-section p-4 rounded bg-section mb-4 position-relative overflow-hidden">
      <Title title={t?.('languagesTitle')} />
      <ul className="ps-0 d-flex justify-content-between flex-wrap align-items-stretch mb-0">
        {t?.('languages', { returnObjects: true }).map((item, index) => (
          <li key={index}>
            <LanguageItem language={item.language} level={item.level} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default withTranslation()(Languages);
