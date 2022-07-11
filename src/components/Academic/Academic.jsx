import React from 'react';
import "./Academic.scss";
import AcademicItem from "./AcademicItem/AcademicItem";
import getData from '../../utils/getData';

const Academic = () => {

    const [ academic, setAcademic ] = React.useState([]);

    React.useEffect(() => {
        getData("http://localhost:3000/data").then(res => setAcademic(res.academic))
    }, [])

    return (
        <section className='Academic'>
            <h2 className="Academic-title">Academic information</h2>
            <ol>

                { academic.length > 0 ?
                
                academic.map(aca => 
                    <AcademicItem 
                        key={aca.institution}
                        className="Academic-item"
                        career={aca.degree}
                        institution={aca.institution}
                        institutionUrl={aca.institutionUrl}
                        type={aca.type}
                        date={aca.date}
                    />) :

                    <React.Fragment>
                        <li className="Academic-item"></li>
                        <li className="Academic-item"></li>
                        <li className="Academic-item"></li>
                    </React.Fragment>

                }

            </ol>
        </section>
    );
}

export default Academic;