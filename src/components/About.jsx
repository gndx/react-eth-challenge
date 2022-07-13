import React from 'react';
import '../styles/about.css'


const About = (props) => {
  const {social, profession, name, phone, email, address} = props;
  return (
    <>
    <div className="About">
    <div className="About-left">
    <h2 className="About-title">{name}</h2>
    <p className="About-profession">{profession}</p>
    </div>
    <div className="About-right">
    <div className="About-contact">
        <p className="About-item">{address}</p>
        <p className="About-item">{phone}</p>
        <p className="About-item">{email}</p>
    </div>

    {/* <div className="About-social">
  {social.map((item, index) => <li className='Experience-item' key={index} >{item.name}</li>)}
    </div> */}
    </div>
    </div>
    </>
  )
};
 export default About;