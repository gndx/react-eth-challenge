import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import db from '../../../data.json';
import { LanguagesStyle, Item, LanguagesItemTitle } from './styles';

function Languages() {
  return (

    <LanguagesStyle className='languages' key='LanguagesStyle'>

      {' '}
      <h2 className='Languages-title'>Languages</h2>
      {db.data.languages.map((languages) => (
        <Item key={languages.name} className='Languages-item'>

          <LanguagesItemTitle>
            <FiChevronsRight size='26px' />
            {languages.name}
          </LanguagesItemTitle>
          <div style={{ border: '4px solid #2b3739', borderRadius: '15px', width: '300px' }}>
            <div style={{ height: '24px', width: languages.percentage, backgroundColor: '#e3b3ab', borderRadius: '15px' }} />
          </div>

        </Item>
      ))}

    </LanguagesStyle>

  );
};

export default Languages;
