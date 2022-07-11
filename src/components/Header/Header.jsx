import React from 'react';
import "./Header.scss";
import { AppContext } from '../AppContext';  


const Header = () => {

    const { data } = React.useContext(AppContext);

    const { name, profession, phone, email, address, website } = data;

    let values = email ? Object.values(email) : "hola" ;

    console.log(values)

    return (
        <section className='Header'>
            <h1 className='Header-title'>{name}</h1>
            <p>{profession}</p>
            <ul>
                <li>
                    <strong>Phone:</strong>
                    <a href="{phone.url}" target="_blank" title="Phone"> </a>
                </li>
                <li>
                    <strong>Email:</strong>
                    <a href="mailto:leandrogavidia1234@gmail.com" target="_blank" title="Email"> Leandrogavidia1234@gmail.com</a>
                </li>
                <li>
                    <strong>Website:</strong>
                    <a href="https://github.com/LeanderGS" target="_blank" title="Website"> GitHub profile</a>
                </li>
                <li><strong>Location:</strong> {address}</li>
            </ul>
        </section>
    )
}

export default Header;