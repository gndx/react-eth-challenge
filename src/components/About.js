import React from "react";

 const About = (props) =>  {
    return (
        <div className="about">  
            <div 
            className="About-title">
                Contact:
            </div>
            <div 
            className='About-item'>
                matbarrios@protonmail.com
            </div>
            
            <div className='About-item'>Córdoba, Argentina</div>
            <div className='About-item'>
                <a href='https://github.com/MatBarrios'>GitHub</a>
            </div>
        </div>
    );
}

export default About;