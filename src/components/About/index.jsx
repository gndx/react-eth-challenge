import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import '../../styles/components/About.styl';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const About = () => {
  const data = useContext(AppContext);
  return (
    <section className="about-content">
      <h2 className="About-title">About Me</h2>
      <div className="about-description">
        <p className="About-item">{data.profession}</p>
        <p className="About-item">{data.address}</p>
        <p className="About-item">{data.email}</p>
      </div>
      <ul className="about-rrss">
        <li>
          <a href={data.social && data.social[0].url}>
            <BsGithub color="#6A7699" size="30px" />
          </a>
        </li>
        <li>
          <a href={data.social && data.social[1].url}>
            <BsLinkedin color="#6A7699" size="30px" />
          </a>
        </li>
        <li>
          <a href={data.social && data.social[2].url}>
            <BsTwitter color="#6A7699" size="30px" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default About;
