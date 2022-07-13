import React from 'react';

import Block from '../icons/Block.jsx';
import Cake from '../icons/Cake.jsx';
import Contact from '../icons/Contact.jsx';
import Education from '../icons/Education.jsx';
import Email from '../icons/Email.jsx';
import Experiment from '../icons/Experiment.jsx';
import Globe from '../icons/Globe.jsx';
import Identification from '../icons/Identification.jsx';
import Lightning from '../icons/Lightning.jsx';
import Link from '../icons/Link.jsx';
import Location from '../icons/Location.jsx';
import Mobile from '../icons/Mobile.jsx';
import Phone from '../icons/Phone.jsx';
import Profile from '../icons/Profile.jsx';
import SwipeLeft from '../icons/SwipeLeft.jsx';
import SwipeRight from '../icons/SwipeRight.jsx';
import Language from '../icons/Language.jsx';
import Experience from '../icons/Experience.jsx';
import Light from '../icons/Light.jsx';
import Fire from '../icons/Fire.jsx';
import User from '../icons/User.jsx';

const Icon = ({ name, className }) => {
  return (
    <span
      className={`w-7 ${className} text-sky-500 drop-shadow-[0_0_7px_rgba(1,1,1,0.25)]`}
    >
      {name === 'Block' && <Block className={className} />}
      {name === 'User' && <User className={className} />}
      {name === 'Cake' && <Cake className={className} />}
      {name === 'Contact' && <Contact className={className} />}
      {name === 'Education' && <Education className={className} />}
      {name === 'Email' && <Email className={className} />}
      {name === 'Experiment' && <Experiment className={className} />}
      {name === 'Globe' && <Globe className={className} />}
      {name === 'Identification' && <Identification className={className} />}
      {name === 'Experience' && <Experience className={className} />}
      {name === 'Lightning' && <Lightning className={className} />}
      {name === 'Link' && <Link className={className} />}
      {name === 'Location' && <Location />}
      {name === 'Mobile' && <Mobile className={className} />}
      {name === 'Phone' && <Phone className={className} />}
      {name === 'Profile' && <Profile className={className} />}
      {name === 'SwipeLeft' && <SwipeLeft className={className} />}
      {name === 'SwipeRight' && <SwipeRight className={className} />}
      {name === 'Language' && <Language className={className} />}
      {name === 'Light' && <Light className={className} />}
      {name === 'Fire' && <Fire className={className} />}
      
    </span>
  );
};

export default Icon;
