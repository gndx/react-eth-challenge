import React from 'react';

function About({ social: socials }) {
  return (
    <div className="About">
      <div className="card">
        <div className="About-title">About</div>
        <div className="About-content">
          {socials?.map((social) => (
            <div key={social?.name} className="About-item">
              <a href={social?.url}>{social?.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
