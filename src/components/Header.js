import React from 'react';
import Button from './Button';

export default function Header({ children, handleProfileScroll, handleExperienceScroll, handleSkillsScroll, handleInterestScroll }) {
  return (
    <>
      <div className='mt-10 flex flex-row items-center justify-between sticky bg-white top-0 z-10'>
        <h1 className='Header-title font-medium cursor-pointer mob:p-2 laptop:p-0'>
          Cv
        </h1>
        <div className='flex'>
          <Button onClick={handleProfileScroll}>Profile</Button>
          <Button onClick={handleExperienceScroll}>Experience</Button>
          <Button onClick={handleSkillsScroll}>Education and Skills</Button>
          <Button onClick={handleInterestScroll}>Interest and Langueges</Button>
        </div>
      </div>
      { children }
    </>
  );
}
