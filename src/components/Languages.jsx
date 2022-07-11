import React, {useContext} from 'react';
import capitalizeFirst from '../utils/capitalizeFirst';
import { InfoContext } from '../containers/App';

const Languages = (props) => {
  const data = useContext(InfoContext); 
  const {languages=Array(4).fill({name:"English",percentage:"90%"})} = data
  return(
        <section>
        <h2 className='Languages-title'>Languages </h2>
          {
            languages.map(({ name, percentage }, index) => (
                <div className='Languages-item' key={`language-${index}`}>
                  <h3>{name} {capitalizeFirst(percentage)}</h3>
                  <progress max='100' value={percentage.split('%')[0]} />
                </div>
            ))
          }
      </section>
    )
};

export default Languages;