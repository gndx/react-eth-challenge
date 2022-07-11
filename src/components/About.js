import React from 'react';
import PropTypes from 'prop-types';
const About = ({ profession, address, email, website, phone }) => {
  return (
    <div className="About">
      <h2 className="About-title">{profession}</h2>
      <ul className="About-ul">
        <li className="About-item">
          <a href={`tel:${phone}`}>{phone}</a>
        </li>
        <li className="About-item">
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li className="About-item">
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </li>
        <li className="About-item">{address}</li>
      </ul>
    </div>
  );
};
About.propTypes = {
  profession: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  website: PropTypes.string,
  phone: PropTypes.string,
};

export default About;
