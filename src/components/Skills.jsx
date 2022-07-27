import React from 'react';
import Interest from './Interest';
import Languages from './Languages';
import LineItem from "./LineItem";
import { lineColors } from '../constants/Resources';

const Skills = ({local, skills, languages, interest}) => {
  return (
    <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
      <div data-aos="fade">
        <div className="container sm:px-5 md:px-10 lg:px-14">
          <div className="py-12 px-4 md:px-0">
            <h2 className="after-effect after:left-44 Skills-title">Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px] Skills-item">
              <div className="col-span-1 Skills-item">
                <h4 className="text-5xl dark:text-white font-medium mb-6 Skills-item" > Working Skills </h4>

                {skills?.map((item, i) => {
                  let skill = Object.assign({},item);
                  skill.color = lineColors[i].color;
                  return <LineItem item={skill} local={local} key={i} />
                })}
              </div>
        
              <Languages languages={languages} local={local}/>

            </div>
          </div>
        </div>
      </div>
      <Interest interest={interest}/>
    </section>
  );
};

export default Skills;
