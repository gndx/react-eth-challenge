import React, {useContext} from 'react';
import { InfoContext } from '../containers/App';
import capitalizeFirst from '../utils/capitalizeFirst';


const Interest = (props) => {
      const data = useContext(InfoContext);
      const {interest=Array(4).fill("coding")} = data;
    return(
      <section>
        <h2 className='Interest-title'>Interest</h2>
          {
            interest.map((item, index) => {
              return (
                <div className='Interest-item' key={`interest-${index}`}>
                  {capitalizeFirst(item)}
                </div>
              );
            })
          }
      </section>
    )
};

export default Interest;