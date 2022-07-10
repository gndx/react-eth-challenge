import React from 'react';
import '../styles/components/SocialNetworks.styl';

function SocialNetworks({ socials }) {
  return (
    <ul className='Social-list'>
      {socials &&
        socials.map(({ name, url }) => (
          <li key={name}>
            <a
              className='Social-item'
              href={url}
              target='_blank'
              rel='noreferrer'
            >
              {name}
            </a>
          </li>
        ))}
    </ul>
  );
}
export default SocialNetworks;
