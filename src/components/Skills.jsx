import React from 'react';
import { Title, List } from '../styles/components/Skills'

const Skills = () => {
  return (
    <div>
    <Title className='Skills-title'>Skills</Title>
    <ul>
      <List className='Skills-item'>
        <label htmlFor="python">Python</label>
        <progress id="python" max="10" value="7"></progress>
      </List>
      <List className='Skills-item'>
        <label htmlFor="solidity">Solidity</label>
        <progress id="solidity" max="10" value="8"></progress>
      </List>
      <List className='Skills-item'>
        <label htmlFor="javascript">Javascript</label>
        <progress id="javascript" max="10" value="6"></progress>
      </List>
      <List className='Skills-item'>
        <label htmlFor="typescript">Typescript</label>
        <progress id="typescript" max="10" value="4"></progress>
      </List>
      <List className='Skills-item'><label htmlFor="rust">Rust</label>
        <progress id="Rust" max="10" value="5"></progress>
      </List>  
    </ul>
  </div>
  );
};

export default Skills;
