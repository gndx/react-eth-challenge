import React, {useContext} from "react";
import { Context } from "../containers/App";

const About = () => {

  const data = useContext(Context);

  return (
    <>
      <h1 className="About-title"></h1>
      <ul id="unique-ul">
        <li className="About-item">Check my info: {data.website}</li><br></br>
        <li className="About-item">E-mail: {data.email}</li>
        <li className="About-item"></li>
      </ul>
    </>
  );
};

export default About;
