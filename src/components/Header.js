import React from "react";
import About from './About';

    const Header = (props) => {
    return (
        <div className="header">
            <img 
            src={props.avatar}
            alt='profile'
            className="img" />
            <div className="header-container">
                <div className="Header-title">Hey! 👋 I'm {props.title}</div>
                <div className="job-title">{props.role}</div> 
                <About />
            </div>
        </div>
    );
}

export default Header;