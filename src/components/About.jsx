import React, { Children } from "react";
import Profile from "./Profile";


const About = ({ profile, children}) => {
  return (
    <section>
      
      <div className=" lg:rounded-2xl bg-white dark:bg-[#111111] About-item">
        <div data-aos="fade">
          <div className=" pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 About-item">
            <h2 className="after-effect after:left-52 About-title">About Me</h2>
            <div className="lg:hidden About-item">
              {children}
            </div>
            <Profile profile={profile}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
