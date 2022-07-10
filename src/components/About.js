import React from 'react';

const About = () => {
  return (
    <div className="About">
      <h2 className="About-title">Full Stack Developer</h2>
      <ul className="About-ul">
        <li className="About-item">
          <a href="tel:+573102287781">3102287781</a>
        </li>
        <li className="About-item">
          <a href="mailto:rennypetit01@gmail.com">rennypetit01@gmail.com</a>
        </li>
        <li className="About-item">
          <a
            href="https://github.com/rennypetit"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/rennypetit
          </a>
        </li>
        <li className="About-item">Bogotá, Colombia</li>
      </ul>
    </div>
  );
};

export default About;
