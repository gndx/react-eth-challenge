import React from 'react';
import {getRandomId} from '../utils/getRandomId';


export default function Experience({experience}){
    let experienceData = [
        '','',''
    ]
    if(experience){
        experienceData = [...experience]
    }

    return (
        <>             
            <section className='Experience-container'>
                <h2 className='Experience-title'>Experience</h2>
                {experienceData.map(item => (
                    <div key={getRandomId()} className="Experience-item" style={{marginBottom:'1rem'}}>
                        <div style={{textDecoration:'underline'}}>                            
                            <span><span className='titleh3'>{item.jobTitle}</span> at <em>{item.company}</em></span>
                        </div>
                        <div>                            
                            <span className='item-value'>{item.jobDescription}</span>
                        </div>
                        <div>
                            <span className='item-value' style={{fontSize:'.8rem'}}>{item.startDate} - {item.endDate}</span>
                        </div>                        
                    </div>
                ))}
            </section>
        </>
    )
}