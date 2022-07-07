import React, { useContext } from 'react';
import  LanguageItem  from './LanguageItem';

const Languages = ({languages=Array(3).fill()}) => {
    return (        
        <div className="font-light text-lg px-2 mb-12">
        <h2 className="Languages-title text-xl font-semibold mb-4">Languages</h2>
            {
            languages.map((language, index)=>(
                <div className='Languages-item' key={`langauge-${index}`}>
                    <LanguageItem language={language}/>
                </div>))
            } 
        </div>
    );
};

export default Languages;