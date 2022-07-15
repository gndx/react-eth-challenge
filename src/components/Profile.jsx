import React from 'react';
import { withTranslation } from 'react-i18next';
import Image from 'react-bootstrap/Image';
import githubLogo from '../assets/img/github-logo.png';
import linkedinLogo from '../assets/img/linkedin-logo.png';
import twitterLogo from '../assets/img/twitter-logo.png';
import instagramLogo from '../assets/img/instagram-logo.png';
import '../assets/styles/components/Profile.scss';

/** Shows Profile information*/
const Profile = ({ t, i18n }) => (
  <section className="profile-title-container d-flex flex-column justify-content-center">
    <h1 className='profile'>Jonathan Daniel Villegas Zapata</h1>
    <h2 className='title'>{t?.('title')}</h2>
    <a href="mailto: jodaviza@gmail.com" className="link-style">
      jodaviza@gmail.com
    </a>
    <h2 className="mt-4">{t?.('checkMySocialNet')}</h2>
    <div className="d-flex justify-content-between mt-2">
      <a
        href="https://github.com/JonathanDVZ"
        target="_blank"
        aria-label="github"
        rel="noopener"
        className="logo-link"
      >
        <Image src={githubLogo} rounded={true} alt="github" className="logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/jonathandvz/"
        target="_blank"
        aria-label="linkedin"
        rel="noopener"
        className="logo-link"
      >
        <Image
          src={linkedinLogo}
          rounded={true}
          alt="linkedin"
          className="logo"
        />
      </a>
      <a
        href="https://twitter.com/JonathanDVZ"
        target="_blank"
        aria-label="twitter"
        rel="noopener"
        className="logo-link"
      >
        <Image
          src={twitterLogo}
          rounded={true}
          alt="twitter"
          className="logo"
        />
      </a>
      <a
        href="https://www.instagram.com/jonathandvz/"
        target="_blank"
        aria-label="instagram"
        rel="noopener"
        className="logo-link"
      >
        <Image
          src={instagramLogo}
          rounded={true}
          alt="instagram"
          className="logo"
        />
      </a>
    </div>
    <button
      className="change-language-btn rounded mt-4 w-100"
      onClick={() =>
        i18n?.changeLanguage(i18n.resolvedLanguage === 'es' ? 'en' : 'es')
      }
    >
      {t?.('changeLanguage')}
    </button>
  </section>
);

export default withTranslation()(Profile);
