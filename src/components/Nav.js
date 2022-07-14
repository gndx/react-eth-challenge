import React, { useState } from "react";

export default function Nav({navVisible}){
    const [navColor, setNavColor] = useState(false)

    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 150) setNavColor(true)
      else setNavColor(false)
    })

    return(
        <nav className={navColor? 'main-nav main-nav__background' : 'main-nav'} id="Main-nav" data-visible={navVisible}>
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