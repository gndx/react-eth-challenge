import React from 'react';

const About = (props) => {
    return (
      <section>
        <h1 className="About-title">{props.data?.profession}</h1>
        <div className="About-items">
          <a className="About-item">email: {props.data?.email}</a>
          <br></br>  
          <a className="About-item">phone: {props.data?.phone}</a>
          <br></br>
          <a className="About-item">website: {props.data?.website}</a>
        </div>
      </section>
    )
  };
  
  export default About;
  