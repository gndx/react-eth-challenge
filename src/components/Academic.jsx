import React from 'react';
import Card from './Card';

const Academic = ({
    academic = Array(3).fill({degree: '', description: '', institution: ''}),
}) => {
    return (
        <Card>
            <h2 className='Academic-title'>Academic</h2>
            <ul>
                //<li className='Academic-item'>2013 - 2014 Técnico Superior en Fútbol; Escuela Nacional de Educación Física - ENEF; Asunción</li>
                //<li className='Academic-item'>1994 - 2002 Licenciado en Análisis de Sistemas Informáticos; Facultad Politécnica - U.N.A.; Campus Universitario San Lorenzo</li>
                //<li className='Academic-item'>1991 - 1993 Programador de Computadoras; Facultad Politécnica - U.N.A.; Campus Universitario San Lorenzo</li>
                //<li className='Academic-item'>1987 - 1989 Bachiller en Ciencias y Letras; Colegio Nacional de la Capital “General Bernardino Caballero”; Asunción</li>
                {academic.map(({degree, description, institution},index) => (
                    <li
                        key={'${degree}_${description}_${institution}_${Index}'}
                        className='Academic-item'
                    >
                        <h3>{degree}</h3>
                        <p>{description}</p>
                        <h4>{institution}</h4>
                        
                    </li>
                ))}
            </ul>
        </Card>

    );
};

export default Academic;