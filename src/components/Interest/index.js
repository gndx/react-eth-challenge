import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { InterestStyle, Item, InterestItemTitle } from './styles';

function Interest({ data = {} }) {

  return (

    <InterestStyle className='interest' key='InterestStyle'>

      {' '}
      <h2 className='Interest-title'>Interest</h2>
      {data.interest.map((interest) => (
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
