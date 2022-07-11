import React from 'react';
import "./Academic.scss";
import AcademicItem from "./AcademicItem/AcademicItem";
import { AppContext } from "../AppContext";

const Academic = () => {

    const { data } = React.useContext(AppContext);
    const { academic } = data;

    return (
        <section className='Academic'>
            <h2 className="Academic-title">Academic information</h2>
            <ol>
                { academic ? academic.map(aca => 
                    <AcademicItem 
                        key={aca.institution}
                        className="Academic-item"
                        career={aca.degree}
                        institution={aca.institution}
                        institutionUrl={aca.institutionUrl}
                        type={aca.type}
                        date={aca.date}
                    />) : "" }
            </ol>
        </section>
    );
}

export default Academic;