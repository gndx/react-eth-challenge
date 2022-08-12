import React, { useContext } from 'react';
import '../styles/components/About.styl';
import AppContext from '../context/AppContext';
import { BsGithub, BsLinkedin, BsTwitter, BsFacebook } from 'react-icons/bs';

const About = () => {
    const data = useContext(AppContext);
    return (
        <section className="rrss">
            <h2 className="About-title">Contact Information</h2>
            <ul className="Social-links">
              <li>
                <a href={data.social && data.social[0].url}>
                  <BsFacebook color='#FFFFFF' size='30px' />
                </a>
              </li>
              <li>
                <a href={data.social && data.social[1].url}>
                  <BsTwitter color='#FFFFFF' size='30px' />
                </a>
              </li>
              <li>
                <a href={data.social && data.social[2].url}>
                  <BsGithub color='#FFFFFF' size='30px' />
                </a>
              </li>
              <li>
                <a href={data.social && data.social[3].url}>
                  <BsLinkedin color='#FFFFFF' size='30px' />
                </a>
              </li>
            </ul>
            <ul className="Contact">
              <li className="About-item">
                <p className="Header-phone">{data.phone}</p>
              </li>
              <li className="About-item">
                <p className="Header-email">{data.email}</p>
              </li>
              <li className="About-item">
                <p className="Header-website">{data.website}</p>
              </li>
              <li className="About-item">
                  <p className="Header-address">{data.address}</p>
              </li>
            </ul>
        </section>
    )
};

export default About;
