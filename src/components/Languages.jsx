import React from 'react';
import Card from './Card';
const Languages = ({
    languages = Array(3).fill({name: '', percentage: ''}),
}) => {
        return (
            <Card>
                <h2 className='Languages-title'>Languages</h2>
                <ul>
                    //<li className='Languages-item'>Español</li>
                    //<li className='Languages-item'>Guarani</li>
                    //<li className='Languages-item'>Inglés</li>
                    {languages.map(({name, percentage},index)=> (
                        <li key={'${name}_${percentage}${index}'} className='Languages-Item'>
                            <h4>
                                {name} - {percentage}
                            </h4>
                        </li>
                    )
                    )}
                </ul>
            </Card>
        );
    };
export default Languages;