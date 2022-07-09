import React from 'react';

const About = ({profession, email, phone, address, website}) => {
  return (
      <>
        <h3 className="About-title">{profession}</h3>
        <div>
          {
            phone ?
              <span className="About-item">📞 {phone}</span>
              : 
              null
          }
          {
            email ?
              <span className="About-item">📬 {email}</span>
              :
              null
          }
          {
            website ?
              <span className="About-item">🌎 {website}</span>
              :
              null
          }
          {
            address ?
              <p className="About-item">{address}</p>
              :
              null
          }
        </div>
      </>
  );
}

export default About;
