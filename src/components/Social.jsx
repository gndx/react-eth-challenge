import React from 'react';
import '../styles/components/Social.scss';

function Social(props) {
  const { socialNetworks } = props;

  function openUrl(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section>
      <h2 className='social-title'>Social Networks</h2>
      <div className='social-box'>
        {socialNetworks.map((socialNetwork, index) => (
          <div className='social-item' key={index}>
            <h3>{socialNetwork.name}</h3>
            <img className='social-icon' src={socialNetwork.icon} alt='icon' onClick={() => openUrl(socialNetwork.url)} />
          </div>
        ))}
      </div>
      <hr />
    </section>
  );
}

export default Social;
