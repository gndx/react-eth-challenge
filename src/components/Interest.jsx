import React from "react";

function Interest({interest, load}){
    return (
        <div className="Interest">
            <h1 className="Interest-title">Interest</h1>
            {load&&interest.map((int,index) => <p className="Interest-item" key={index}>{int}</p>)}
        </div> 
    );
}

export {Interest}
