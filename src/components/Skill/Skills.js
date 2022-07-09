import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Utils/Card';
import SkillItem from './SkillItem';

const colors = [
  'bg-purple-500',
  'bg-sky-500',
  'bg-teal-500',
  'bg-amber-500',
  'bg-red-500',
  'bg-blue-500',
  'bg-pink-500',
  'bg-indigo-500',
  'bg-cyan-500',
];

const Skills = ({ data }) => {

  const getColor = (index) => {

    if (index >= colors.length) {
      return colors[colors.length % index];
    }

    return colors[index];
  };

  return (
    <Card className='w-full'>
      <h1 className='Skills-title text-xl font-semibold mb-2 text-slate-900 dark:text-white'>Skills</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {data.map((skill, index) => <SkillItem className='Skills-item' key={skill.id} color={getColor(index)} data={skill} />)}
      </div>
    </Card>
  );
};

Skills.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Skills;
