import React from 'react';
import "./Header.scss";
import { AppContext } from '../AppContext';  


const Header = () => {

    const { data } = React.useContext(AppContext);

    const { name, profession, phone, email, address, website } = data;

    return (
        <section className='Header'>
            <h1 className='Header-title'>{name}</h1>
            <p>{profession}</p>
            <ul>
                <li>
                    <strong>Phone:</strong>
                    <a 
                        href={phone ? phone.url : ""} 
                        target="_blank" 
                        title="Phone"> {phone ? phone.number : ""}</a>
                </li>
                <li>
                    <strong>Email:</strong>
                    <a 
                    href={email ? email.url : ""} target="_blank" title="Email"> {email ? email.name : ""}</a>
                </li>
                <li>
                    <strong>Website:</strong>
                    <a href={website ? website.url : ""} target="_blank" title="Website"> {website ? website.name : ""}</a>
                </li>
                <li><strong>Location:</strong> {address}</li>
            </ul>
        </section>
    )
}

export default Header;