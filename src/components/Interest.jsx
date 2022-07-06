import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const Interest = () => {
  const {data: {interest}}=useContext(AppContext)
    return (
        <div className="prose">
        <h2 className="section-headline Interest-title">Expand my skills</h2>
        <div className="mb-16">
          <h4 id="expand-knowledge-headline">
            I'd like to expand my skills and knowledge in several fields
          </h4>
          <ul>
            {
              interest?.map((item, index)=><li className='Interest-item' key={`interests-${index}`}>{item}</li>)
            }        
            
          </ul>
        </div>
      </div>
    );
};

export default Interest;