import React from 'react';
import {getRandomId} from '../utils/getRandomId';

export default function Skills({ skills }){
    
    let skillsData = [
        '','',''
    ]
    const getHtmlSkills = () => {
        return (
            <>
                <h3>Soft Skills</h3>
                <div className="card-content">
                    {skills.softSkills.map(item => (
                        <div key={getRandomId()} className="Skills-item item-chips">
                            {item}
                        </div>                            
                    ))}
                </div>
                <h3>Hard Skills</h3>
                <div className="card-content">
                    {skills.hardSkills.map(item => (
                        <div key={getRandomId()} className="Skills-item item-chips">
                            {item}
                        </div>                            
                    ))}
                </div>           
            </>
        )
    }
    return (
        <>
            <section className='Skills-container'>
                <h2 className='Skills-title'>Skills</h2>
                    {skills 
                        ? getHtmlSkills()
                        :(<div className="card-content">
                            {skillsData.map(item => (
                                <div key={getRandomId()} className="Skills-item item-chips">
                                    {item}
                                </div>                            
                            ))}
                        </div>)
                    }                       
            </section>
        </>
    )
}