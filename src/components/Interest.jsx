import React from 'react';
import {getRandomId} from '../utils/getRandomId';


export default function Interest({interest}){
    let interestData = [
        '','',''
    ]
    if(interest){
        interestData = [...interest]
    }

    
    return (
        <>
            <section className='Interest-container'>
                <h2 className='Interest-title'>Interest</h2>
                <div className="card-content">
                {interestData.map(item => (
                    <div key={getRandomId()} className="Interest-item item-chips">
                        {item}
                    </div>
                ))}
                </div>
            </section>
        </>
    )
}