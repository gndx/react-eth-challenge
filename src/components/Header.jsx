import React from 'react';
import Section from '../containers/Section.jsx';
import Icon from '../containers/Icon.jsx';

const Header = ({data}) => {
  return (
    <Section id="Header" className="flex my-2 mx-1">
      <div className="w-[200px] h-[200px] mr-10 drop-shadow-2xl">
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
            >
              <img
                className="w-6 mr-1 colorSvg"
                src="/linkedin.svg"
                alt=""
              />
              Linkedin
            </a>
            <a
              className="flex mr-4"
              href={'https://' + data.networks.github}
              target="_blank"
            >
              <img
                className="w-6 mr-1 colorSvg"
                src="/github.svg"
                alt=""
              />
              GitHub
            </a>
            <a
              className="flex mr-4 "
              href={'https://' + data.networks.twitter}
              target="_blank"
            >
              <img
                className="w-6 mr-1 colorSvg"
                src="/twitter.svg"
                alt=""
              />
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="ml-auto max-w-[232px] self-start bg-white/10 border-white/40 border-2 py-3 px-3 rounded-lg shadow-lg hidden lg:inline">
        <span>
          You can see my POAP's in my social wallet on {' '}
          <img
            className="w-16 inline relative bottom-[4px]"
            src="https://www.welook.io/static/media/welook-logo-main.356ecc8f4e93d5e7435ef73cca5d7e33.svg"
            alt="welook logo"
          />
        </span>
        <a
          href="https://www.welook.io/0x7ED27AB6cE44B19e2c1eE1317B836D4dEC1fD7ae"
          target="_blank"
          className="btn--pink mt-6"
        >
          See poaps{' '}
          <img
            className="w-5 inline relative top-[1px] ml-1"
            src="https://poap.xyz/POAP.f74a7300.svg"
            alt="poap logo"
          />
        </a>
      </div>
    </Section>
  );
};

export default Header;
