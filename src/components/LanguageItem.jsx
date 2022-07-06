import React from 'react';

const LanguageItem = ({language}) => {
    return (
        <>
            <h3 className="font-semibold">{language.name}</h3>
            <p>{language.percentage}</p>
        </>
    );
};

export default LanguageItem;