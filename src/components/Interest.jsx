import React from 'react';

const Interest = () => {
    return (
        <div className="prose">
        <h2 className="section-headline Interest-title">Expand my skills</h2>
        <div className="mb-16">
          <h4 id="expand-knowledge-headline">
            I'd like to expand my skills and knowledge in several fields
          </h4>
          <ul>
            <li className='Interest-item'>TypeScript</li>
            <li className='Interest-item'>Testing, e.g. with Mocha, Chai, Jest</li>
            <li className='Interest-item'>Web Components, e.g. with StencilJS, LitElement</li>
            <li className='Interest-item'>Prototyping and Wireframing, e.g. with Figma, Adobe XD</li>
            <li className='Interest-item'>Scalable Vector Graphics</li>
            <li className='Interest-item'>Databases</li>
            <li className='Interest-item'>Mobile development</li>
            <li className='Interest-item'>
              Backend development, e.g. learn additional language like Go,
              Python, PHP, Ruby, Java, Rust
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Interest;