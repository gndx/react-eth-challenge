import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import db from '../../../data.json';
import { InterestStyle, Item, InterestItemTitle } from './styles';

function Interest() {
  return (

    <InterestStyle className='interest' key='InterestStyle'>

      {' '}
      <h2 className='Interest-title'>Interest</h2>
      {db.data.interest.map((interest) => (
        <Item key={interest} className='Interest-item'>

          <InterestItemTitle>
            <FiChevronsRight size='26px' />
            {interest}
          </InterestItemTitle>

        </Item>
      ))}

    </InterestStyle>

  );
};

export default Interest;
