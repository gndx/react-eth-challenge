import React from 'react';
import {getRandomId} from '../utils/getRandomId';


export default function Languages({languages}){
    let languagesData = [
        '','',''
    ]
    if(languages){
        languagesData = [...languages]
    }

    return (
        <>            
            <section className='Languages-container'>
                <h2 className='Languages-title'>Languages</h2>
                {languagesData.map(item => (
                    <div key={getRandomId()} className="Languages-item">
                        <div>
                            <strong className='item-value'>{item.name}</strong> <em className='item-value'>{item.level}</em>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}