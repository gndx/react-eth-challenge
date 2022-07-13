import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WebIcon from '@mui/icons-material/Web';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const About = (props) => {
  const {
    items = new Array(3).fill('No data yet'),
    phone,
    email,
    website,
    adress,
  } = props;

  return (
    <div className="About">
      <div className="About-contact">
        <h3 className="Header-subtitle"></h3>
        <p>
          <LocalPhoneIcon fontSize="small" />
          <a href={`tel:${phone}`} className="Header-phone">
            {phone}
          </a>
        </p>
        <p>
          <EmailIcon fontSize="small" />
          <a href={`mailto:${email}`} className="Header-email">
            {email}
          </a>
        </p>
        <p>
          <WebIcon fontSize="small" />
          <a href={website} target="_blank" className="Header-website">
            {website}
          </a>
        </p>
        <p className="Header-adress">
          <LocationOnIcon fontSize="small" />
          {adress}
        </p>
      </div>
      <div className="About-social">
        <h3 className="About-title"></h3>
        <div className="About-items">
          {items.map((item, index) => (
            <a
              key={`about-item-${index}`}
              className="About-item"
              href={item.url}
              target="_blank"
            >
              <i className={`fa-brands fa-${item.name}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
