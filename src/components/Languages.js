import React from "react";

const Languages = (props) => {
    return(
        <div className="languages">    
            <div className="Languages-title">Languages</div>
            
            <div>{props.data.languages.map((languages, key) => (
                    <li className="Languages-item" key={key}>
                       {languages.name}: {languages.level}.
                    </li>    
                    ))}
            </div>
        </div>
    );
}

export default Languages;