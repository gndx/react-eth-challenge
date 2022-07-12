import React from 'react';
import {Title} from '../styles/components/Academic'

const Academic = () => {
    return (
        <div >
          <Title className="Academic-title">Academic</Title>
          <div className='Academic-item'>
            <h3>Industrial Enginner</h3>
            <div>Universidad de Carabobo</div>
            <div>2012-2018</div>     
          </div>
          <div className='Academic-item'>
            <h3>Telecom Enginner</h3>
            <div>Universidad José Antonio Páez</div>
            <div>2016-2019</div>     
          </div>
          <div className='Academic-item'>
            <h3>Smart Contract Dev </h3>
            <div>Platzi</div>
            <div>2019-2021</div>     
          </div>
        </div>
        
    );
};

export  default Academic; 