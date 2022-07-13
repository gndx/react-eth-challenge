import React, { useContext } from 'react';

import { Title, Item } from './styles';
import { ContainerComponent, RowDiv } from '../../styles/components';

import Context from '../../Context'

export default function () {
  const data = useContext(Context);

  return (
    <ContainerComponent>
      <Title>Languages</Title>
      <RowDiv>
      {
          data && data.languages ? data.languages.map((item, key) => {
            return <Item key={key}>
              <p>{item.name} ({item.percentage})</p>
            </Item>
          }) : <><Item>.Languages.item</Item><Item>.Languages.item</Item><Item>.Languages.item</Item></>
        }
      </RowDiv>
    </ContainerComponent>
  );

}
