import React, {useContext} from 'react';
import Item from './Item';
import { InfoContext } from '../containers/App';
import '../styles/components/Experience.styl';

const Experience = (props) => {
  const data = useContext(InfoContext)
  const {experience=Array(4).fill({company:"Yapa Inc.",endDate:"2022",jobDescription:"description",jobTitle:"Product Owner",startDate:"2020",})} = data;
    return(
    <section>
      <h2 className='Experience-title'>Experience</h2>
      <div>
        {
          experience.map(({
            company,
            endDate,
            jobDescription,
            jobTitle,
            startDate,
          }, index) => (
            <Item
              className='Experience-item'
              title={company}
              sub={jobTitle}
              description={jobDescription}
              date={`${startDate}-${endDate}`}
              key={`experience-${index}`}
            />
          ))
        }
      </div>
    </section>
    )
};

export default Experience;