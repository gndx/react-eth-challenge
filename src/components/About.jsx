import React from 'react';
import {MdOutlineHouse, MdOutlinePhone, MdOutlineEmail} from 'react-icons/md'
import {FaGithub, FaStackOverflow, FaLinkedin, FaTwitter} from 'react-icons/fa'

const SIZE='24px'
const About = () => {
    return (
       
        <div class="font-light text-lg px-2 mb-12">
            <h2 class="About-title text-xl font-semibold mb-4">Contact</h2>
            <div class="About-item flex items-center my-3 space-x-2">
                <MdOutlineEmail size={SIZE}/>
                <a href="mailto:">dannydev@example.com</a>
            </div>
            <div class="About-item flex items-center my-3 space-x-2">
                <MdOutlinePhone size={SIZE}/>
                <a href="tel:">0123 456 789</a>
            </div>
            <div class="About-item flex items-center my-3 space-x-2">
            <MdOutlineHouse size={SIZE}/>
                <div>
                    <p>Dev Street 13</p>
                    <p>Dev Town</p>
                </div>
            </div>
            <div class="font-light text-lg px-2 mb-12">
        <h2 class="text-xl font-semibold mb-4">On the Web</h2>
        <div class="flex items-center my-3 space-x-2">
            <FaGithub size={SIZE}/>
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div class="flex items-center my-3 space-x-2">
            <FaStackOverflow size={SIZE}/>
            <a href="#" target="_blank" rel="noopener noreferrer"
                >StackOverflow</a
            >
        </div>
        <div class="flex items-center my-3 space-x-2">
            <FaLinkedin size={SIZE}/>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div class="flex items-center my-3 space-x-2">
            <FaTwitter size={SIZE}/>
            <a href="#" target="_blank" rel="noopener noreferrer" >@twitter_handle</a>
        </div>       
      </div>
      </div>
       
    );
};

export default About;