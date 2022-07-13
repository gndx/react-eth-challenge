import React from 'react';


const About = (props) => {
  const {social, name, phone, email, address} = props;
  console.log(social,'soy social')
  return (
    <>
    <div className="About">
    <h2 className="About-title">{name}</h2>
    </div>
    <ul>
        <li className="About-item">{address}</li>
        <li className="About-item">{phone}</li>
        <li className="About-item">{email}</li>
        {/* <li className="About-item">{social[0]}</li> */}
    </ul>

    <ul>
  {social.map((item, index) => <li className='Experience-item' key={index} >{item.name}</li>)}
    </ul>
    </>
  )
};
 export default About;