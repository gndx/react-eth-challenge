import React, { useContext } from 'react';
import AcademicItem from './AcademicItem';

const Academic = ({academics=Array(3).fill()}) => {
    return (
        <div id="Academic" className="prose">
        <h2 className="Academic-title section-headline">Academic</h2>
        {academics.map((item, index)=><div  key={`academic-${index}`} className='Academic-item'><AcademicItem item={item}/></div>)}
      </div>
    );
};

export  default Academic;