import React from 'react';

const About = ({ data }) => {
  return (
    <div>
      <div className=" Headersection2"></div>
      <h4 className="About-title"> {data?.name}</h4>
      <p className="About-item"> {data?.profession}</p>
      <p className="About-item">Teléfono: {data?.phone}</p>
      <p className="About-item">Correo electrónico: {data?.email}</p>
      <p className="About-item">Residencia: {data?.address}</p>
    </div>
  );
};

export default About;
