import React from "react";

export default function Nav({navVisible}){
    return(
        <nav className='main-nav' id="Main-nav" data-visible={navVisible}>
        <a href='#Home'>Home</a>
        <a href='#About'>About Me</a>
        <a href='#Skills'>Skills</a>
        <a href='#Academic'>Academic</a>
        <a href='#Experience'>Experience</a>
        <a href='#Languages'>Languages</a>
        <a href='#Interest'>Interest</a>
      </nav>
    )
}