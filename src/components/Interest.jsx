import React from 'react';
import Card from './Card';
const Interest = ({Interest = Array(5).fill('')}) => {
        return (
            <Card>
                <h2 className='Interest-title'>Interest</h2>
                <ul>
                    //<li className='Interest-item'>Inteligencia Artificial - Machine Learning</li>
                    //<li className='Interest-item'>Ciencia de Datos</li>
                    //<li className='Interest-item'>Auditoría Forense Informática</li>
                    //<li className='Interest-item'>Web 3.0 - Blockchaing - Crypto</li>
                    //<li className='Interest-item'>Integracion de Aplicaciones</li>
                    {Interest.map((individualinterest, index) => (
                       <li key={'${individualinterest}_${index}'} className = 'Interest-item' >
                            <h4>{individualinterest}</h4>
                       </li>
                    ))}
                </ul>
            </Card>
        );
    };

export default Interest;