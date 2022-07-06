import React from 'react';
import AcademicItem from './AcademicItem';

const Academic = () => {
    return (
        <div id="Academic" className="prose">
        <h2 className="Academic-title section-headline">Academic</h2>
        {[1,2,3].map(item=><div  key={item} className='Academic-item'><AcademicItem/></div>)}
      </div>
    );
};

export  default Academic;