import React from 'react';

const SkillItem = ({skill}) => {
    return (
        <>
            <label htmlFor="js-skill">{skill.name}</label>
            <progress id="js-skill" max="100" value={skill.percentage.slice(0,-1)}></progress>
        </>
    );
};

export default SkillItem;