import React from "react";

function Languages({languages, load}){
    return (
        <div className="Languages">
        <h1 className="Languages-title">Lenguages</h1>
        {load&&languages.map((language,index) => (<p className="Languages-item" key={index}>{language.name}<br/> <progress max="100" value={language.number} >{language.percentage}</progress></p> 
            ))}
    </div>
    );
}

export {Languages}
