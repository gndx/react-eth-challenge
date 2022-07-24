import React from 'react';

const About = (props) => {
  // console.log(props,'About')
  return (
    <>
      <p>{props.data.profession}</p>
      <p>Teléfono: {props.data.phone}</p>
      <p>Correo electrónico: {props.data.email}</p>
      <p>Residencia: {props.data.address}</p>
    </>
  );
};

export default About;
