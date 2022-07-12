import React from "react";

const Academic = (props) => {
    return(
        <div className="academic">
            <div className="Academic-title">Studies</div>  

                <div>{props.data.academic.map((academic, key) => (
                    <li className="Academic-item" key={key}>
                        {academic.degree} - {academic.institution}
                    </li>
                ))}
                </div> 
        </div>
    );
}

export default Academic;