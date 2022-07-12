import React from "react";
import {About} from '../components/About';

const PROFILE_PICTURE="./yuri.jpg"

function Header({name, profession,address,email, website, phone, avatar}){
   
return (
        <div className="Header-title">
            <img src={avatar} />
            <About  name={name} profession={profession} address={address} email={email} website={website} phone={phone}/>
        </div>
    );
}

export {Header} 
