import React from 'react';
import Card from './Card';

const Experience = ({
experience = Array(10).fill({
    company: '',
    EndDate: '',
    jobDescription: '',
    JobTitle: '',
    StartDate: '',
}),
}) => {
    return ( 
        <Card>
            <h2 className='Experience-title'>Experience</h2>
            <ul>
                //<li className='Experience-item'>Banco Basa 01/2018 hasta la actualidad</li>
                //<li className='Experience-item'>Banco Amambay 10/2016 hasta 12/2017</li>
                //<li className='Experience-item'>Banco Itapua 05/2011 hasta 10/2016</li>
                //<li className='Experience-item'>Banco Integracion 05/2005 hasta 04/2011</li>
                //<li className='Experience-item'>Banco Itau 05/2004 hasta 04/2005</li>
                //<li className='Experience-item'>Financiera Atlas 03/2002 hasta 04/2004</li>
                //<li className='Experience-item'>Horizonte S.R.L. 03/1999 hasta 03/2002</li>
                //<li className='Experience-item'>Gunder I.C.S.A. 01/1998 hasta 03/1999</li>
                //<li className='Experience-item'>Galerias Guarani 01/1996 hasta 12/1997</li>
                //<li className='Experience-item'>Cerveceria Internacional 01/1994 hasta 12/1995</li>
                {experience.map(
                    (
                        {company, endDate, jobDescription, JobTitle, StartDate},
                        index
                    ) => (
                        <li
                            key={'${company_${endDate}_${jobDescription}_${jobTitle}_${startDate}_${index}'}
                            className='Experience-item'
                        >
                            <h3>Company: {Company}</h3>
                            <h4>{jobTitle}</h4>
                            <p>{jobDescription}</p>
                            <p>
                                {startDate} - {endDate}
                            </p>
                        </li>
                    )
                )}
            </ul>
        </Card>
    );
};

export default Experience;