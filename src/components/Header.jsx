import React from 'react';
import Section from '../containers/Section.jsx';
import Icon from '../containers/Icon.jsx';
import Welook from './Welook.jsx';
import Curriculum from './Curriculum.jsx';

const Header = ({
  data = {
    avatar: '',
    name: '',
    profession: '',
    phone: '',
    email: '',
    networks: {},
  },
}) => {
  return (
    <Section
      id="Header"
      className="flex flex-col items-center my-2 mx-1 sm:flex-row sm:justify-start"
    >
      <div className="w-[220px] h-[220px] sm:w-[200px] sm:h-[200px] mr-10 drop-shadow-2xl mb-2 sm:mb-0">
        <img className="rounded-full" src={data.avatar} alt="" />
      </div>

      <div className="flex flex-col pt-2">
        <h1 className="Header-title">{data.name}</h1>
        <div>
          <h2>{data.profession}</h2>
          <div className="flex mb-3">
            <p className="mr-4 flex items-center">
              <Icon name="Phone" className="icon--header " />
              {data.phone}
            </p>
            <p className="mr-4 flex items-center">
              <Icon name="Email" className="icon--header top-[1px]" />
              {data.email}
            </p>
          </div>
          <p className="flex items-center mb-3">
            <Icon name="Location" className="icon--header " />
            {data.address}
          </p>
          <div className="flex">
            <a
              className="flex mr-4 "
              href={'https://' + data.networks.linkedin}
              target="_blank"
              draggable="false"
            >
              <img className="w-6 mr-1 colorSvg" src="/linkedin.svg" alt="" />
              Linkedin
            </a>
            <a
              className="flex mr-4"
              href={'https://' + data.networks.github}
              target="_blank"
              draggable="false"
            >
              <img className="w-6 mr-1 colorSvg" src="/github.svg" alt="" />
              GitHub
            </a>
            <a
              className="flex mr-4 "
              href={'https://' + data.networks.twitter}
              target="_blank"
              draggable="false"
            >
              <img className="w-6 mr-1 colorSvg" src="/twitter.svg" alt="" />
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col ml-auto self-start w-full sm:max-w-[232px] mt-8 sm:mt-0">
        <Welook />
        {/* <Curriculum /> */}
      </div>
    </Section>
  );
};

export default Header;
