import React from 'react';
import '../styles/components/Social.scss';

const Social = (props) => {
  const { socialNetworks } = props;
  return (
    <section>
      <h2 className="social-title">Social Networks</h2>
      <div className="social-box">
        {socialNetworks.map((socialNetwork, index) => (
          <div className="social-item" key={index}>
            <h3>{socialNetwork.name}</h3>
            <img className='social-icon' src={socialNetwork.icon} alt="icon" />
          </div>
        ))}
      </div>
      <hr />
    </section>
  );
};

export default Social;
