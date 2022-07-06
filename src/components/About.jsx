import React, { useContext } from 'react';
import {MdOutlineHouse, MdOutlinePhone, MdOutlineEmail} from 'react-icons/md'
import {AppContext} from '../AppContext'
import SocialItem from './SocialItem';
const SIZE='24px'

const About = () => {
    const {data}=useContext(AppContext)

    if(!data){
        data={email: '', phone: '', }
    }
    return (       
        <div className="font-light text-lg px-2 mb-12">
            <h2 className="About-title text-xl font-semibold mb-4">Contact</h2>
            <div className="About-item flex items-center my-3 space-x-2">
                <MdOutlineEmail size={SIZE}/>
                <a href="mailto:">{data.email}</a>
            </div>
            <div className="About-item flex items-center my-3 space-x-2">
                <MdOutlinePhone size={SIZE}/>
                <a href="tel:">{data.phone}</a>
            </div>
            <div className="About-item flex items-center my-3 space-x-2">
            <MdOutlineHouse size={SIZE}/>
                <div>
                     <p>{data.address}</p>
                </div>
            </div>
            <div className="font-light text-lg px-2 mb-12">
        <h2 className="text-xl font-semibold mb-4">On the Web</h2>
        {
            data.social?.map((item, index)=><SocialItem key={`social-${index}`} item={item}/>)
        }    
      </div>
      </div>
       
    );
};

export default About;