import React from 'react';
import { withTranslation } from 'react-i18next';
import { ReactComponetProps } from '@/types/global';
import '@/assets/styles/components/Profile.scss';

const Profile = ({ t }: ReactComponetProps) => (
  <section className="profile-title-container d-flex flex-column justify-content-center ps-4">
    <h1>Jonathan Daniel Villegas Zapata</h1>
    <h2>{t?.('title')}</h2>
    <a href="mailto: jodaviza@gmail.com">jodaviza@gmail.com</a>
  </section>
);

export default withTranslation()(Profile);
