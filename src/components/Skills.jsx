import React from 'react';
import Card from './Card';
const Skills = ({skills = Array(5).fill('')}) => {
        return (
            <Card>
                <h2 className='Skills-title'>Skills</h2>
                <ul>
                    //<li className='Skills-item'>OS/400 - DB2/400 - RPG - CLP - Formateo de Journal</li>
                    //<li className='Skills-item'>Genexus - Work With Plus - K2B Tools - K2B Audit - Audit Plus</li>
                    //<li className='Skills-item'>DBMS Oracle - PostgreSQL</li>
                    //<li className='Skills-item'>Lenguajes de Programación Java, C#</li>
                    //<li className='Skills-item'>Servidores de Aplicación JBOSS, WebSphere, Tomcat</li>
                    {skills.map((skill, index) => (
                        <li key={'${skill}_${index}'} className = 'Skills-item'>
                            <h4>{skill}</h4>
                        </li>
                    ))}
                </ul>
                <hr />
            </Card>
        );
    };
export default Skills;