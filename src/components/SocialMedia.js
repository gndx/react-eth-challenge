import React, { useContext } from 'react';
import { Context } from './Context';

export default function SocialMedia() {
  const { data } = useContext(Context);

  return (
    <footer className='social-media'>
      <div className='container'>
        <p>
          Do you want to know more?
          <br />
          {' '}
          Check my
          <span>social media</span>
          !
        </p>
        <div className='social-media__content'>
          {data.social.map((socialMedia) => (
            <a href={socialMedia.url} key={socialMedia.name} target='_blank' rel='noreferrer'>{socialMedia.name}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
