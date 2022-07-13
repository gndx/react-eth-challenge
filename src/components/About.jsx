import React from 'react';


const About = (props) => {
  const {social, name, phone, email} = props;
  console.log(social,'soy social')
  return (
    <>
    <div className="About">
    <div className="About-title">
      experiencia
    </div>
    <ul>
        <li className="About-item">{name}</li>
        <li className="About-item">{phone}</li>
        <li className="About-item">{email}</li>
        {/* <li className="About-item">{social[0]}</li> */}
    </ul>

    <ul>

  {social.map((item, index) => <li className='Experience-item' >{item.name}</li>)}
    </ul>
    </div>
    </>
  )
};
 export default About;