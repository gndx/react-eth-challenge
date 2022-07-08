import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ social }) => {
  return (
    <div className='flex justify-center'>
      {social.map((social) => {
        return (
          <a key={social.id} href={social.url} target='_blank' rel='noreferrer'>
            <img src={social.image} alt={social.url} className='h-5 mr-2' />
          </a>
        );
      })}
    </div>
  );
};

Footer.propTypes = {
  social: PropTypes.array.isRequired,
};
export default Footer;
