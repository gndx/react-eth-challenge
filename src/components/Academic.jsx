import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import AcademicItem from './AcademicItem';

const Academic = () => {
  const {data: {Academic}}=useContext(AppContext)
    return (
        <div id="Academic" className="prose">
        <h2 className="Academic-title section-headline">Academic</h2>
        {Academic?.map((item, index)=><div  key={`academic-${index}`} className='Academic-item'><AcademicItem item={item}/></div>)}
      </div>
    );
};

export  default Academic;