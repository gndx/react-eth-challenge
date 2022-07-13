import React from 'react';
import {getRandomId} from '../utils/getRandomId';

export default function Academic({academic}){    
    return (
        <>            
            <section className='Academic-container'>
                <h2 className='Academic-title'>Academic</h2>
                {academic 
                ?academic.map(item => (
                    <div key={getRandomId()} className="Academic-item">
                        <div>
                            <strong className='item-value'>{item.degree}</strong>
                        </div>
                        <div>
                            <em className='item-value'>{item.institution}</em>
                        </div>                                            
                        <div>
                            <span className='item-value' style={{fontSize:'.8rem'}}>{item.startDate} - {item.endDate}</span>
                        </div>                                            
                    </div>
                ))
                : ['','',''].map(i=>(<div key={getRandomId()} className="Academic-item"></div>))
                }
            </section>
        </>
    )
}