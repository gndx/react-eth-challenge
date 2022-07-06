import React from 'react';
import { icons } from 'react-icons';
import {FaGithub, FaStackOverflow, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
const SIZE='24px'
const SocialItem = ({item}) => {
    let Icon=null
    
    switch(item.name){
        case 'github':
             Icon = FaGithub
             break;
        case 'twitter':
             Icon = FaTwitter
             break
        case 'linkedin':
             Icon = FaLinkedin
             break
        default:
            Icon=FaFacebook    
    }    
    return (
        <div className="flex items-center my-3 space-x-2">
            <Icon size={SIZE}/>
            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
        </div>
    );
};

export default SocialItem;