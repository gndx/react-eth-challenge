import React, {useContext} from 'react';
import '../styles/components/Header.styl';
import {BsFacebook, BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs';
import { InfoContext } from '../containers/App';

const Header =  (props)=>{

    const data = useContext(InfoContext)
    const {avatar="def.jpg",name="Leandro Alvarez",social=Array(4).fill({name:"net",social:"social"})} = data;
return(
    <header>
        <img src={avatar} alt='Profile pic' className='Avatar'/>
        <article>
            <h1 className='Header-title'>{name}</h1>
            {props.children}
            <ul className='Social'>
            {
                social.map(({ name: network, url }, index) => (
                <li key={`social-${index}`}>
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                        {network=="facebook"?<BsFacebook size='20px' />:<></>}
                        {network=="github"?<BsGithub size='20px' />:<></>}
                        {network=="linkedin"?<BsLinkedin size='20px' />:<></>}
                        {network=="twitter"?<BsTwitter size='20px' />:<></>}
                    </a>
                </li>
                ))
            }
            </ul>
        </article>
    </header>  
      
)
};

export default Header;