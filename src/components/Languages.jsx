import React from 'react';
import { Lengua } from '../styles/components/Languajes';

const Languages = () => {
    return (
        <div>
        <h3 className="Languages-title">Languages</h3>
            <ul>
                <Lengua className='Languages-item'>
                    <label htmlFor='spanish'> Spanish</label>
                    <progress id='spanish' max="10" value="10"></progress>
                </Lengua>
                <Lengua className='Languages-item'>
                    <label htmlFor='eenglish'> English</label>
                    <progress id='english' max="10" value="7"></progress>
                </Lengua>
                <Lengua className='Languages-item'>
                    <label htmlFor='french'> French</label>
                    <progress id='french' max="10" value="2"></progress>
                </Lengua>

            </ul>
      </div>
    );
};

export default Languages; 