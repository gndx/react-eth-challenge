import React from 'react';

const Skills = () => {
    return (
        <div className="font-light text-lg px-2 mb-12">
        <h2 className="text-xl font-semibold mb-4 Skills-title">Skills & Tools</h2>
        <ul className="list-none">
          <li className='Skills-item'>
            <label for="js-skill">JavaScript</label>
            <progress id="js-skill" max="100" value="70"></progress>
          </li>
          <li className='Skills-item'>
            <label for="vue-skill">Vue / Vuex</label>
            <progress id="vue-skill" max="100" value="80"></progress>
          </li>
          <li className='Skills-item'>
            <label for="react-skill">React</label>
            <progress id="react-skill" max="100" value="66"></progress>
          </li>
          <li className='Skills-item'>
            <label for="nextjs-skill">Next.js</label>
            <progress id="nextjs-skill" max="100" value="72"></progress>
          </li>
          <li className='Skills-item'>
            <label for="eleventy-skill">Eleventy</label>
            <progress id="eleventy-skill" max="100" value="66"></progress>
          </li>
          <li className='Skills-item'>
            <label for="node-skill">Node / Express.js</label>
            <progress id="node-skill" max="100" value="45"></progress>
          </li>
          <li className='Skills-item'>
            <label for="css-skill">SCSS</label>
            <progress id="css-skill" max="100" value="75"></progress>
          </li>
          <li className='Skills-item'>
            <label for="design-skill">Inkscape / Figma</label>
            <progress id="design-skill" max="100" value="62"></progress>
          </li>        
        </ul>
      </div>
    );
};

export default Skills;